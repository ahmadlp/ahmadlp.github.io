#!/usr/bin/env python3
from __future__ import annotations

import html
import json
import os
import re
import shutil
import subprocess
import textwrap
import unicodedata
from difflib import SequenceMatcher
from datetime import date
from pathlib import Path
from tempfile import TemporaryDirectory

import yaml
from bs4 import BeautifulSoup, Comment, NavigableString, Tag
from jinja2 import BaseLoader, Environment, select_autoescape

ROOT = Path(__file__).resolve().parents[1]
CONTENT_DIR = ROOT / "content"
PAPERS_CONTENT_DIR = CONTENT_DIR / "papers"
TOPICS_CONTENT_DIR = CONTENT_DIR / "topics"
REPLICATION_CONTENT_DIR = CONTENT_DIR / "replication"

PAPERS_OUTPUT_DIR = ROOT / "papers"
TOPICS_OUTPUT_DIR = ROOT / "topics"
REPLICATION_OUTPUT_DIR = ROOT / "replication"
SOURCES_OUTPUT_DIR = ROOT / "sources"
PAPER_READER_DATA_DIR = ROOT / "paper-reader-data"
PAPER_ASSETS_DIR = ROOT / "paper-assets"
GENERATED_DIR = ROOT / "generated"
LATEX_CACHE_DIR = GENERATED_DIR / "latex-cache"
LATEX_BUILD_REPORT_PATH = GENERATED_DIR / "latex-build-report.json"

BASE_URL = "https://alashkar.pages.iu.edu"
SITE_NAME = "Ahmad Lashkaripour"
DEFAULT_SOCIAL_IMAGE = "photos/research.jpg"
RESEARCH_SOCIAL_IMAGE = "photos/research.jpg"
ABOUT_SOCIAL_IMAGE = "photos/about.jpg"
CURRENT_YEAR = 2026
TODAY = date.today().isoformat()
MONTH_NAMES = (
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
)

TOP_LEVEL_PAGES = [
    ("index.html", ""),
    ("About.html", "About.html"),
    ("Research.html", "Research.html"),
    ("Teaching.html", "Teaching.html"),
    ("Vita.html", "Vita.html"),
    ("Contact.html", "Contact.html"),
]

PAPER_METADATA = {
    "Can Trade Policy Mitigate Climate Change?": {
        "slug": "can-trade-policy-mitigate-climate-change",
        "status": "published",
        "date": "2025-09-01",
        "display_date": "September 2025",
        "venue": "Econometrica",
        "authors": ["Farid Farrokhi", "Ahmad Lashkaripour"],
        "summary": (
            "This paper asks whether trade policy can solve free-riding in climate cooperation. "
            "It shows that ordinary border taxes do little on their own, while climate-club style "
            "penalties can deliver much larger emissions cuts."
        ),
        "keywords": [
            "trade policy",
            "climate clubs",
            "carbon border adjustment",
            "climate change",
            "border taxes",
        ],
        "topics": [
            "trade-policy",
            "climate-clubs-and-carbon-border-adjustments",
            "wto-and-trade-agreements",
        ],
    },
    "Making America Great Again? The Economic Impacts of Liberation Day Tariffs": {
        "slug": "economic-impacts-of-liberation-day-tariffs",
        "status": "published",
        "date": "2025-09-01",
        "display_date": "September 2025",
        "venue": "Journal of International Economics",
        "authors": [
            "Anna Ignatenko",
            "Ahmad Lashkaripour",
            "Luca Macedoni",
            "Ina Simonovska",
        ],
        "summary": (
            "This paper evaluates the 2025 Liberation Day tariff package in a quantitative trade "
            "framework. It finds that retaliation turns modest unilateral gains into sizable U.S. "
            "and global losses."
        ),
        "keywords": [
            "tariffs",
            "trade deficit",
            "retaliation",
            "Liberation Day tariffs",
            "optimal tariff",
        ],
        "topics": [
            "trade-policy",
            "tariffs-and-retaliation",
            "wto-and-trade-agreements",
        ],
    },
    "New Industrial Policy": {
        "slug": "new-industrial-policy",
        "status": "published",
        "date": "2025-01-01",
        "display_date": "2025",
        "venue": "Oxford Research Encyclopedia of Economics and Finance",
        "authors": ["Ahmad Lashkaripour", "Po-Shyan Wu"],
        "summary": (
            "This essay reviews the return of industrial policy in a world of market power, "
            "scale economies, geopolitics, and climate externalities. It emphasizes that the "
            "right benchmark is not a closed economy, but one embedded in global supply chains."
        ),
        "keywords": [
            "industrial policy",
            "scale economies",
            "market power",
            "climate policy",
            "trade policy",
        ],
        "topics": [
            "industrial-policy",
            "markups-scale-economies-and-trade",
            "trade-policy",
        ],
    },
    "Trade and Technology Adoption in Distorted Economies": {
        "slug": "trade-and-technology-adoption-in-distorted-economies",
        "status": "published",
        "date": "2024-07-01",
        "display_date": "July 2024",
        "venue": "Journal of International Economics",
        "authors": ["Farid Farrokhi", "Ahmad Lashkaripour", "Heitor S. Pellegrina"],
        "summary": (
            "This paper studies how labor-market distortions change technology adoption and the "
            "gains from trade. It shows that distorted economies adopt modern technology too slowly "
            "and therefore miss a large share of trade-driven productivity gains."
        ),
        "keywords": [
            "technology adoption",
            "distorted economies",
            "trade liberalization",
            "development",
            "quantitative trade models",
        ],
        "topics": [
            "quantitative-trade-models",
            "trade-policy",
            "industrial-policy",
        ],
    },
    "Profits, Scale Economies, and the Gains from Trade and Industrial Policy": {
        "slug": "profits-scale-economies-and-the-gains-from-trade-and-industrial-policy",
        "status": "published",
        "date": "2023-10-01",
        "display_date": "October 2023",
        "venue": "American Economic Review",
        "authors": ["Ahmad Lashkaripour", "Volodymyr Lugovskyy"],
        "summary": (
            "This paper explains why unilateral trade policy is a weak tool for fixing distortions "
            "created by profits and scale economies. It argues that coordinated industrial policy "
            "inside deep agreements can be much more effective."
        ),
        "keywords": [
            "profits",
            "scale economies",
            "gains from trade",
            "industrial policy",
            "trade agreements",
        ],
        "topics": [
            "markups-scale-economies-and-trade",
            "industrial-policy",
            "wto-and-trade-agreements",
        ],
    },
    "Can Trade Taxes be a Major Source of Government Revenue?": {
        "slug": "can-trade-taxes-be-a-major-source-of-government-revenue",
        "status": "published",
        "date": "2021-10-01",
        "display_date": "October 2021",
        "venue": "Journal of the European Economic Association",
        "authors": ["Ahmad Lashkaripour"],
        "summary": (
            "This paper quantifies how much governments can realistically raise through tariffs. "
            "It finds that market power is limited, retaliation is costly, and the fiscal case for "
            "protectionism is much weaker than advocates suggest."
        ),
        "keywords": [
            "trade taxes",
            "government revenue",
            "retaliation",
            "tariffs",
            "trade agreements",
        ],
        "topics": [
            "trade-policy",
            "tariffs-and-retaliation",
            "wto-and-trade-agreements",
        ],
    },
    "The Cost of a Global Tariff War: A Sufficient Statistics Approach": {
        "slug": "the-cost-of-a-global-tariff-war",
        "status": "published",
        "date": "2021-07-01",
        "display_date": "July 2021",
        "venue": "Journal of International Economics",
        "authors": ["Ahmad Lashkaripour"],
        "summary": (
            "This paper develops a tractable way to estimate the cost of a global tariff war using "
            "observable shares, trade elasticities, and markup wedges. It shows that tariff-war losses "
            "and the gains from cooperation both rose sharply over time."
        ),
        "keywords": [
            "tariff war",
            "sufficient statistics",
            "trade policy",
            "markups",
            "retaliation",
        ],
        "topics": [
            "trade-policy",
            "tariffs-and-retaliation",
            "markups-scale-economies-and-trade",
        ],
        "replication_slug": "global-tariff-war-replication",
    },
    "Weight-Based Quality Specialization": {
        "slug": "weight-based-quality-specialization",
        "status": "published",
        "date": "2020-11-01",
        "display_date": "November 2020",
        "venue": "Journal of International Economics",
        "authors": ["Ahmad Lashkaripour"],
        "summary": (
            "This paper documents that product weight itself is an economically meaningful quality margin. "
            "It links export prices, transport costs, and specialization patterns to the weight of traded goods."
        ),
        "keywords": [
            "quality specialization",
            "trade costs",
            "export prices",
            "quality",
            "international trade",
        ],
        "topics": [
            "quantitative-trade-models",
            "markups-scale-economies-and-trade",
        ],
    },
    "Discrete Trade": {
        "slug": "discrete-trade",
        "status": "published",
        "date": "2020-09-01",
        "display_date": "September 2020",
        "venue": "Journal of International Economics",
        "authors": ["Ahmad Lashkaripour"],
        "summary": (
            "This paper shows that indivisible goods generate stronger pricing-to-market and quality "
            "specialization patterns than standard trade models predict. It uses that insight to reinterpret "
            "how globalization works in discrete-product industries."
        ),
        "keywords": [
            "discrete trade",
            "quality specialization",
            "pricing to market",
            "trade models",
            "globalization",
        ],
        "topics": [
            "quantitative-trade-models",
            "markups-scale-economies-and-trade",
        ],
        "replication_slug": "discrete-trade-replication",
    },
    "Within-Industry Specialization and Global Market Power": {
        "slug": "within-industry-specialization-and-global-market-power",
        "status": "published",
        "date": "2020-02-01",
        "display_date": "February 2020",
        "venue": "American Economic Journal: Microeconomics",
        "authors": ["Ahmad Lashkaripour"],
        "summary": (
            "This paper argues that rich and remote countries sort into high-market-power product segments. "
            "That pattern helps explain both export price differences and a large part of the gains from trade."
        ),
        "keywords": [
            "market power",
            "specialization",
            "markups",
            "gains from trade",
            "income inequality",
        ],
        "topics": [
            "markups-scale-economies-and-trade",
            "quantitative-trade-models",
        ],
        "replication_slug": "global-market-power-replication",
    },
    "Markups as Shadow Tariffs: How Market Power Skews Trade Reciprocity": {
        "slug": "markups-as-shadow-tariffs",
        "status": "working-paper",
        "date": "2026-01-01",
        "display_date": "January 2026",
        "venue": "Working paper",
        "authors": ["Siying Ding", "Ahmad Lashkaripour", "Volodymyr Lugovskyy"],
        "summary": (
            "This paper shows that markups behave like shadow tariffs because they both distort domestic allocation "
            "and shift surplus across borders. It reframes trade reciprocity through the lens of global excess profits."
        ),
        "keywords": [
            "markups",
            "shadow tariffs",
            "trade reciprocity",
            "market power",
            "trade agreements",
        ],
        "topics": [
            "markups-scale-economies-and-trade",
            "trade-policy",
            "wto-and-trade-agreements",
        ],
    },
    "A Framework for Integrating Climate Goals into Trade Agreements": {
        "slug": "integrating-climate-goals-into-trade-agreements",
        "status": "working-paper",
        "date": "2025-03-01",
        "display_date": "March 2025",
        "venue": "Working paper",
        "authors": ["Farid Farrokhi", "Ahmad Lashkaripour", "Homa Taheri"],
        "summary": (
            "This paper develops a framework for embedding carbon pricing into existing trade agreements. "
            "It highlights why climate-compatible trade integration may require both contingent market access "
            "rules and international redistribution."
        ),
        "keywords": [
            "trade agreements",
            "climate goals",
            "carbon pricing",
            "global climate fund",
            "trade policy",
        ],
        "topics": [
            "climate-clubs-and-carbon-border-adjustments",
            "wto-and-trade-agreements",
            "trade-policy",
        ],
    },
    "The Cost of Dissolving the WTO: The Role of Global Value Chains": {
        "slug": "the-cost-of-dissolving-the-wto",
        "status": "working-paper",
        "date": "2020-04-01",
        "display_date": "April 2020",
        "venue": "Working paper",
        "authors": ["Mostafa Beshkar", "Ahmad Lashkaripour"],
        "summary": (
            "This paper estimates what happens if existing trade agreements collapse. "
            "It argues that global value chains magnify the value of WTO-style commitments and sharply "
            "raise the cost of policy fragmentation."
        ),
        "keywords": [
            "WTO",
            "global value chains",
            "trade agreements",
            "trade policy",
            "general equilibrium",
        ],
        "topics": [
            "wto-and-trade-agreements",
            "trade-policy",
            "quantitative-trade-models",
        ],
    },
    "Interdependence of Trade Policies in General Equilibrium": {
        "slug": "interdependence-of-trade-policies-in-general-equilibrium",
        "status": "working-paper",
        "date": "2020-06-15",
        "display_date": "June 2020",
        "venue": "Working paper",
        "authors": ["Mostafa Beshkar", "Ahmad Lashkaripour"],
        "summary": (
            "This paper shows that restricting one trade policy instrument changes how governments use the others. "
            "That interdependence means the welfare effects of trade reform depend on the full policy menu, not one tariff cut in isolation."
        ),
        "keywords": [
            "trade policy",
            "general equilibrium",
            "policy instruments",
            "trade agreements",
            "export subsidies",
        ],
        "topics": [
            "trade-policy",
            "wto-and-trade-agreements",
            "tariffs-and-retaliation",
        ],
    },
}

WORK_IN_PROGRESS = [
    {
        "title": "Optimal Industrial Policy with Minimal Information",
        "coauthors": ["J. Bernstein", "H. Firooz"],
    },
    {
        "title": "Race to the bottom: The perils of decentralized industrial policy in free trade blocs",
        "coauthors": ["Po-Shyan Wu"],
    },
    {
        "title": "A Quantitative Model of Geoeconomics",
        "coauthors": ["Farid Farrokhi"],
    },
]

AUTHOR_AFFILIATION_OVERRIDES = {
    "can-trade-policy-mitigate-climate-change": {
        "Farid Farrokhi": "Boston College",
        "Ahmad Lashkaripour": "Indiana University, CESifo, CEPR",
    },
    "can-trade-taxes-be-a-major-source-of-government-revenue": {
        "Ahmad Lashkaripour": "Indiana University, CESifo, CEPR",
    },
    "discrete-trade": {
        "Ahmad Lashkaripour": "Indiana University, CESifo, CEPR",
    },
    "economic-impacts-of-liberation-day-tariffs": {
        "Anna Ignatenko": "Norwegian School of Economics",
        "Ahmad Lashkaripour": "Indiana University, CESifo, CEPR",
        "Luca Macedoni": "University of Milan, CESIfo",
        "Ina Simonovska": "UC Davis, NBER, CEPR, CESIfo",
    },
    "integrating-climate-goals-into-trade-agreements": {
        "Farid Farrokhi": "Boston College",
        "Ahmad Lashkaripour": "Indiana University, CESifo, CEPR",
        "Homa Taheri": "Indiana University",
    },
    "markups-as-shadow-tariffs": {
        "Siying Ding": "UIBE",
        "Ahmad Lashkaripour": "Indiana University, CESifo, CEPR",
        "Volodymyr Lugovskyy": "Indiana University",
    },
    "new-industrial-policy": {
        "Ahmad Lashkaripour": "Indiana University, CESifo, CEPR",
        "Po-Shyan Wu": "Indiana University",
    },
    "profits-scale-economies-and-the-gains-from-trade-and-industrial-policy": {
        "Ahmad Lashkaripour": "Indiana University, CESifo, CEPR",
        "Volodymyr Lugovskyy": "Indiana University",
    },
    "the-cost-of-a-global-tariff-war": {
        "Ahmad Lashkaripour": "Indiana University, CESifo, CEPR",
    },
    "trade-and-technology-adoption-in-distorted-economies": {
        "Farid Farrokhi": "Purdue University",
        "Ahmad Lashkaripour": "Indiana University, CESifo, CEPR",
        "Heitor S. Pellegrina": "University of Notre Dame",
    },
}

CANONICAL_AUTHOR_AFFILIATIONS = {
    "Ahmad Lashkaripour": "Indiana University, CESifo, CEPR",
}

GRANTS = [
    {
        "title": "Alfred P. Sloan Foundation Grant",
        "display": "2025–2028, $750,000",
        "url": "https://madeinamerica.netlify.app",
        "label": "Made in America? Unpacking the Drivers and Impacts of Domestic Clean Energy Manufacturing",
    }
]

TOPIC_SEEDS = [
    {
        "slug": "trade-policy",
        "title": "Trade Policy",
        "summary": "Research on tariffs, retaliation, cooperation, and the quantitative design of trade policy in distorted open economies.",
        "primary_keywords": [
            "trade policy",
            "tariff policy",
            "optimal tariff",
            "trade agreements",
            "quantitative trade",
        ],
        "related_papers": [
            "can-trade-policy-mitigate-climate-change",
            "economic-impacts-of-liberation-day-tariffs",
            "can-trade-taxes-be-a-major-source-of-government-revenue",
            "the-cost-of-a-global-tariff-war",
            "interdependence-of-trade-policies-in-general-equilibrium",
        ],
        "related_topics": [
            "tariffs-and-retaliation",
            "wto-and-trade-agreements",
            "climate-clubs-and-carbon-border-adjustments",
        ],
        "faq_items": [
            {
                "question": "What does this site focus on within trade policy?",
                "answer": "The focus is on quantitative and general-equilibrium analysis of tariffs, retaliation, markup distortions, trade agreements, and climate-linked trade instruments.",
            },
            {
                "question": "What kind of evidence appears here?",
                "answer": "The site combines theoretical derivations, sufficient-statistics methods, and large-scale quantitative trade models linked to policy counterfactuals.",
            },
        ],
        "body": """
## What this topic hub covers

This hub collects research on how governments use tariffs, industrial policy, and trade agreements to shape welfare, production, and international bargaining outcomes. The emphasis is on policy design in realistic open-economy settings with retaliation, market power, input-output linkages, and environmental spillovers.

## Why this matters

Searches for trade policy often blur together several distinct questions: whether tariffs can improve welfare, how partners respond, when cooperation matters, and how distortions such as markups or climate externalities change the answer. The papers linked here separate those channels and show where unilateral policy is weak, where retaliation dominates, and when coordination becomes indispensable.

## How to use this page

Start with the paper pages for full abstracts, citation metadata, PDFs, and machine-readable sources. Then follow the linked topic and question pages for shorter answer-oriented summaries that are easier for journalists, policy readers, and AI systems to cite.
""",
    },
    {
        "slug": "tariffs-and-retaliation",
        "title": "Tariffs and Retaliation",
        "summary": "A topic hub on optimal tariffs, tariff wars, trade deficits, and the welfare effects of retaliation.",
        "primary_keywords": [
            "tariffs",
            "retaliation",
            "tariff war",
            "trade deficit",
            "optimal tariff",
        ],
        "related_papers": [
            "economic-impacts-of-liberation-day-tariffs",
            "can-trade-taxes-be-a-major-source-of-government-revenue",
            "the-cost-of-a-global-tariff-war",
            "interdependence-of-trade-policies-in-general-equilibrium",
        ],
        "related_topics": ["trade-policy", "wto-and-trade-agreements"],
        "faq_items": [
            {
                "question": "Do tariffs help if partners do not retaliate?",
                "answer": "Some papers here show that tariffs can generate modest gains under narrow conditions, but those gains shrink or reverse once retaliation and broader distortions are included.",
            },
            {
                "question": "Why is retaliation so important?",
                "answer": "Retaliation changes both tax revenue and terms-of-trade effects, which is why headline unilateral gains often fail to survive in general equilibrium.",
            },
        ],
        "body": """
## Scope

These pages focus on tariff setting as a strategic problem. The key question is not only whether a country has market power, but also whether retaliation, supply chains, and markup distortions overturn the case for aggressive unilateral tariffs.

## Main lessons across the linked work

The research repeatedly finds that retaliation is quantitatively central. Once trading partners respond, revenue claims weaken, welfare gains disappear, and the value of cooperative rules rises.

## Best starting points

Use the global tariff war paper for a tractable benchmark, the revenue paper for the fiscal argument, and the Liberation Day tariffs paper for a contemporary application.
""",
    },
    {
        "slug": "industrial-policy",
        "title": "Industrial Policy",
        "summary": "Research on industrial policy in globally integrated economies with scale effects, market power, and climate spillovers.",
        "primary_keywords": [
            "industrial policy",
            "trade and industrial policy",
            "scale economies",
            "market failures",
            "global supply chains",
        ],
        "related_papers": [
            "new-industrial-policy",
            "profits-scale-economies-and-the-gains-from-trade-and-industrial-policy",
            "trade-and-technology-adoption-in-distorted-economies",
        ],
        "related_topics": [
            "markups-scale-economies-and-trade",
            "trade-policy",
            "climate-clubs-and-carbon-border-adjustments",
        ],
        "faq_items": [
            {
                "question": "What makes modern industrial policy different from older debates?",
                "answer": "The central difference is international interdependence: today's policies operate through trade, supply chains, foreign retaliation, and climate externalities, not only domestic market failures.",
            },
            {
                "question": "Is unilateral industrial policy enough?",
                "answer": "The linked research often finds that unilateral action is constrained by beggar-thy-neighbor effects and may need coordination to deliver durable gains.",
            },
        ],
        "body": """
## Focus of this hub

Industrial policy has returned to the center of policy debate, but the relevant benchmark is no longer a closed economy. These pages examine how industrial policy works when industries are tied together through global value chains, markup distortions, and climate-related spillovers.

## Research angle

The site emphasizes a quantitative approach. Instead of debating industrial policy only in principle, the linked papers derive formulas, estimate structural parameters, and compare unilateral and coordinated policy designs.
""",
    },
    {
        "slug": "climate-clubs-and-carbon-border-adjustments",
        "title": "Climate Clubs and Carbon Border Adjustments",
        "summary": "Work on using trade policy and trade agreements to support climate coordination, carbon pricing, and border measures.",
        "primary_keywords": [
            "climate clubs",
            "carbon border adjustment",
            "trade and climate policy",
            "carbon pricing",
            "climate agreements",
        ],
        "related_papers": [
            "can-trade-policy-mitigate-climate-change",
            "integrating-climate-goals-into-trade-agreements",
            "new-industrial-policy",
        ],
        "related_topics": ["trade-policy", "wto-and-trade-agreements", "industrial-policy"],
        "faq_items": [
            {
                "question": "Are border taxes alone enough to solve climate free-riding?",
                "answer": "The linked work says no. Ordinary border taxes are much less effective than coordinated club mechanisms that condition market access on climate participation.",
            },
            {
                "question": "Why connect climate goals to trade agreements?",
                "answer": "Trade agreements already govern market access. Linking access to carbon pricing can create enforceable incentives that climate-only agreements often lack.",
            },
        ],
        "body": """
## Why this topic matters

Climate policy and trade policy now overlap in concrete institutional ways. Carbon border adjustments, climate clubs, and climate-linked trade agreements all try to solve the same problem: how to maintain open trade while discouraging free-riding on emissions reduction.

## What the linked papers contribute

The papers here quantify how much trade policy can actually deliver, distinguish weak border-tax fixes from stronger club-style enforcement, and explain why redistribution mechanisms may be needed inside climate-compatible trade deals.
""",
    },
    {
        "slug": "wto-and-trade-agreements",
        "title": "WTO and Trade Agreements",
        "summary": "Research on why trade agreements matter, how policy instruments interact, and what is lost when cooperative rules weaken.",
        "primary_keywords": [
            "WTO",
            "trade agreements",
            "global value chains",
            "trade cooperation",
            "reciprocity",
        ],
        "related_papers": [
            "profits-scale-economies-and-the-gains-from-trade-and-industrial-policy",
            "integrating-climate-goals-into-trade-agreements",
            "the-cost-of-dissolving-the-wto",
            "interdependence-of-trade-policies-in-general-equilibrium",
            "markups-as-shadow-tariffs",
        ],
        "related_topics": ["trade-policy", "climate-clubs-and-carbon-border-adjustments", "tariffs-and-retaliation"],
        "faq_items": [
            {
                "question": "Why do trade agreements matter more in a world of global value chains?",
                "answer": "Because supply-chain linkages magnify how one country's trade barriers affect production and welfare elsewhere, raising the value of cooperative rules.",
            },
            {
                "question": "What does reciprocity miss when markups matter?",
                "answer": "The linked work argues that excess profits can function like hidden tariffs, so formal tariff reciprocity may understate the true international policy wedge.",
            },
        ],
        "body": """
## Central question

Why do trade agreements create value beyond narrow tariff cuts? The research collected here answers that question by showing how cooperation constrains retaliation, preserves value chains, and coordinates policy when domestic distortions spill across borders.

## What to read first

For a high-level view, start with the WTO dissolution paper. For mechanism-rich analysis, use the interdependence paper and the market-power reciprocity paper.
""",
    },
    {
        "slug": "markups-scale-economies-and-trade",
        "title": "Markups, Scale Economies, and Trade",
        "summary": "Research on how market power and scale effects change trade outcomes, industrial policy, and the gains from international coordination.",
        "primary_keywords": [
            "markups",
            "scale economies",
            "market power",
            "gains from trade",
            "industrial policy",
        ],
        "related_papers": [
            "profits-scale-economies-and-the-gains-from-trade-and-industrial-policy",
            "the-cost-of-a-global-tariff-war",
            "within-industry-specialization-and-global-market-power",
            "markups-as-shadow-tariffs",
        ],
        "related_topics": ["industrial-policy", "trade-policy", "quantitative-trade-models"],
        "faq_items": [
            {
                "question": "Why do markups matter for trade policy?",
                "answer": "Because markups distort allocation and can shift surplus across borders, which changes both unilateral policy incentives and the value of cooperation.",
            },
            {
                "question": "Why are scale economies policy-relevant?",
                "answer": "Scale effects can make sectoral composition matter for aggregate welfare, so policy design depends on how industries expand, concentrate, and interact internationally.",
            },
        ],
        "body": """
## Overview

Standard trade policy intuitions change once firms have market power or technologies feature scale effects. These pages bring together the papers that study how hidden monopoly wedges, sectoral scale, and specialization patterns reshape the gains from trade and the case for industrial policy.

## Main takeaway

Across these papers, the recurring result is that distortions are real but unilateral correction is often weak. The strongest gains appear when policy coordinates across countries or instruments.
""",
    },
    {
        "slug": "quantitative-trade-models",
        "title": "Quantitative Trade Models",
        "summary": "A hub for quantitative trade-model content, including policy formulas, lecture notes, and papers that connect theory to calibration and counterfactuals.",
        "primary_keywords": [
            "quantitative trade models",
            "general equilibrium trade model",
            "gravity",
            "trade counterfactuals",
            "teaching trade",
        ],
        "related_papers": [
            "trade-and-technology-adoption-in-distorted-economies",
            "the-cost-of-dissolving-the-wto",
            "discrete-trade",
            "weight-based-quality-specialization",
        ],
        "related_topics": ["trade-policy", "markups-scale-economies-and-trade"],
        "faq_items": [
            {
                "question": "What kind of model material is available here?",
                "answer": "The site links both research papers and graduate trade lecture notes, making it possible to move from theory and estimation basics to current research applications.",
            },
            {
                "question": "Who is this hub for?",
                "answer": "It is useful for PhD students, researchers, and policy readers who want a structured path into modern quantitative trade analysis.",
            },
        ],
        "body": """
## What you will find here

This hub connects research papers to the graduate trade notes hosted on the site. The goal is to make the modeling toolkit more legible to readers who search for trade policy, markups, scale effects, or climate-related trade work and need a path from overview to technical detail.

## Where to go next

If you are new to the field, use the teaching page for model primitives and then return to the linked research pages for current policy applications.
""",
    },
]

QUERY_PAGE_SEEDS = [
    {
        "slug": "what-is-a-climate-club",
        "title": "What Is a Climate Club?",
        "summary": "A direct answer page explaining climate clubs and why club-style penalties differ from ordinary carbon border taxes.",
        "parent_topic": "climate-clubs-and-carbon-border-adjustments",
        "primary_keywords": ["what is a climate club", "climate clubs", "border taxes", "trade and climate policy"],
        "related_papers": ["can-trade-policy-mitigate-climate-change", "integrating-climate-goals-into-trade-agreements"],
        "related_topics": ["trade-policy", "wto-and-trade-agreements"],
        "faq_items": [
            {
                "question": "Is a climate club just a carbon tariff?",
                "answer": "No. In this research, the important distinction is enforcement: a club uses trade penalties to sustain participation, not simply to price carbon at the border.",
            }
        ],
        "body": """
## Short answer

A climate club is a coalition of countries that conditions market access on climate participation. The key idea is not simply to tax carbon at the border, but to use trade penalties as an enforcement tool that makes universal participation more attractive than free-riding.

## Why this matters in trade policy

Traditional climate agreements struggle because countries can enjoy some of the benefits of global emissions reduction without fully bearing the cost. Climate clubs change those incentives by making exclusion from the club costly in trade terms.

## What the linked research finds

The paper on climate clubs and trade policy shows that ordinary border taxes added to existing tariffs are much less effective than club-style arrangements designed to deter free-riding. The trade-agreement paper then studies how climate goals can be integrated into existing rules and revenue-sharing mechanisms.
""",
    },
    {
        "slug": "what-is-a-carbon-border-adjustment",
        "title": "What Is a Carbon Border Adjustment?",
        "summary": "An answer page on carbon border adjustments, their purpose, and their limits when used without broader cooperation.",
        "parent_topic": "climate-clubs-and-carbon-border-adjustments",
        "primary_keywords": ["carbon border adjustment", "CBAM", "border carbon tax", "trade and climate"],
        "related_papers": ["can-trade-policy-mitigate-climate-change", "integrating-climate-goals-into-trade-agreements"],
        "related_topics": ["trade-policy"],
        "faq_items": [
            {
                "question": "Can border adjustments solve climate coordination on their own?",
                "answer": "The research linked here says they are usually not enough on their own; stronger coordination and enforcement are often required.",
            }
        ],
        "body": """
## Short answer

A carbon border adjustment applies a carbon-related charge at the border so imported goods face a treatment closer to domestically carbon-priced goods. In principle, it reduces leakage and changes incentives for foreign producers.

## Limit highlighted by the research here

The linked papers emphasize that border adjustments are often weaker than people assume. When they are layered onto an already distorted tariff structure, they may deliver only a small share of what globally coordinated carbon pricing could achieve.
""",
    },
    {
        "slug": "optimal-tariff-vs-retaliatory-tariff",
        "title": "Optimal Tariff vs Retaliatory Tariff",
        "summary": "A short page on why optimal tariff calculations and realized tariff wars are not the same object.",
        "parent_topic": "tariffs-and-retaliation",
        "primary_keywords": ["optimal tariff", "retaliatory tariff", "tariff war", "trade retaliation"],
        "related_papers": ["economic-impacts-of-liberation-day-tariffs", "the-cost-of-a-global-tariff-war", "can-trade-taxes-be-a-major-source-of-government-revenue"],
        "related_topics": ["trade-policy", "wto-and-trade-agreements"],
        "faq_items": [
            {
                "question": "Why do optimal-tariff gains often vanish in practice?",
                "answer": "Because the relevant real-world object is a strategic equilibrium with retaliation, not a unilateral thought experiment with passive trading partners.",
            }
        ],
        "body": """
## Core distinction

An optimal tariff is usually derived as a unilateral benchmark: what tariff would maximize welfare if the country moved first and others did not respond in the same way? A retaliatory tariff is part of a strategic equilibrium in which trading partners answer back.

## Why the distinction matters

Much of the research on this site shows that the quantitative difference between those two objects is large. Small unilateral gains can become sizable losses once retaliation feeds through trade balances, tax revenue, and production networks.
""",
    },
    {
        "slug": "do-tariffs-reduce-trade-deficits",
        "title": "Do Tariffs Reduce Trade Deficits?",
        "summary": "A short answer page on tariffs, aggregate deficits, and why bilateral logic often misleads.",
        "parent_topic": "tariffs-and-retaliation",
        "primary_keywords": ["do tariffs reduce trade deficits", "trade deficit", "tariffs and deficits", "aggregate trade deficit"],
        "related_papers": ["economic-impacts-of-liberation-day-tariffs", "can-trade-taxes-be-a-major-source-of-government-revenue"],
        "related_topics": ["trade-policy"],
        "faq_items": [
            {
                "question": "Why is bilateral-deficit targeting a weak design principle?",
                "answer": "Because the linked research finds that the relevant margin for welfare and optimal tariff design is the aggregate trade position and general-equilibrium response, not bilateral imbalances alone.",
            }
        ],
        "body": """
## Short answer

Tariffs can change a trade deficit in some models, but the economically important question is how they do so and at what cost. The research collected here shows that bilateral deficit targeting is a poor guide to optimal policy and that retaliation can quickly dominate any narrow deficit improvement.

## Better question

Instead of asking whether tariffs can move a deficit at all, the better question is whether they improve welfare once terms-of-trade effects, retaliation, and domestic distortions are all counted.
""",
    },
    {
        "slug": "why-trade-agreements-need-climate-clauses",
        "title": "Why Trade Agreements Need Climate Clauses",
        "summary": "A query page on why climate objectives increasingly need to be built into trade agreements themselves.",
        "parent_topic": "wto-and-trade-agreements",
        "primary_keywords": ["trade agreements and climate policy", "climate clauses", "trade agreement climate goals"],
        "related_papers": ["integrating-climate-goals-into-trade-agreements", "can-trade-policy-mitigate-climate-change"],
        "related_topics": ["climate-clubs-and-carbon-border-adjustments", "trade-policy"],
        "faq_items": [
            {
                "question": "Why not keep climate policy separate from trade agreements?",
                "answer": "Because market access and trade discipline already structure incentives across countries. If climate policy ignores that architecture, enforcement and burden-sharing become much harder.",
            }
        ],
        "body": """
## Short answer

Trade agreements need climate clauses because market access is one of the few credible levers countries have for changing one another's incentives. If climate obligations and trade rules are designed separately, countries can face misaligned incentives and uneven burdens.

## Mechanism emphasized in the research

The linked papers show that climate-compatible trade design may require both contingent access rules and redistribution of border-related revenues, especially when carbon pricing in one country spills onto consumers and firms elsewhere.
""",
    },
    {
        "slug": "industrial-policy-under-scale-economies",
        "title": "Industrial Policy under Scale Economies",
        "summary": "A short page on why scale effects make industrial policy attractive in theory but difficult in unilateral practice.",
        "parent_topic": "industrial-policy",
        "primary_keywords": ["industrial policy scale economies", "scale economies and industrial policy", "trade industrial policy"],
        "related_papers": ["new-industrial-policy", "profits-scale-economies-and-the-gains-from-trade-and-industrial-policy"],
        "related_topics": ["markups-scale-economies-and-trade", "trade-policy"],
        "faq_items": [
            {
                "question": "Do scale economies automatically justify industrial policy?",
                "answer": "No. They create a rationale for intervention, but the international equilibrium effects of unilateral policy can still make the payoff disappointing.",
            }
        ],
        "body": """
## Short answer

Scale economies create a classic argument for industrial policy because private incentives may not align with social returns. But in open economies, the real question is whether unilateral policy can capture those gains once trade diversion, retaliation, and cross-border spillovers are taken into account.

## What the linked papers add

The papers on scale economies and industrial policy show why these interventions can be theoretically justified yet hard to execute successfully without coordination across countries.
""",
    },
    {
        "slug": "how-markups-distort-trade-reciprocity",
        "title": "How Markups Distort Trade Reciprocity",
        "summary": "A short page on the idea that market power can mimic hidden tariffs and complicate reciprocity metrics.",
        "parent_topic": "markups-scale-economies-and-trade",
        "primary_keywords": ["markups distort trade reciprocity", "shadow tariffs", "market power trade reciprocity"],
        "related_papers": ["markups-as-shadow-tariffs", "within-industry-specialization-and-global-market-power"],
        "related_topics": ["wto-and-trade-agreements", "trade-policy"],
        "faq_items": [
            {
                "question": "Why call a markup a shadow tariff?",
                "answer": "Because it can create domestic deadweight loss and transfer surplus internationally in a way that is welfare-equivalent to a tariff wedge.",
            }
        ],
        "body": """
## Short answer

Markups distort trade reciprocity because they are not only a domestic competition problem. In the linked research, markups also reallocate surplus across borders through excess profits, making them resemble hidden tariff barriers.

## Implication for trade agreements

If reciprocity is measured only with observed tariffs, the accounting can miss a large part of the international wedge created by market power.
""",
    },
    {
        "slug": "wto-and-global-value-chains",
        "title": "WTO and Global Value Chains",
        "summary": "An answer page on why value chains raise the stakes of trade agreement breakdown.",
        "parent_topic": "wto-and-trade-agreements",
        "primary_keywords": ["WTO and global value chains", "trade agreements global value chains", "dissolving the WTO"],
        "related_papers": ["the-cost-of-dissolving-the-wto", "interdependence-of-trade-policies-in-general-equilibrium"],
        "related_topics": ["trade-policy", "quantitative-trade-models"],
        "faq_items": [
            {
                "question": "Why do value chains magnify the cost of losing trade agreements?",
                "answer": "Because trade barriers propagate through upstream and downstream production links, so agreement breakdown disrupts much more than final-goods trade.",
            }
        ],
        "body": """
## Short answer

Global value chains make trade agreements more valuable because policy barriers hit not only final consumption, but also intermediate inputs that many industries rely on. When cooperative rules weaken, those disruptions cascade through production networks.

## Why this page exists

Searches about the WTO often focus on diplomacy or legal structure. The research linked here adds a quantitative production-network perspective on why the institution matters economically.
""",
    },
    {
        "slug": "gains-from-trade-with-scale-economies",
        "title": "Gains from Trade with Scale Economies",
        "summary": "A short answer page on how scale effects change standard gains-from-trade calculations.",
        "parent_topic": "quantitative-trade-models",
        "primary_keywords": ["gains from trade with scale economies", "scale effects trade", "quantitative trade models"],
        "related_papers": ["profits-scale-economies-and-the-gains-from-trade-and-industrial-policy", "trade-and-technology-adoption-in-distorted-economies"],
        "related_topics": ["markups-scale-economies-and-trade", "industrial-policy"],
        "faq_items": [
            {
                "question": "Do scale economies make trade gains larger or smaller?",
                "answer": "They can do both, depending on whether policy and market structure push activity toward or away from the sectors where scale effects are strongest.",
            }
        ],
        "body": """
## Short answer

Scale economies change gains-from-trade calculations because trade can reallocate activity toward sectors with increasing returns. That means the welfare effect of openness depends not only on trade costs, but also on how industries scale and how policy distorts that scaling.

## Why this matters for policy

Once scale effects matter, industrial policy and trade policy become tightly linked. That is one reason several papers on this site treat them jointly rather than as separate debates.
""",
    },
]

REPLICATION_SEEDS = [
    {
        "slug": "global-tariff-war-replication",
        "title": "Replication files for The Cost of a Global Tariff War",
        "summary": "Replication materials for the tariff-war paper, including the main code bundle, README, and raw-data preparation archive.",
        "paper_slug": "the-cost-of-a-global-tariff-war",
        "topics": ["trade-policy", "tariffs-and-retaliation"],
        "primary_keywords": ["tariff war replication files", "trade policy replication", "data and code"],
        "assets": [
            {
                "label": "README",
                "url": "README_Tariff_War.txt",
                "description": "Describes the data sources used and the files included in the replication folders.",
            },
            {
                "label": "Master replication folder",
                "url": "Master_Folder_Tariff_War.zip",
                "description": "Cleaned data and code used to produce Table 2 and Figures 2 and 5.",
            },
            {
                "label": "Raw data preparation files",
                "url": "https://alashkar.pages.iu.edu/Data_Preparation_Files.zip",
                "description": "Raw data and M-files used to prepare the data for the main analysis.",
            },
            {
                "label": "Paper PDF",
                "url": "Tariff_War_Lashkaripour.pdf",
                "description": "Primary paper PDF connected to this replication package.",
            },
        ],
        "body": """
## Usage note

Download the master folder and the data-preparation bundle separately. After unzipping, place the entire `Data_Preparation_Files` directory inside the master folder before running the code.

## Why this page exists

The original replication page was a thin list of files. This version adds context, machine-readable metadata, and direct links back to the paper and topic pages so readers and AI systems can identify what the package is for.
""",
    },
    {
        "slug": "discrete-trade-replication",
        "title": "Replication files for Discrete Trade",
        "summary": "Replication bundle and README for the paper Discrete Trade.",
        "paper_slug": "discrete-trade",
        "topics": ["quantitative-trade-models"],
        "primary_keywords": ["discrete trade replication", "trade model replication files"],
        "assets": [
            {
                "label": "README",
                "url": "README_Discrte_Trade.txt",
                "description": "Describes the data sources used and the files included in the replication folder.",
            },
            {
                "label": "Replication archive",
                "url": "https://alashkar.pages.iu.edu/Replication_Files_Discrete_Trade.zip",
                "description": "Main replication archive for the Discrete Trade paper.",
            },
            {
                "label": "Paper PDF",
                "url": "Lashkaripour_Discrete_2020.pdf",
                "description": "Primary paper PDF connected to this replication package.",
            },
        ],
        "body": """
## Package scope

This page gathers the replication archive and documentation for the Discrete Trade paper in one place and links them back to the broader quantitative trade-model content on the site.
""",
    },
    {
        "slug": "global-market-power-replication",
        "title": "Replication files for Within-Industry Specialization and Global Market Power",
        "summary": "Replication archive for the global market-power paper hosted on this site.",
        "paper_slug": "within-industry-specialization-and-global-market-power",
        "topics": ["markups-scale-economies-and-trade", "quantitative-trade-models"],
        "primary_keywords": ["market power replication", "markup replication files"],
        "assets": [
            {
                "label": "Replication archive",
                "url": "Lashkaripour_Markup_Replication.zip",
                "description": "Main replication archive for the paper.",
            },
            {
                "label": "Paper PDF",
                "url": "Lashkaripour_Market_Power_2020.pdf",
                "description": "Primary paper PDF connected to this replication package.",
            },
        ],
        "body": """
## Package scope

This replication landing page adds a descriptive HTML layer over the archive so the material is easier to discover, cite, and connect to the paper and topic hubs.
""",
    },
]

ENV = Environment(
    loader=BaseLoader(),
    autoescape=select_autoescape(["html", "xml"]),
    trim_blocks=True,
    lstrip_blocks=True,
)

BASE_TEMPLATE = ENV.from_string(
    """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="{{ meta_description }}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta name="author" content="Ahmad Lashkaripour">
  <link rel="shortcut icon" href="{{ rel('header.png') }}">
  <link rel="canonical" href="{{ canonical_url }}">
  <meta property="og:type" content="{{ og_type }}">
  <meta property="og:title" content="{{ meta_title }}">
  <meta property="og:description" content="{{ meta_description }}">
  <meta property="og:url" content="{{ canonical_url }}">
  <meta property="og:image" content="{{ absolute_url(social_image) }}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{{ meta_title }}">
  <meta name="twitter:description" content="{{ meta_description }}">
  <meta name="twitter:image" content="{{ absolute_url(social_image) }}">
  {% for meta_name, meta_content in scholar_meta %}
  <meta name="{{ meta_name }}" content="{{ meta_content }}">
  {% endfor %}
  <title>{{ meta_title }}</title>
  {% if base_stylesheet %}
  <link href="{{ rel(base_stylesheet) }}" rel="stylesheet">
  {% endif %}
  {% for stylesheet in extra_stylesheets %}
  <link href="{{ rel(stylesheet) }}" rel="stylesheet">
  {% endfor %}
  {% if include_mathjax %}
  <script>
    window.MathJax = {
      tex: {
        tags: "ams",
        packages: { '[+]': ['textmacros'] },
        macros: {
          ensuremath: ['#1', 1],
          mathbbm: ['\\\\mathbf{' + '#1' + '}', 1],
          APLstar: '\\\\star',
          nicefrac: ['\\\\frac{' + '#1' + '}{' + '#2' + '}', 2]
        }
      },
      chtml: {
        matchFontHeight: false,
        scale: 1.02
      }
    };
  </script>
  <script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"></script>
  {% endif %}
  <script defer src="https://cloud.umami.is/script.js" data-website-id="e9e22272-901c-4ce2-be5a-fddb6a9340fa"></script>
  {% for schema_json in schemas %}
  <script type="application/ld+json">{{ schema_json | safe }}</script>
  {% endfor %}
</head>
<body{% if body_class %} class="{{ body_class }}"{% endif %}>
  {% if show_site_header %}
  <header class="site-header">
    <div class="site-name"><a href="{{ rel('index.html') }}"><img src="{{ rel('photos/logo.png') }}" alt="" class="site-logo">{{ site_name }}</a></div>
    <nav class="site-nav">
      <a href="{{ rel('index.html') }}" class="{% if active_nav == 'home' %}active{% endif %}">Home</a>
      <a href="{{ rel('Research.html') }}" class="{% if active_nav == 'research' %}active{% endif %}">Research</a>
      <a href="{{ rel('Teaching.html') }}" class="{% if active_nav == 'teaching' %}active{% endif %}">PhD Trade</a>
      <a href="{{ rel('Vita.html') }}" class="{% if active_nav == 'vita' %}active{% endif %}">Vita</a>
      <a href="https://tradewar.app">Tariff War</a>
      <span class="nav-twitter">
        <a href="https://twitter.com/ALashkaripour" class="twitter-follow-button" data-show-count="false" data-show-screen-name="false"></a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </span>
    </nav>
  </header>
  {% endif %}
  <main class="main-content">
    <div class="page-content">
      {% if show_breadcrumbs and breadcrumbs %}
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        {% for crumb in breadcrumbs %}
          {% if crumb.url %}
          <a href="{{ rel(crumb.url) }}">{{ crumb.label }}</a>
          {% else %}
          <span>{{ crumb.label }}</span>
          {% endif %}
        {% endfor %}
      </nav>
      {% endif %}
      {{ body_html | safe }}
    </div>
  </main>
  {% if show_site_footer %}
  <footer class="site-footer">
    &copy; {{ current_year }} Ahmad Lashkaripour
  </footer>
  {% endif %}
</body>
</html>
"""
)


def normalize_text(value: str) -> str:
    normalized = unicodedata.normalize("NFKC", value)
    replacements = {
        "\u2014": "—",
        "\u2013": "–",
        "\u2018": "'",
        "\u2019": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\ufb01": "fi",
        "\ufb02": "fl",
        "\xa0": " ",
    }
    for old, new in replacements.items():
        normalized = normalized.replace(old, new)
    return normalized


def normalize_text_for_match(value: str) -> str:
    normalized = normalize_text(html.unescape(value)).lower()
    normalized = re.sub(r"^\s*abstract\.?\s*", "", normalized)
    normalized = re.sub(r"\s+", " ", normalized)
    return normalized.strip()


def is_duplicate_abstract(candidate_text: str, abstract_text: str) -> bool:
    candidate = normalize_text_for_match(candidate_text)
    abstract = normalize_text_for_match(abstract_text)
    if not candidate or not abstract:
        return False
    if candidate == abstract:
        return True
    shorter = min(len(candidate), len(abstract))
    longer = max(len(candidate), len(abstract))
    if shorter and shorter / longer >= 0.88 and (candidate in abstract or abstract in candidate):
        return True
    return SequenceMatcher(None, candidate, abstract).ratio() >= 0.9


def to_relative_url(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


def public_url(path_or_url: str) -> str:
    if path_or_url.startswith("http://") or path_or_url.startswith("https://"):
        return path_or_url
    rel = path_or_url.lstrip("/")
    if rel == "index.html":
        return f"{BASE_URL}/"
    return f"{BASE_URL}/{rel}"


def href_from(output_path: Path, target: str) -> str:
    if target.startswith("http://") or target.startswith("https://"):
        return target
    rel_target = target.lstrip("/")
    target_path = ROOT / rel_target
    return os.path.relpath(target_path, output_path.parent).replace(os.sep, "/")


def write_if_changed(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    existing = path.read_text() if path.exists() else None
    if existing != content:
        path.write_text(content)


def load_front_matter(path: Path) -> tuple[dict, str]:
    raw = path.read_text()
    match = re.match(r"^---\n(.*?)\n---\n?(.*)$", raw, re.S)
    if not match:
        raise ValueError(f"Missing front matter in {path}")
    meta = yaml.safe_load(match.group(1)) or {}
    body = match.group(2).strip()
    return meta, body


def dump_markdown(path: Path, meta: dict, body: str) -> None:
    front_matter = yaml.safe_dump(meta, sort_keys=False, allow_unicode=True).strip()
    markdown_text = f"---\n{front_matter}\n---\n\n{body.strip()}\n"
    write_if_changed(path, markdown_text)


def clean_pdf_to_markdown(pdf_path: Path, title: str, authors: list[str]) -> str:
    return textwrap.dedent(
        f"""\
        ## Machine-readable full text

        The HTML and Markdown full text for "{title}" is generated during the build from the hosted PDF.
        """
    ).strip()


def normalize_extracted_markdown(markdown_text: str) -> str:
    lines = [normalize_text(line.rstrip()) for line in markdown_text.splitlines()]
    if lines and lines[0].startswith("# "):
        lines = lines[1:]
    while lines and not lines[0].strip():
        lines.pop(0)
    if "Abstract" in [line.strip() for line in lines]:
        idx = next(i for i, line in enumerate(lines) if line.strip() == "Abstract")
        lines = lines[idx:]
    cleaned = []
    for line in lines:
        stripped = line.strip()
        if stripped == "Abstract":
            cleaned.append("## Abstract")
            continue
        cleaned.append(line)
    return "\n".join(cleaned).strip()


def refresh_paper_sources_with_opendataloader(papers: list[dict]) -> None:
    papers_to_refresh = [paper for paper in papers if paper.get("body_source", "markdown") != "latex"]
    if not papers_to_refresh:
        return
    pdf_paths = [str(ROOT / paper["pdf_url"]) for paper in papers_to_refresh]
    with TemporaryDirectory(prefix="odl-build-") as tmpdir:
        cmd = [
            "uvx",
            "--python",
            "3.12",
            "--from",
            "opendataloader-pdf",
            "opendataloader-pdf",
            *pdf_paths,
            "-o",
            tmpdir,
            "-f",
            "markdown",
            "-q",
            "--image-output",
            "off",
        ]
        subprocess.run(
            cmd,
            cwd=ROOT,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
        )
        for paper in papers_to_refresh:
            extracted_path = Path(tmpdir) / f"{Path(paper['pdf_url']).stem}.md"
            if not extracted_path.exists():
                continue
            extracted = normalize_extracted_markdown(extracted_path.read_text())
            meta, _old_body = load_front_matter(paper["source_path"])
            body = "\n".join(
                [
                    "## Machine-readable full text",
                    "",
                    "This section was extracted with OpenDataLoader PDF from the hosted PDF so the full text is accessible in HTML and Markdown.",
                    "",
                    extracted,
                ]
            ).strip()
            dump_markdown(paper["source_path"], meta, body)


def strip_markdown_formatting(text: str) -> str:
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    text = text.replace("**", "").replace("*", "").replace("`", "")
    return text.strip()


def slugify_ref(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", normalize_text(value).lower()).strip("-")
    return slug or "section"


def build_plaintext_summary(paper: dict) -> str:
    return " ".join(
        [
            paper["summary"],
            "The page on this site pairs a plain-language explanation with the full extracted text, citation metadata, and direct links to the PDF and related topic pages.",
            f"Keywords for this paper include {', '.join(paper['keywords'][:3])}.",
        ]
    )


def build_modernpapers_xml_document(paper: dict) -> str:
    if paper.get("body_source") == "latex" and paper.get("compiled_body_html"):
        return build_modernpapers_xml_from_compiled_html(paper)

    lines = paper["body_markdown"].splitlines()
    output = ["<PAPER>"]
    output.append(f"<TITLE>{html.escape(paper['title'])}</TITLE>")
    output.append(f"<AUTHORS>{html.escape(', '.join(paper['authors']))}</AUTHORS>")
    output.append(f"<PUBLICATION_DATE>{html.escape(paper['date'])}</PUBLICATION_DATE>")
    output.append(f"<PDF>{html.escape(public_url(paper['pdf_url']))}</PDF>")
    output.append(f"<ABSTRACT>{html.escape(paper['abstract'])}</ABSTRACT>")
    output.append(f"<PLAINTEXT>{html.escape(build_plaintext_summary(paper))}</PLAINTEXT>")
    output.append("")

    paragraph_buffer: list[str] = []

    def flush_paragraph() -> None:
        if not paragraph_buffer:
            return
        text = " ".join(part.strip() for part in paragraph_buffer if part.strip())
        text = strip_markdown_formatting(text)
        if text:
            output.append(html.escape(text))
            output.append("")
        paragraph_buffer.clear()

    for line in lines:
        stripped = line.strip()
        if stripped == "## Machine-readable full text":
            continue
        if stripped.startswith("This section was extracted with OpenDataLoader PDF"):
            continue
        if not stripped:
            flush_paragraph()
            continue
        if stripped.startswith("### "):
            flush_paragraph()
            heading = strip_markdown_formatting(stripped[4:])
            output.append(f'<SUBSECTION ref="{slugify_ref(heading)}">{html.escape(heading)}</SUBSECTION>')
            output.append("")
            continue
        if stripped.startswith("## "):
            flush_paragraph()
            heading = strip_markdown_formatting(stripped[3:])
            if heading.lower() == "abstract":
                continue
            output.append(f'<SECTION ref="{slugify_ref(heading)}">{html.escape(heading)}</SECTION>')
            output.append("")
            continue
        if stripped.startswith("- "):
            flush_paragraph()
            output.append(f"<li>{html.escape(strip_markdown_formatting(stripped[2:]))}</li>")
            output.append("")
            continue
        paragraph_buffer.append(stripped)
    flush_paragraph()
    output.append("</PAPER>")
    return "\n".join(output) + "\n"


def clean_reader_math_tex(tex: str) -> str:
    tex = tex.replace("\xa0", " ").strip()
    if tex.startswith(r"\(") and tex.endswith(r"\)"):
        tex = tex[2:-2].strip()
    elif tex.startswith(r"\[") and tex.endswith(r"\]"):
        tex = tex[2:-2].strip()
    tex = re.sub(r"\\label\s*\{[^}]+\}", "", tex)
    return re.sub(r"\s+", " ", tex).strip()


def clean_reader_display_tex(tex: str) -> str:
    tex = clean_reader_math_tex(tex)
    match = re.fullmatch(r"\\begin\{([A-Za-z*]+)\}(.*)\\end\{\1\}", tex, flags=re.S)
    if not match:
        return tex
    env = match.group(1)
    inner = re.sub(r"\s+", " ", match.group(2)).strip()
    if env.startswith("equation"):
        return inner
    return f"\\begin{{{env}}}{inner}\\end{{{env}}}"


def heading_text_for_reader(node: Tag) -> str:
    clone = BeautifulSoup(str(node), "html.parser").find(node.name)
    if not clone:
        return normalize_text(node.get_text(" ", strip=True))
    for removable in clone.select(".titlemark, a[id]"):
        removable.decompose()
    return normalize_text(clone.get_text(" ", strip=True))


def render_reader_inline_xml(node: Tag | NavigableString | None) -> str:
    if node is None or isinstance(node, Comment):
        return ""
    if isinstance(node, NavigableString):
        text = re.sub(r"\s+", " ", str(node))
        return html.escape(text)
    if not isinstance(node, Tag):
        return ""

    classes = set(node.get("class", []))
    if "mathjax-inline" in classes:
        tex = clean_reader_math_tex(node.get_text("", strip=False))
        return f"<MATH>{html.escape(tex)}</MATH>" if tex else ""
    if node.name == "a":
        return "".join(render_reader_inline_xml(child) for child in node.children)
    if node.name in {"em", "i", "strong", "b", "sup", "sub"}:
        inner = "".join(render_reader_inline_xml(child) for child in node.children).strip()
        if not inner:
            return ""
        return f"<{node.name.upper()}>{inner}</{node.name.upper()}>"
    if node.name in {"label", "input"}:
        return ""
    return "".join(render_reader_inline_xml(child) for child in node.children)


def normalize_reader_inline_xml(text: str) -> str:
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r"\s+(</?(?:MATH|EM|I|STRONG|B|SUP|SUB)>)", r"\1", text)
    text = re.sub(r"(</(?:MATH|EM|I|STRONG|B|SUP|SUB)>)\s+", r"\1 ", text)
    return text.strip()


def build_modernpapers_xml_from_compiled_html(paper: dict) -> str:
    fragment = BeautifulSoup(paper["compiled_body_html"], "html.parser")
    root = fragment.select_one(".tex4ht-fragment") or fragment
    output = ["<PAPER>"]
    output.append(f"<TITLE>{html.escape(paper['title'])}</TITLE>")
    output.append(f"<AUTHORS>{html.escape(', '.join(paper['authors']))}</AUTHORS>")
    output.append(f"<PUBLICATION_DATE>{html.escape(paper['date'])}</PUBLICATION_DATE>")
    output.append(f"<PDF>{html.escape(public_url(paper['pdf_url']))}</PDF>")
    output.append(f"<ABSTRACT>{html.escape(paper['abstract'])}</ABSTRACT>")
    output.append(f"<PLAINTEXT>{html.escape(build_plaintext_summary(paper))}</PLAINTEXT>")
    output.append("")

    equation_counter = 0

    def append_paragraph(tag: Tag) -> None:
        text = normalize_reader_inline_xml("".join(render_reader_inline_xml(child) for child in tag.children))
        if text:
            output.append(text)
            output.append("")

    def append_display_math(tag: Tag) -> None:
        nonlocal equation_counter
        tex = clean_reader_display_tex(tag.get_text("", strip=False))
        if not tex:
            return
        equation_counter += 1
        ref = tag.get("id") or f"eq-{paper['slug']}-{equation_counter}"
        output.append(f'<FULL_LINE_EQUATION ref="{html.escape(ref, quote=True)}"><MATH>{html.escape(tex)}</MATH></FULL_LINE_EQUATION>')
        output.append("")

    def append_description_list(tag: Tag) -> None:
        for dt in tag.find_all("dt", recursive=False):
            dd = dt.find_next_sibling("dd")
            head = normalize_reader_inline_xml("".join(render_reader_inline_xml(child) for child in dt.children))
            body = normalize_reader_inline_xml("".join(render_reader_inline_xml(child) for child in dd.children)) if dd else ""
            if head and body:
                output.append(f"{head}: {body}")
                output.append("")

    def walk(node: Tag | NavigableString) -> None:
        if isinstance(node, NavigableString) or isinstance(node, Comment):
            return
        if not isinstance(node, Tag):
            return

        classes = set(node.get("class", []))
        if node.name == "h3" and "sectionHead" in classes:
            heading = heading_text_for_reader(node)
            if heading:
                output.append(f'<SECTION ref="{html.escape(node.get("id") or slugify_ref(heading), quote=True)}">{html.escape(heading)}</SECTION>')
                output.append("")
            return
        if node.name == "h4" and "subsectionHead" in classes:
            heading = heading_text_for_reader(node)
            if heading:
                output.append(f'<SUBSECTION ref="{html.escape(node.get("id") or slugify_ref(heading), quote=True)}">{html.escape(heading)}</SUBSECTION>')
                output.append("")
            return
        if node.name == "h5":
            heading = heading_text_for_reader(node)
            if heading:
                output.append(f'<SUBSUBSECTION ref="{html.escape(node.get("id") or slugify_ref(heading), quote=True)}">{html.escape(heading)}</SUBSUBSECTION>')
                output.append("")
            return
        if node.name == "p":
            append_paragraph(node)
            return
        if node.name == "div" and ("mathjax-env" in classes or "mathjax-block" in classes):
            append_display_math(node)
            return
        if node.name == "dl":
            append_description_list(node)
            return
        if node.name == "div" and "newtheorem" in classes:
            for child in node.children:
                walk(child)
            return
        if node.name in {"div", "section"}:
            return

    for child in root.children:
        walk(child)

    output.append("</PAPER>")
    return "\n".join(output) + "\n"


def render_modernpapers_packages(papers: list[dict]) -> None:
    PAPER_READER_DATA_DIR.mkdir(parents=True, exist_ok=True)
    for paper in papers:
        paper_dir = PAPER_READER_DATA_DIR / paper["slug"]
        paper_dir.mkdir(parents=True, exist_ok=True)
        xml_path = paper_dir / "paper.xml"
        write_if_changed(xml_path, build_modernpapers_xml_document(paper))


def reader_view_href_from(output_path: Path, slug: str) -> str:
    return href_from(output_path, "paper-reader.html") + "?data=" + f"paper-reader-data/{slug}/paper.xml"


def link_href_from(output_path: Path, target: str) -> str:
    if "?" in target or target.startswith("mailto:") or target.startswith("tel:"):
        return target
    return href_from(output_path, target)


def render_inline(text: str) -> str:
    escaped = html.escape(text)
    escaped = re.sub(r"`([^`]+)`", lambda m: f"<code>{m.group(1)}</code>", escaped)
    escaped = re.sub(
        r"\[([^\]]+)\]\(([^)]+)\)",
        lambda m: f'<a href="{html.escape(m.group(2), quote=True)}">{m.group(1)}</a>',
        escaped,
    )
    escaped = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", escaped)
    escaped = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", escaped)
    return escaped


def markdown_to_html(markdown_text: str) -> str:
    lines = markdown_text.splitlines()
    html_parts: list[str] = []
    paragraph_lines: list[str] = []
    list_type: str | None = None
    list_items: list[str] = []
    in_code = False
    code_lines: list[str] = []

    def flush_paragraph() -> None:
        if paragraph_lines:
            text = " ".join(part.strip() for part in paragraph_lines if part.strip())
            html_parts.append(f"<p>{render_inline(text)}</p>")
            paragraph_lines.clear()

    def flush_list() -> None:
        nonlocal list_type, list_items
        if list_type and list_items:
            items_html = "".join(f"<li>{render_inline(item)}</li>" for item in list_items)
            html_parts.append(f"<{list_type}>{items_html}</{list_type}>")
        list_type = None
        list_items = []

    def flush_code() -> None:
        nonlocal in_code, code_lines
        if in_code:
            html_parts.append(f"<pre><code>{html.escape(chr(10).join(code_lines))}</code></pre>")
            in_code = False
            code_lines = []

    for raw_line in lines:
        line = raw_line.rstrip()
        stripped = line.strip()
        if stripped.startswith("```"):
            flush_paragraph()
            flush_list()
            if in_code:
                flush_code()
            else:
                in_code = True
            continue
        if in_code:
            code_lines.append(line)
            continue
        if not stripped:
            flush_paragraph()
            flush_list()
            continue
        if stripped.startswith("### "):
            flush_paragraph()
            flush_list()
            html_parts.append(f"<h3>{render_inline(stripped[4:])}</h3>")
            continue
        if stripped.startswith("## "):
            flush_paragraph()
            flush_list()
            html_parts.append(f"<h2>{render_inline(stripped[3:])}</h2>")
            continue
        if stripped.startswith("# "):
            flush_paragraph()
            flush_list()
            html_parts.append(f"<h1>{render_inline(stripped[2:])}</h1>")
            continue
        if re.match(r"^- ", stripped):
            flush_paragraph()
            if list_type not in (None, "ul"):
                flush_list()
            list_type = "ul"
            list_items.append(stripped[2:].strip())
            continue
        if re.match(r"^\d+\. ", stripped):
            flush_paragraph()
            if list_type not in (None, "ol"):
                flush_list()
            list_type = "ol"
            list_items.append(re.sub(r"^\d+\. ", "", stripped).strip())
            continue
        if stripped.startswith("> "):
            flush_paragraph()
            flush_list()
            html_parts.append(f"<blockquote><p>{render_inline(stripped[2:].strip())}</p></blockquote>")
            continue
        paragraph_lines.append(stripped)

    flush_paragraph()
    flush_list()
    flush_code()
    return "\n".join(html_parts)


def parse_original_research_page() -> list[dict]:
    research_path = ROOT / "Research.html"
    soup = BeautifulSoup(research_path.read_text(), "html.parser")
    container = soup.select_one(".page-content")
    if not container:
        raise RuntimeError("Research.html missing .page-content")

    section = None
    papers: list[dict] = []
    published_order = 0
    working_order = 0

    for child in container.children:
        name = getattr(child, "name", None)
        if name == "h2" and "section-heading" in child.get("class", []):
            section = child.get_text(" ", strip=True)
            continue
        if name != "div" or "paper" not in child.get("class", []):
            continue
        title_link = child.select_one(".paper-title a")
        if section not in {"Published Papers", "Working Papers"} or not title_link:
            continue
        title = title_link.get_text(" ", strip=True)
        if title not in PAPER_METADATA:
            raise KeyError(f"Missing manual metadata for paper: {title}")
        enrich = PAPER_METADATA[title]
        abstract = normalize_text(child.select_one(".paper-abstract p").get_text(" ", strip=True))
        links = {}
        for link in child.select(".paper-links a"):
            label = link.get_text(" ", strip=True).strip("[]").strip().lower()
            href = link.get("href", "").strip()
            if href == "#":
                continue
            links[label] = href
        order = published_order + 1 if section == "Published Papers" else working_order + 1
        if section == "Published Papers":
            published_order = order
        else:
            working_order = order
        papers.append(
            {
                "section": section,
                "sort_order": order,
                "title": title,
                "pdf_url": title_link.get("href"),
                "abstract": abstract,
                "summary": enrich["summary"],
                "links": links,
                **enrich,
            }
        )
    return papers


def bootstrap_markdown_sources() -> None:
    PAPERS_CONTENT_DIR.mkdir(parents=True, exist_ok=True)
    TOPICS_CONTENT_DIR.mkdir(parents=True, exist_ok=True)
    REPLICATION_CONTENT_DIR.mkdir(parents=True, exist_ok=True)

    if not any(PAPERS_CONTENT_DIR.glob("*.md")):
        papers = parse_original_research_page()
        for paper in papers:
            source_path = PAPERS_CONTENT_DIR / f"{paper['slug']}.md"
            body = clean_pdf_to_markdown(ROOT / paper["pdf_url"], paper["title"], paper["authors"])
            coauthors = [author for author in paper["authors"] if author != "Ahmad Lashkaripour"]
            meta = {
                "title": paper["title"],
                "slug": paper["slug"],
                "status": paper["status"],
                "date": paper["date"],
                "display_date": paper["display_date"],
                "venue": paper["venue"],
                "authors": paper["authors"],
                "coauthors": coauthors,
                "abstract": paper["abstract"],
                "summary": paper["summary"],
                "keywords": paper["keywords"],
                "topics": paper["topics"],
                "pdf_url": paper["pdf_url"],
                "markdown_url": f"sources/{paper['slug']}.md",
                "canonical_url": public_url(f"papers/{paper['slug']}.html"),
                "updated_at": TODAY,
                "sort_order": paper["sort_order"],
                "published_url": paper["links"].get("published version"),
                "slides_url": paper["links"].get("slides"),
                "working_paper_url": paper["links"].get("working paper with online appendix"),
                "online_appendix_url": paper["links"].get("online appendix"),
                "dashboard_url": paper["links"].get("dashboard"),
                "replication_slug": paper.get("replication_slug"),
                "raw_replication_url": paper["links"].get("replication files"),
            }
            dump_markdown(source_path, meta, body)

    for topic in TOPIC_SEEDS:
        source_path = TOPICS_CONTENT_DIR / f"{topic['slug']}.md"
        if source_path.exists():
            continue
        meta = {
            "title": topic["title"],
            "slug": topic["slug"],
            "page_kind": "hub",
            "summary": topic["summary"],
            "primary_keywords": topic["primary_keywords"],
            "related_papers": topic["related_papers"],
            "related_topics": topic["related_topics"],
            "faq_items": topic["faq_items"],
            "updated_at": TODAY,
        }
        dump_markdown(source_path, meta, textwrap.dedent(topic["body"]).strip())

    for query in QUERY_PAGE_SEEDS:
        source_path = TOPICS_CONTENT_DIR / f"{query['slug']}.md"
        if source_path.exists():
            continue
        meta = {
            "title": query["title"],
            "slug": query["slug"],
            "page_kind": "query",
            "parent_topic": query["parent_topic"],
            "summary": query["summary"],
            "primary_keywords": query["primary_keywords"],
            "related_papers": query["related_papers"],
            "related_topics": query["related_topics"],
            "faq_items": query["faq_items"],
            "updated_at": TODAY,
        }
        dump_markdown(source_path, meta, textwrap.dedent(query["body"]).strip())

    for item in REPLICATION_SEEDS:
        source_path = REPLICATION_CONTENT_DIR / f"{item['slug']}.md"
        if source_path.exists():
            continue
        meta = {
            "title": item["title"],
            "slug": item["slug"],
            "summary": item["summary"],
            "paper_slug": item["paper_slug"],
            "topics": item["topics"],
            "primary_keywords": item["primary_keywords"],
            "assets": item["assets"],
            "updated_at": TODAY,
        }
        dump_markdown(source_path, meta, textwrap.dedent(item["body"]).strip())


def load_sources(directory: Path) -> list[dict]:
    items = []
    for source_path in sorted(directory.glob("*.md")):
        meta, body = load_front_matter(source_path)
        meta.setdefault("body_source", "markdown")
        meta.setdefault("latex_engine", "pdflatex")
        meta["body_markdown"] = body
        meta["body_html"] = markdown_to_html(body)
        meta["source_path"] = source_path
        items.append(meta)
    return items


def clean_affiliation_text(value: str) -> str:
    cleaned = normalize_text(value)
    cleaned = cleaned.replace("∗", "").replace("*", "")
    cleaned = re.sub(r"\s*\([^)]*email[^)]*\)", "", cleaned, flags=re.I)
    cleaned = re.sub(r"\s*Email:.*$", "", cleaned, flags=re.I)
    cleaned = re.sub(r"\s*Corresponding author.*$", "", cleaned, flags=re.I)
    cleaned = re.sub(r"\s+(" + "|".join(MONTH_NAMES) + r")\b.*$", "", cleaned)
    cleaned = re.sub(r"\s+\d{4}\b.*$", "", cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned)
    return cleaned.strip(" ,;:-")


def extract_author_affiliations(paper: dict) -> dict[str, str]:
    lines = [normalize_text(line.strip()) for line in paper["body_markdown"].splitlines()[:140] if line.strip()]
    if not lines:
        affiliations = dict(AUTHOR_AFFILIATION_OVERRIDES.get(paper["slug"], {}))
        for author, affiliation in CANONICAL_AUTHOR_AFFILIATIONS.items():
            if author in paper["authors"]:
                affiliations[author] = affiliation
        return affiliations

    joined = "\n".join(lines)
    affiliations: dict[str, str] = {}

    # Pattern like "Anna Ignatenkoa, Ahmad Lashkaripourb" with matching "- a Institution" lines.
    affiliation_by_letter: dict[str, str] = {}
    for line in lines:
        match = re.match(r"^-\s*([a-z])\s+(.*)$", line)
        if match:
            affiliation_by_letter[match.group(1)] = clean_affiliation_text(match.group(2))
    if affiliation_by_letter:
        for author in paper["authors"]:
            match = re.search(re.escape(author) + r"\s*([a-z])(?=[,\s]|$)", joined)
            if match and match.group(1) in affiliation_by_letter:
                affiliations[author] = affiliation_by_letter[match.group(1)]

    # Pattern like "Lashkaripour: Indiana University; Lugovskyy: Indiana University"
    for author in paper["authors"]:
        surname = author.split()[-1]
        for token in (author, surname):
            match = re.search(rf"\b{re.escape(token)}\s*:\s*([^.;\n]+)", joined)
            if match:
                affiliations[author] = clean_affiliation_text(match.group(1))
                break

    # Pattern like "Farid Farrokhi Boston College" on its own line.
    for line in lines:
        for author in paper["authors"]:
            if author in affiliations:
                continue
            if not line.startswith(author):
                continue
            remainder = clean_affiliation_text(line[len(author):])
            if remainder:
                affiliations[author] = remainder

    for author, affiliation in AUTHOR_AFFILIATION_OVERRIDES.get(paper["slug"], {}).items():
        affiliations[author] = affiliation
    for author, affiliation in CANONICAL_AUTHOR_AFFILIATIONS.items():
        if author in paper["authors"]:
            affiliations[author] = affiliation
    return affiliations


def format_author_display_name(paper: dict, author: str) -> str:
    affiliations = paper.get("author_affiliations") or {}
    affiliation = affiliations.get(author)
    if affiliation:
        return f"{author} ({affiliation})"
    return author


def render_visible_paper_title_html(paper: dict) -> str:
    title_lines = paper.get("display_title_lines")
    if title_lines:
        return "<br>".join(html.escape(str(line)) for line in title_lines if str(line).strip())
    return html.escape(paper["title"])


def natural_sort_key(path: Path) -> list[int | str]:
    parts = re.split(r"(\d+)", path.name)
    return [int(part) if part.isdigit() else part for part in parts]


def scoped_css_selectors(selector_text: str, scope: str) -> str:
    selectors = []
    for selector in selector_text.split(","):
        stripped = selector.strip()
        if not stripped:
            continue
        if stripped.startswith(scope):
            selectors.append(stripped)
            continue
        stripped = re.sub(r"(^|\s)(html|body)(?=\s|$)", lambda m: f"{m.group(1)}{scope}", stripped)
        if scope not in stripped:
            stripped = f"{scope} {stripped}".strip()
        selectors.append(stripped)
    return ", ".join(selectors)


def scope_tex4ht_css(css_text: str, scope: str) -> str:
    def process(block: str) -> str:
        chunks: list[str] = []
        i = 0
        length = len(block)
        while i < length:
            if block.startswith("/*", i):
                end = block.find("*/", i + 2)
                if end == -1:
                    chunks.append(block[i:])
                    break
                chunks.append(block[i : end + 2])
                i = end + 2
                continue
            if block[i].isspace():
                chunks.append(block[i])
                i += 1
                continue
            if block[i] == "@":
                header_end = block.find("{", i)
                semicolon_end = block.find(";", i)
                if semicolon_end != -1 and (header_end == -1 or semicolon_end < header_end):
                    chunks.append(block[i : semicolon_end + 1])
                    i = semicolon_end + 1
                    continue
                if header_end == -1:
                    chunks.append(block[i:])
                    break
                depth = 1
                cursor = header_end + 1
                while cursor < length and depth:
                    if block.startswith("/*", cursor):
                        comment_end = block.find("*/", cursor + 2)
                        if comment_end == -1:
                            cursor = length
                            break
                        cursor = comment_end + 2
                        continue
                    if block[cursor] == "{":
                        depth += 1
                    elif block[cursor] == "}":
                        depth -= 1
                    cursor += 1
                header = block[i : header_end + 1]
                inner = block[header_end + 1 : cursor - 1]
                if header.lower().startswith(("@media", "@supports")):
                    chunks.append(header + process(inner) + "}")
                else:
                    chunks.append(header + inner + "}")
                i = cursor
                continue
            selector_end = block.find("{", i)
            if selector_end == -1:
                chunks.append(block[i:])
                break
            depth = 1
            cursor = selector_end + 1
            while cursor < length and depth:
                if block.startswith("/*", cursor):
                    comment_end = block.find("*/", cursor + 2)
                    if comment_end == -1:
                        cursor = length
                        break
                    cursor = comment_end + 2
                    continue
                if block[cursor] == "{":
                    depth += 1
                elif block[cursor] == "}":
                    depth -= 1
                cursor += 1
            selectors = scoped_css_selectors(block[i:selector_end], scope)
            rule_body = block[selector_end + 1 : cursor - 1]
            chunks.append(f"{selectors}{{{rule_body}}}")
            i = cursor
        return "".join(chunks)

    return process(css_text)


def strip_problematic_tex4ht_css(css_text: str) -> str:
    css_text = re.sub(
        r"@media\s*\(prefers-color-scheme:\s*dark\)\s*\{.*?invert\(1\)\s*;.*?\}\s*\}\s*",
        "",
        css_text,
        flags=re.IGNORECASE | re.DOTALL,
    )
    css_text = css_text.replace("background-color: Canvas;", "")
    css_text = css_text.replace("color: CanvasText;", "")
    css_text = css_text.replace("color-scheme: light dark;", "")
    return re.sub(r"\.tex4ht-fragment\s*\{\s*\}", "", css_text)


def read_braced_argument(text: str, start: int) -> tuple[str, int] | None:
    if start >= len(text) or text[start] != "{":
        return None
    depth = 0
    cursor = start
    while cursor < len(text):
        char = text[cursor]
        if char == "{":
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0:
                return text[start + 1 : cursor], cursor + 1
        cursor += 1
    return None


def replace_tex_macro(text: str, macro: str, arg_count: int, replacement) -> str:
    token = f"\\{macro}"
    pieces: list[str] = []
    cursor = 0
    while cursor < len(text):
        index = text.find(token, cursor)
        if index == -1:
            pieces.append(text[cursor:])
            break
        after = index + len(token)
        if after < len(text) and text[after].isalpha():
            pieces.append(text[cursor : after])
            cursor = after
            continue
        pieces.append(text[cursor:index])
        parse_cursor = after
        while parse_cursor < len(text) and text[parse_cursor].isspace():
            parse_cursor += 1
        args: list[str] = []
        ok = True
        for _ in range(arg_count):
            while parse_cursor < len(text) and text[parse_cursor].isspace():
                parse_cursor += 1
            parsed = read_braced_argument(text, parse_cursor)
            if parsed is None:
                ok = False
                break
            arg, parse_cursor = parsed
            args.append(arg)
        if not ok:
            pieces.append(token)
            cursor = after
            continue
        pieces.append(replacement(*args))
        cursor = parse_cursor
    return "".join(pieces)


def normalize_text_wrapper(arg: str) -> str:
    if not arg.strip():
        return ""
    if any(token in arg for token in ("\\", "_", "^")):
        return arg
    return rf"\text{{{arg}}}"


def strip_wrapped_math_dollars(text: str) -> str:
    stripped = text.strip()
    if stripped.startswith("$") and stripped.endswith("$") and len(stripped) >= 2:
        return stripped[1:-1].strip()
    return stripped


def normalize_math_tex(math_text: str) -> str:
    normalized = math_text
    primed_atom_pattern = re.compile(
        r"((?:\\[A-Za-z]+(?:\s*\{[^{}]*\})*|[A-Za-z]+(?:\s*\{[^{}]*\})*))'(?=\s*[_^])"
    )
    previous = None
    while normalized != previous:
        previous = normalized
        normalized = re.sub(r"\\(?:vspace|hspace)\s*\*?\s*\{[^{}]*\}", "", normalized)
        normalized = normalized.replace(r"\APLstar", r"\star")
        normalized = replace_tex_macro(normalized, "ensuremath", 1, lambda arg: arg)
        normalized = replace_tex_macro(
            normalized, "nicefrac", 2, lambda numerator, denominator: rf"\frac{{{numerator}}}{{{denominator}}}"
        )
        normalized = replace_tex_macro(normalized, "mathbbm", 1, lambda arg: rf"\mathbf{{{arg}}}")
        normalized = replace_tex_macro(normalized, "scalebox", 2, lambda _scale, arg: strip_wrapped_math_dollars(arg))
        normalized = replace_tex_macro(normalized, "textbf", 1, lambda arg: rf"\mathbf{{{arg}}}")
        normalized = replace_tex_macro(normalized, "text", 1, normalize_text_wrapper)
        normalized = replace_tex_macro(normalized, "textrm", 1, normalize_text_wrapper)
        normalized = replace_tex_macro(normalized, "mbox", 1, lambda arg: arg)
        normalized = re.sub(r"\^\s*\{\s*\}", "", normalized)
        normalized = re.sub(r"_\s*\{\s*\}", "", normalized)
        normalized = re.sub(r"\^\{([^{}]*?)'\}", lambda m: "^{" + m.group(1) + r"\prime}", normalized)
        normalized = primed_atom_pattern.sub(lambda m: "{" + m.group(1) + "'}", normalized)
        normalized = re.sub(r"([A-Za-z])_\^", r"\1^", normalized)
    normalized = re.sub(r"\{\s*\}", "", normalized)
    if normalized.strip() in {"\\", r"\\"}:
        return r"\,"
    return normalized.strip()


def normalize_math_markup(fragment_html: str) -> str:
    inline_pattern = re.compile(r"\\\((.*?)\\\)", re.DOTALL)
    block_pattern = re.compile(r"\\\[(.*?)\\\]", re.DOTALL)
    env_pattern = re.compile(r"\\begin\{([A-Za-z*]+)\}(.*?)\\end\{\1\}", re.DOTALL)

    fragment_html = inline_pattern.sub(lambda m: rf"\({normalize_math_tex(m.group(1))}\)", fragment_html)
    fragment_html = block_pattern.sub(lambda m: rf"\[{normalize_math_tex(m.group(1))}\]", fragment_html)
    fragment_html = env_pattern.sub(
        lambda m: rf"\begin{{{m.group(1)}}}{normalize_math_tex(m.group(2))}\end{{{m.group(1)}}}",
        fragment_html,
    )
    return fragment_html


def clean_unresolved_references(fragment_html: str) -> str:
    placeholder = r'<span class="[^"]+">\?\?\s*</span>'
    replacements = [
        (rf"online Appendix\s*{placeholder}", "the online appendix"),
        (rf"Online Appendix\s*{placeholder}", "the online appendix"),
        (rf"Appendix\s*{placeholder}", "the online appendix"),
        (rf"Problem\s*{placeholder}", "this problem"),
        (rf"Equation\s*{placeholder}\s*-\s*{placeholder}", "the system of equations"),
        (rf"Equations\s*{placeholder}\s*-\s*{placeholder}", "the system of equations"),
        (rf"Equation\s*{placeholder}", "the corresponding equation"),
        (rf"Equations\s*{placeholder}", "the corresponding equations"),
        (rf"Figure\s*{placeholder}\s*\(in the online appendix\)", "a figure in the online appendix"),
        (rf"Table\s*{placeholder}\s*\(in the online appendix\)", "a table in the online appendix"),
        (rf"Figure\s*{placeholder}", "a figure"),
        (rf"Table\s*{placeholder}", "a table"),
    ]
    cleaned = fragment_html
    for pattern, replacement in replacements:
        cleaned = re.sub(pattern, replacement, cleaned)
    cleaned = re.sub(placeholder, "", cleaned)
    cleaned = re.sub(r"\s+([,.;:])", r"\1", cleaned)
    cleaned = re.sub(r">\s+<", "><", cleaned)
    return cleaned


def is_small_caps_wrapper(node: Tag | None) -> bool:
    if not isinstance(node, Tag) or node.name != "span":
        return False
    classes = node.get("class", [])
    if "small-caps" in classes:
        return False
    if node.select_one(".small-caps") is None:
        return False
    text = node.get_text("", strip=True)
    return bool(text) and text[-1].isalnum()


def fix_small_caps_spacing(fragment_html: str) -> str:
    soup = BeautifulSoup(fragment_html, "html.parser")

    for span in soup.find_all("span"):
        if not is_small_caps_wrapper(span):
            continue

        previous = span.previous_sibling
        if isinstance(previous, Tag) and is_small_caps_wrapper(previous):
            span.insert_before(NavigableString(" "))

        next_sibling = span.next_sibling
        if not isinstance(next_sibling, NavigableString):
            continue
        next_text = str(next_sibling)
        stripped = next_text.lstrip()
        if not stripped or stripped[0].isspace() or not stripped[0].isalnum():
            continue
        if next_text[:1].isspace():
            continue
        next_sibling.replace_with(NavigableString(" " + next_text))

    container = soup.body if soup.body else soup
    return "".join(str(child) for child in container.contents)


INLINE_SPACING_TAGS = {
    "a",
    "b",
    "cite",
    "code",
    "em",
    "i",
    "input",
    "label",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
}


def is_inline_spacing_node(node) -> bool:
    if isinstance(node, NavigableString):
        return True
    if not isinstance(node, Tag):
        return False
    return node.name in INLINE_SPACING_TAGS


def boundary_text(node, from_end: bool) -> str:
    if isinstance(node, NavigableString):
        text = str(node)
    elif isinstance(node, Tag):
        text = node.get_text("", strip=False)
    else:
        return ""
    text = normalize_text(html.unescape(text))
    text = text.rstrip() if from_end else text.lstrip()
    return text


def is_small_caps_related_node(node) -> bool:
    if isinstance(node, NavigableString):
        node = node.parent
    if not isinstance(node, Tag):
        return False
    if "small-caps" in node.get("class", []):
        return True
    return node.select_one(".small-caps") is not None


def should_insert_inline_space(left, right) -> bool:
    if not is_inline_spacing_node(left) or not is_inline_spacing_node(right):
        return False
    if is_small_caps_related_node(left) or is_small_caps_related_node(right):
        return False

    left_text = boundary_text(left, from_end=True)
    right_text = boundary_text(right, from_end=False)
    if not left_text or not right_text:
        return False
    if left_text[-1].isspace() or right_text[0].isspace():
        return False

    left_char = left_text[-1]
    right_char = right_text[0]

    if left_char in "([{/“‘":
        return False
    if right_char in ".,;:!?)]}/%”’":
        return False

    left_ok = left_char.isalnum() or left_char in ")]}\"”’"
    right_ok = right_char.isalnum() or right_char in "([{\"“‘"
    return left_ok and right_ok


def fix_missing_inline_spacing(fragment_html: str) -> str:
    soup = BeautifulSoup(fragment_html, "html.parser")

    for parent in soup.find_all(True):
        children = list(parent.children)
        for left, right in zip(children, children[1:]):
            if should_insert_inline_space(left, right):
                right.insert_before(NavigableString(" "))

    container = soup.body if soup.body else soup
    return "".join(str(child) for child in container.contents)


def apply_custom_paper_body_overrides(paper: dict, fragment_html: str) -> str:
    if paper.get("slug") != "markups-as-shadow-tariffs":
        return fragment_html

    soup = BeautifulSoup(fragment_html, "html.parser")
    anchor = soup.find("span", id="the-welfare-loss-from-market-power-closed-vs-open-economies")
    if anchor is None:
        container = soup.body if soup.body else soup
        return "".join(str(child) for child in container.contents)

    figure = anchor.find_parent("figure")
    if figure is None:
        container = soup.body if soup.body else soup
        return "".join(str(child) for child in container.contents)

    caption = figure.find("figcaption", recursive=False)
    note = figure.find("div", class_="minipage", recursive=False)
    if caption is None:
        container = soup.body if soup.body else soup
        return "".join(str(child) for child in container.contents)

    replacement_img = soup.new_tag(
        "img",
        src=f"../paper-assets/{paper['slug']}/textbook-figure-rendered.png",
        alt="Closed and open economy markup diagram",
    )
    replacement_img["class"] = ["paper-figure-override-image"]

    figure.clear()
    figure.append(anchor)
    figure.append(caption)
    figure.append(replacement_img)
    if note is not None:
        figure.append(note)

    container = soup.body if soup.body else soup
    return "".join(str(child) for child in container.contents)


def flatten_sidenote_root(root: Tag | BeautifulSoup) -> str:
    for node in root.select(".footnote-mark"):
        node.decompose()

    for anchor in root.find_all("a"):
        href = anchor.get("href", "")
        if href.startswith("#enmark-"):
            anchor.decompose()
            continue
        if anchor.get("id") and not href and not anchor.get_text(strip=True):
            anchor.decompose()

    for node in root.find_all(["p", "div"]):
        if node is root:
            continue
        classes = [cls for cls in node.get("class", []) if cls not in {"indent", "noindent"}]
        if node.name == "div" and any(cls in {"mathjax-block", "mathjax-env", "displaymath"} for cls in classes):
            keep = [cls for cls in classes if cls not in {"mathjax-block", "mathjax-env", "displaymath"}]
            node.name = "span"
            node["class"] = ["sidenote-math-block", *keep]
            continue
        node.name = "span"
        node["class"] = ["sidenote-paragraph", *classes] if classes else ["sidenote-paragraph"]

    inner = "".join(str(child) for child in root.contents).strip()
    return re.sub(r"\s{2,}", " ", inner)


def extract_sidenote_html(note_html: str) -> str:
    note_soup = BeautifulSoup(note_html, "html.parser")
    root = note_soup.select_one(".footnote-text") or note_soup

    return flatten_sidenote_root(root)


def extract_endnote_html(note_tag: Tag) -> str:
    note_soup = BeautifulSoup(str(note_tag), "html.parser")
    root = note_soup.find(note_tag.name) or note_soup
    return flatten_sidenote_root(root)


def convert_footnotes_to_sidenotes(fragment_html: str) -> str:
    soup = BeautifulSoup(fragment_html, "html.parser")
    notes_by_id: dict[str, str] = {}

    for note in soup.select(".footnote-text"):
        anchor = note.select_one('a[id^="fn"]')
        if not anchor:
            continue
        notes_by_id[anchor["id"]] = extract_sidenote_html(str(note))

    for mark in soup.select(".footnote-mark"):
        if mark.find_parent(class_="footnote-text"):
            continue
        anchor = mark.select_one('a[href^="#fn"]')
        if not anchor:
            continue
        note_id = anchor.get("href", "")[1:]
        note_html = notes_by_id.get(note_id)
        if not note_html:
            continue

        sidenote_id = f"sn-{note_id}"
        label = soup.new_tag("label", attrs={"for": sidenote_id, "class": "margin-toggle sidenote-number"})
        toggle = soup.new_tag("input", attrs={"type": "checkbox", "id": sidenote_id, "class": "margin-toggle"})
        sidenote = soup.new_tag("span", attrs={"class": "sidenote"})
        sidenote_fragment = BeautifulSoup(note_html, "html.parser")
        for child in list(sidenote_fragment.contents):
            sidenote.append(child)

        next_sibling = mark.next_sibling
        while isinstance(next_sibling, NavigableString) and not next_sibling.strip():
            next_sibling = next_sibling.next_sibling
        if getattr(next_sibling, "name", None) == "a" and next_sibling.get("id") and not next_sibling.get_text(strip=True):
            next_sibling.decompose()

        mark.replace_with(label)
        label.insert_after(toggle)
        toggle.insert_after(sidenote)

    for section in soup.select(".tex4ht-footnotes"):
        section.decompose()

    endnote_ids_converted: set[str] = set()
    for note_anchor in soup.select('a[id^="ennote-"]'):
        note_paragraph = note_anchor.find_parent("p")
        if not note_paragraph:
            continue
        notes_by_id[note_anchor["id"]] = extract_endnote_html(note_paragraph)

    for anchor in soup.select('sup.textsuperscript > a[href^="#ennote-"]'):
        note_id = anchor.get("href", "")[1:]
        note_html = notes_by_id.get(note_id)
        if not note_html:
            continue

        sidenote_id = f"sn-{note_id}"
        label = soup.new_tag("label", attrs={"for": sidenote_id, "class": "margin-toggle sidenote-number"})
        toggle = soup.new_tag("input", attrs={"type": "checkbox", "id": sidenote_id, "class": "margin-toggle"})
        sidenote = soup.new_tag("span", attrs={"class": "sidenote"})
        sidenote_fragment = BeautifulSoup(note_html, "html.parser")
        for child in list(sidenote_fragment.contents):
            sidenote.append(child)

        marker = anchor.find_parent("sup") or anchor
        marker.replace_with(label)
        label.insert_after(toggle)
        toggle.insert_after(sidenote)
        endnote_ids_converted.add(note_id)

    for note_id in endnote_ids_converted:
        note_anchor = soup.select_one(f'a[id="{note_id}"]')
        if note_anchor:
            note_paragraph = note_anchor.find_parent("p")
            if note_paragraph:
                note_paragraph.decompose()

    for heading in soup.select("h3#notes, h3.likesectionHead#notes"):
        heading.decompose()

    return "".join(str(child) for child in (soup.body.contents if soup.body else soup.contents))


def extract_leading_keywords_text(soup: BeautifulSoup) -> str | None:
    container = soup.body if soup.body else soup
    children = [
        child
        for child in container.contents
        if not (isinstance(child, NavigableString) and not child.strip())
    ]
    for child in children[:20]:
        if not isinstance(child, Tag):
            continue
        text = normalize_text(child.get_text(" ", strip=True))
        if not re.match(r"^keywords?\s*:", text, flags=re.IGNORECASE):
            continue
        child.decompose()
        cleaned = re.sub(r"^keywords?\s*:\s*", "", text, flags=re.IGNORECASE).strip()
        return re.sub(r"\s+", " ", cleaned)
    return None


def sanitize_latex_for_html(tex_text: str, work_dir: Path) -> tuple[str, list[str]]:
    notes: list[str] = []

    def normalize_external_target(target: str) -> str:
        normalized = target
        while normalized.startswith("../"):
            normalized = normalized[3:]
        return normalized

    if r"\documentclass[english,AER, finalmode]{AEA}" in tex_text:
        tex_text = tex_text.replace(
            r"\documentclass[english,AER, finalmode]{AEA}",
            r"\documentclass[11pt]{article}",
        )
        notes.append("Replaced AEA class with article for HTML compilation stability.")
    updated = re.sub(r"\\documentclass(?:\[[^\]]*\])?\{jeea\}", r"\\documentclass[11pt]{article}", tex_text, count=1)
    if updated != tex_text:
        tex_text = updated
        notes.append("Replaced JEEA class with article for HTML compilation stability.")
    updated = replace_tex_macro(
        tex_text,
        "Author",
        4,
        lambda first, last, affiliation, _email: rf"\author{{{first} {last} \\ {affiliation}}}",
    )
    if updated != tex_text:
        tex_text = updated
        notes.append("Replaced JEEA Author macro with article author command.")
    updated = replace_tex_macro(
        tex_text,
        "Abstract",
        1,
        lambda body: rf"\begin{{abstract}}{body}\end{{abstract}}",
    )
    if updated != tex_text:
        tex_text = updated
        notes.append("Replaced JEEA Abstract macro with standard abstract environment.")
    updated = replace_tex_macro(
        tex_text,
        "caption*",
        1,
        lambda body: rf"\par\smallskip{{\centering {body}\par}}",
    )
    if updated != tex_text:
        tex_text = updated
        notes.append("Replaced starred captions with centered text for HTML compilation.")
    if r"\usepackage{sourceserifpro}" in tex_text:
        tex_text = tex_text.replace(r"\usepackage{sourceserifpro}", r"% \usepackage{sourceserifpro}")
        notes.append("Disabled sourceserifpro for HTML compilation to avoid TeX4ht ligature corruption.")
    if r"\usepackage{xr}" in tex_text:
        tex_text = tex_text.replace(r"\usepackage{xr}", r"% \usepackage{xr}")
        notes.append("Disabled xr package for HTML compilation.")
    if r"\externaldocument{" in tex_text:
        tex_text = re.sub(r"\\externaldocument\{[^}]+\}", lambda m: f"% {m.group(0)}", tex_text)
        notes.append("Disabled external appendix cross-references for HTML compilation.")
    if r"\strictpagecheck" in tex_text:
        tex_text = tex_text.replace(r"\strictpagecheck", r"% \strictpagecheck")
        notes.append("Disabled strictpagecheck for HTML compilation.")

    def strip_package_driver_option(options: str, package_name: str) -> str:
        parts = [part.strip() for part in options.split(",")]
        filtered = [
            part
            for part in parts
            if part and part not in {"pdftex", "xetex", "luatex", "dvips", "dvipdfm", "dvipdfmx"}
        ]
        if filtered != parts:
            notes.append(f"Removed PDF/backend-specific driver options from {package_name} for HTML compilation.")
        return ",".join(filtered)

    updated = re.sub(
        r"\\documentclass\[([^\]]*)\]\{([^}]+)\}",
        lambda m: (
            rf"\documentclass[{cleaned}]{{{m.group(2)}}}"
            if (cleaned := strip_package_driver_option(m.group(1), "documentclass"))
            else rf"\documentclass{{{m.group(2)}}}"
        ),
        tex_text,
        count=1,
    )
    if updated != tex_text:
        tex_text = updated
    updated = re.sub(
        r"\\usepackage\[[^\]]*\]\{hyperref\}",
        lambda _m: r"\usepackage{hyperref}",
        tex_text,
        flags=re.S,
    )
    if updated != tex_text:
        tex_text = updated
        notes.append("Simplified hyperref package options for HTML compilation.")
    if r"\usepackage{dcolumn}" in tex_text:
        tex_text = tex_text.replace(r"\usepackage{dcolumn}", r"% \usepackage{dcolumn}")
        notes.append("Disabled dcolumn package for HTML compilation.")
    updated = re.sub(r"D\{[^}]*\}\{[^}]*\}\{[^}]*\}", "r", tex_text)
    if updated != tex_text:
        tex_text = updated
        notes.append("Replaced dcolumn alignment specs with right-aligned columns for HTML compilation.")

    def replace_external_include(match: re.Match[str]) -> str:
        include_target = match.group(1)
        basename = Path(include_target).name
        candidate = work_dir / "Tables" / f"{basename}.tex"
        if candidate.exists():
            notes.append(f"Rewrote external include for {basename} to local Tables/{basename}.tex.")
            return rf"\input{{Tables/{basename}}}"
        if include_target.startswith("../"):
            local_target = normalize_external_target(include_target)
            local_candidate = work_dir / f"{local_target}.tex"
            if local_candidate.exists():
                notes.append(f"Rewrote external include {include_target} to local {local_target}.tex.")
                return rf"\input{{{local_target}}}"
            notes.append(f"Disabled missing external include {include_target} for HTML compilation.")
            return f"% {match.group(0)}"
        return match.group(0)

    tex_text = re.sub(
        r"\\include\{([^}]+)\}",
        replace_external_include,
        tex_text,
    )

    def replace_missing_external_graphic(match: re.Match[str]) -> str:
        graphic_command = match.group(1)
        graphic_target = match.group(2)
        if not graphic_target.startswith("../"):
            return match.group(0)
        local_target = normalize_external_target(graphic_target)
        candidate = work_dir / local_target
        if candidate.exists():
            notes.append(f"Rewrote external figure {graphic_target} to local {local_target}.")
            return f"{graphic_command}{local_target}}}"
        for suffix in ("", ".pdf", ".png", ".jpg", ".jpeg", ".eps", ".svg"):
            if (work_dir / f"{local_target}{suffix}").exists():
                notes.append(f"Rewrote external figure {graphic_target} to local {local_target}{suffix}.")
                return f"{graphic_command}{local_target}}}"
        notes.append(f"Disabled missing external figure {graphic_target} for HTML compilation.")
        return r"\mbox{}"

    tex_text = re.sub(
        r"(\\includegraphics(?:\[[^\]]*\])?\{([^}]+)\})",
        replace_missing_external_graphic,
        tex_text,
    )

    manual_repairs = [
        (
            r"\text{d}\ln\tau_{i,k}^{\left(Q\right)}+\alpha_{i,k}^{(\tilde{L})}d\ln\tilde{w}_{i}+\sum_{g}\alpha_{i,gk}^{\left(I\right)}\tilde{P}_{i,g},",
            r"\text{d}\ln\tau_{i,k}^{\left(Q\right)}+\alpha_{i,k}^{(\tilde{L})}\text{d}\ln\tilde{w}_{i}+\sum_{g}\alpha_{i,gk}^{\left(I\right)}\text{d}\ln\tilde{P}_{i,g},",
            "Repaired malformed differential notation in an appendix price-change equation for HTML compilation.",
        ),
        (
            r"+\frac{1}{\sigma_{g}-1}d\ln\lambda_{ii,g}",
            r"+\frac{1}{\sigma_{g}-1}\text{d}\ln\lambda_{ii,g}",
            "Normalized appendix differential notation before MathJax rendering.",
        ),
    ]
    for old, new, note in manual_repairs:
        if old in tex_text:
            tex_text = tex_text.replace(old, new)
            notes.append(note)
    return tex_text, notes


def decode_command_output(output: bytes | str | None) -> str:
    if output is None:
        return ""
    if isinstance(output, str):
        return output
    return output.decode("utf-8", errors="replace")


def run_command(command: list[str], cwd: Path, label: str, timeout: int | None = None) -> str:
    try:
        result = subprocess.run(
            command,
            cwd=cwd,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=False,
            timeout=timeout,
        )
    except subprocess.TimeoutExpired as exc:
        output = decode_command_output(exc.stdout)
        raise RuntimeError(f"{label} timed out after {timeout} seconds:\n{output}") from exc
    output = decode_command_output(result.stdout)
    if result.returncode != 0:
        raise RuntimeError(f"{label} failed:\n{output}")
    return output


def run_command_allow_failure(command: list[str], cwd: Path, timeout: int | None = None) -> tuple[int, str]:
    try:
        result = subprocess.run(
            command,
            cwd=cwd,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=False,
            timeout=timeout,
        )
        return result.returncode, decode_command_output(result.stdout)
    except subprocess.TimeoutExpired as exc:
        output = decode_command_output(exc.stdout)
        return 124, f"{output}\n[process timed out after {timeout} seconds]"


def extract_tex_block(tex_text: str, begin_marker: str, end_marker: str, occurrence: int = 1) -> str | None:
    start = -1
    search_from = 0
    for _ in range(max(occurrence, 1)):
        start = tex_text.find(begin_marker, search_from)
        if start < 0:
            return None
        search_from = start + len(begin_marker)
    end = tex_text.find(end_marker, search_from)
    if end < 0:
        return None
    return tex_text[start : end + len(end_marker)]


def render_source_to_png(source_path: Path, target_path: Path, dpi: int = 600, crop_eps: bool = False) -> None:
    command = [
        "gs",
        "-dSAFER",
        "-dBATCH",
        "-dNOPAUSE",
        "-dTextAlphaBits=4",
        "-dGraphicsAlphaBits=4",
    ]
    if crop_eps:
        command.append("-dEPSCrop")
    command.extend(
        [
            "-sDEVICE=pngalpha",
            f"-r{dpi}",
            f"-sOutputFile={target_path}",
            str(source_path),
        ]
    )
    run_command(command, ROOT, f"ghostscript PNG render for {source_path.name}", timeout=180)


def render_tikz_fragment_to_png(tikz_fragment: str, build_dir: Path, basename: str, target_path: Path, dpi: int = 600) -> None:
    tex_file = build_dir / f"{basename}.tex"
    pdf_file = build_dir / f"{basename}.pdf"
    cropped_pdf = build_dir / f"{basename}-crop.pdf"
    tex_source = textwrap.dedent(
        f"""
        \\documentclass[tikz,border=4pt]{{standalone}}
        \\usepackage{{amsmath}}
        \\usepackage{{amssymb}}
        \\usepackage{{pgfplots}}
        \\pgfplotsset{{compat=1.17}}
        \\usetikzlibrary{{calc}}
        \\begin{{document}}
        {tikz_fragment}
        \\end{{document}}
        """
    ).strip() + "\n"
    tex_file.write_text(tex_source, encoding="utf-8")
    run_command(["pdflatex", "-interaction=nonstopmode", tex_file.name], build_dir, f"pdflatex for {basename}", timeout=180)
    run_command(["pdfcrop", pdf_file.name, cropped_pdf.name], build_dir, f"pdfcrop for {basename}", timeout=180)
    render_source_to_png(cropped_pdf, target_path, dpi=dpi)


def render_latex_fragment_to_png(
    latex_fragment: str,
    build_dir: Path,
    basename: str,
    target_path: Path,
    *,
    preamble_lines: list[str] | None = None,
    dpi: int = 600,
) -> None:
    tex_file = build_dir / f"{basename}.tex"
    pdf_file = build_dir / f"{basename}.pdf"
    cropped_pdf = build_dir / f"{basename}-crop.pdf"
    preamble = "\n".join(
        preamble_lines
        or [
            r"\usepackage[T1]{fontenc}",
            r"\usepackage[utf8]{inputenc}",
            r"\usepackage{amsmath}",
            r"\usepackage{amssymb}",
            r"\usepackage{mathrsfs}",
            r"\usepackage{graphicx}",
            r"\usepackage{subcaption}",
            r"\usepackage{tikz}",
            r"\usetikzlibrary{patterns,decorations.pathreplacing}",
            r"\usepackage{pgfplots}",
            r"\pgfplotsset{compat=1.18}",
            r"\usepackage[scaled=1]{helvet}",
            r"\usepackage{mathpazo}",
            r"\usepackage{palatino}",
            r"\usepackage[scr=boondox,cal=cm]{mathalpha}",
            r"\usepackage[active,tightpage]{preview}",
        ]
    )
    tex_source = textwrap.dedent(
        f"""
        \\documentclass[12pt]{{article}}
        {preamble}
        \\pagestyle{{empty}}
        \\begin{{document}}
        \\begin{{preview}}
        {latex_fragment}
        \\end{{preview}}
        \\end{{document}}
        """
    ).strip() + "\n"
    tex_file.write_text(tex_source, encoding="utf-8")
    run_command(["pdflatex", "-interaction=nonstopmode", tex_file.name], build_dir, f"pdflatex for {basename}", timeout=180)
    run_command(["pdfcrop", pdf_file.name, cropped_pdf.name], build_dir, f"pdfcrop for {basename}", timeout=180)
    render_source_to_png(cropped_pdf, target_path, dpi=dpi)


def build_custom_latex_figure_overrides(
    paper: dict,
    tex_text: str,
    work_dir: Path,
) -> tuple[dict[str, dict[str, Path | str]], list[str]]:
    overrides: dict[str, dict[str, Path | str]] = {}
    notes: list[str] = []
    if paper.get("slug") not in {"new-industrial-policy", "markups-as-shadow-tariffs"}:
        return overrides, notes

    custom_dir = work_dir / ".codex-figure-overrides"
    custom_dir.mkdir(parents=True, exist_ok=True)

    if paper.get("slug") == "new-industrial-policy":
        lane_jpeg = ROOT / "Tex" / "IP" / "Lane_QJE.jpg"
        lane_eps = work_dir / "Lane_QJE.eps"
        if lane_jpeg.exists():
            overrides["Lane_QJE.svg"] = {
                "source_path": lane_jpeg,
                "target_relative_path": "Lane_QJE-source.jpg",
            }
            notes.append("Used the provided Lane_QJE JPEG source for the HTML page.")
        elif lane_eps.exists():
            try:
                lane_png = custom_dir / "Lane_QJE-rendered.png"
                render_source_to_png(lane_eps, lane_png, crop_eps=True)
                overrides["Lane_QJE.svg"] = {
                    "source_path": lane_png,
                    "target_relative_path": "Lane_QJE-rendered.png",
                }
                notes.append("Re-rendered Lane_QJE directly from the EPS source for the HTML page.")
            except Exception as exc:
                notes.append(f"Lane_QJE EPS override failed: {exc}")

        tikz_fragment = extract_tex_block(tex_text, r"\begin{tikzpicture}", r"\end{tikzpicture}")
        if tikz_fragment:
            try:
                tikz_png = custom_dir / "New_Industrial_policy_R10x-rendered.png"
                render_tikz_fragment_to_png(
                    tikz_fragment,
                    custom_dir,
                    "new-industrial-policy-figure-2",
                    tikz_png,
                )
                overrides["New_Industrial_policy_R10x.svg"] = {
                    "source_path": tikz_png,
                    "target_relative_path": "New_Industrial_policy_R10x-rendered.png",
                }
                notes.append("Re-rendered the ex ante model TikZ figure through a standalone PDF build for the HTML page.")
            except Exception as exc:
                notes.append(f"New Industrial Policy TikZ override failed: {exc}")

    if paper.get("slug") == "markups-as-shadow-tariffs":
        try:
            figure_fragment = extract_tex_block(tex_text, r"\begin{figure}[!tbh]", r"\end{figure}", occurrence=1)
            if figure_fragment:
                figure_body = figure_fragment.replace(r"\begin{figure}[!tbh]", "", 1).replace(r"\end{figure}", "", 1)
                figure_body = replace_tex_macro(figure_body, "caption", 1, lambda _body: "")
                figure_body = replace_tex_macro(figure_body, "caption*", 1, lambda body: rf"\par{{\centering {body}\par}}")
                figure_body = figure_body.replace(
                    r"\begin{subfigure}{0.4\textwidth}",
                    r"\begin{minipage}[t]{0.4\textwidth}\centering",
                ).replace(
                    r"\end{subfigure}",
                    r"\end{minipage}",
                )
                if r"\vspace{-7.5pt}" in figure_body:
                    figure_body = figure_body.split(r"\vspace{-7.5pt}", 1)[0].rstrip()
                textbook_png = custom_dir / "textbook-figure-rendered.png"
                render_latex_fragment_to_png(
                    figure_body,
                    custom_dir,
                    "markups-textbook-figure",
                    textbook_png,
                )
                target_dir = PAPER_ASSETS_DIR / paper["slug"]
                target_dir.mkdir(parents=True, exist_ok=True)
                shutil.copy2(textbook_png, target_dir / "textbook-figure-rendered.png")
                notes.append("Re-rendered the textbook TikZ figure directly from LaTeX for the HTML page.")
        except Exception as exc:
            notes.append(f"Markups textbook figure override failed: {exc}")

    return overrides, notes


def run_make4ht_pass(main_tex: str, cwd: Path, latex_engine: str, allow_failure: bool = False) -> tuple[int, str]:
    command = ["make4ht", "-u", "-f", "html5"]
    if latex_engine == "xelatex":
        command.append("-x")
    elif latex_engine == "lualatex":
        command.append("-l")
    command.extend([main_tex, "mathjax"])
    if allow_failure:
        return run_command_allow_failure(command, cwd, timeout=180)
    return 0, run_command(command, cwd, "make4ht", timeout=180)


def run_htlatex_pass(main_tex: str, cwd: Path, allow_failure: bool = False) -> tuple[int, str]:
    command = ["htlatex", main_tex, "xhtml,mathjax", " -cunihtf -utf8", ""]
    if allow_failure:
        return run_command_allow_failure(command, cwd, timeout=180)
    return 0, run_command(command, cwd, "htlatex", timeout=180)


def clear_stale_latex_outputs(work_dir: Path, jobname: str) -> None:
    stale_suffixes = [
        ".aux",
        ".log",
        ".out",
        ".synctex.gz",
        ".4ct",
        ".4tc",
        ".tmp",
        ".xref",
        ".idv",
        ".dvi",
        ".lg",
        ".html",
        ".css",
    ]
    for suffix in stale_suffixes:
        target = work_dir / f"{jobname}{suffix}"
        if target.exists():
            target.unlink()
    for sidecar in work_dir.glob(f"{jobname}[0-9]*.html"):
        sidecar.unlink()


def build_footnotes_fragment(work_dir: Path, jobname: str) -> tuple[str, int]:
    footnote_blocks: list[str] = []
    for sidecar in sorted(work_dir.glob(f"{jobname}[0-9]*.html"), key=natural_sort_key):
        soup = BeautifulSoup(sidecar.read_text(errors="ignore"), "html.parser")
        for comment in soup.find_all(string=lambda text: isinstance(text, Comment)):
            comment.extract()
        for block in soup.select(".footnote-text"):
            footnote_blocks.append(str(block))
    if not footnote_blocks:
        return "", 0
    html_text = [
        '<section class="tex4ht-footnotes">',
        '<h2 class="article-subheading">Notes</h2>',
        *footnote_blocks,
        "</section>",
    ]
    return "\n".join(html_text), len(footnote_blocks)


def detect_asset_extension(source_path: Path) -> str | None:
    try:
        header = source_path.read_bytes()[:32]
    except OSError:
        return None
    if header.startswith(b"\x89PNG\r\n\x1a\n"):
        return ".png"
    if header.startswith(b"\xff\xd8\xff"):
        return ".jpg"
    if header.startswith((b"GIF87a", b"GIF89a")):
        return ".gif"
    if header.startswith(b"%PDF-"):
        return ".pdf"
    text_header = header.lstrip()
    if text_header.startswith(b"<?xml") or text_header.startswith(b"<svg"):
        return ".svg"
    return None


def rewrite_and_copy_tex4ht_assets(
    fragment_html: str,
    work_dir: Path,
    slug: str,
    jobname: str,
    asset_overrides: dict[str, dict[str, Path | str]] | None = None,
) -> tuple[str, int]:
    soup = BeautifulSoup(fragment_html, "html.parser")
    copied: set[str] = set()
    asset_root = PAPER_ASSETS_DIR / slug
    asset_root.mkdir(parents=True, exist_ok=True)
    asset_overrides = asset_overrides or {}

    def resolve_asset(relative_path: Path, override: dict[str, Path | str] | None = None) -> tuple[Path, Path] | None:
        if override:
            override_source = Path(str(override["source_path"]))
            source_path = override_source if override_source.is_absolute() else (work_dir / override_source).resolve()
            if not source_path.exists():
                return None
            target_relative_path = Path(str(override.get("target_relative_path", relative_path.with_suffix(source_path.suffix))))
            return source_path, target_relative_path

        source_path = (work_dir / relative_path).resolve()
        if not source_path.exists():
            for suffix in ("", ".pdf", ".png", ".jpg", ".jpeg", ".eps", ".svg", ".gif"):
                candidate = (work_dir / f"{relative_path.as_posix()}{suffix}").resolve()
                if candidate.exists():
                    source_path = candidate
                    break
            else:
                return None
        target_relative_path = relative_path
        detected_extension = detect_asset_extension(source_path)
        if detected_extension and relative_path.suffix.lower() != detected_extension:
            target_relative_path = relative_path.with_suffix(detected_extension)
        return source_path, target_relative_path

    def copy_asset(source_path: Path, target_relative_path: Path) -> str:
        public_target = asset_root / target_relative_path
        public_target.parent.mkdir(parents=True, exist_ok=True)
        copy_key = target_relative_path.as_posix()
        if copy_key not in copied:
            shutil.copy2(source_path, public_target)
            copied.add(copy_key)
        return f"../paper-assets/{slug}/{target_relative_path.as_posix()}"

    for figure in soup.find_all("figure"):
        figcaption = figure.find("figcaption")
        alt_text = figcaption.get_text(" ", strip=True) if figcaption else ""
        for child in list(figure.children):
            if not isinstance(child, NavigableString):
                continue
            candidate_text = child.strip()
            if not candidate_text or "/" not in candidate_text or candidate_text.startswith(("Figure", "Table")):
                continue
            relative_path = Path(candidate_text)
            resolved = resolve_asset(relative_path, asset_overrides.get(candidate_text))
            if not resolved:
                continue
            source_path, target_relative_path = resolved
            img_tag = soup.new_tag("img", src=copy_asset(source_path, target_relative_path), alt=alt_text)
            img_tag["loading"] = "lazy"
            child.replace_with(img_tag)

    for tag in soup.find_all(True):
        if tag.name == "img":
            tag.attrs.pop("width", None)
            tag.attrs.pop("height", None)
        for attribute in ("href", "src"):
            value = tag.get(attribute)
            if not value:
                continue
            if value.startswith(("http://", "https://", "mailto:", "tel:", "#", "javascript:")):
                continue
            same_page = re.match(rf"{re.escape(jobname)}(?:\d+)?\.html#(.+)", value)
            if same_page:
                tag[attribute] = f"#{same_page.group(1)}"
                continue
            relative_path = Path(value)
            override = asset_overrides.get(value)
            resolved = resolve_asset(relative_path, override)
            if not resolved:
                continue
            source_path, target_relative_path = resolved
            tag[attribute] = copy_asset(source_path, target_relative_path)
    container = soup.body if soup.body else soup
    return "".join(str(child) for child in container.contents), len(copied)


def strip_duplicate_leading_abstract(soup: BeautifulSoup, abstract_text: str) -> None:
    container = soup.body if soup.body else soup

    while True:
        children = [
            child
            for child in container.contents
            if not (isinstance(child, NavigableString) and not child.strip())
        ]
        if not children:
            return
        first = children[0]
        if isinstance(first, NavigableString):
            first.extract()
            continue
        if first.name == "a" and first.get("id") and not first.get_text(strip=True):
            first.decompose()
            continue
        if first.name == "p" and is_duplicate_abstract(first.get_text(" ", strip=True), abstract_text):
            first.decompose()
            continue
        return


def normalize_heading_number(value: str) -> str:
    normalized = normalize_text(value)
    normalized = re.sub(r"\s+", "", normalized)
    return normalized.rstrip(".")


def strip_redundant_heading_number_paragraphs(soup: BeautifulSoup) -> None:
    for paragraph in soup.select("p"):
        text = normalize_heading_number(paragraph.get_text(" ", strip=True))
        if not text:
            continue
        sibling = paragraph.next_sibling
        while sibling is not None:
            if isinstance(sibling, NavigableString):
                if sibling.strip():
                    break
                sibling = sibling.next_sibling
                continue
            if sibling.name == "a" and sibling.get("id") and not sibling.get_text(strip=True):
                sibling = sibling.next_sibling
                continue
            break
        if sibling is None or getattr(sibling, "name", None) not in {"h2", "h3", "h4", "h5"}:
            continue
        if not any(cls.endswith("Head") for cls in sibling.get("class", [])):
            continue
        titlemark = sibling.select_one(".titlemark")
        if not titlemark:
            continue
        heading_number = normalize_heading_number(titlemark.get_text(" ", strip=True))
        if text == heading_number:
            paragraph.decompose()


LEADING_FRONT_MATTER_PATTERNS = (
    re.compile(r"^part\b", re.IGNORECASE),
    re.compile(r"^first draft\s*:", re.IGNORECASE),
    re.compile(r"^jel classification\s*:", re.IGNORECASE),
    re.compile(r"^keywords?\s*:", re.IGNORECASE),
)


def strip_redundant_leading_front_matter(soup: BeautifulSoup) -> None:
    container = soup.body if soup.body else soup

    while True:
        children = [
            child
            for child in container.contents
            if not (isinstance(child, NavigableString) and not child.strip())
        ]
        if not children:
            return
        first = children[0]
        if isinstance(first, NavigableString):
            first.extract()
            continue
        if first.name == "a" and first.get("id") and not first.get_text(strip=True):
            first.decompose()
            continue
        text = normalize_text(first.get_text(" ", strip=True))
        if not text:
            first.decompose()
            continue
        if any(pattern.match(text) for pattern in LEADING_FRONT_MATTER_PATTERNS):
            first.decompose()
            continue
        return


def build_latex_fragment(paper: dict) -> tuple[dict, dict]:
    slug = paper["slug"]
    latex_dir = ROOT / paper["latex_dir"]
    latex_main = paper["latex_main"]
    latex_engine = paper.get("latex_engine", "pdflatex")
    cache_dir = LATEX_CACHE_DIR / slug
    cache_path = cache_dir / "body.html"
    report: dict = {
        "slug": slug,
        "status": "pending",
        "notes": [],
        "asset_count": 0,
        "footnote_count": 0,
        "cache_used": False,
        "keywords_text": None,
    }

    try:
        with TemporaryDirectory(prefix=f"latex-{slug}-") as tmpdir:
            work_dir = Path(tmpdir) / "src"
            shutil.copytree(latex_dir, work_dir)
            tex_path = work_dir / latex_main
            tex_text = tex_path.read_text(encoding="latin-1")
            jobname = Path(latex_main).stem
            if "{AEA}" in tex_text and (ROOT / "vendor" / "aea-latex-templates").exists():
                for template_file in (ROOT / "vendor" / "aea-latex-templates").iterdir():
                    if template_file.is_file():
                        shutil.copy2(template_file, work_dir / template_file.name)
                report["notes"].append("Injected vendored AEA template files into the temp build.")
            tex_text, notes = sanitize_latex_for_html(tex_text, work_dir)
            report["notes"].extend(notes)
            tex_path.write_text(tex_text, encoding="latin-1")
            clear_stale_latex_outputs(work_dir, jobname)

            first_code, _first_output = run_make4ht_pass(latex_main, work_dir, latex_engine, allow_failure=True)
            if first_code != 0:
                report["notes"].append("make4ht reported errors during the first pass; attempting to use any generated TeX4ht outputs.")
            if r"\addbibresource{" in tex_text and (work_dir / f"{jobname}.bcf").exists():
                run_command(["biber", jobname], work_dir, "biber")
                report["notes"].append("Ran biber for bibliography resolution.")
            elif r"\bibliography{" in tex_text and not (work_dir / f"{jobname}.bbl").exists():
                aux_path = work_dir / f"{jobname}.aux"
                aux_text = aux_path.read_text(errors="ignore") if aux_path.exists() else ""
                if "\\bibdata" in aux_text and "\\bibstyle" in aux_text:
                    run_command(["bibtex", jobname], work_dir, "bibtex")
                    report["notes"].append("Ran bibtex for bibliography resolution.")
                else:
                    report["notes"].append("Skipped bibtex because the first HTML pass did not produce a bibliography-ready AUX file.")
            second_code, _second_output = run_make4ht_pass(latex_main, work_dir, latex_engine, allow_failure=True)
            if second_code != 0:
                report["notes"].append("make4ht reported errors during the second pass; attempting to use any generated HTML/CSS outputs.")

            main_html_path = work_dir / f"{jobname}.html"
            main_css_path = work_dir / f"{jobname}.css"
            if not main_html_path.exists() or not main_css_path.exists():
                htlatex_code, _htlatex_output = run_htlatex_pass(latex_main, work_dir, allow_failure=True)
                if htlatex_code == 0:
                    report["notes"].append("Used htlatex fallback for HTML generation.")
            if not main_html_path.exists() or not main_css_path.exists():
                raise RuntimeError("TeX4ht did not produce the expected HTML/CSS outputs.")

            soup = BeautifulSoup(main_html_path.read_text(errors="ignore"), "html.parser")
            for comment in soup.find_all(string=lambda text: isinstance(text, Comment)):
                comment.extract()
            for selector in ("div.maketitle", "section.abstract"):
                for node in soup.select(selector):
                    node.decompose()
            for paragraph in soup.select("p.indent, p.noindent"):
                text = paragraph.get_text(" ", strip=True)
                if text.isdigit() and any((node.get("id") or "").endswith("doc") for node in paragraph.find_all(id=True)):
                    paragraph.decompose()
            strip_duplicate_leading_abstract(soup, paper["abstract"])
            strip_redundant_heading_number_paragraphs(soup)
            strip_redundant_leading_front_matter(soup)
            keywords_text = extract_leading_keywords_text(soup)
            asset_overrides, asset_notes = build_custom_latex_figure_overrides(paper, tex_text, work_dir)
            report["notes"].extend(asset_notes)

            body_children = "".join(str(child) for child in soup.body.contents)
            footnotes_html, footnote_count = build_footnotes_fragment(work_dir, jobname)
            if footnotes_html:
                body_children = body_children + footnotes_html
            rewritten_body, asset_count = rewrite_and_copy_tex4ht_assets(
                body_children,
                work_dir,
                slug,
                jobname,
                asset_overrides=asset_overrides,
            )
            rewritten_body = convert_footnotes_to_sidenotes(rewritten_body)
            rewritten_body = normalize_math_markup(rewritten_body)
            rewritten_body = clean_unresolved_references(rewritten_body)
            rewritten_body = fix_small_caps_spacing(rewritten_body)
            rewritten_body = fix_missing_inline_spacing(rewritten_body)
            rewritten_body = normalize_math_markup(rewritten_body)
            rewritten_body = apply_custom_paper_body_overrides(paper, rewritten_body)
            scoped_css = scope_tex4ht_css(main_css_path.read_text(errors="ignore"), ".tex4ht-fragment")
            scoped_css = strip_problematic_tex4ht_css(scoped_css)
            stylesheet_target = PAPER_ASSETS_DIR / slug / "tex4ht.css"
            write_if_changed(stylesheet_target, scoped_css)

            wrapped_body = f'<div class="tex4ht-fragment">{rewritten_body}</div>'
            cache_dir.mkdir(parents=True, exist_ok=True)
            write_if_changed(cache_path, wrapped_body)
            report["status"] = "success"
            report["asset_count"] = asset_count
            report["footnote_count"] = footnote_count
            report["keywords_text"] = keywords_text
            return (
                {
                    "body_html": wrapped_body,
                    "extra_stylesheets": [f"paper-assets/{slug}/tex4ht.css"],
                    "include_mathjax": True,
                    "keywords_text": keywords_text,
                },
                report,
            )
    except Exception as exc:
        report["status"] = "cached-fallback" if cache_path.exists() else "failed"
        report["notes"].append(str(exc))
        if cache_path.exists():
            report["cache_used"] = True
            return (
                {
                    "body_html": cache_path.read_text(),
                    "extra_stylesheets": [f"paper-assets/{slug}/tex4ht.css"],
                    "include_mathjax": True,
                    "keywords_text": report.get("keywords_text"),
                },
                report,
            )
        raise RuntimeError(f"LaTeX build failed for {slug}: {exc}") from exc


def prepare_latex_paper_bodies(papers: list[dict]) -> list[dict]:
    reports: list[dict] = []
    for paper in papers:
        if paper.get("body_source") != "latex":
            paper["extra_stylesheets"] = []
            paper["include_mathjax"] = False
            continue
        compiled, report = build_latex_fragment(paper)
        paper["compiled_body_html"] = compiled["body_html"]
        paper["extra_stylesheets"] = compiled["extra_stylesheets"]
        paper["include_mathjax"] = compiled["include_mathjax"]
        paper["compiled_keywords_text"] = compiled.get("keywords_text")
        reports.append(report)
    LATEX_BUILD_REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    write_if_changed(LATEX_BUILD_REPORT_PATH, json.dumps(reports, indent=2, ensure_ascii=False) + "\n")
    return reports


def build_topic_indexes(topics: list[dict]) -> tuple[dict, list[dict], list[dict]]:
    by_slug = {topic["slug"]: topic for topic in topics}
    hubs = [topic for topic in topics if topic["page_kind"] == "hub"]
    queries = [topic for topic in topics if topic["page_kind"] == "query"]
    for hub in hubs:
        hub["query_pages"] = [query for query in queries if query.get("parent_topic") == hub["slug"]]
    return by_slug, hubs, queries


def link_label(url: str) -> str:
    mapping = {
        "published version": "Published version",
        "slides": "Slides",
        "working paper with online appendix": "Working paper",
        "online appendix": "Online appendix",
        "dashboard": "Dashboard",
        "replication files": "Replication files",
    }
    return mapping.get(url.lower(), url)


def make_breadcrumbs(items: list[tuple[str, str | None]]) -> list[dict]:
    return [{"label": label, "url": url} for label, url in items]


def build_scholar_meta(paper: dict) -> list[tuple[str, str]]:
    meta = [
        ("citation_title", paper["title"]),
        ("citation_publication_date", paper["date"].replace("-", "/")),
        ("citation_abstract_html_url", public_url(f"papers/{paper['slug']}.html")),
        ("citation_pdf_url", public_url(paper["pdf_url"])),
    ]
    for author in paper["authors"]:
        meta.append(("citation_author", author))
    if paper.get("venue") and paper["venue"] != "Working paper":
        meta.append(("citation_journal_title", paper["venue"]))
    return meta


def render_page(
    output_path: Path,
    *,
    meta_title: str,
    meta_description: str,
    body_html: str,
    schemas: list[dict],
    breadcrumbs: list[dict],
    social_image: str = DEFAULT_SOCIAL_IMAGE,
    active_nav: str = "research",
    scholar_meta: list[tuple[str, str]] | None = None,
    og_type: str = "article",
    extra_stylesheets: list[str] | None = None,
    include_mathjax: bool = False,
    base_stylesheet: str | None = "style.css",
    body_class: str = "",
    show_site_header: bool = True,
    show_site_footer: bool = True,
    show_breadcrumbs: bool = True,
) -> None:
    html_text = BASE_TEMPLATE.render(
        site_name=SITE_NAME,
        meta_title=meta_title,
        meta_description=meta_description,
        canonical_url=public_url(to_relative_url(output_path)),
        social_image=social_image,
        og_type=og_type,
        body_html=body_html,
        schemas=[json.dumps(schema, ensure_ascii=False, indent=2) for schema in schemas],
        breadcrumbs=breadcrumbs,
        active_nav=active_nav,
        scholar_meta=scholar_meta or [],
        current_year=CURRENT_YEAR,
        extra_stylesheets=extra_stylesheets or [],
        include_mathjax=include_mathjax,
        base_stylesheet=base_stylesheet,
        body_class=body_class,
        show_site_header=show_site_header,
        show_site_footer=show_site_footer,
        show_breadcrumbs=show_breadcrumbs,
        rel=lambda target: href_from(output_path, target),
        absolute_url=public_url,
    )
    write_if_changed(output_path, html_text)


def build_paper_schema(paper: dict) -> dict:
    authors = [
        {"@type": "Person", "name": author}
        for author in paper["authors"]
    ]
    schema = {
        "@context": "https://schema.org",
        "@type": "ScholarlyArticle",
        "headline": paper["title"],
        "description": paper["summary"],
        "author": authors,
        "datePublished": paper["date"],
        "dateModified": paper["updated_at"],
        "isAccessibleForFree": True,
        "url": public_url(f"papers/{paper['slug']}.html"),
        "mainEntityOfPage": public_url(f"papers/{paper['slug']}.html"),
        "about": paper["keywords"],
        "keywords": ", ".join(paper["keywords"]),
        "abstract": paper["abstract"],
        "image": public_url(DEFAULT_SOCIAL_IMAGE),
        "encoding": {
            "@type": "MediaObject",
            "contentUrl": public_url(paper["pdf_url"]),
            "encodingFormat": "application/pdf",
        },
    }
    if paper.get("venue") and paper["venue"] != "Working paper":
        schema["isPartOf"] = {
            "@type": "PublicationVolume",
            "name": paper["venue"],
        }
    if paper.get("published_url"):
        schema["sameAs"] = paper["published_url"]
    return schema


def build_breadcrumb_schema(path: str, breadcrumbs: list[dict]) -> dict:
    elements = []
    for index, crumb in enumerate(breadcrumbs, start=1):
        item = {"@type": "ListItem", "position": index, "name": crumb["label"]}
        if crumb.get("url"):
            item["item"] = public_url(crumb["url"])
        elif path:
            item["item"] = public_url(path)
        elements.append(item)
    return {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": elements}


def render_papers(papers: list[dict], topic_by_slug: dict) -> list[str]:
    urls = []
    SOURCES_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for paper in papers:
        output_path = PAPERS_OUTPUT_DIR / f"{paper['slug']}.html"
        action_links = [
            ("Read PDF", paper["pdf_url"]),
            ("Markdown source", f"sources/{paper['slug']}.md"),
            ("Reader view", reader_view_href_from(output_path, paper["slug"])),
        ]
        if paper.get("published_url"):
            action_links.append(("Published version", paper["published_url"]))
        if paper.get("working_paper_url"):
            action_links.append(("Working paper", paper["working_paper_url"]))
        if paper.get("slides_url"):
            action_links.append(("Slides", paper["slides_url"]))
        if paper.get("online_appendix_url"):
            action_links.append(("Online appendix", paper["online_appendix_url"]))
        if paper.get("dashboard_url"):
            action_links.append(("Dashboard", paper["dashboard_url"]))
        if paper.get("replication_slug"):
            action_links.append(("Replication files", f"replication/{paper['replication_slug']}.html"))
        elif paper.get("raw_replication_url"):
            action_links.append(("Replication files", paper["raw_replication_url"]))

        actions_html = " · ".join(
            f'<a href="{html.escape(link_href_from(output_path, target), quote=True)}">{html.escape(label)}</a>'
            for label, target in action_links
        )
        author_lines_html = "".join(
            f'<p class="subtitle">{html.escape(format_author_display_name(paper, author))}</p>'
            for author in paper["authors"]
        )
        venue_bits = []
        if paper.get("venue"):
            venue_bits.append(html.escape(paper["venue"]))
        if paper.get("display_date"):
            venue_bits.append(html.escape(paper["display_date"]))
        venue_line_html = " &middot; ".join(venue_bits)
        keywords_line_html = ""
        keywords_text = paper.get("compiled_keywords_text")
        if keywords_text:
            keywords_line_html = f'<p class="paper-keywords-line"><span class="paper-keywords-label">Keywords</span> {html.escape(keywords_text)}</p>'
        related_links = []
        for slug in paper["topics"]:
            if slug in topic_by_slug:
                related_links.append(
                    f'<a href="{href_from(output_path, "topics/" + slug + ".html")}">{html.escape(topic_by_slug[slug]["title"])}</a>'
                )
        related_links_html = " · ".join(related_links)
        related_section_html = ""
        if related_links_html:
            related_section_html = f"""
  <section class="paper-endmatter" aria-label="Related topics">
    <p class="paper-related-topics"><span class="paper-endmatter-label">Related topics</span> {related_links_html}</p>
  </section>
"""
        if paper.get("body_source") == "latex":
            full_text_html = paper.get("compiled_body_html", paper["body_html"])
        else:
            full_text_html = (
                paper["body_html"]
                .replace("<h1>", '<h2 class="article-subheading">')
                .replace("</h1>", "</h2>")
                .replace("<h2>", '<h2 class="article-subheading">')
            )
        body_html = f"""
<nav class="paper-top-nav">
  <a href="{href_from(output_path, 'Research.html')}">Research</a>
  <span>/</span>
  <a href="{href_from(output_path, 'index.html')}">Home</a>
</nav>

<article class="paper-article">
  <h1><span>{render_visible_paper_title_html(paper)}</span></h1>
  {author_lines_html}
  <p class="subtitle paper-citation-line">{venue_line_html}</p>
  <p class="paper-links-line">{actions_html}</p>
  <div id="abstract">
    <p><strong>Abstract.</strong> {html.escape(paper['abstract'])}</p>
  </div>
  {keywords_line_html}
  <section class="paper-body">
    {full_text_html}
  </section>
  {related_section_html}
</article>
"""
        breadcrumbs = make_breadcrumbs(
            [("Home", "index.html"), ("Research", "Research.html"), (paper["title"], None)]
        )
        schemas = [
            build_paper_schema(paper),
            build_breadcrumb_schema(f"papers/{paper['slug']}.html", breadcrumbs),
        ]
        render_page(
            output_path,
            meta_title=f"{paper['title']} | Ahmad Lashkaripour",
            meta_description=paper["summary"],
            body_html=body_html,
            schemas=schemas,
            breadcrumbs=breadcrumbs,
            social_image=RESEARCH_SOCIAL_IMAGE,
            scholar_meta=build_scholar_meta(paper),
            extra_stylesheets=["tufte-style/tufte.css", *paper.get("extra_stylesheets", []), "tufte-style/paperpages.css"],
            include_mathjax=paper.get("include_mathjax", False),
            base_stylesheet=None,
            body_class="tufte-paper-page",
            show_site_header=False,
            show_site_footer=False,
            show_breadcrumbs=False,
        )
        public_source = SOURCES_OUTPUT_DIR / f"{paper['slug']}.md"
        shutil.copy2(paper["source_path"], public_source)
        urls.append(to_relative_url(output_path))
    return urls


def build_topic_schema(topic: dict) -> dict:
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": topic["title"],
        "description": topic["summary"],
        "author": {"@type": "Person", "name": "Ahmad Lashkaripour"},
        "dateModified": topic["updated_at"],
        "url": public_url(f"topics/{topic['slug']}.html"),
        "mainEntityOfPage": public_url(f"topics/{topic['slug']}.html"),
        "image": public_url(RESEARCH_SOCIAL_IMAGE),
        "keywords": ", ".join(topic["primary_keywords"]),
        "about": topic["primary_keywords"],
    }


def render_topics(topics: list[dict], papers_by_slug: dict, topic_by_slug: dict) -> list[str]:
    urls = []
    for topic in topics:
        output_path = TOPICS_OUTPUT_DIR / f"{topic['slug']}.html"
        related_papers_html = "".join(
            f'<article class="paper-card"><h3><a href="{href_from(output_path, "papers/" + slug + ".html")}">{html.escape(papers_by_slug[slug]["title"])}</a></h3><p>{html.escape(papers_by_slug[slug]["summary"])}</p></article>'
            for slug in topic.get("related_papers", [])
            if slug in papers_by_slug
        )
        sibling_topics_html = "".join(
            f'<a class="topic-card" href="{href_from(output_path, "topics/" + slug + ".html")}"><span class="topic-card-label">Related topic</span><h3>{html.escape(topic_by_slug[slug]["title"])}</h3><p>{html.escape(topic_by_slug[slug]["summary"])}</p></a>'
            for slug in topic.get("related_topics", [])
            if slug in topic_by_slug
        )
        faq_html = "".join(
            f'<div class="faq-item"><h3>{html.escape(item["question"])}</h3><p>{html.escape(item["answer"])}</p></div>'
            for item in topic.get("faq_items", [])
        )
        query_cards = ""
        if topic.get("query_pages"):
            query_cards = """
  <section class="content-section">
    <h2 class="section-heading">Direct-answer pages</h2>
    <div class="topic-grid">
      %s
    </div>
  </section>
""" % "".join(
                f'<a class="topic-card" href="{href_from(output_path, "topics/" + query["slug"] + ".html")}"><span class="topic-card-label">Question</span><h3>{html.escape(query["title"])}</h3><p>{html.escape(query["summary"])}</p></a>'
                for query in topic["query_pages"]
            )
        parent_link = ""
        if topic["page_kind"] == "query" and topic.get("parent_topic") in topic_by_slug:
            parent = topic_by_slug[topic["parent_topic"]]
            parent_link = f"""
  <section class="content-section">
    <div class="answer-card">
      <p><strong>Parent topic:</strong> <a href="{href_from(output_path, "topics/" + parent["slug"] + ".html")}">{html.escape(parent["title"])}</a></p>
    </div>
  </section>
"""
        body_html = f"""
<article class="article-shell">
  <header class="article-hero">
    <p class="eyebrow">{html.escape('Topic hub' if topic['page_kind'] == 'hub' else 'Direct answer')}</p>
    <h1 class="article-title">{html.escape(topic['title'])}</h1>
    <p class="article-lede">{html.escape(topic['summary'])}</p>
    <div class="topic-pill-row">
      {''.join(f'<span class="topic-pill static-pill">{html.escape(keyword)}</span>' for keyword in topic['primary_keywords'])}
    </div>
  </header>

  {parent_link}

  <section class="content-section article-text">
    {topic['body_html']}
  </section>

  <section class="content-section">
    <h2 class="section-heading">Related papers</h2>
    <div class="paper-card-grid">{related_papers_html}</div>
  </section>

  {query_cards}

  <section class="content-section">
    <h2 class="section-heading">Related topics</h2>
    <div class="topic-grid">{sibling_topics_html}</div>
  </section>

  <section class="content-section">
    <h2 class="section-heading">Key questions</h2>
    <div class="faq-grid">{faq_html}</div>
  </section>
</article>
"""
        breadcrumbs = [("Home", "index.html"), ("Research", "Research.html")]
        if topic["page_kind"] == "query" and topic.get("parent_topic") in topic_by_slug:
            parent = topic_by_slug[topic["parent_topic"]]
            breadcrumbs.append((parent["title"], f"topics/{parent['slug']}.html"))
        breadcrumbs.append((topic["title"], None))
        breadcrumb_list = make_breadcrumbs(breadcrumbs)
        schemas = [
            build_topic_schema(topic),
            build_breadcrumb_schema(f"topics/{topic['slug']}.html", breadcrumb_list),
        ]
        render_page(
            output_path,
            meta_title=f"{topic['title']} | Ahmad Lashkaripour",
            meta_description=topic["summary"],
            body_html=body_html,
            schemas=schemas,
            breadcrumbs=breadcrumb_list,
            social_image=RESEARCH_SOCIAL_IMAGE,
        )
        urls.append(to_relative_url(output_path))
    return urls


def build_replication_schema(item: dict) -> dict:
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": item["title"],
        "description": item["summary"],
        "url": public_url(f"replication/{item['slug']}.html"),
        "creator": {"@type": "Person", "name": "Ahmad Lashkaripour"},
        "hasPart": [
            {
                "@type": "MediaObject",
                "name": asset["label"],
                "contentUrl": public_url(asset["url"]) if not asset["url"].startswith("https://") else asset["url"],
                "description": asset["description"],
            }
            for asset in item["assets"]
        ],
        "keywords": ", ".join(item["primary_keywords"]),
    }


def render_replication_pages(items: list[dict], papers_by_slug: dict, topic_by_slug: dict) -> list[str]:
    urls = []
    for item in items:
        output_path = REPLICATION_OUTPUT_DIR / f"{item['slug']}.html"
        paper = papers_by_slug[item["paper_slug"]]
        assets_html = "".join(
            f'<li><a href="{href_from(output_path, asset["url"])}">{html.escape(asset["label"])}</a><span>{html.escape(asset["description"])}</span></li>'
            for asset in item["assets"]
        )
        topics_html = "".join(
            f'<a class="topic-pill" href="{href_from(output_path, "topics/" + slug + ".html")}">{html.escape(topic_by_slug[slug]["title"])}</a>'
            for slug in item.get("topics", [])
            if slug in topic_by_slug
        )
        body_html = f"""
<article class="article-shell">
  <header class="article-hero">
    <p class="eyebrow">Replication materials</p>
    <h1 class="article-title">{html.escape(item['title'])}</h1>
    <p class="article-lede">{html.escape(item['summary'])}</p>
    <div class="topic-pill-row">{topics_html}</div>
    <div class="resource-row">
      <a class="resource-chip" href="{href_from(output_path, "papers/" + paper["slug"] + ".html")}">Paper page</a>
      <a class="resource-chip" href="{href_from(output_path, paper['pdf_url'])}">Paper PDF</a>
      <a class="resource-chip" href="{href_from(output_path, "sources/" + paper["slug"] + ".md")}">Markdown source</a>
    </div>
  </header>

  <section class="content-section article-text">
    {item['body_html']}
  </section>

  <section class="content-section">
    <h2 class="section-heading">Files in this package</h2>
    <ul class="asset-list">{assets_html}</ul>
  </section>
</article>
"""
        breadcrumbs = make_breadcrumbs(
            [
                ("Home", "index.html"),
                ("Research", "Research.html"),
                (paper["title"], f"papers/{paper['slug']}.html"),
                ("Replication files", None),
            ]
        )
        schemas = [
            build_replication_schema(item),
            build_breadcrumb_schema(f"replication/{item['slug']}.html", breadcrumbs),
        ]
        render_page(
            output_path,
            meta_title=f"{item['title']} | Ahmad Lashkaripour",
            meta_description=item["summary"],
            body_html=body_html,
            schemas=schemas,
            breadcrumbs=breadcrumbs,
            social_image=RESEARCH_SOCIAL_IMAGE,
        )
        urls.append(to_relative_url(output_path))
    return urls


def render_research_hub(papers: list[dict], hubs: list[dict], queries: list[dict], topic_by_slug: dict) -> str:
    published = [paper for paper in papers if paper["status"] == "published"]
    working = [paper for paper in papers if paper["status"] == "working-paper"]

    def render_paper_meta(paper: dict) -> str:
        coauthors = [author for author in paper["authors"] if author != "Ahmad Lashkaripour"]
        if paper["status"] == "published":
            leading = f"<strong>{html.escape(paper['venue'])}</strong>, {html.escape(paper['display_date'])}"
        else:
            leading = html.escape(paper["display_date"])
        if coauthors:
            return f"({leading} &ndash; with <em>{html.escape(', '.join(coauthors))}</em>)"
        return f"({leading})"

    def render_paper_listing(paper: dict, index: int) -> str:
        has_source_html = paper.get("body_source") == "latex"
        primary_href = (
            href_from(ROOT / "Research.html", "papers/" + paper["slug"] + ".html")
            if has_source_html
            else href_from(ROOT / "Research.html", paper["pdf_url"])
        )
        assets = [
            '<a href="#" onclick="toggleAbstract(this); return false;">[Abstract]</a>',
            f'<a href="{href_from(ROOT / "Research.html", paper["pdf_url"])}">[PDF]</a>',
        ]
        if has_source_html:
            assets.insert(1, f'<a href="{href_from(ROOT / "Research.html", "papers/" + paper["slug"] + ".html")}">[HTML]</a>')
        if paper.get("published_url"):
            assets.append(f'<a href="{paper["published_url"]}">[published version]</a>')
        if paper.get("working_paper_url"):
            assets.append(f'<a href="{href_from(ROOT / "Research.html", paper["working_paper_url"])}">[working paper]</a>')
        if paper.get("slides_url"):
            assets.append(f'<a href="{href_from(ROOT / "Research.html", paper["slides_url"])}">[slides]</a>')
        if paper.get("dashboard_url"):
            assets.append(f'<a href="{href_from(ROOT / "Research.html", paper["dashboard_url"])}">[dashboard]</a>')
        if paper.get("online_appendix_url"):
            assets.append(f'<a href="{href_from(ROOT / "Research.html", paper["online_appendix_url"])}">[online appendix]</a>')
        if paper.get("replication_slug"):
            assets.append(f'<a href="{href_from(ROOT / "Research.html", "replication/" + paper["replication_slug"] + ".html")}">[replication files]</a>')
        elif paper.get("raw_replication_url"):
            assets.append(f'<a href="{href_from(ROOT / "Research.html", paper["raw_replication_url"])}">[replication files]</a>')

        return f"""
<div class="paper">
  <div class="paper-title">
    <span class="paper-number">[{index}]</span>
    <a href="{primary_href}">{html.escape(paper['title'])}</a>
  </div>
  <div class="paper-meta">{render_paper_meta(paper)}</div>
  <div class="paper-links">{' '.join(assets)}</div>
  <div class="paper-abstract">
    <p>{html.escape(paper['abstract'])}</p>
  </div>
</div>
"""

    wip_html = "".join(
        f'<div class="paper"><div class="paper-title">{html.escape(item["title"])}</div><div class="paper-meta">with {html.escape(", ".join(item["coauthors"]))}</div></div>'
        for item in WORK_IN_PROGRESS
    )
    grants_html = "".join(
        f'<div class="paper"><div class="paper-title">{html.escape(item["title"])}</div><div class="paper-meta">{html.escape(item["display"])}</div><div class="paper-links"><a href="{item["url"]}">{html.escape(item["label"])}</a></div></div>'
        for item in GRANTS
    )
    return f"""
<h2 class="section-heading">Published Papers</h2>
{''.join(render_paper_listing(paper, index) for index, paper in enumerate(published, start=1))}

<h2 class="section-heading">Working Papers</h2>
{''.join(render_paper_listing(paper, index) for index, paper in enumerate(working, start=1))}

<h2 class="section-heading">Work in Progress</h2>
{wip_html}

<h2 class="section-heading">Grants</h2>
{grants_html}

<script>
  function toggleAbstract(el) {{
    var abstract = el.closest('.paper').querySelector('.paper-abstract');
    if (abstract) {{
      abstract.classList.toggle('open');
    }}
  }}
</script>
"""


def build_sitemap(urls: list[str]) -> None:
    entries = []
    for url in urls:
        loc = public_url(url)
        entries.append(
            f"  <url><loc>{html.escape(loc)}</loc><lastmod>{TODAY}</lastmod></url>"
        )
    sitemap = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(entries)
        + "\n</urlset>\n"
    )
    write_if_changed(ROOT / "sitemap.xml", sitemap)


def build_llms_files(hubs: list[dict], papers: list[dict], replications: list[dict]) -> None:
    llms = textwrap.dedent(
        f"""\
        # {SITE_NAME}

        > Personal research site for Ahmad Lashkaripour, Associate Professor of Economics at Indiana University.
        > Main topics: trade policy, tariffs, industrial policy, climate clubs, WTO, trade agreements, markups, scale economies, and quantitative trade models.

        ## Key entry points
        - Research hub: {public_url('Research.html')}
        - About page: {public_url('About.html')}
        - Teaching page: {public_url('Teaching.html')}

        ## Topic hubs
        """
    )
    llms += "\n".join(f"- {topic['title']}: {public_url('topics/' + topic['slug'] + '.html')}" for topic in hubs)
    llms += "\n"
    write_if_changed(ROOT / "llms.txt", llms)

    full = textwrap.dedent(
        f"""\
        # {SITE_NAME} full guide

        ## Research hub
        - {public_url('Research.html')}

        ## Topic hubs
        """
    )
    full += "\n".join(f"- {topic['title']}: {public_url('topics/' + topic['slug'] + '.html')}" for topic in hubs)
    full += "\n\n## Paper pages\n"
    full += "\n".join(
        f"- {paper['title']}: {public_url('papers/' + paper['slug'] + '.html')} | PDF: {public_url(paper['pdf_url'])} | Markdown: {public_url('sources/' + paper['slug'] + '.md')}"
        for paper in papers
    )
    full += "\n\n## Replication pages\n"
    full += "\n".join(
        f"- {item['title']}: {public_url('replication/' + item['slug'] + '.html')}"
        for item in replications
    )
    full += "\n"
    write_if_changed(ROOT / "llms-full.txt", full)


def build_robots() -> None:
    robots = textwrap.dedent(
        f"""\
        User-agent: GPTBot
        Disallow: /

        User-agent: Google-Extended
        Disallow: /

        User-agent: OAI-SearchBot
        Allow: /

        User-agent: ChatGPT-User
        Allow: /

        User-agent: *
        Disallow: /sources/
        Disallow: /paper-reader-data/
        Allow: /

        Sitemap: {public_url('sitemap.xml')}
        """
    )
    write_if_changed(ROOT / "robots.txt", robots)


def build_research_page_html(hubs: list[dict], queries: list[dict], papers: list[dict], topic_by_slug: dict) -> None:
    output_path = ROOT / "Research.html"
    body_html = render_research_hub(papers, hubs, queries, topic_by_slug)
    schemas = [
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Research",
            "description": "Research hub covering trade policy, industrial policy, climate clubs, WTO, markups, and quantitative trade models.",
            "url": public_url("Research.html"),
            "about": [
                "trade policy",
                "tariffs",
                "industrial policy",
                "climate clubs",
                "WTO",
                "markups",
                "scale economies",
            ],
        }
    ]
    render_page(
        output_path,
        meta_title="Research | Ahmad Lashkaripour",
        meta_description="Research hub for trade policy, tariffs, industrial policy, climate clubs, WTO, trade agreements, markups, and quantitative trade models.",
        body_html=body_html,
        schemas=schemas,
        breadcrumbs=[],
        social_image=RESEARCH_SOCIAL_IMAGE,
    )


def refresh_legacy_replication_redirects() -> None:
    redirects = {
        ROOT / "Replication_Page_Tariff_War.html": "replication/global-tariff-war-replication.html",
        ROOT / "Replication_Page_Discrete_Trade.html": "replication/discrete-trade-replication.html",
    }
    for path, target in redirects.items():
        target_url = public_url(target)
        content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url={html.escape(target_url, quote=True)}">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="{html.escape(target_url, quote=True)}">
  <title>Redirecting…</title>
</head>
<body>
  <p>Redirecting to <a href="{html.escape(target_url, quote=True)}">{html.escape(target_url)}</a>.</p>
</body>
</html>
"""
        write_if_changed(path, content)


def main() -> None:
    bootstrap_markdown_sources()

    papers = load_sources(PAPERS_CONTENT_DIR)
    refresh_paper_sources_with_opendataloader(papers)
    papers = load_sources(PAPERS_CONTENT_DIR)
    for paper in papers:
        paper.setdefault("updated_at", TODAY)
        paper["author_affiliations"] = extract_author_affiliations(paper)
    prepare_latex_paper_bodies(papers)
    papers.sort(key=lambda item: (0 if item["status"] == "published" else 1, item.get("sort_order", 999)))
    papers_by_slug = {paper["slug"]: paper for paper in papers}

    topics = load_sources(TOPICS_CONTENT_DIR)
    for topic in topics:
        topic.setdefault("updated_at", TODAY)
    topic_by_slug, hubs, queries = build_topic_indexes(topics)

    replications = load_sources(REPLICATION_CONTENT_DIR)
    for item in replications:
        item.setdefault("updated_at", TODAY)

    render_modernpapers_packages(papers)
    generated_urls = []
    generated_urls.extend(render_papers(papers, topic_by_slug))
    generated_urls.extend(render_topics(topics, papers_by_slug, topic_by_slug))
    generated_urls.extend(render_replication_pages(replications, papers_by_slug, topic_by_slug))
    build_research_page_html(hubs, queries, papers, topic_by_slug)
    refresh_legacy_replication_redirects()
    build_robots()
    build_llms_files(hubs, papers, replications)

    sitemap_urls = [rel for rel, _ in TOP_LEVEL_PAGES] + generated_urls
    build_sitemap(sitemap_urls)
    print(f"Generated {len(generated_urls)} inner pages, {len(papers)} paper pages, {len(topics)} topic/query pages, and {len(replications)} replication pages.")


if __name__ == "__main__":
    main()
