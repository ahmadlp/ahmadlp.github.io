---
title: Trade and Technology Adoption in Distorted Economies
slug: trade-and-technology-adoption-in-distorted-economies
status: published
date: '2024-07-01'
display_date: July 2024
venue: Journal of International Economics
authors:
- Farid Farrokhi
- Ahmad Lashkaripour
- Heitor S. Pellegrina
coauthors:
- Farid Farrokhi
- Heitor S. Pellegrina
abstract: This paper examines how labor market imperfections distort firm-level technology
  choices and alter the gains from trade in developing countries. Motivated by evidence
  that firms using modern technologies are disproportionately exposed to labor market
  distortions, we introduce firm-level technology choices and labor market distortions
  into an otherwise standard quantitative trade model. We then provide formulas for
  the welfare and labor productivity gains from trade liberalization, highlighting
  the role of distortions and technology choice. Our quantitative analysis reveals
  that labor market distortions provide a possible explanation for the inefficiently
  low levels of modern technology adoption in developing countries. Moreover, labor
  market distortions erode one-third of the potential labor productivity gains from
  trade liberalization among low-income countries.
summary: This paper studies how labor-market distortions change technology adoption
  and the gains from trade. It shows that distorted economies adopt modern technology
  too slowly and therefore miss a large share of trade-driven productivity gains.
keywords:
- technology adoption
- distorted economies
- trade liberalization
- development
- quantitative trade models
topics:
- quantitative-trade-models
- trade-policy
- industrial-policy
body_source: latex
latex_dir: latex-src/trade-and-technology-adoption-in-distorted-economies
latex_main: FLP_FinalVersion.tex
latex_engine: pdflatex
pdf_url: FLP_2023.pdf
markdown_url: sources/trade-and-technology-adoption-in-distorted-economies.md
canonical_url: https://alashkar.pages.iu.edu/papers/trade-and-technology-adoption-in-distorted-economies.html
updated_at: '2026-04-02'
sort_order: 4
published_url: https://doi.org/10.1016/j.jinteco.2024.103922
slides_url: null
working_paper_url: null
online_appendix_url: null
dashboard_url: null
replication_slug: null
raw_replication_url: null
---

## Machine-readable full text

This section was extracted with OpenDataLoader PDF from the hosted PDF so the full text is accessible in HTML and Markdown.

## Abstract

This paper examines how labor market imperfections distort firm-level technology choices and alter the gains from trade in developing countries. Motivated by evidence that firms using modern technologies are disproportionately exposed to labor market distortions, we introduce firm-level technology choices and labor market distortions into an otherwise standard quantitative trade model. We then provide formulas for the welfare and labor productivity gains from trade liberalization, highlighting the role of distortions and technology choice. Our quantitative analysis reveals that labor market distortions provide a possible explanation for the inefficiently low levels of modern technology adoption in developing countries. Moreover, labor market distortions erode one-third of the potential labor productivity gains from trade liberalization among low-income countries.

Keywords: Trade, Technology Adoption, Labor Market Distortions, Inequality, Developing Economies

∗We are grateful to participants in the conference in Honor of Jonathan Eaton at Penn State University, two referees and the Editor Cecile Gaubert for suggestions. We are also thankful to Jaedo Choi for his comments and Jose Asturias for sharing codes. We thank Bianka Kiedrowska for excellent research assistance. Email: ffarrokh@purdue.edu, alashkar@indiana.edu, and hpelleg3@nd.edu.

## 1 Introduction

In the past four decades, developing countries have become significantly more integrated into global supply chains. This process has spurred the emergence of modern manufacturing firms operating with advanced technologies that make intensive use of internationally-sourced intermediate inputs.

Yet, it remains a matter of debate whether the integration of developing countries into the world trade system has delivered the expected dividends. The critics of this process emphasize two apparent anomalies. First, the rate of modern technology adoption in many low-income countries remains unusually low despite recent episodes of trade liberalization (Hsieh and Klenow, 2014; Buera, Hopenhayn, Shin, and Trachter, 2021). Second, the adoption of modern technologies in some developing countries has coincided with a stagnation of aggregate labor productivity (Diao, Ellis, McMillan, and Rodrik, 2021).

The existing literature provides a few possible explanations for these so-called anomalies. The big-push theories of economic development identify fixed production costs and inadequate market size as the main barriers to modern technology adoption in low-income countries (Murphy, Shleifer, and Vishny, 1989). Another body of literature on (in)appropriate technologies attributes the above patterns to a possible mismatch between modern technologies and the resource endowment of low-income countries (Basu and Weil, 1998; Acemoglu and Zilibotti, 2001).

Appealing to economic theory and detailed firm-level data, we argue that labor market distortions provide another explanation for these two anomalies. We, specifically, introduce two key ingredients into an otherwise standard quantitative trade model: technology adoption and labor market distortions. We demonstrate analytically how these two ingredients interact in open economies, shaping aggregate labor productivity and welfare. Moreover, we quantify our model and show that labor market distortions lead to inefficiently low adoption of modern technologies and curtail the impacts of trade-led modern manufacturing growth on aggregate labor productivity in low-income countries.

The model we develop is a multi-country, multi-industry general equilibrium framework in which firms self-select into traditional or modern technology types in the presence of labor market distortions. Each country, in addition to its labor force, is endowed with a continuum of heterogenous firms, each corresponding to a unit of managerial capital. Firms in each industry select the technology type that maximizes their profits. Technologies differ in their total factor productivity and the intensity by which they use managerial capital, labor, and intermediate inputs. In the empirically relevant case, modern technologies are labor-saving and intermediate-input intensive. Consequently, a reduction in trade barriers that provides

cheaper access to foreign intermediate inputs raises relative returns to modern technologies. This development incentivizes the adoption of modern technologies, the rate of which is regulated by a "technology elasticity," `a la Farrokhi and Pellegrina (2023). Labor market distortions, meanwhile, vary across countries and across firm types within each country. We model these distortions as labor market wedges that create a gap between the cost of labor to firms and the actual payment to workers.

We begin our theoretical analysis by deriving three formulas to dissect the mechanisms that shape welfare (defined as aggregate real consumption). First, we show that (in a stylized closed economy version of our model) the welfare cost of misallocation depends on the cross-technology dispersion in labor wedges. Second, we decompose the first-order welfare effects of trade liberalization (i.e., trade cost reductions) into three components: (i) the wellknown ACR component (Arkolakis, Costinot, and Rodriguez-Clare, 2012), (ii) the change to allocative efficiency, and (iii) residual terms of trade and technology selection effects.1 Third, we derive a formula for the welfare gains from trade relative to autarky.

Additionally, we show that aggregate labor productivity (defined as the economy-wide gross output per worker) can be expressed as the national-level real wage adjusted for trade openness and labor allocation across industries and technology types. We then derive a formula that characterizes the first-order impact of trade liberalization on aggregate labor productivity. This formula incorporates similar mechanisms that shape welfare but, importantly, highlights the differential effects of trade on aggregate labor productivity and welfare.

Having established these analytical results, we take our model to data on 99 countries (plus a rest of the world aggregate). To this end, we use country-level input-output data from the Global Trade Analysis Project (GTAP). We combine these country-level data with technology-type-level statistics that we construct using firm-level data from the World Bank Enterprise Survey (hereafter, WBES), which is available for a large set of countries at different levels of development. These statistics include estimated labor intensities, labor market wedges, and the share of firms in modern and traditional technologies across countries. We simulate our model using the exact hat algebra method, sidestepping the need to calibrate productivity shifters and trade costs.

We start our quantitative analysis by decomposing the welfare impacts of trade liberalization for each economy. We find that the non-ACR channels—i.e., improvements to allocative efficiency and residual terms of trade—make a positive contribution across all country groups, raising the gains from trade liberalization in our framework relative to ACR. The contribu-

1These residual terms reflect our model's accommodation of managerial capital (a quasi-fixed input) and endogenous technology choice, both of which are absent in the baseline ACR framework. Our welfare accounting formulas are related to Baqaee and Farhi (2019) and Atkin and Donaldson (2021), but are structured differently to emphasize our connection to the canonical ACR formula.

tion from these non-ACR channels is about two times larger among low-income countries relative to high-income counterparts, with the allocative efficiency channel being the major contributor. Intuitively, trade liberalization encourages modern technology adoption and directs factors of production toward modern technologies, both of which improve allocative efficiency, since modern firms are exposed to larger distortions. These allocative efficiency gains are more pronounced among low-income countries, which suffer from initially-higher levels of misallocation.

Lastly, we tackle the primary question that has motivated our research: How do labor market distortions modify the labor productivity gains from trade liberalization among developing countries? To provide an answer, we design an experiment to evaluate how labor market distortions, and their interaction with technology adoption, alter the aggregate labor productivity gains from trade. We consider a twenty percent reduction in trade costs facing low-income countries and compare the impacts of this trade cost shock in economies with and without labor market distortions. Our results reveal that the interplay between trade liberalization and labor market distortions is crucial: Among low-income countries, labor market distortions erode (on average) one-third of the potential labor productivity gains from trade liberalization. Intuitively, trade liberalization raises aggregate labor productivity by improving access to imported intermediate inputs and directing resources towards modern technologies that rely more intensively on intermediate inputs. In distorted economies, however, the productivity gains from trade liberalization are hampered by the fact that modern technologies are disproportionately-exposed to labor market wedges.2

In what follows, we first outline our contribution to the literature. Section 2 then provides motivating evidence for our framework, using previously-documented facts from the literature and our own estimates of labor distortions based on the WBES. Section 3 lays out our theoretical model. Section 4 presents analytical results from the model. Section 5 describes the calibration of the model. Section 6 presents our quantitative results. Section 7 discusses alternative calibrations approaches and the robustness of our baseline model. Section 8 concludes.

Related Literature. This paper contributes to research evaluating how misallocation interacts with international trade, including studies on the role of firm-level distortions (Bai, Jin, and Lu, 2019; Scottini, 2018; Ding, Lashkaripour, and Lugovskyy, 2023), the impact

2We notice that labor market distortions can amplify the welfare gains from trade (i.e., aggregate real consumption), but still attenuate the aggregate labor productivity gains from trade (i.e., gross output per worker). The two outcomes can diverge in open economies that utilize intermediate inputs, depending on the underlying changes to the terms of trade and aggregate value added shares. We elaborate further on this point in Section 3.4.

of distortions on the world's input-output structure (Caliendo, Parro, and Tsyvinski, 2017), the decomposition of the welfare gains from trade shocks (Baqaee and Farhi, 2019), and the interactions of distortions with trade policy (Lashkaripour and Lugovskyy, 2023; Bartelme, Costinot, Donaldson, and Rodriguez-Clare, 2019)—see Atkin and Donaldson (2021) and Atkin and Khandelwal (2020) for reviews of recent research.3 Relative to this literature, we examine the effects of factor market distortions on firms' technology choice, where technologies differ in their factor intensity. We find that labor market distortions can substantially reduce the productivity gains from trade liberalization in low-income countries.

By studying the role of technology choices, our paper speaks to research on technology adoption. Closer to our work, this front of research has examined the interactions between trade and technology upgrading (Yeaple, 2005; Bustos, 2011; Davidson, Matusz, and Shevchenko, 2008), finance and misallocation (Midrigan and Xu, 2014), economic shocks and capital intensity (Oberfield, 2013b), and technology adoption in developing economics (Verhoogen, 2021).4 To the best of our knowledge, we are the first to study technology choices in open economies with distorted labor markets. In our analysis, labor market distortions lead to distorted technology choices—specifically, firms' adoption of modern technologies is low relative to an efficient economy.

More broadly, this paper contributes to a large literature that formulates quantitative equilibrium models to evaluate the welfare gains from trade, following the seminal work of Eaton and Kortum (2002) and the research reviewed by Costinot and Rodrı ́guez-Clare (2014). In the past two decades, this literature has developed an abundance of new tools and significantly expanded its scope of analysis, covering topics such as workers' mobility (Caliendo, Dvorkin, and Parro, 2019; Artu ̧c, Chaudhuri, and McLaren, 2010), input-output structures of trade (Caliendo, Parro, and Tsyvinski, 2017), agricultural trade (Sotelo, 2020; Farrokhi and Pellegrina, 2023), scale economies (Kucheryavyy, Lyn, and Rodrı ́guez-Clare, 2023; Lashkaripour and Lugovskyy, 2023; Farrokhi and Soderbery, 2023; Bartelme, Costinot, Donaldson, and Rodriguez-Clare, 2019), non-homothetic preferences (Fieler, 2011), multinational firms (Ramondo and Rodrı ́guez-Clare, 2013), among many others. Our contribution to this broader literature is to endogenize technology choices in manufacturing and examine its interactions with domestic market distortions.

3See Hsieh and Klenow (2009) for seminal work on the impact of misallocation on aggregate output. 4There is also a rich literature analyzing the effects of trade on firms' technology choices in developing economies, see De Loecker, Goldberg, Khandelwal, and Pavcnik (2016) and Goldberg, Khandelwal, Pavcnik, and Topalova (2010) for India, Bustos (2011) for Argentina, Medina (2020) for Peru, Pavcnik (2017) and Oberfield (2013b) for Chile, and Fieler, Eslava, and Xu (2018) for Colombia. We complement these studies by examining the interaction between technology adoption and technology-specific misallocation.

## 2 Motivating Evidence

This section draws upon existing literature to motivate the building blocks of our model. We examine the interplay between technology adoption, firm size, and distortions in previous studies. Additionally, we present preliminary data patterns from the WBES data that align with the motivating factors we document, and which will later inform the calibration of our model.

Firm Size, Technology and Distortions. Our theoretical framework builds on a well-established

finding in the literature: larger firms tend to have higher capital requirements and be more intensive in intermediate inputs. This observation has motivated the formulation of several theoretical frameworks to study the interactions between technology and input distortions, including Ciccone (2002) and Acemoglu, Antra`s, and Helpman (2007). Notably, using firmlevel data, Midrigan and Xu (2014), Lagakos (2016) and Buera, Hopenhayn, Shin, and Trachter (2021) have quantified models in which larger, modern firms tend to be more intermediate input-intensive (or more capital-intensive) compared to smaller, traditional firms. In particular, a growing number of quantitative papers find that input distortions can have substantial aggregate implications to productivity.5

Labor Market Distortions. Our framework will incorporate the impact of distortionary regulations and taxes on labor, which are prevalent in many developing countries. Atkin and Khandelwal (2020) and Atkin and Donaldson (2021) provide a comprehensive review of the literature on trade and distortions. Studies such as Hopenhayn and Rogerson (1993), Besley and Burgess (2004), and Haltiwanger, Scarpetta, and Schweiger (2014) have shown large aggregate productivity effects of laws that facilitate the relocation of firms within the economy. Importantly, many of these regulations disproportionately burden larger firms, as evidenced from research on India by Bertrand, Hsieh, and Tsivanidis (2021) and on Brazil by Ulyssea (2018). To avoid these regulations and taxes, firms remain small and operate in the informal sector. These regulations have been shown to have significant negative effects on the economy (Meghir, Narita, and Robin, 2015; Ulyssea, 2018; Dix-Carneiro, Goldberg, Meghir, and Ulyssea, 2021). In particular, Ulyssea (2018) identifies empirical regularities linking firm size and formality, and finds that larger firms tend to employ a smaller proportion of informal workers.6 In line with these findings from the literature, Appendix Table A.2 (column 3)

- 5See, for example, Lanteri, Medina, and Tan (2023), Morlacco (2019), and Zavala (2022). These papers have focused on different types of input distortions: Lanteri, Medina, and Tan (2023) focuses on capital, Morlacco (2019) on intermediate inputs, and Zavala (2022) on farmers' output as an input to traders.
- 6Additionally, Hsieh and Klenow (2014) show systematic size differences between firms in formal and informal sectors for India and Mexico.


##### Figure 1: Relationship between Labor Wedges and GDP per capita in the WBES by Technology Class

Notes: This figure shows the distribution of labor wedges across countries at different levels of economic development. Modern and traditional firms are classified based on their size. Section 6 describes the procedure that we use to recover such labor wedges.

shows that larger firms tend to face larger labor market regulations in the WBES data, particularly in less-developed countries.

Labor Market Distortions and Firm Size in the WBES. To close this section, we provide a first look at the firm-level data from the WBES and show how it speaks to the abovementioned empirical patterns from the literature. Figure 1 reports our estimates of the labor wedge for modern and traditional firms (classified based on their size) across countries in different levels of development—later, in Section 5, we describe our classification and estimation procedure. Labor distortions are generally higher in less developed countries, and particularly so for modern firms.

Motivated by these aforementioned patterns, our model introduces the notion that labor wedges can vary by a country's level of economic development and by the type of technology—traditional (labor-intensive) versus modern (intermediate-input-intensive). These differences, in turn, affect firms' technology choices, and, consequently, the aggregate exposure of an economy to labor market distortions will depend on the equilibrium mix of traditional and modern firms.

## 3 The Model

Environment. The global economy consists of multiple countries indexed by i, j ∈ I and multiple industries indexed by s,k ∈ S. Production in country i−industry s can take place under two types of technology indexed by t ∈ T ≡{0,1}; namely, "traditional" (t = 0) and "modern" (t = 1). Country i is endowed with L ̄i units of labor and is populated by a fixed, exogenously given continuum of firms in each industry, indexed by ω ∈ Ωi,s. Each firm is endowed by one unit of managerial capital. Markets are perfectly competitive.

Labor Market Wedges. Each economy is subject to wedges in the labor market τi,stL , which can vary not only across countries and industries, but also between modern and traditional technologies. These wedges denote the difference between the amount a firm pays to employ a worker and the amount the worker receives.

- 3.1 Production The production function for firm ω ∈ Ωi,s under technology t is given by:


Ki,st(ω) γstZ

Qi,st(ω) = Ai,st Zi,st(ω)

γstZ Li,st(ω) γstL

γstL Mi,kt(ω) γstM

γstM

,

where Ai,st is total factor productivity under technology t, Ki,st (ω) is managerial capital, Zi,st(ω) is the idiosyncratic managerial productivity, Li,st(ω) is labor employment, and Mi,st(ω) is a composite intermediate input. Specifically, Mi,st(ω) = s ∈S Mi,ss t(ω)φi,ss t, where Mi,ss t(ω) is the bundle of intermediate goods that industry s purchases from industry s (that itself aggregates over inputs sourced from various origin countries), and φi,ss denotes the share corresponding to origin industry s and destination industry s, with s φi,ss = 1. Factor shares are given by γstZ,γstL,and γstM and satisfy γstZ + γstL + γstM = 1. In particular, γstZ controls the share of payments to the managerial capital, Ki,st(ω), that corresponds to the share of firm's profits, akin to Lucas (1978).7

Firms' Choices of Technology. Traditional (t = 0) and modern technologies (t = 1) differ in their input intensity parameters, γ0 ≡ {γsZ0,γsL0,γsM0}s versus γ1 ≡ {γsZ1,γsL1,γsM1}s, and total factor productivity levels, Ai,s0 versus Ai,s1. Each firm ω ∈ Ωi,s draws a vector of managerial productivity levels, [Zi,s0(ω),Zi,s1(ω)], and chooses a technology type. Per cost minimization, the marginal cost of production for a firm ω ∈ Ωi,s using technology t is:

7Our specification is equivalent to one in which a "firm" corresponds to a manager who employs labor and intermediate inputs under a decreasing-returns-to-scale production technology. Under this terminology, returns to the managerial capital should be interpreted as the firm's profits.

1 Ai,st

ci,st(ω) ≡

ri,st(ω) Zi,st(ω)

γstZ

τi,stL wi

γstL

mi,st

γstM

where ri,st (ω) is the return to managerial capital, τi,stL wi the wage rate in country i inclusive of labor market wedges, and mi,st the price of the intermediate input bundle. All firms within a country-industry, regardless of their technology type, supply the same product. Let pi,s denote the competitive price supplied by country i−industry s. Perfect competition ensures that pi,s = ci,st(ω), which pins down firm ω's profits (as the return to its managerial capital) when using technology t:

ri,st(ω) = Zi,st(ω) × ai,stpi,shi,st/τ`i,stL

The firm's profits, ri,st(ω), depends on output price, pi,s, the technology-specific impact from input prices,

−γstL/γstZ mi,st pi,s

−γstM/γstZ

wi pi,s

hi,st ≡

,

L

st/γstZ, the impact of technology-specific productivity, ai,st ≡ (Ai,st)1/γ

the effective labor market wedge, τ`i,stL ≡ τi,stL γ

Z st

, and the firm-level productivity draw, Zi,st(ω).8

Firm ω faces a discrete choice problem wherein it chooses technology t ∈ T that maximizes its profits, ri,st (ω). Namely,

max Zi,st(ω) × ai,stpi,shi,st/τ`i,stL , for t ∈ T .

The vector of firm-level productivities, Zi,st(ω) ≡ [Zi,st(ω) for t ∈ T], is drawn independently by firms from a Fr ́echet distribution, Pr(Zi,st(ω) ≤ zi,st) = exp −φ ̄ t∈T zi,st−θ , where φ ̄ ≡ [Γ(1 − 1/θ)]−θ is a normalization which ensures that E[Zi,st(ω)] = 1, with θ > 1 governing the dispersion in productivity draws. Under this distributional assumption, the share of firms that select technology t in country i−industry s, denoted by αi,st, is:

αi,st =

ai,sthi,st/τ`i,stL Hi,s

θ

, with Hi,s ≡

t ∈T

ai,st hi,st /τ`i,stL

θ

1/θ

; (1)

where Hi,s is the industry-level average profits (relative to the output price). Intuitively, a

8To provide intuition for how these relative input prices matter, consider the empirically-relevant case in which the traditional technology is intensive in the use of labor, and the modern technology is intensive in the use of intermediate inputs. In that case, within each industry the return to the traditional technology falls when the relative wage (wi/pi,s) increases, and the return to the modern technology rises if the relative intermediate input price (mi,st/pi,s) decreases.

greater share of firms select technology t if it exhibits (i) a higher average productivity, ai,st; (ii) more favorable impact from wages and intermediate input prices, as summarized by hi,st; and, (iii) lower exposure to labor market distortions, τ`i,stL . The extent of these relationships is controlled by parameter θ, which we call the "technology elasticity."

Industry Aggregates. We can now specify aggregate sales in country i–industry s given firms' choices of technology. Let Ri,st (ω) ≡ pi,sQi,st (ω) be the sales of firm ω ∈ Ωi,st where Ωi,st is the set of firms in country i−industry s that choose technology t; and by aggregation, Ri,st = E[Ri,st(ω) | ω ∈ Ωi,st] × |Ωi,s|. Recall that the firm's profits is ri,st (ω) = Zi,st(ω) × ai,stpi,shi,st/τ`i,stL . Since ri,st(ω) is a fraction γstZ of firm ω's sales, i.e., Ri,st (ω) =

γstZ −1 ri,st (ω), the value of sales in country i−industry s−technology t, Ri,st, equals:

Ri,st = αi,st × |Ωi,s| × E[Zi,st (ω) | ω ∈ Ωis,t] × γstZ −1 ai,stpi,shi,st/τ`i,stL .

Since the expected value of productivity draws conditional on firms' selections equals

1 θ

E[Zi,st (ω) | ω ∈ Ωis,t] = α−

i,st,

by normalizing |Ωi,s| = 1 (without of loss of generality), we can derive Ri,st, as:

Ri,st = γstZ −1 ai,stpi,shi,st/τ`i,stL (αi,st)

θ−1

θ (2)

Using Equation (2), the industry-level sales, Ri,s = t∈T Ri,st, can be expressed as:

Ri,s = pi,sΓZi,sHi,s, with ΓZi,s ≡

αi,st γstZ −1

t∈T

−1

; (3)

where αi,st and Hi,s are given by Equation (1).

### 3.2 Trade and Consumption

The representative consumer in each country j receives utility Cj according to a two-tier preference system:

Cj =

(Cj,s)β

j,s

s∈S

, Cj,s =

σs−1 σs

(bij,s)1/σs (Cij,s)

i∈I

σs σs−1

In the upper tier, the final consumption, Cj, is a Cobb-Douglas aggregation over industrylevel bundles, {Cj,s}s∈S, with constant expenditure shares βj,s. In the lower tier, Cj,s is a CES aggregation over within-industry varieties that are differentiated by their origin country, {Cij,s}i∈I, where bij,s is a demand shifter and σs is the elasticity of substitution between varieties within industry s.

Country i's variety of industry s can be delivered to country j at price dij,spi,s, where pi,s is the producer price and dij,s is the iceberg trade costs.9 We assume that final consumption and intermediate input demand are characterized by the same CES function, as given by Cj,s. Accordingly, country j's share of expenditure on goods originating from country i within industry s is:

bij,s (dij,spi,s)1−σs (Pj,s)1−σs

bij,s (dij,spi,s)1−σs

, with Pj,s =

πij,s =

i∈I

where Pj,s denotes the CES price index of industry s in location j.

1 1−σs

; (4)

### 3.3 General Equilibrium

Market Clearing and Equilibrium. The labor market in each country i clears by ensuring that:

1 τi,st

γstLRi,st. (5)

wiLi =

s∈S t∈T

For each dollar that is paid to employ workers, only a fraction 1/τi,st is the payment to workers, and the remainder, (τi,st − 1)/τi,st, is the payment associated with labor wedges. Hence, all else equal, higher labor wedges lower the demand for workers. In turn, labor wedge payments amount to:

Ti =

s∈S t∈T

τi,st − 1 τi,st

γstLRi,st. (6)

The labor wedge represents a range of costs that firms incur due to labor market distortions, e.g., bribery, theft, bureaucratic berries, labor market regulations, and search frictions. Our model takes τi,st as a reduced-form representation of these distortions without taking a stance on their specific nature.10

- 9As is standard in the literature, we assume that dii,s = 1 and dij ,sdj j,s > dij,s.
- 10To simplify our analysis and focus on the role of technology choices and distortions, we adopt the more common approach in which wedges are exogenous. We leave an analysis of endogenous wedges to future research.


The goods market for each country i−industry s clears by ensuring that:

Ri,s =

πij,sEj,s, (7)

j∈I

where country i's gross expenditure on industry s, Ei,s, is the sum of final good and intermediate input expenditure:

Ei,s=βi,sYi+

s ∈S t∈T

φi,s stγsMtRi,s t . (8)

Lastly, Yi denotes national income or GDP, and is given by

Yi = wiLi + Ti + Πi

= s∈S t∈T 1 − γi,stM Ri,st

(9)

where Πi ≡ s∈S t∈T γstZRi,st is the aggregate profits. The above equations ensure that trade is balanced and the national expenditure net of labor-wedge payments, Ei −Ti, equals the sum of factor rewards (labor wages and firms' profits).

In what follows, we refer to wiLi/Pi as workers' real wages and we call real national income,

Yi Pi

Wi ≡

(10) as country i's welfare, which in turn corresponds to aggregate real consumption.

### 3.4 Aggregate Labor Productivity (ALP)

We define aggregate labor productivity (ALP) in a country-industry pair as output per worker there—later we show quantitative results for alternative measures of ALP. Appendix

- A.2 shows that:


Qi,s Li,s

ALPi,s ≡

=

t

Li,st Li,s ×

τi,stL γstL

wi pi,s

. (11)

To see the intuition behind Equation (11), consider the case of one-sector efficient economy in which labor is the only factor of production.11 In that special case, the aggregate labor productivity collapses to the ratio of wage to producer-price (wi/pi). In the general case, however, labor market distortions and non-labor factors enter the equation through τi,stL and γstL. In addition, one needs to take a stance on how to aggregate industry-level quantities

11This special case corresponds to: Li,st ≡ Li,t, Li,s ≡ Li, pi,s ≡ pi, τi,st ≡ τi,t = 1, and γstL ≡ γtL = 1.

##### to a national index of labor productivity. Under the assumption that industry-level output quantities are aggregated using the final consumption aggregator, i.e., Qi = s (Qi,s)β

i,s

, the national-level ALP equals:



βi,s , (12)

τi,stL γi,stL

wi Pi ×

Qi Li

βi,s σs−1

 t

×

i,st ×

ALPi ≡

=

(πii,s)

s

s

where i,st ≡ Li,st/Li is the share of workers in industry s−technology t. In words, aggregate labor productivity, ALPi, equals real wage (wi/Pi) adjusted for: (i) trade openness captured by non-unity domestic expenditure shares (second bracket), and (ii) allocation of workers across industries and technology types (third bracket). Intuitively, trade openness alters the relationship between the aggregate produce price ( s pβi,si,s) and the final consumer price (Pi = s Pi,sβi,s); and, the labor allocation governs the contribution from each industrytechnology pair to the aggregate labor productivity.

ALP vs. Welfare. Our objective is to explore the effects of trade on aggregate labor productivity ALPi given by Equation (12) and welfare Wi by Equation (10). Linking these two measures of economic performance can, thus, provide better insight into subsequent results. As shown in Appendix A.2, ALPi relates to welfare per worker (Wi/Li) according to:

βi,s

yi,s 1 − γ ̄i,sM

Wi Li Welfare per worker

βi,s σs−1

×

×

(πii,s)

##### =

, (13)

ALPi

s

s

Output per worker

Inverse Terms-of-Trade

Inverse value added share

where yi,s ≡ Yi,s/Yi is the value added share of industry s in country i and γ ̄i,sM is the average cost share of intermediate inputs. Two channels of effect are responsible for the difference between aggregate labor productivity and welfare. To see them most clearly, consider a single-industry version of our setup with one technology type, where the above formula simplifies to:

Wi Li

1 1 − γ ̄iM ×

1 σ−1

ii ×

APLi = π

.

In a closed economy without intermediate input use, aggregate labor productivity, ALPi, aligns with welfare per worker, Wi/Li. Otherwise, these metrics may diverge based on the terms of trade (represented by π

1 1−σ

ii )12 and the share of value added in gross output (1−γ ̄iM). From this equation, it is evident that welfare and aggregate labor productivity may react differently to an external event like trade liberalization in our model, depending on the

1 1−σ

12Note that π

###### ii = pi/Pi captures the terms of trade as the ratio of export price, governed by producer price pi, to import price index, Pi.

underlying changes to the terms of trade and the aggregate value added share.

### 3.5 Counterfactual Analysis

Our framework is adept to study the welfare impacts of changes in trade costs and labor market wedges.13 Specifically, the sufficient statistics for counterfactual analyses in our model can be summarized by B ≡ {BParam,BData} where BParam ≡ {σ,θ,γstL,γstM,γstZ,τi,stL ,φi,sk,βi,s} and BData ≡ {πij,s,αi,st,wiLi,Ri,st,Ei,s,Yi}. Given B, for any set of exogenous shocks to trade costs and labor wedges P ≡ {dˆij,s,τˆi,stL }, Appendix B describes our model equilibrium in changes to trade, employment and technology shares, aggregate sales and expenditures, and prices and wages, E ≡ {πˆij,s, ˆi,st, αˆi,st, Rˆi,st ,Eˆi,s ,Yˆi ,Pˆi,s ,pˆi,s ,wˆi}. Moreover, Appendix

- D derives the change to welfare, real wage, and aggregate labor productivity as a function of the above sufficient statistics and general equilibrium changes to domestic expenditure shares (ˆπii,s), employment shares (ˆi,st), and technology shares (ˆαi,st).


## 4 Misallocation and the Gains from Trade

This section explores the impacts of labor market distortions on the gains from trade, emphasizing the role of technology adoption. To set the stage for an open-economy analysis, we first characterize the cost of misallocation in closed economy. We then return to our general open economy setup to characterize the effects of trade liberalization on two aggregate outcomes: welfare and aggregate labor productivity. We draw connections to the canonical ACR framework, discussing the role of labor market distortions and technology adoption.

Employment and Output Shares. In what follows, we define additional share variables. We use ρi,st to denote the share of technology t from total output (sales) of country i–industry s; ri,s to denote the share of industry s from output in country i; and i,st to denote the share of labor employed by industry s–technology t in country i.14 Stated formally,

Ri,st s t Ri,s t

Li,st Li

Ri,st t Ri,st

; ri,s = t

; i,st ≡

ρi,st ≡

(14)

- 13In this section, we adopt the hat notation: For any generic variable x in the baseline equilibrium, let x be its corresponding value in the counterfactual equilibrium, and xˆ ≡ x /x denote its change from the baseline to the counterfactual equilibrium.
- 14See Appendix A.1 for how ρi,st and i,st can be inferred from firm-technology shares, αi,st.


### 4.1 Misallocation and Inefficient Technology Adoption

In our model, labor market wedges (τi,stL ) create two sources of misallocation. First, given technology choices, employment shares are inefficiently low in firms using high-τL technologies. Second, labor market wedges lead to inefficiently low adoption of high-τL technologies. Since empirically modern technologies are subject to higher labor market wedges (Section 1), misallocation will manifest as inefficiently low adoption of modern technologies as well as low labor employment by modern firms.

To communicate this point transparently, this section provides an exact formula for the cost of misallocation in a closed economy, which isolates the cost of misallocation from terms of trade effects. In addition, we assume that firms employ only primary factors of production (i.e., no intermediate inputs) (γstM = 0), that factor intensities are symmetric across technologies (γ0 = γ1), and that the economy has a single-sector—similar formulas apply to the multi-sector case (Appendix C). In this section, we therefore drop the index for sectors.

We define the welfare cost of misallocation, Di, as the (log) welfare distance to the Pareto-efficient frontier. We, moreover, define

τi,tL ≡ τi,tL/E τi,tL

as the normalized wedge associated with technology t, with E τi,tL ≡ t i,tτi,tL denoting the employment-weighted average wedge in country i. As shown in Appendix C, the welfare cost of misallocation is

γ ̄L

γ ̄iZ θ

i γ ̄Z i

θ (15)

log E τ ̃i,tL 1+

Di =

where γ ̄iLand γ ̄iZ denote aggregate labor and managerial capital intensity in economy i, and

- E [.] denotes the employment-weighted mean. Equation (15) reveals that misallocation occurs only if labor market wedges exhibit dis-


persion from the mean. In particular, a common wedge τi,tL = τiL that applies equally to all technologies will amount to τ ̃i,tL = 1 and zero misallocation. To further underscore the role of technology adoption, we can examine the second-order approximation of Di for small departures from a common wedge:

Di ≈

γ ̄iL 2

γ ̄iL γ ̄iZ

θ Var τi,tL , (16)

1 +

where Var τi,tL is the variance of normalized labor wedges or the coefficient of variation of actual wedges. There are two takeaways from the above approximation. First, it reveals

that dispersion from the mean (rather than the mean level of wedges) determines the welfare cost of misallocation—This observation is crucial, considering our earlier finding that labor wedges exhibit greater dispersion across traditional and modern technologies in lowincome countries. Second, it highlights the misallocation-magnifying effects of technology adoption. Misallocation without endogenous technology adoption would simply amount to

γ ̄iL

2 Var τi,tL . However, when firms' endogenous technology choices are distorted by labor wedges, misallocation is amplified by an additional amount γ ̄

L i

L i

2 × γ ̄

γ ̄iZ θVar τi,tL . In other words, misallocation occurs because, first, there is insufficient adoption of modern, high-τL technologies and, second, there is insufficient labor employment by firms that adopt modern, high-τL technologies.

### 4.2 Impact of Trade on Welfare

This section presents two sets of formulas for the welfare effects of trade in our framework, regarding: (i) welfare decomposition in response to a piecemeal trade liberalization and (ii) welfare gains of moving economies from autarky to their observed equilibrium. Appendix D presents derivations for this section.

#### 4.2.1 Decomposing the Ex-Ante Welfare Gains from Piecemeal Trade Liberalization

In our framework, trade liberalization influences technology choices and the allocation of primary inputs across firm types, which in turn affects the degree of misallocation. Here, we elucidate, analytically, how these mechanisms shape welfare, connecting our results to the canonical ACR formula.

We start by presenting a decomposition of trade-driven welfare effects. For a crisp decom-

position, we consider a small shock to trade costs, {dlndij,s}i,j,s, which delivers the following change in log welfare:

dlnWi =

ACR

1 1 − σk

βi,sφi,sk

dlnπii,k +

s,k

∆(Allocative Efficiency)

γ ̄iL 1 − γ ̄iM

Cov τi,stL ,dln i,st (17)

+

+

γktZρi,kt Λi,k −

βi,sφi,sk dln i,kt

s

k,t

Residual ToT via Int'l Profit Transfers

θ − 1 θ

γktZρi,kt

dln(αi,kt)

βi,sφi,sk

s

k,t

Residual Technology Selection Effect

In the above equation, φi,sk corresponds to entry (s,k) of country i's Leontief inverse matrix and Λi,s ≡ pi,sQi,s/Yi denotes the Domar weight of industry s in country i.

The first term (on the right-hand side) corresponds to the ACR formula for the gains from final good and intermediate input trade.

The second term represents the change in allocative efficiency and is positive if trade liberalization directs workers toward modern (high–τ) technologies and industries—i.e., if Cov τi,stL ,dln i,st > 0. This term becomes zero when the economy is efficient (i.e., when τi,stL = 1 for all s and t). Otherwise, trade liberalization can increase allocative efficiency by reallocating workers toward modern firms, echoing our previous assertion that (absent trade) modern technologies exhibit inefficiently low employment shares. Moreover, trade liberalizationalso reallocates workers toward industries where a country has a comparative advantage. If the comparative-advantage industries are less-exposed to labor market distortions, trade may reduce allocative efficiency through inter-industry reallocation.15

The third and fourth terms encompass residual terms of trade effects via international profit transfers (not accounted by the ACR term) and residual technology selection effects (not accounted by the ACR or Allocative Efficiency terms). The residual terms of trade (ToT) effects reflect the change in firms' profits, a fraction of which is paid for by foreign consumers. To see this, note that if country i was operating as a closed economy, marketclearing identities would imply Λi,k − s βi,sφi,sk = 0; indicating that any possible welfare gains from higher profits are neutralized by a proportional increase in the domestic price index. In the open economy case, by contrast, Λi,k − s βi,kφi,sk = 0, reflecting decoupling between domestic production and consumption. As such, a change to firms' profits can lead to improvements in the terms of trade, depending on what fraction of the profits are paid for by foreign versus domestic consumers. The term γktZρi,kt × (Λi,k − s βi,sφi,sk)dln i,kt represents these terms-of-trade effects.16 The residual technology selection effects capture

- 15In our quantitative analyses, we mainly focus on the impact of trade openness through technology choices. For that reason and also due to data limitations, our estimation assumes that labor market distortions vary only between technology types and are common for a technology type across industries.
- 16Generally, the Residual ToT Effects emerge due to the potential discrepancy between the vectors of consumption shares and production shares. In addition to the case of closed economy, this discrepancy disappears in the case of a one-sector economy, where the welfare decomposition formula collapses to:


dlnWi =

∆(Allocative Efficiency) γ ̄iL 1 − γ ̄iM

ACR

1 1 − γ ̄M

1 1 − σ

Cov τi,tL ,dln i,t

dlnπii +

θ − 1 θ

1 1 − γ ̄M t

ρi,tγtZ

dln(αi,t)

###### .

+

Residual Technology Selection Effects

how the selection of firms into the different technology types, reflected by dln(αi,kt), influences aggregate managerial productivity. When the output of a technology type increases, infra-marginal managers that select that technology are less productive than those who already selected it. In one extreme with θ → ∞, this margin of adjustment comes with no dampening effect on aggregate profits corresponding to the case where managerial capital in each industry is perfectly mobile between technology types. In the other extreme with θ → 1, the entire term collapses to zero, corresponding to the case where the production technology at the aggregate level of industries uses managerial capital as a specific factor.

#### 4.2.2 Ex-Post Welfare Gains from Trade

We produce sufficient statistics formula for the ex post gains from trade, defined as the change to welfare from moving a country from a counterfactual autarky state to its baseline (observed) equilibrium. For clarity, we present our formula for a single-industry version of our model. Appendix D.3 shows that the gains from trade in this case can be expressed as:

1 σ−1

GTi = 1 − ∆i × π

ii ,

where πii denotes the domestic expenditure share, and the country-specific multiplier, ∆i, solves the following equation:

  αi,t

θ

 Γˆi,t π

 

1 θ

γM

t γZ

1−γM

1 σ−1

 

t γZ t

t ∆−i 1

= 1.

ii

t

In this formula, Γˆi,t encapsulates the welfare-relevant change to factor intensities, which can be solved as a function of the multiplier ∆i, baseline technology shares, αi,t, technologyspecific factor intensity parameters and labor wedges, as detailed in Appendix D.3. In a special case where production uses only one type of technology (α0 = 1, α1 = 0, and γ1M ≡ γM), Γˆi,t collapses to unity and ∆i = π

γM 1−γM

1 σ−1

ii . In that case, our gains-from-trade formula reduces to the standard ACR formula under the roundabout technology:

1 σ−1

1 1−γM

GTACRi = 1 − π

ii .

Generally, beyond this special case, ∆i adjusts the gains from trade particularly to account for trade-led changes to allocative efficiency. Specifically, compared to ACR, here a new mechanism is at play: By improving firms' access to foreign intermediate goods, trade

encourages firms to shift toward modern, intermediate-input-intensive technologies. This trade-induced modernization of industries improves aggregate productivity. Moreover, modern firms are subject to higher labor market distortions, therefore this modernization process can improve the allocative efficiency. Section 6.1.2 compares the welfare gains-from-trade in our model, GTi = 1 − ∆i × π

1 σ−1

1 1−γ

1 σ−1

ii with the special case of GTACRi = 1 − π

ii .

### 4.3 Impact of Trade on Aggregate Labor Productivity

We now examine the effects of a small shock to trade costs on aggregate labor productivity (ALP), expressed in Equation (12). Here, for a clearer exposition, we present the formula for a single-sector version of the model:

dln(ALPi) =

+

γ ̄iM 1 − γ ̄iM

1 1 − γ ̄iM

1 1 − σ

dlnπii (18)

θ − 1 θ t

Cov 1 − γ ̄iM − γtZ δ ̃i,t,dln i,t +

γtZρi,tdlnαi,t

where γ ̄iM is average cost share of intermediate input use, ρi,t is the output share defined by Equation (14), and δ ̃i,t denotes the deviation of labor-wedge-to-labor-intensity ratio from its mean:

δi,tL E δi,tL

τi,tL γi,tL

δi,tL t δi,tL i,t

δ ̃i,tL ≡

, where δi,tL ≡

.

=

The above formula decomposes the impacts of trade liberalization on aggregate labor productivity into three effects: First, trade liberalization provides improved access to foreign intermediate inputs that complement primary inputs, thereby raising labor (and managerial capital) productivity. These productivity gains are represented by the first term on the right-hand side of Equation (18).17 Second, trade liberalization reallocates workers from one type of technology to another where primary inputs exhibit different marginal productivity levels. These allocative effects are encapsulated by the second term on the right-hand side. Third, trade liberalization prompts technology choices. These selection effects are partly encapsulated by the second term (as they regulate dln it) and partly by the last term on the right-hand side of Equation (18). The latter two effects (allocative effects and technology choices) distinguish our framework from standard models.18

- 17To see the connection more clearly, note that an increase in trade openness (dlnπii < 0) raises ALP via

the the first term on the right-hand side, and more so the higher the average input intensity, γ ̄iM.

- 18These three components are comparable to the ones in our welfare decomposition (compare with the


one-sector formula in footnote 16). However, the effect on ALP along each of these three channels is different from their effect on welfare, because the gross output of each country is different from its aggregate real

## 5 Bringing the Model to Data

To run counterfactual analyses, we simulate our model in changes based on the exact hat algebra approach as in Dekle, Eaton, and Kortum (2007),19 which allows us to sidestep the parametrization of TFPs and trade costs. Table 1 summarizes the required parameters and the summary statistics to simulate our model. Below, we briefly explain our calibration, relegating details to Appendix F.

We combine country-level aggregates from the GTAP data with firm-level statistics and estimates obtained from the WBES data. From the GTAP database, we take global flows from each origin country-industry to each destination country-industry, as well as value added shares, for the year 2014. A key feature of GTAP, relative to other Input-Output datasets, is that it covers a wide range of countries in different levels of economic development. From the WBES, we obtain our estimates of technology-specific labor wedges and elasticities of output with respect to labor, and the share of modern firms in each country.20 Important for us, WBES also provides firm-level data across countries in different levels of economic development—approximately 90,000 firms operating between 2006-2020 across 140 countries. We first split the sample of firms into two types, modern and traditional, based on their total sales, using a simple clustering approach akin to Asturias and Rossbach (2019).21 We then estimate output elasticities of labor, for each technology type, using the control function approach (Levinsohn and Petrin, 2003; Olley and Pakes, 1996). The remaining input elasticities are calibrated to match aggregate statistics on the cost share of labor, the cost share of intermediate inputs, and firm size. Lastly, with estimates of output elasticity in hand, we recover labor wedges for each country and technology type.

Two empirical patterns emerge from our calibration that are in line with the motivating evidence from the literature which we discussed in Section (2). First, labor market wedges are larger for modern firms, and significantly more so in low-income countries economies. Second, modern firms use labor less intensively than traditional firms.22

consumption.

- 19Appendix B describes our model equilibrium in changes, and the numerical algorithm that we employ to simulate it.
- 20By and large, our focus is on manufacturing. The WBES data, also, inform us only about manufacturing industries. Consequently, we collapse each of our non-manufacturing industries (agriculture, mining, and services) into only one technology type. To set labor wedges in non-manufacturing, we use their averages across the two manufacturing technologies. We take all other information for the non-manufacturing industries from the GTAP database, with no need for more disaggregated data.
- 21We consider this classification as a proxy for technology adoption, given that the data provide us with no additional information for a classification. For a subset of countries, however, we have information on whether firms are in the formal of in the informal sector. Hence, in Section 7, we experiment with an alternative classification in which we assign formal firms to the modern technology and informal firms to the traditional one.
- 22In Appendix Section 7, we discuss alternative approaches and robustness tests for the estimation of


In addition, we set the trade elasticity, (σ−1), to 3 in line with available estimates in the literature (Simonovska and Waugh (2014), Imbs and Mejean (2015)). We pick the technology elasticity, θ, from Farrokhi and Pellegrina (2023) who estimate a comparable elasticity for the agriculture sector—Section 7.3 experiments with alternative values of θ.

Our final sample consists of 99 countries plus an aggregate for the rest of the world and 14 industries—consisting of 11 manufacturing and 3 non-manufacturing industries.

Table 1: Calibration and Sufficient Statistics

Description Parameter Value/Source

Trade elasticity σs − 1 3.0 (Simonovska and Waugh, 2014) Technology elasticity θ 4.5 (Farrokhi and Pellegrina, 2023)

Share of modern firms αi,kt Clustering, WBES Labor wedges τi,tL Estimated, WBES Output elasticity of labor γtL Estimated, WBES Output elasticity of other inputs γtM and γtZ Aggregates from GTAP and WBES Consumption shares βi,s and φi,ss t Expenditure shares, GTAP Trade shares πij,s GTAP

Notes: This table reports the set of sufficient statistics, and their data sources, that we employ to calculate counterfactual changes in our general equilibrium model. We simulate the model based on the exact hat algebra which allows us to sidestep the need to calibrate total factor productivities and trade costs. Appendix

- F details the calibration procedure.


## 6 Quantitative Analyses

Having the calibrated model in hand, we now undertake two sets of quantitative exercises. First, we consider the welfare effects of trade. Specifically, we examine the aggregate ex-ante gains from piecemeal trade liberalization, using our welfare decomposition formula from Section 4.2.1 to isolate the role of technology adoption and distortions from standard ACR effects. We then compute the aggregate ex-post gains from trade, connecting more directly our results to the standard gains from trade implied by the ACR formula. Second, we examine the impact of trade on aggregate labor productivity. Specifically, in the spirit of a difference-in-differences design, we simulate a set of counterfactuals to determine the impact of trade liberalization on labor productivity, with and without distortions.

Before presenting our main quantitative results for open economies, let us briefly report the welfare cost of labor market distortions in the counterfactual where countries operate as closed economies—mimicking our discussion in Section 4.1. We find that the welfare

production function and labor wedges. The key patterns that emerge from our preferred calibration holds across a wide range of alternative approaches. Moreover, in Section 7, we also experiment with alternative calibrations of the model and show that our overall conclusions remain the same.

cost of misallocation is six times larger in low-income countries relative to their high-income counterparts, reflecting the fact that the cross-technology dispersion in labor market wedges is remarkably higher in low-income countries (Appendix Figure A.3). Additionally, higher technology elasticity, θ, magnifies the welfare cost of misallocation, underscoring the role of technology adoption as indicated by Equation (16).

### 6.1 Welfare Effects of Trade

#### 6.1.1 Decomposing Ex-Ante Welfare Gains from Trade Liberalization

In this section, we simulate a piecemeal trade liberalization, one country at a time, by counterfactually lowering the trade costs associated with a country's exports and imports. We then use Equation (17) to decompose the resulting welfare effects into ACR, Allocative Efficiency, Residual Effects (Residual Terms of Trade via International Profit Transfers plus Residual Technology Selection Effects).

Table 2 presents our results, reporting average outcomes for countries in the low-income, middle-income and high-income brackets. A key finding is that the contribution of the nonACR terms is consistently positive, indicating that the welfare gains from trade liberalization exceed those implied by the standard ACR formula. Moreover, the non-ACR welfare effects are relatively larger among low-income countries. Roughly 20% of the welfare gains from trade liberalization are attributable to non-ACR effects among low-income countries, versus less than 10% in their high-income counterparts.23

Note that trade liberalization improves allocative efficiency at all income levels. Intuitively, trade liberalization lowers the price of imported intermediate inputs, thereby directing resources towards modern technologies and encouraging their adoption. Both mechanisms reduce misallocation, which, recall, stems from inefficiently low production by modern firms and insufficient adoption of modern technologies, generated by larger exposure of modern firms to larger labor distortions vis-`a-vis traditional ones. Notably, improvements to allocative efficiency constitute a larger portion of the overall gains from trade liberalization in low-income countries, given their higher initial levels of misallocation (see Appendix Figure

- A.7).


23The Residual Effects almost entirely are accounted for by Residual Terms of Trade via International Profit Transfers. The contribution from the Residual Technology Selection Effect is virtually zero in this exercise because on the aggregate the negative effect of the shrinking technology almost entirely cancels out the positive effect of the expanding technology.

##### Table 2: Decomposition: Ex Ante Gains from Trade Liberalization

ACR Allocative Efficiency Residual Effects

High income 90.3% 3.0% 6.7% Middle income 86.6% 5.0% 8.4% Low income 81.2% 9.2% 9.6%

Notes: This table shows the contribution of each listed component to the welfare gains from a local reduction in trade costs of each country. The results show the average values across countries in the three groups of high-income, middle-income and low-income countries. The three components of the welfare change are shown in Equation (17), referred to as ACR, Allocative Efficiency and Residual Effects. The Residual Effects are almost entirely accounted for by Residual Terms of Trade via International Profit Transfers, with the contribution from the Residual Technology Selection Effect to be virtually zero.

#### 6.1.2 Ex-Post Welfare Gains from Trade

We now turn to evaluate the ex-post gains from trade in our framework, comparing them to the gains from trade implied by the canonical ACR formula. Following the literature, we define the ex-post gains from trade as the welfare gains of moving from autarky to the observed equilibrium.

Table 3 reports the average gains from trade across low-income, middle-income, and high-income countries. Our framework implies larger gains from trade than ACR: 21.3% versus 19.3% for high-income countries, 20.0% versus 18.0% for middle-income countries, and 19.3% versus % for low-income countries. The greater gains implied by our model emanate from trade's ability to correct misallocation. Shutting down trade in our framework directs resources towards traditional technologies and incentivizes firms to pivot from modern to traditional technologies. These mechanisms exacerbate misallocation in the economy, thereby amplifying the cost of autarky and, correspondingly, the gains from trade. Consistent with this logic, our framework predicts the largest increase in the gains from trade (relative to ACR) for low-income countries, which suffer from a higher degree of misallocation.

Table 3: Gains from Trade—Losses in Real Income from Moving to Autarky

High income Middle income Low income

ACR 19.3% 18.0% 16.4% New Model 21.3% 20.0% 19.2%

Notes: This table reports the ex-post gains from trade, which are calculated as the percentage loss to real income from moving to autarky. The reported numbers correspond to the average values among countries in the high-income, middle-income and low-income groups.

Table 4: Counterfactual Design

Trade Barriers

Labor Wedges

| |High|Low|
|---|---|---|
|High|E0<br><br>|E1|
|Low<br><br>|E0<br><br>|E1|


Notes: This table summarizes the four counterfactuals which we run to evaluate the impact of trade liberalization with and without labor wedges. E0 represents the baseline (observed) equilibrium, in which trade barriers and labor wedges are high. E1, E0, and E1 represent other counterfactual economies as shown by the table. Based on exact hat-algebra, we take a "difference-in-differences" approach and compare E0 → E1 with E0 → E1.

### 6.2 Labor Productivity Gains from Trade Liberalization

We close this section by returning to the pivotal question motivating our research: How do labor market distortions modify the labor productivity gains from trade liberalization in low-income countries?

To answer this question, in the spirit of a difference-in-differences (diff-in-diff) approach, we gauge the impacts of trade liberalization in an economy with and without distortions. Our diff-in-diff involves the baseline (observed) equilibrium plus three counterfactuals, as summarized in Table 4. In the first counterfactual, we lower manufacturing trade costs by 20%, one country at a time, relative to the baseline equilibrium, E0. We label the counterfactual equilibrium that arises after the noted trade shock as E1. In the second counterfactual, we eliminate labor market distortions by setting all labor wedges to one, with E0 denoting the counterfactual equilibrium that arises after the noted development shock. The third counterfactual combines both shocks, with E1 denoting the resulting counterfactual equilibrium. We compare the impact of trade on aggregate labor productivity between

(With Distortions : E0 → E1) versus (Without Distortions : E0 → E1).

Essentially, we compare the impacts of the trade liberalization under existing distortions (E0 → E1) with its impact under no distortions (E0 → E1).

Table 5 reports the change in labor market outcomes under the above-mentioned counterfactuals, with each entry showing the average effect among low-income countries. Columns (1) and (2) compare the impacts of trade liberalization under the existing labor market distortions and without them.24 Our primary outcome of interest in each case is the change

24For completeness, Appendix Table A.5 additionally reports the impact of an isolated development shock

(E0 → E0 in Table 4) and the impact of a trade shock in tandem with a development shock (E0 → E1 in Table 4).

to aggregate labor productivity (APL) given by Equation (12). We also report the change to other labor market-related outcomes, including labor intensity and employment in manufacturing as well as real wage to better illuminate our main result about aggregate labor productivity.

The first row of Table 5 provides an answer to our main question by showing that labor market distortions hinder the labor productivity gains from trade integration. Given the high levels of distortion in the baseline, trade liberalization raises ALP by 4.2% as opposed to 6.5% in the absence of such distortions. That is, labor market distortions erode 35% (= 100 × (1 − 4.2/6.5)) of the potential labor productivity gains from trade liberalization in low-income countries. These results resonate with Diao, Ellis, McMillan, and Rodrik's (2021) observation that trade liberalization (and the consequent adoption of modern technologies) has not significantly boosted aggregate manufacturing labor productivity in low-income countries.

Table 5: The Impacts of Trade Liberalization on Labor Markets in Low-income Countries

Trade Liberalization

With Distortions Without Distortions (E0 → E1) (E0 → E1)

- (a) Agg. Labor Productivity 4.2% 6.5%
- (b) Real Wages 7.9% 11.3%
- (c) VA per worker in Mfg 8.1% 10.6%
- (d) Share of Mfg. Modern Firms 18.4% 5.4%
- (e) Mfg. Employment 1.6% -3.4%
- (f) Avg. Mfg. Labor Intensity -2.2% -1.1%
- (g) Avg. Mfg. Intrm. Input Intensity 7.5% 3.1%


Notes: This table shows the average percentage change to selected variables in low-income countries in response to a trade liberalization (20% reduction in trade costs) with and without labor market distortions. These results compare (E0 → E1) with (E0 → E1) in line with our design of counterfactual equilibrium outcomes in this section.

There is a simple intuition for why labor market distortions curtail the labor productivity gains from trade. In general, trade liberalization improves aggregate productivity via improving access to imported intermediate inputs that complement the labor and managerial capital inputs. This, in turn, leads to a reallocation of resources towards modern technologies that rely more intensively on intermediate inputs. The productivity effect of the trade-led growth in modern manufacturing is compromised in distorted economies because modern technologies are disproportionately exposed to labor market distortions.

Moreover, trade liberalization raises real wage by 7.9% under existing distortions as opposed to 11.3% under no distortions. That is, the real wage gains from trade liberalization

are 30% lower in the presence of labor market distortions. This result is driven by two channels: (i) For a given increase in the rate of technology adoption, demand for workers falls relatively more at a higher level of distortions because, in that case, modern firms pay a higher fraction of their total sales to wedges and a lower fraction to workers; (ii) A higher level of distortions prompts a higher adoption rate of modern (labor-saving) technologies in response to trade, which results in lower aggregate demand for workers.

Labor market distortions similarly compromise the impact of trade on other labor market outcomes, particularly in manufacturing where our framework allows for technology adoption (see rows (c)–(g) in Table 5). In particular, the increase in manufacturing value added per worker (an alternative measure of labor productivity) is larger without distortions than with them: 10.6% vs. 8.1% on average across low-income countries—Appendix Figure A.5 shows this result for individual countries. Furthermore, with distortions, trade liberalization leads to a larger adoption of modern technologies, a large reduction in average labor intensity, and a larger increase in average intensity of intermediate inputs.

The results herein should not be interpreted as a compromising effect of trade on allocative efficiency. As we discussed theoretically in Section 4.2.1 and quantitatively in Section

- 6.1.1, trade liberalization improves allocative efficiency by encouraging modern technology adoption and directing resources toward modern firms. In turn, the extent of misallocation is determined by aggregate welfare which is different from gross output. Accordingly, the aggregate welfare gains from trade liberalization are relatively larger among distorted economies (Appendix Figure A.6).


The differences in outcomes between aggregate labor productivity and welfare can be traced out using Equation (13). Trade liberalization induces a change in the terms of trade and aggregate value added share of economies, altering the relationship between welfare and aggregate labor productivity outcomes. We find that, quantitatively, the impact on the terms of trade are comparable with and without distortions.25 However, correcting the distortions elevates the share of modern firms that use intermediate inputs more intensively than traditional firms.26 This means that in the no-distortion case, we are shocking a baseline economy

25Two comments regarding terms of trade changes are in order. First, following Equation (13), the average change in country i's terms of trade can be calculated as s (πii,s)−

βi,s σs−1

. In our exercise, lowering trade

costs raises this measure by 3.4% under the status quo level of distortions and by 3.7% without distortions. Second, eliminating distortions on average worsens the terms of trade for low-income countries by 0.5%. The intuition is that removing distortions spurs the adoption of modern technologies that use imported intermediate inputs more intensively. This shift reduces the relative demand for domestic labor, deflating domestic wages versus foreign wages and adversely affecting the terms of trade. The noted tension between allocative efficiency and terms of trade resembles that highlighted by Lashkaripour and Lugovskyy (2023), albeit through a different mechanism.

26This point is illustrated in Table A.5 of the appendix, which shows that share of modern firms in the

with greater technological exposure to input trade liberalization, leading to aggregate labor productivity gains that are proportionately larger than the welfare gains.

These arguments apply to virtually every low-income country in our sample. To see this, Figure 2 reports the impact of trade liberalization on aggregate labor productivity for individual countries. The horizontal axis shows the impact under currently-high labor market distortions, while the vertical axis shows the corresponding effect in the absence of such distortions.27

In sum, the findings in this section indicate that labor market distortions may explain why trade liberalization and the proliferation of modern technologies have led to modest labor productivity growth among low-income countries—particularly when compared to their higher-income counterparts. Modern technologies, which are fostered by trade, are less labor productivity-improving in low-income countries given their disproportionate exposure to labor market distortions, providing a complementary view to the (in)appropriate technology thesis in Basu and Weil (1998) and Acemoglu and Zilibotti (2001).

## 7 Robustness Checks

This section provides robustness checks based on alternative calibrations of our model. First, we use information on formal versus informal firms to assign them to modern and traditional types. Second, we relax the assumption that factor intensities of modern and traditional technologies are common across countries. Third, we experiment with alternative values of the technology elasticity, θ. Under these alternative calibrations, we re-evaluate the labor productivity effects the trade liberalization discussed in Section 6.2. In addition, this section documents additional empirical patterns and estimates of labor intensity and wedges that support our analysis.

### 7.1 Formal versus Informal

We adopt here an alternative approach in which we classify firms in the formal sector as modern and firms in the informal sector as traditional. To do so, we bring in the special surveys from the WBES that record firm-level data of the informal sector, the Informal Sector Enterprise Survey (IFS). The surveys on informal firms, however, are available only

undistorted baseline equilibrium (E0) is larger than the status quo, which in turn increases the average intermediate input intensity in the undistorted baseline equilibrium.

27Appendix Figure A.7 compares the above results, that are for low-income countries, to the results from the same exercise for countries with higher levels of income. Labor market distortions erode, respectively, 17% and 27% of the potential productivity gains in high- and middle-income countries, compared to 35% for low-income countries.

##### Figure 2: Impact of Trade on Aggregate Labor Productivity with and without Distortions

Notes: This figure shows the percentage change to aggregate labor productivity, defined by Equation (12), among low-income countries in response to a 20% reduction in trade costs. The x-axis reports changes under the status quo labor wedges, the y-axis reports changes under no labor wedges.

for 23 countries. Using this subset of countries, we estimate labor intensities and wedges for formal and informal firms. For countries in which this survey is not provided, we use the labor wedges from our baseline calibration. To construct the share of firms and total sales from the informal sector, we use data from Schneider and Buehn (2007), discussed in La Porta and Shleifer (2008). Appendix F.5 provides additional details about the calibration of the model.

There is a large difference between the output elasticity of labor between production technologies in the formal and informal sectors: The output elasticity in the informal sector is 0.53 whereas in the formal sector it is 0.39 (Appendix Figure A.8). In comparison, in our baseline analysis, the output elasticity was 0.39 in the traditional sector against 0.29 in the modern one. Turning to labor market wedges, there is a substantial gap between the average labor wedge in the formal sector (5.04) and that of the informal sector (1.91).28

28In comparison, the average labor wedges in our main calibration were, respectively, 2.28 and 3.69 for traditional and modern firms. That is, the classification based on formal vs. informal divide reinforces the main mechanism in our model as it generates even a larger gap in labor wedges between the resulting two groups of firms. Yet, the correlation between the labor wedges in our baseline analysis and the ones obtained from the formal vs informal cut of the data is 0.83.

Importantly, the qualitative patterns that we documented in Section 2 continue to hold under this alternative classification. Simulating the model under this alternative approach, our main quantitative result—that trade liberalization has a larger impact on aggregate labor productivity in efficient economies—is preserved, although the impact becomes somewhat weaker quantitatively (Appendix Figure A.9).

### 7.2 Heterogeneous Labor Elasticities across Countries

In our baseline analysis, we assumed that factor intensities of modern and the traditional technologies were common across countries.29 Here, we relax this assumption. Because our dataset does not provide us with a sufficient coverage of firms to estimate technology-specific factor intensities separately for each country, as a middle ground, we run our estimation for firms in low-income countries and separately for middle- and high-income countries. This procedure delivers a (potentially) different classification of firms into modern and traditional types, and alternative estimates of output elasticity of labor and labor market wedges.

The output elasticity of labor for each technology is quite comparable between low-income countries and middle- and high-income countries: for low-income countries, the output elasticity of labor in the traditional technology is 0.38, whereas the corresponding elasticity for middle- and high-income countries is 0.41 (Appendix Figure A.8). We find that in both groups of countries labor wedges are larger among modern firms, relative to traditional ones, and this difference is substantially larger among firms in low-income countries—consistent with the pattern in Figure 1 presented earlier in Section 2. Simulating the model with this calibration, we find results that are largely comparable to the ones from our baseline analysis (Appendix Figure A.9).

### 7.3 Alternative Values of the Technology Elasticity (θ)

We conduct two sets of exercises to demonstrate how predictions of our model depend on the technology elasticity, θ. First, Appendix Figure A.10 shows the results from a 20% reduction in trade costs for different values of θ. At a higher θ, the model generates a considerably larger trade-induced adoption of modern technologies. This is expected since a higher technology elasticity implies a larger response when the returns to modern technologies rise (as induced by an improvement in access to foreign intermediates).

29Two comments are in order regarding this assumption in our baseline analysis. First, production technologies are still different across firms in countries since TFPs vary by firms. Second, the analysis still allows for cross-country differences in aggregate factor intensity as such differences arise from endogenous share of firms that use modern and traditional technologies.

However, the effect of the technology elasticity on aggregate labor productivity is less pronounced. On the one hand, an expansion in the use of modern technologies increases aggregate labor productivity. On the other hand (and acting against this force), there is a dampening effect on aggregate productivity because the infra-marginal managerial capital that gets reallocated to the modern technology is less productive than the existing managerial capital there. Numerically, as we increase the technology elasticity, θ, the relative strength of the former force rises to a limited extent, increasing the impact on the aggregate labor productivity to a modest degree.

Second, we redo our exercise in Section 6.2 with two alternative values of the technology elasticity, θ = 2 and θ = 9 (our baseline calibration sets θ = 4.5). For these two alternative calibrations, Panels (e)–(h) in Appendix Figure A.9 show the impact of the trade liberalization on aggregate labor productivity and real wages with and without distortions, similar to our main exercise in Section 6.2. The resulting outcomes remain to be similar both qualitatively and quantitatively to our baseline results.

### 7.4 Additional Evidence

To conclude, we present additional evidence based on the WBES that bolster our quantitative approach.

First, we experiment with several alternative approaches for the estimation of labor intensity and wedges. Specifically, we: (i) estimate labor intensity both by sector and technology type, as opposed to only by technology, (ii) allow for more than 2 technology types, and (iii) estimate labor intensity using different dependent variables (either total sales or total costs) and different control functions. Results are reported in Appendix Table A.1 and Appendix Figures A.1 and A.2. Reassuringly, across all different cuts and estimation approaches, modern firms use labor less intensively than smaller ones, and are subject to higher labor wedges.

Furthermore, we document three patterns using WBES surveys in which firms are asked to report the obstacles they face in their businesses. First, modern firms tend to report more severe obstacles due to taxes, labor regulations and informal sectors relative to traditional firms, but less so in high-income countries (Appendix Table A.2). Second, across several different approaches for the estimation of labor intensity and labor market distortions, modern firms face larger (model-implied) distortions, and more so in low-income countries (Appendix Table A.3). Third, generally our estimates of distortions are positively correlated with these direct measures of obstacles across countries (Appendix Table A.4).

## 8 Conclusion

In this paper, we studied how labor market imperfections distort firm-level technology choices and alter the gains from trade. To do so, we introduced labor market distortions and technology choices into a multi-country, quantitative trade model. We provided analytical expressions highlighting the mechanisms that drive the impact of trade liberalizations on aggregate welfare and labor productivity. We compared the gains from trade in our framework to the canonical ACR results, and employed counterfactual simulations to study the implications of trade liberalization for aggregate labor productivity, particularly in low-income countries.

Our findings indicates that the low adoption of modern technologies despite globalization, a topic of much debate among researchers and policymakers, can be partly attributed to labor market distortions. Specifically, labor market distortions can substantially reduce the potential labor productivity gains. This is an important result as researchers have been particularly concerned about the implications of technology upgrading for workers, given the stagnation of aggregate labor productivity in parts of the developing world. Our results suggest that reductions in labor market distortions, a ubiquitous feature of developing economies, can substantially boost the labor productivity gains from trade-led growth in modern technologies.

Our paper offers a few promising avenues for future research. First, our framework could be extended to examine the distributional impacts of trade in distorted economies, for example, by bringing in employee-employer matched data on different types of workers. Second, our analysis can be extended to incorporate other forms of inefficiencies, such as barriers that distort firms' choices of capital. Lastly, our current approach is agnostic about the specific institutional mechanisms that generate labor market distortions. Future research could consider endogenous distortions that interact with technology adoption, for example, by studying the impact of search frictions in labor markets or the implications of moving firms out of informality.

## References

Acemoglu, D., P. Antras,` and E. Helpman (2007): "Contracts and technology adoption," American Economic Review, 97(3), 916–943.

Acemoglu, D., and F. Zilibotti (2001): "Productivity differences,"The Quarterly Journal of Economics, 116(2), 563–606.

Arkolakis, C., A. Costinot, and A. Rodriguez-Clare (2012): "New trade models, same old gains," American Economic Review, 102(1), 94–130.

Artu ̧c, E., S. Chaudhuri, and J. McLaren (2010): "Trade shocks and labor adjustment: A structural empirical approach," American economic review, 100(3), 1008–45.

Asturias, J., and J. Rossbach (2019): "Grouped Variation in Factor Shares: An Application to Misallocation," Available at SSRN 3546842.

(2021): "The role of trade in economic development," Discussion paper, National Bureau of Economic Research.

Atkin, D., and A. K. Khandelwal (2020): "How distortions alter the impacts of international trade in developing countries," Annual Review of Economics, 12, 213–238.

Bai, Y., K. Jin, and D. Lu (2019): "Misallocation under trade liberalization," Discussion paper, National Bureau of Economic Research.

Baqaee, D., and E. Farhi (2019): "Networks, barriers, and trade," Discussion paper, National Bureau of Economic Research.

Bartelme, D. G., A. Costinot, D. Donaldson, and A. Rodriguez-Clare (2019): "The textbook case for industrial policy: Theory meets data," Discussion paper, National Bureau of Economic Research.

Basu, S., and D. N. Weil (1998): "Appropriate technology and growth," The Quarterly Journal of Economics, 113(4), 1025–1054.

Bertrand, M., C.-T. Hsieh, and N. Tsivanidis (2021): "Contract labor and firm growth in india," Discussion paper, National Bureau of Economic Research.

Besley, T., and R. Burgess (2004): "Can labor regulation hinder economic performance? Evidence from India," The Quarterly journal of economics, 119(1), 91–134.

Buera, F. J., H. Hopenhayn, Y. Shin, and N. Trachter (2021): "Big Push in Distorted Economies," Discussion paper, National Bureau of Economic Research.

Bustos, P. (2011): "Trade liberalization, exports, and technology upgrading: Evidence on the impact of MERCOSUR on Argentinian firms," American economic review, 101(1), 304–40.

(2019): "Trade and labor market dynamics: General equilibrium analysis of the china trade shock," Econometrica, 87(3), 741–835.

Caliendo, L., F. Parro, and A. Tsyvinski (2017): "Distortions and the Structure of the World Economy," Discussion paper, National Bureau of Economic Research.

Ciccone, A. (2002): "Input chains and industrialization,"The Review of Economic Studies, 69(3), 565–587.

Costinot, A., and A. Rodr ́ıguez-Clare (2014): "Trade theory with numbers: Quantifying the consequences of globalization," in Handbook of international economics, vol. 4, pp. 197–261. Elsevier.

Davidson, C., S. J. Matusz, and A. Shevchenko (2008): "Globalization and firm level adjustment with imperfect labor markets," Journal of international Economics, 75(2), 295–309.

De Loecker, J., P. K. Goldberg, A. K. Khandelwal, and N. Pavcnik (2016): "Prices, markups, and trade reform," Econometrica, 84(2), 445–510.

Dekle, R., J. Eaton, and S. Kortum (2007): "Unbalanced trade," American Economic Review, 97(2), 351–355.

Diao, X., M. Ellis, M. S. McMillan, and D. Rodrik (2021): "Africa's Manufacturing Puzzle: Evidence from Tanzanian and Ethiopian Firms," Discussion paper, National Bureau of Economic Research.

Ding, S., A. Lashkaripour, and V. Lugovskyy (2023): "A Global Perspective on the Incidence of Monopoly Distortions," .

Dix-Carneiro, R., P. K. Goldberg, C. Meghir, and G. Ulyssea (2021): "Trade and informality in the presence of labor market frictions and regulations," Discussion paper, National Bureau of Economic Research.

Eaton, J., and S. Kortum (2002): "Technology, geography, and trade," Econometrica, 70(5), 1741–1779.

Farrokhi, F., and H. S. Pellegrina (2023): "Trade, Technology, and Agricultural Productivity," Journal of Political Economy, 131(9).

(2023): "Trade elasticities in general equilibrium: Demand, supply, and aggregation.," .

Fieler, A. C. (2011): "Nonhomotheticity and bilateral trade: Evidence and a quantitative explanation," Econometrica, 79(4), 1069–1101.

Fieler, A. C., M. Eslava, and D. Y. Xu (2018): "Trade, quality upgrading, and input linkages: Theory and evidence from colombia," American Economic Review, 108(1), 109– 46.

Goldberg, P. K., A. K. Khandelwal, N. Pavcnik, and P. Topalova (2010): "Imported intermediate inputs and domestic product growth: Evidence from India," The Quarterly journal of economics, 125(4), 1727–1767.

Haltiwanger, J., S. Scarpetta, and H. Schweiger (2014): "Cross country differences in job reallocation: The role of industry, firm size and regulations,"Labour Economics, 26, 11–25.

Hopenhayn, H., and R. Rogerson (1993): "Job turnover and policy evaluation: A general equilibrium analysis," Journal of political Economy, 101(5), 915–938.

Hsieh, C.-T., and P. J. Klenow (2009): "Misallocation and manufacturing TFP in China and India," The Quarterly journal of economics, 124(4), 1403–1448.

(2014): "The life cycle of plants in India and Mexico," The Quarterly Journal of Economics, 129(3), 1035–1084.

Imbs, J., and I. Mejean (2015): "Elasticity optimism," American Economic Journal: Macroeconomics, 7(3), 43–83.

(2023): "Grounded by gravity: A well-behaved trade model with industry-level economies of scale," American Economic Journal: Macroeconomics, 15(2), 372–412.

La Porta, R., and A. Shleifer (2008): "The unofficial economy and economic development," Discussion paper, National Bureau of Economic Research.

Lagakos, D. (2016): "Explaining Cross-Country Productivity Differences in Retail Trade," Journal of Political Economy, 124(2), 579–620.

Lanteri, A., P. Medina, and E. Tan (2023): "Capital-reallocation frictions and trade shocks," American Economic Journal: Macroeconomics, 15(2), 190–228.

(2023): "Profits, scale economies, and the gains from trade and industrial policy," American Economic Review, 113(10), 2759–2808.

Levinsohn, J., and A. Petrin (2003): "Estimating production functions using inputs to control for unobservables," The review of economic studies, 70(2), 317–341.

Lucas, R. E. (1978): "On the size distribution of business firms," The Bell Journal of Economics, pp. 508–523.

Medina, P. (2020): "Import competition, quality upgrading and exporting: Evidence from the peruvian apparel industry," University of Toronto mimeo.

Meghir, C., R. Narita, and J.-M. Robin (2015): "Wages and informality in developing countries," American Economic Review, 105(4), 1509–1546.

Midrigan, V., and D. Y. Xu (2014): "Finance and misallocation: Evidence from plantlevel data," American economic review, 104(2), 422–58.

Morlacco, M. (2019): "Market power in input markets: Theory and evidence from french manufacturing," Unpublished, March, 20, 2019.

Murphy, K. M., A. Shleifer, and R. W. Vishny (1989): "Industrialization and the big push," Journal of political economy, 97(5), 1003–1026.

(2013b): "Productivity and misallocation during a crisis: Evidence from the Chilean crisis of 1982,"Review of Economic Dynamics, 16(1), 100–119, Special issue: Misallocation and Productivity.

Olley, G. S., and A. Pakes (1996): "The Dynamics of Productivity in the Telecommunications Equipment Industry," Econometrica, 64(6), 1263–1297.

Pavcnik, N. (2017): "The impact of trade on inequality in developing countries,"Discussion paper, National Bureau of Economic Research.

Ramondo, N., and A. Rodr ́ıguez-Clare (2013): "Trade, multinational production, and the gains from openness," Journal of Political Economy, 121(2), 273–322.

Schneider, F., and A. Buehn (2007): "Shadow economies and corruption all over the world: revised estimates for 120 countries," economics, 1(1).

Scottini, L. C. (2018): "Firm-level distortions, trade, and international productivity differences," Unpublished manuscript.

Simonovska, I., and M. E. Waugh (2014): "The elasticity of trade: Estimates and evidence," Journal of international Economics, 92(1), 34–50.

Sotelo, S. (2020): "Domestic Trade Frictions and Agriculture," Forthcoming in Journal of Political Economy.

Ulyssea, G. (2018): "Firms, informality, and development: Theory and evidence from

Brazil," American Economic Review, 108(8), 2015–47. Verhoogen, E. (2021): "Firm-level upgrading in developing countries," . Yeaple, S. R. (2005): "A simple model of firm heterogeneity, international trade, and

wages," Journal of international Economics, 65(1), 1–20. Zavala, L. (2022): "Unfair Trade? Monopsony Power in Agricultural Value Chains," .

Part Appendices

Online Appendices for "Trade and Technology Adoption in Distorted Economies"

# Not for Publication

Farid Farrokhi, Ahmad Lashkaripour, and Heitor S. Pellegrina*

- A Derivations of Model Relationships and ALP 2

- A.1 Relationship between α, ρ, and . . . . . . . . . . . . . . . . . . . . . . . 2
- A.2 Aggregate Labor Productivity (ALP) . . . . . . . . . . . . . . . . . . . . . 3


- B General Equilibrium in Changes 4

- B.1 Specifying the System of GE in Changes . . . . . . . . . . . . . . . . . . . 4
- B.2 Numerical Algorithm to Simulate the GE in Changes. . . . . . . . . . . . 5


- C Derivation of The Welfare Cost of Misallocation 6 C.1 Cost of Misallocation with Multiple Sectors . . . . . . . . . . . . . . . . . 10
- D Derivations of Trade Effects on Welfare and Labor Productivity 11

- D.1 Exact Changes to Income Levels and Prices . . . . . . . . . . . . . . . . . 11
- D.2 Ex-Ante Welfare Gains from Trade Liberalization . . . . . . . . . . . . . . 15
- D.3 Ex-Post Welfare Gains from Trade . . . . . . . . . . . . . . . . . . . . . . 16
- D.4 Ex-Ante Labor Productivity Gains from Trade Liberalization . . . . . . . 18


- E Data for the Quantification of the Model 19
- F Quantification of the Model 20

- F.1 Classification of Firms to Traditional and Modern Types . . . . . . . . . . 21
- F.2 Labor Output Elasticities and Wedges . . . . . . . . . . . . . . . . . . . . 21
- F.3 Estimation and Calibration of Factor Intensity Parameters . . . . . . . . . 22
- F.4 Calibration of the Baseline Equilibrium . . . . . . . . . . . . . . . . . . . 24
- F.5 Robustness using Formal vs Informal Firms . . . . . . . . . . . . . . . . . 25


- G Additional Tables and Figures 26


*Email: ffarrokh@purdue.edu, alashkar@indiana.edu, and hpelleg@nd.edu.

## A Derivations of Model Relationships and ALP

This section presents, first, derivations that relate model-implied revenue shares, labor shares, and the share of modern firms. We use these relationships throughout the paper to derive several of our expressions. In addition, we present a full derivation of our formula for aggregate labor productivity.

### A.1 Relationship between α, ρ, and

This appendix derives expressions for revenue shares (ρi,st) and labor shares ( i,st) as a function of αi,st, which is the share of firms that chose technology t in country i–industry s. To fix idea, we formally define the aforementioned share variables. The labor shares are defined as follows for various tiers of production (i.e., firm, technology, and industry)

Li,st (ω) Li

i,st (ω) =

; i,st =

ω∈Ωi,st

i,st (ω); i,s =

t

i,st.

We use ρ to denote within-industry revenue shares and r to denote industry-level revenue share. In particular,

ρi,st (ω) =

Ri,s (ω) Ri,s

; ρi,st = ρi,st (ω)dF (ω|ω ∈ Ωst); ri,s =

t

ρi,st

where Ri,st (ω) ≡ pi,sQi,st (ω), recall, denotes total revenues collected by firm ω, with Ri,s ≡ t ω Ri,st (ω)dF (ω|ω ∈ Ωst) denoting industry-level revenues. Appealing to Equations (2) and

(3) we can derive the following relationship between firm and sales shares:

 

θ

Hi,s−θ pi,s = τ`

αi,st = ai,sthi,st/τ`i,stL

γstZρi,st γstZ ρi,st

αi,st αi,st

=⇒

=

1−θ θ



i,st γstZρi,stRi,s

ai,sthi,st α

i,st

Combining the above equation with the adding up constraints, t ρi,st = t αi,st = 1, yields

1 γstZ αi,st t

ρi,st =

=

1

γstZ αi,st

ΓZis γstZ

αi,st, where

1 ΓZis

=

t

1 γi,stZ

αi,st.

To derive a relationship between labor shares and firm shares, we appeal to the fact that gross labor cost equals a constant fraction, γstL, of gross revenues. In particular,

i,stLi Li,st = γstL ×

ρi,stYi,s

Yi,st =⇒ i,st i,st

τi,stL wi ×

γstL τi,stL ρi,st

=

=

γstL τi,stL ρi,st

γstL

τi,stL γstZ αi,st

.

γstL

τi,stL γstZ αi,st

###### Combining this equation with the adding up constraints, t i,st = i,s and t αi,st = 1, delivers

γstL

τi,stL γstZ αi,st

i,st =

γstL

τi,stL γstZ αi,st

t

γstL τi,stL ρi,st

i,s; i,st =

.

γstL τi,stL ρi,st

t

### A.2 Aggregate Labor Productivity (ALP)

We define Aggregate Labor Productivity (ALP) at the level of country-industry-technology as output per worker there. Using the relationship between revenues and quantities as well as the labor market clearing condition, it follows that:

τi,stL γi,stL ×

Ri,st/pis γi,stL /τi,stL × Ri,st/wi

Qi,st Li,st

wi pi,s

ALPi,st ≡

=

=

Similarly, ALP at the level of industry can be expressed as:

(A.1)

Ri,st/pis Li,s

Qi,s Li,s

= t

ALPi,s ≡

=

t

Li,st Li,s × ALPi,st (A.2)

Lastly, we derive the expression for ALP at the level of country. Here, we aggregate over industrylevel output quantities using the final consumption aggregator, Qi = s (Qi,s)β

. Under this assumption, we have:

i,s

(Qi,s)β

Qi Li

i,s

= s

ALPi ≡

(A.3)

Li

βi,s

Li,s Li ×

Qi,s Li,s

=

s

βi,s

Li,s Li ×

Li,st Li,s × ALPi,st

=

s

t

βi,s

τi,stL γi,stL

wi s pβ

×

i,st ×

=

i,s

s t

i,s

βi,s 



τi,stL γi,stL

wi Pi ×

βi,s σs−1

 s t

×

i,st ×

=

(πii,s)

s

where i,st ≡ L

###### Li and πii,s is the domestic expenditure share. In the above, we use Pi,s = pi,s (πii,s)

i,st

1

σs−1 and Pi = s Pβ

i,s

i,s .

To establish the relationship between aggregate labor productivity ALPi (Equation 12) and welfare Wi (Equation 10), start from the third line of the above derivation, and replace for ALPi,st =

Ri,st

pi,sLi,st,

ALPi =

s t

Li,st Li × ALPi,st

βi,s

=

s t

Ri,st pi,s

1 Li ×

βi,s

1 Li s

=

Ri,s pi,s

βi,s

Denoting Yi,s as total value added and γ ̄i,sM as the average cost share of intermediate inputs in country i−industry s, using the relationship between producer and consumer prices (as shown above), and definition of welfare Wi = Yi/Pi, we can express ALPi as:



(Yi,s/Yi) 1 − γ ̄i,sM

βi,s σs−1

 s

×

ALPi =

(πii,s)

s

## B General Equilibrium in Changes

βi,s  ×

Wi Li

### B.1 Specifying the System of GE in Changes

Consider a "policy" as a set of exogenous shocks to trade costs, labor wedges, and productivities, P = {dˆij,s,τˆi,stL ,aˆi,st}. Let B = {σ,θ,πij,s,αi,st,γstL,γstM,γstZ,τi,stL ,φi, s,βi,s,wiLi,Ri,st,Ei,s,Yi} denote the "baseline" values of the general equilibrium—i.e., the set of sufficient statistics. For any generic variable x in the baseline equilibrium, let x be its corresponding value in the counterfactual equilibrium, and xˆ ≡ x /x denote its change from the baseline to the counterfactual equilibrium. Given policy P and baseline values B, the following equations define general equilibrium in changes to trade and technology shares, aggregate sales and expenditures, and prices and wages, E ≡ {πˆij,s,αˆi,st,Rˆi,st,Eˆi,s,Yˆi,pˆi,s,Pˆi,s,wˆi}.

The change to sales in country i−industry s−technology t is:

Ri,st = ai,sthi,st/pi,s × (αi,st)

θ−1

θ , (B.1)

where the change to the share of firms in each technology type is given by:

θ

ai,sthi,st

θ , where ai,st = Aˆi,st

αi,st =

t∈T αi,st ai,sthi,st

1/γstZ

; (B.2)

and the change to technology-specific return to managerial capital is:

st/γstZ τˆi,stL wi pi,s

L

hi,st ≡ τˆi,stL −γ

−γstL/γstZ mi,st pi,s

−γstM/γstZ

, where mi,st =

hi,st

∈S

Pi,

φi, st

. (B.3)

In turn, the change to the industry-level (consumer) price index equals:

1 1−σs

1−σs

, (B.4)

πij,s dij,spi,s

Pj,s =

i∈I

and the change to within-industry share of expenditure (trade share) is:

1−σs

dij,spi,s

1−σs . (B.5)

πij,s =

Pj,s

Lastly, the following four equations guarantee the market clearing conditions and the accounting of general equilibrium. The labor market clearing condition and the goods market clearing condition in the counterfactual equilibrium must satisfy:

wiwiLi =

s,t

γstL τˆi,stL τi,stL

Ri,stRi,st (B.6)

t

Rˆi,stRi,st =

j

πˆij,sπij,sEˆj,sEj,s (B.7)

The change to the industry-level gross expenditures and the total national expenditure (nominal GDP) satisfy:

 βi,sYiYi +

  (B.8)

φsi, γ tMRi, tRi, t

Ei,sEi,s =

t,

1 − γi,stM Ri,stRi,st (B.9)

YiYi =

s,t

We now turn to presenting the computational algorithm that we use to simulate the general equilibrium of our model in response to counterfactual policy shocks.

### B.2 Numerical Algorithm to Simulate the GE in Changes.

- 1. Guess wi and pi,s. (By the choice of numeraire, here we impose that wˆi

0

= 1 for a reference country i0)

- 2. Calculate the change to industry-level price index, Pi,s, according to Equation (B.4).
- 3. Calculate the change to technology-level returns to managerial capital according to Equation (B.3).
- 4. Calculate the change to trade shares, πˆij,s, based on Equation (B.5).
- 5. Calculate the change to technology shares, αi,st, according to Equation (B.2).
- 6. Calculate the change to sales, Rˆi,st, based on Equation (B.1).


- 7. Calculate the change to national expenditure, Yˆi, based on Equation (B.9).
- 8. Calculate the change to industry-level gross expenditures, Ei,s, based on Equation (B.8).
- 9. Update the change to wages and prices, based on market clearing conditions (B.6) and (B.7),


1 wiLi s,t

(wi)new =

γstL τˆi,stL τi,stL

Ri,stRi,st

πˆij,sπij,sEˆj,sEj,s t Rˆi,st/pˆi,st Ri,st

(pi,s)new = j

If the |(wi)new − wi| > and |(pi,s)new − pi,s| > , for a sufficiently small tolerance , then update: wi = (wi)new and pˆi,s = (pi,s)new, and normalize the updated price and wage changes with respect to the wage change in a reference country (whose labor serves as a numeraire), then go to Step 2. Otherwise, the convergence is achieved.

## C Derivation of The Welfare Cost of Misallocation

Consider the closed economy case of our model with one sector and multiple technologies—noting that, with a reinterpretation of indexes, our derivation extends to multiple sectors and technologies. We, accordingly, condense the notation by dropping the industry subscript, s, going forward. To provide closed-form formulas for the degree of misallocation, we make two additional assumptions: First, we assume that production employs only primary factors of production—namely, labor and managerial capital. Second, we assume that the labor intensity parameter, γi,tL , is common across technologies. All in all, we consider a closed economy where production can be conducted under multiple technologies with different labor input wedges, with firms having the ability to choose and adjust their preferred technology.

Intermediate Definitions. The efficient allocation in this stylized version of our model is achieved if labor input wedges and the revenue associated with them are eliminated from the economy—which is akin to analyzing the following shock:

1 τi,tL

τˆi,tL =

; ∀t ∈ T.

Let Wˆi (τˆi) denote the resulting welfare change from the wedge reduction shock, τˆi ≡ τi,tL . We define the degree of misallocation (Di) as the welfare distance between the decentralized (i.e, misallocated) and the efficient economies. Namely,

Di ≡ log Wˆi (τˆi) = log Yˆi (τˆi) − log Pˆi (τˆi).

##### The Change in Technology Composition. Considering our assumption that γi,tL = γi,tL = γiL and γi,tZ = γi,tZ = γiZ for all t and t , we can specify the change in the share of firms choosing technology t as

γL i

L i

−γ

θ

θ

γZ i

γZ i

τi,tL

τˆi,tL

=

.

αˆi,t =

L i

γL i

−γ

θ

θ

γZ i

γZ i

t αi,t τˆi,tL

t αi,t τi,tL

###### Appealing to the above expression, we can characterize the change in technology-level employment shares. For this, we invoke the relationships derived in Appendix A.1 to arrive at

1 τi,tL αi,t t

τi,tL i,t t τi,tL i,t

###### . (C.1)

ρi,t = αi,t; i,t =

; αi,t =

1

τi,tL αi,t

###### Notice that in the efficient, wedge-free equilibrium, employment and revenue shares exactly coincide with firm shares (i.e., i,t = ρi,t = α i,t), yielding the following expression for technology-level employment shares in the counterfactual wedge-free equilibrium:

γL i

θ

γZ i

αi,t τi,tL

i,t = αi,t =

.

γL i

θ

1−γL i

t αi,t τi,tL

γL i

θ

γZ i

αi,t τi,tL

=

γL i

θ

γZ i

t αi,t τi,tL

γL i

θ

γZ i

τi,tL i,t τi,tL

=

.

γL i

θ

γZ i

t τi,tL i,t τi,tL

##### The Change in Nominal Income. In the decentralized (baseline) economy, nominal income in country i is the sum of wage income, managerial rents, and wedge revenues—i.e., Yi = wiLi+Πi+Ti. Noting that wiLi + Ti = t τi,tLwiLi,t and that by cost minimization, Πi = t γ

Z i

###### γiLτi,tLwiLi,t, we can specify the nominal income in the baseline economy as

Yi =

t

=

t

Πi,t wiLi,t

τi,tL +

Li,t Li

wiLi

γiZ γiL

τi,tL 1 +

Li,t Li

wiLi =

t

τi,tL γiL i,t

wiLi.

###### Invoking the same logic, nominal income in the efficient (counterfactual) economy is Yi = t γ1

i i,t wiLi.

L

###### Combining the expressions for Yi and Yi and assigning labor in country i as the numeraire (wi = wi = 1) deliver the following expression for the change in nominal income in country i:

1

γiL t i,t wiLi 1

1 t τi,tL i,t

Yˆi =

=

.

γiL t τi,tL i,t wiLi

Finally, appealing to our short-hand notation for weighted means, E τi,tL = t τi,tL i,t , we can express the change in log income as:

Yˆi ≡ E τi,tL −1 (C.2)

The Change in Consumer Prices. Following Equation (3) in Section 3, the change in the competitive price of goods produced via technology t is

pˆi = Yˆi × Hˆi

−1

, (C.3)

where the above equation uses two features of our stylized model: First, ΓˆZi = 1, since factor intensities are the same across technologies. Second, gross output, Ri, equals value added, Yi, since no intermediate inputs are used in production—and, hence, in a one-sector economy Ri = Yi delivers national income. By choice of numeraire, wˆi = 1, and using Equation (1), we can express the change in Hi as:

1 θ

1 θ

γL i

γL i

γL i

θ

θ

Hˆi =

αi,t τi,tL

αi,t pˆi/τˆi,tL

γZ i

γZ i

γZ i

= (ˆpi)

t

t

Plugging the above expression back into Equation (C.3) yields

Z i θ

−γ

γL i

γiZ

θ

Yˆi

αi,t τi,tL

γZ i

pˆi =

.

t

Using our short-hand notation for means, whereby Eα τi,tL

γL i

θ

γZ i

noting that Yˆi = E τi,tL

−1

(Equation (C.2)), we get

pˆi = Eα τi,tL

γL i

θ

γZ i

Z i θ

−γ

Z i

× E τi,tL −γ

,

= t αi,t τi,tL

γL

i θ γZ i

and

where the first mean on the right-hand side can be converted from an α-weighted mean to an

-weighted mean by noticing that αi,t = τi,t i,t/E [τi,t] . Specifically,

Eα τi,tL

γL i

θ

γZ i

Z i θ

−γ

γL i

= E τi,tL 1+

θ

γZ i

Z i θ

−γ

E τi,tL

γZ i θ

,

which when plugged into our last expression for pˆi, yields

γL i

pˆi = E τi,tL 1+

γZ i

θ × E τi,tL θ−1

Z i θ

−γ

###### . (C.4)

##### Assembling the Pieces Together. The final step collects the expressions for Yˆi (Equation (C.2)) and pˆi (Equation (C.4)), to calculate the degree of misallocation, Di = log Yˆi − log Pˆi . Doing so and rearranging the terms delivers,

γZ i θ

Yˆi pˆi

γL i

1 E τi,tL

θ × E τi,tL θ−1

E τi,tL 1+

γZ i

=

γZ i θ

###### 

###### 

L i

1+γ

θ

γZ i

E τi,tL

γZ i θ

γL i

= E τ ̃i,tL 1+

θ

γZ i

=

,

######  

######  

L i

1+γ

θ

γZ i

E τi,tL

###### where, recall that, τ ̃i,t ≡ τi,t/E [τi,t].

###### Next, we reintroduce the sector subscript, s, for consistency in notation, implicitly assuming that all sectors are symmetric. We also substitute γiL and γiZ with our notation for average input intensities, γ ̄iL, and γ ̄iZ—noting that the average input intensities are the same as γiL and γiZ when sectors are symmetric. With these amendments to the notation, we get the following expression for the welfare cost of misallocation:

γ ̄L i

θ

Di = E τ ̃i,stL 1+

γ ̄Z i

γ ̄Z i θ

###### . (C.5)

###### Later, we invoke this formula to characterize the cost of misallocation in the presence of multiple asymmetric sectors that differ in their factor intensities. Before that, we provide a first-order approximation for Di to elucidate the determinants of misallocation.

##### Approximate Formula. Next, we derive a simple approximation for Di using Taylor's Theorem. To this end, we construct the Taylor expansion of the following function,

γ ̄L i

f τ ̃i,stL t = E τ ̃i,stL 1+

γ ̄Z i

θ ,

###### around τ ̃i,stL = {1,...,1}, which delivers the following second-order approximation

γ ̄L i

E τ ̃i,stL 1+

γ ̄Z i

θ ≈ 1 + 1 +

γ ̄iL γ ̄iZ

- 1

- 2


θ E τ ̃i,stL − 1 +

γ ̄iL γ ̄iZ

θ

1 +

γ ̄iL γ ̄iZ

θE τ ̃i,stL − 1 2

###### Notice that E τ ̃i,stL = 1 since τ ̃i,st ≡ τi,st/E τi,stL . Also, the second term on the right-hand is zero by definition of the mean and the last term is simply the variance of τ ̃i,stL

###### , which we denote

t

###### by Var τ ̃i,stL . Considering these points we can simplify the above approximation as

γ ̄L i

E τ ̃i,stL 1+

γ ̄Z i

- 1

- 2


θ ≈ 1 +

γ ̄iL γ ̄iZ

1 +

θ

γ ̄iL γ ̄iZ

θVar τ ̃i,stL . (C.6)

Plugging the above approximation back into Equation C.5 and noting that log (1 + x) ≈ x when x ≈ 0, we get

γ ̄iL γ ̄iZ

γ ̄iL 2

θ Var τ ̃i,stL .

Di ≈

1 +

- C.1 Cost of Misallocation with Multiple Sectors Next, we consider an economy with multiple sectors that differ in their labor intensities. The


−1

change in nominal income is still given by Yˆi = E τi,stL

. Following our earlier derivations, the change in sector-level prices are given by

Z i,s

−γ ̄

γ ̄L

θ

γ ̄i,sZ

i,s γ ̄Z

θ

Yˆi

αi,st τi,stL

,

pˆi,s =

i,s

t

which, considering that Yˆi = E τi,stL

−1

and our notation for the mean operator, yields

Yˆi pˆi,s

= Eα,s τi,stL

γ ̄L

i,s γ ̄Z

θ

i,s

γ ̄Z i,s θ

Z

i,s−1 .

E τi,stL γ ̄

###### Notice that with multiple sectors αi,st = τi,st i,st/E ,s τi,stL , where E ,s [.] denotes the withinindustry mean weighted by industry s employment shares. Appealing to the point, we can re-write the first mean on the right-hand side of the above equation as

Z i,s

  

  

−γ ̄

L i,s

 

 

1+γ ̄

γ ̄Z i,s θ

θ

θ

γ ̄Z i,s

γ ̄L

τi,tL E ,s τi,stL

i,s γ ̄Z

θ

L i,s

E ,s τi,stL −γ ̄

Eα,s τi,stL

= E

.

i,s

Combining the above two equations, derivers the following expression for the change in real income with respect to industry s goods:

Z i,s

  

  

−γ ̄

L i,s

 

 

 

 

1+γ ̄

θ

γ ̄i,sL

θ

E ,s τi,stL E τi,stL

γ ̄Z i,s

τi,stL E ,s τi,stL

Yˆi pˆi,s

E ,s

=

###### .

To make the notation more compact, redefine the normalized wedges at the technology and industry levels as

E ,s τi,stL E τi,stL

τi,st E τi,stL

; Ti,sL ≡

τ ̃i,st =

.

Finally, given that preferences are Cobb-Douglas across industries Di = s ei,s log Yˆ

pˆi,s , which delivers the following equation for the welfare cost of misallocation in a multi-sector model:

i

Di = log ei,s γ ̄i,sL log T ̃i,sL +

γ ̄L

γ ̄i,sZ θ

i,s γ ̄Z

log E τ ̃i,stL 1+

θ .

i,s

## D Derivations of Trade Effects on Welfare and Labor Pro-ductivity

In this section, we derive the equations presented in Section 4.2.1 of the paper, which specify the impacts of trade on welfare and the labor productivity gains. We first employ the exact hat algebra to derive exact welfare formulas. Moreover, to draw additional insight into the mechanisms behind welfare effects, we also produce local approximations from our exact formulas.

### D.1 Exact Changes to Income Levels and Prices

For any generic variable x in the baseline equilibrium let x be the corresponding value in the counterfactual equilibrium, with the hat variable denoted by xˆ ≡ x /x. Consider a set of shocks to

trade costs, dˆij,k , and labor wedges, τˆi,stL . The welfare impact of these shocks can be written as the change in national income divided by the change in the final consumer price index,

Yˆi Pˆi

Wˆi =

Similarly, the change to the real wage is given by:

wˆi Pˆi

WˆiL =

We now turn to characterizing the change to income levels, wage bills, and prices.

Change in Income. Recall that national income is the sum of net wage payments, the revenue associate with labor wedges, and rents accruing to managerial capital. Namely, Ei = wiLi+Ti+Πi, where Ti ≡ τi,stL − 1 wiLi,s is the revenue from wedges and Πi ≡ s,t,ω Πi,st (ω) is the sum of managerial rents. Since wiLi + Ti = s t τi,stL i,st wiLi and Πi = γ

Z st

γstL (wiLi + Ti), we can

###### express country i's level of income as:

Yi =

s,t

γstZ γstL

1 +

τi,st is,twiLi,

###### where i,st ≡ Li,st/Li. Therefore, the change to income can be expressed as:

Yˆi =

s,t

yi,stτˆi,stˆis,t wˆi, (D.1)

###### where yi,st is the share of income in country i that is generated in industry s−technology t,

Yi,st Yi

yi,st ≡

Z st

1 + γ

###### γstL τi,st i,st s ,t 1 + γ

=

Z s t

γsLt τi,s t i,s t

###### (D.2)

##### Change in Prices. Using Equation (2) from the main text, the change to output (sales) from country i−industry s−technology t , Rˆi,st, equals:

Rˆi,st = pˆi,shˆi,st (αi,st)

θ−1

###### θ (D.3)

###### Moreover, it follows from Equation (1) that the change to returns per dollar of output in country i−industry s−technology t, hˆis,t, is given by:

hi,st ≡

τˆi,stL wi pi,s

−γstL/γstZ mi,st pi,s

−γstM/γstZ

###### (D.4)

###### Replacing hi,st from Equation (D.4) into Equation (D.3) delivers the following expression for Rˆi,s,t:

γL

γL

1 γZ

st γZ

st γZ

st ( ˆwi)−

st ( ˆmi,st)−

st τˆi,stL −

Rˆi,st = (ˆpi,s)

γM

st γZ

θ−1 θ

st (αi,st)

###### The above formula represents the supply in terms of sales as a function of price (moving along the curve) and other variables (shifting the curve). The inverse supply function will then represents the change to producer price as a function of output, and all the shifters,

L st

pˆi,s = τˆi,stL wˆi γ

M

( ˆmi,st)γ

st Rˆi,st

γstZ

st(

Z

(αi,st)−γ

###### ) (D.5)

θ−1 θ

###### Since γstLRi,st = τi,stwi is,tLi, we can express the change to output, Rˆi,st, as:

Rˆi,st = τˆi,stL × wˆi × ˆi,st (D.6)

###### Moreover, the change to price index of the intermediate input bundle can be written as:

mˆ i,st = mˆ i,s =

s

Pˆi,s

φi,ss

###### (D.7)

where φi,ss denotes the share corresponding to origin industry s and destination industry s, with

s φi,ss = 1. Replacing from Equations (D.6) and (D.7) into Equation (D.5), the change to produce price can be expressed in the following way:

L st

pˆi,s = τˆi,stL wˆi γ

Z st

τˆi,stL wˆiˆi,st γ

s

Pˆi,s

φi,ss

γstM

st(

)

θ−1 θ

Z

(αi,st)−γ

It follows from the CES demand structure that the industry-level consumer price index equals

1

1

σs−1 , which implies pˆi,s = Pˆi,s × (ˆπii,s)−

Pˆi,s = pˆi,s × (ˆπii,s)

σs−1. Replacing for pˆi,s, taking logs, using the output shares ρi,st (with t ρi,st = 1), and noting that γstL + γstZ = 1 − γstM, the change to the industry-level consumer price index, Pˆi,s, can be expressed as:

###### where Bi,s is given by:

lnPˆi,s = Bi,s +  ̄γi,sM

s

φi,ss ln Pˆi,s (D.8)

Bi,s ≡ 1 − γ ̄i,sM ln( ˆwi) +

ρi,st 1 − γstM ln τˆi,stL +

t

t

θ − 1 θ

1 σs − 1

ρi,stγstZ

ln(ˆπii,s) −

+

ln(ˆαi,st)

t

ρi,stγstZ ln ˆi,st (D.9)

and, γ ̄i,sM ≡ t ρi,stγstM = t R

Ri,s γstM is the aggregate share of intermediates in gross output of country i−industry s. Equation (D.8) forms a linear system of equations which can be expressed more compactly in the matrix format as:

i,st

  

  

lnPˆi,1 .. lnPˆi,S

xi

######   

  

γ ̄i,M1φi,11 ... γ ̄i,M1φi,1S .. ... ..

=

γ ̄i,SM φi,S1 ... γ ̄i,SM φi,SS

Ai

  

lnPˆi,1 .. lnPˆi,S

   +

  

  

Bi,1 .. Bi,S

Bi

###### The solution to this system of equations is given by:

xi = (I − Ai)−1 Bi

###### The above solution delivers the industry-level consumer price index as lnPˆi,s = k φi,skBi,k,which

###### can be expanded as:

lnPˆi,s =

k

φi,skBi,k

###### = ln( ˆwi) +

k

###### φi,sk 1 − γktM ln τˆi,ktL +

+

k

φi,sk

t

ρi,ktγktZ ln ˆi,kt −

1 σk − 1

φi,sk

k

θ − 1 θ

ln(ˆαi,kt)

ln(ˆπii,k) (D.10)

###### Note, to arrive at the above formula we have used the fact that k φi,sk 1 − γ ̄i,kM = 1.

###### Using Equation (D.10), we can now express the log final consumer price index in the following way:

lnPˆi =

s

βi,s lnPˆi,s = ln( ˆwi) +

βi,sφi,skρi,kt 1 − γktM ln τˆi,ktL +

βi,sφi,sk

s,k

s,k,t

θ − 1 θ

βi,sφi,skρi,ktγktZ ln ˆi,kt −

ln(ˆαi,st)

+

s,k,t

1 σk − 1

ln(ˆπii,k)

###### Converting the log variables to level variables, the exact change to the final consumer price index equals:

######  

######  

βi,sφi,skρi,kt

Z kt

kt) ˆi,kt γ

βi,sφi,sk σk−1

M

τˆi,ktL (1−γ

θ−1 θ

Z kt

(ˆαi,kt)−γ

Pˆi = wˆi ×

×

###### (D.11)

(ˆπii,k)

s,k

s,k,t

##### Integrating Change in Income and Prices. By combining the change in income from Equation (D.1) and change in the consumer price index from Equation (D.11), the change to welfare can be expressed as:

###### where:

Wˆi ≡

Yˆi Pˆi

=

s,t

yi,stτˆi,stˆi,st ×

wˆi Pˆi

wˆi Pˆi

Specialization

ACR

ρi,ktγktZ −βi,sφi,sk

−βi,sφi,sk

1 σk−1

θ−1 θ

ˆi,kt (ˆαi,kt)−

×

(ˆπii,k)

=

s,k t

s,k

−βi,sφi,sk

i,kt(1−γktM)

τˆi,ktL ρ

×

s,k t

###### Wedges

###### (D.12)

###### (D.13)

### D.2 Ex-Ante Welfare Gains from Trade Liberalization

Consider a set of local shocks only to trade costs of country i, keeping all other exogenous parameters (including labor wedges) unchanged. First, we derive the local change to income. Note that the log income change can be written as the change associated with wage bills and wedge revenues plus the one from managerial rents:

wiLi + Ti Yi

dlnYi =

dlnwi + dln

s,t

τi,stL i,st +

s,t

Πi,st Yi

dlnΠi,st

Replacing for

 

 , where E τi,stL ≡

τi,stL E τi,stL

τi,stL i,st =

d ln

i,stdln i,st

s t

s t

and, noting that dlnΠi,st = dlnwi + dln i,st, we obtain:

s t

τi,st i,st

dlnYi = dlnwi+

γ ̄iL 1 − γ ̄iM ×

s,t

τi,stL i,stdln i,st +

1 1 − γ ̄iM s,t

γstZ × ri,sρi,stdln i,st (D.14)

Ri,st

###### Ri γstL is the aggregate share of wage bills in gross output of country i. Similarly, and as before, γ ̄iM ≡ s,t

where γ ̄iL ≡ s,t

Ri,st

Ri γstL is the aggregate share of intermediates in gross output of country i.

Next, we derive the local change to log consumer price index. Note, for an exact change in any

generic variable x, denoted by xˆ ≡ xx = 1+ dxx, the following first order approximation can be used to convert (xˆ) into (dlnx),

dx x

ln ˆx = ln 1 +

= ln(1 + dlnx) ≈ dlnx

We can, therefore, use Equation (D.11) to express the change in log consumer price index:

θ − 1 θ

1 σk − 1

ρi,ktγktZ dln( i,kt) −

dlnPi =

βi,k dln(wi) +

dln(πii,k) +

dln(αi,kt) (D.15)

φi,sk

φi,sk

t

k

k

k

where φi,sk corresponds to entry (s,k) of country i's Leontief inverse matrix. By combining the change in log income from Equation (D.14) and change in log consumer price

index from Equation (D.15), we can derive the change to welfare as:

γ ̄iL 1 − γ ̄iM

1 1 − σk

Cov τi,stL ,dln i,st

dlnWi =

dlnπii,k +

βi,sφi,sk

s,k

 

 

θ − 1 θ s

γktZρi,kt Λi,k −

φi,skρi,ktγktZdln(αi,kt)

βi,sφi,sk dln i,kt +

βi,s

+

s

k,t

k,t

where Λi,s ≡ pi,sQi,s/Yi is the Domar weight for industry s. The above equation reproduce Equation (17) in the main text.

Additionally, let us produce the above formula in the special case of our model in which the economy consists of a single sector. In that case, βi,s ≡ βi = 1, φi,sk ≡ 1/(1 − γ ̄iM), and Λi,k ≡ Λi = 1/(1 − γ ̄iM). Hence,

dlnWi =

∆(Allocative Efficiency) γ ̄iL 1 − γ ̄iM

ACR

1 1 − σ

1 1 − γ ̄M

Cov τi,tL,dln i,t

dlnπii +

θ − 1 θ

1 1 − γ ̄M t

ρi,tγtZ

+

dln(αi,t)

Residual ToT Effects

Note that a portion of the ToT effects associated with changes in rental rate of managerial capital disappear since (Λi,k − s βi,sφi,sk = 0) in the one-sector economy.

### D.3 Ex-Post Welfare Gains from Trade

In this subsection, we derive the ex post welfare gains from trade, as the loss of real national income of each country i if it is moved from autarky to the baseline (observed) equilibrium. For communicating forces at play as clearly as possible, we consider the single-sector version of our model.

To begin, consider any trade cost shock. It follows from Equation (3) in the main text that the change to the produce price is:

 



θ −θ1

Yˆi 1 − γ ̄iM ΓˆZi

Rˆi ΓˆZi

αi,t hˆi,t

Hˆi−1 =

 t

pˆi =

In turn, using Equation (1), the change in the returns to managerial capital equals:

###### (D.16)

hˆi,t =

wˆi pˆi

−γtL/γtZ mˆ i pˆi

−γtM/γtZ

###### (D.17)

In the single-industry version of the model, which we consider here, the price index of the intermediate input is the same as the consumer price index, i.e., mˆ i = Pˆi. In addition, the CES demand

1

structure connects the producer and consumer prices, pˆi = Pˆi (ˆπii)−

σ−1. Replacing for these relationships into Equation (D.17), we can rewrite the change to technology-specific managerial returns as:

L t

−γ

1−γZ

wˆi Pˆi

γZ t

1 σ−1

t γZ t

hˆi,t = (ˆπii)−

(D.18)

Next, note that labor market clearing condition in country i can be expressed as wiLi = ΓLi ×Yi,

where ΓLi ≡ t γtL/τi,tL ρi,t . Using this equation, we can relate the change in wage to change in income:

wˆi = ΓˆLi × Yˆi (D.19)

where ΓˆLi will be specified below. Integrating Equations (D.18) and (D.19), the following expression reorganizes the change to welfare, Wˆi = Yˆi/Pˆi,

 αi,t (ˆπii)−

###### θ 

1 θ

L t

L t

−γ

−γ

1−γZ

1 σ−1

t γZ t

1

Wˆi = (ˆπii)−

γZ

γZ t

σ−1 1 − γ ̄iM ΓˆZi ×

ΓˆLi

t Wˆi

(D.20)

t

Equation (D.20) indirectly represents the change to welfare, Wˆi, in response to any shock to trade costs of the country which is considered. As it is evident from the formula (unless γtZand γtL are invariant between the two technology types) there is generally no closed-form solution to Wˆi.

To make progress, let us focus on the specific case of autarkic counterfactual which corresponds to: πˆii = 1/πii, where πii denotes the baseline domestic expenditure share. We can express the gains from trade, GTi, as the loss in real income when country i is moved from its baseline equilibrium to autarky:

1 σ−1

GTi = 1 − ∆i × π

###### ii , (D.21) where the country-specific multiplier, ∆i, solves the following equation:

  αi,t

θ

 Γˆi,t π

 

1 θ

γM

t γZ t

1−γM

1 σ−1

 

t γZ t

∆−i 1

###### = 1. (D.22)

ii

t

Here, Γˆi,t summarizes the welfare-relevant change in factor intensities across the technology types. Specifically, note that

−1

ΓZi γtZ −1 αˆi,tαi,t

ΓZi =

, (D.23)

t

ΓˆiL =

t

γtL/τtL

ΓZi ΓZi γtZ

αˆi,tαi,t . (D.24)

Given Equations (D.23) and (D.24), we can calculate Γˆi,t according to the following equation:

Γˆi,t ≡

t

1 − γtM

ΓZi ΓZi γtZ

αˆi,tαi,t × ΓˆLi

−γtL/γtZ

× ΓˆZ (D.25)

where the change to technology shares are, αˆi,t, is given by:

θ γZ t

γM

−γtL

t σ−1

ii ΓLi ∆i

π

αˆi,t =

θ γZ t

γM t

−γtL

ii ΓLi ∆i

σ−1

t αi,t π

###### (D.26)

Taking stock, the country-specific multiplier, ∆i, along with ΓZi ,ΓLi ,Γi,t,αˆi,t are the solutions to Equation (D.22), (D.23), (D.24), (D.25) and (D.26).

Gains from Trade in ACR Model. It is instructive to benchmark the gains from trade in our model to the ACR formula. Consider a special case of our model in which production in each industry is restricted to use only one type of technology, αi,s0 = 1 and αi,s1 = 0. In that case, there will be no change in the share of firms and employment across technologies αˆi,st = ˆi,st = 1. Using Equations (D.12) and (D.13), setting τˆi,stL = 1 (no change in labor distortions) and πˆii,s = 1/πii,s (moving to autarky) the GFT in our model reduces to the ACR formula:

GTACRi = 1 −

s,k

1 σk−1

(πii,k)

βi,sφi,sk

.

### D.4 Ex-Ante Labor Productivity Gains from Trade Liberalization

Using Equation (A.3), we can write down the change to (log) aggregate labor productivity (ALP) of country i as:

dln(ALPi) = dln

= dln

Define

wi Pi

+

wi Pi

+

s

s

βi,s σs − 1

dln(πii,s) +

  

βi,s σs − 1

dln(πii,s) +

s

τi,stL γi,stL

δi,st E [δi,st]

, δ ̃i,st ≡

δi,st ≡

=

Therefore, we can rewrite the above formula for ALP as:

s

βi,sdln

######   βi,s

t

τi,stL γi,stL

i,st ×

t

  

  

  

  

τi,stL γi,stL i,st dln i,st

τL

i,st γL

i,st

t

i,st

δi,st t δi,st i,st

dln(ALPi) = dln

wi Pi

+

s

βi,s σs − 1

dln(πii,s) +

s

βi,s

t

δ ̃i,st i,stdln i,st (D.27)

In addition, using Equation (D.13), the change to (log) real wage can be expressed as:

θ − 1 θ

βi,sφi,sk 1 − σk

wi Pi

γstZρi,st dln i,st −

dlnπii,k −

dln

dlnαi,st

=

φi,ksβi,k

t

s,k

k,s

(D.28) Combining Equations (D.27) and (D.28),

dln(ALPi) =

k

βi,k −

s

βi,sφi,sk

1 σk − 1

dlnπii,k +

k,t

−

k,t

δ ̃i,kt i,st

s

φi,skβi,s γktZdln i,st +

k,t

βi,kδ ̃i,kt i,ktdln i,st

θ − 1 θ s

φi,skβi,s γktZρi,ktdlnαi,kt

In a single-sector version of the model, expenditure shares collapse to unity βi,k ≡ βi = 1, and

the entries of the Leontief inverse matrix are φi,sk = φi = 1/(1 − γ ̄iM) where γ ̄iM is the average share of intermediate input use in aggregate production. Hence, the above formula collapses to:

1 1 − γ ̄iM

dln(ALPi) =

γ ̄iM 1 − σ

dlnπii + Cov 1 − γ ̄iM − γtZ δ ̃i,t,dln i,t +

t

ρi,tγtZ

θ − 1 θ

dlnαi,t

where Cov 1 − γ ̄iM − γtZ δ ̃i,t,dln i,t = t 1 − γ ̄iM − γtZ δ ̃i,t i,tdln i,t and ρi,t is the output share from technology t in the single-sector economy.

## E Data for the Quantification of the Model

Firm-level data from WBES. The World Bank Enterprise Survey is a firm-level survey, conducted in more than 150 countries since 2005 and 2006, that covers topics about the business environment, including questions about corruption, competition, bribery, and bureaucracy. There is a global methodology that has been developed to make questions comparable across countries.

The firm-level data come from the World Bank Enterprise Survey (WBES). These data contain rich firm-level information which we use to construct total sales and payments to labor, capital and intermediate inputs. for the manufacturing sector. The WBES data include a wide set of countries in different levels of economic development—specifically, they include cross-sectional data for approximately 90,000 firms operating between 2006-2020 across 140 countries. They are based on surveys that are designed to provide a nationally representative sample of firms. We exploit these data to estimate production technologies and distortions across firm clusters distinguished by their technology status. In addition to data on sales and costs, WBES reports multiple measures of distortions that individual firms face in their businesses, related to corruption, bribery, theft, red tape, bureaucracy, labor market regulations, among many measures. We use these measures to discuss complementary empirical patterns in Section (7.4).

The World Bank provides a unified data set, containing information on the total cost of labor—including measures such as wages, salaries, and bonuses—, the total cost for the firm to

re-purchasing all of its machinery, and the cost of all raw materials and intermediate inputs used in production.30 In addition, this data set provides firm-level information on total sales. All of these variables are deflated according to US dollars as of 2009. Using these data, we construct the ratio of the cost of labor, capital, and intermediate inputs with respect to total sales.

The unified data set provided by WBES, however, does not include the questions about business environment, which we use to construct Appendix Table A.2. We have therefore collected and harmonized all the surveys available from WBES, country by country, to construct a unified data with information on the business environment of firms in countries at different levels of economic development. Specifically, we focus on three firm-level measures of market distortions. First, an indicator variable as to whether labor market regulations are a large obstacle for the firm's business. Second, an indicator variable as to whether tax rates are a large obstacle for the firms' business. Third, an indicator for whether the practice of competitors in the informal market is a large obstacle for the firms' business.31

In addition to the WBES surveys, the Enterprise Analysis Unit at the World Bank also carry a Informal Sector Enterprise Survey (IFS), which focuses on unregistered business. Firms in this dataset are independently sampled relative to the main WBES dataset, and by construction there should be no overlap between the edition focused on informal firms and the main one. The key limitation of the IFS is that it is available for a smaller set of countries. We complement the information from WBES with data from Schneider and Buehn (2007) on the share of GDP attributed to the informal sector, as discussed in La Porta and Shleifer (2008) and La Porta and Shleifer (2014).

Country-Level data from GTAP. At the country-level, we collect global Input-Output data from the Global Trade Analysis Project (hereafter, GTAP) for the year of 2014. The GTAP database reports country-industry-level data on flows of trade, input-output, and value added, among other records. An attractive feature of GTAP data relative to other input-output datasets is its coverage: it includes around 140 countries, spanning countries in largely different levels of economic development. When we take our model to data in Section 5, we harmonize the data from GTAP into a sample of 100 countries, including 99 countries with the largest GDP and another that provides an aggregate representation of the rest of the world.

## F Quantification of the Model

This section provides details about the quantification of the model. Section (F.1) describes how we classify firms into modern and traditional technology types. Section (F.2) explains our calibration of wedges. Section F.3 describes how we estimate the elasticity of output intensity with respect to labor and calibrate remaining factor intensity parameters of traditional and modern production technologies. Section F.4 describes the baseline calibration of our model, and Section B presents our general equilibrium model in changes and the numerical algorithm that we use to simulate it.

- 30We construct the total payment to capital by multiplying the total cost for the firm to re-purchase all of its machinery by an interest rate of 10%.
- 31Each of these indicator variables are provided in five categories in the original data, scaled in terms of how much the firm consider that issue a large obstacle for business. We convert this categorical variable into an indicator variable whether firms consider that issue a moderate or larger obstacle for the firm.


### F.1 Classification of Firms to Traditional and Modern Types

We mean to adopt a simple, transparent method of classification that is free from any particular model assumptions. In line with the literature on firm heterogeneity, our presumption is that firms that use modern technologies tend to have greater sales. We, therefore, base our classification on firms' total sales in terms of adjusted USD.32

Consider the distribution of sales for our sample of manufacturing firms around the world. We classify a firm as modern if the value of its sales lies above a threshold on the sales distribution. To determine this threshold, we adopt an approach inspired by the clustering analysis in Asturias and Rossbach (2019). Let Y (ω) be the value of total sales for firm ω, which we intend to classify into traditional technology (t = 0) or modern technology (t = 1). We use Yt(ω) to denote the total sales of the firm ω conditional on it being classified into technology t. The cutoff point ω minimizes the distance between Yt(ω) and its cluster-level average, Yt. Namely,

 

 ,

Yt(ω) − Yt 2

ω = arg min

t∈{0,1} ω∈Ωt

where Ω0 = {ω|Y (ω) < Y (ω )} is the set of traditional firms, and Ω1 = {ω|Y (ω) ≥ Y (ω )} is the set of modern firms.33

### F.2 Labor Output Elasticities and Wedges

To estimate production functions and wedges, we assume Cobb-Douglas technologies. Specifically, the production function of firm ω that employs inputs {Lf} under technology t is given by:

Q(ω) = At (ω) ×

f

f t

Lf (ω) γ

,

where f indexes production inputs and t denotes technology type. Modern and traditional technologies are, thus, different in terms of their factor intensities—i.e., {γ0f} vs {γ1f}—and in terms of their productivities—the distribution of A0 (ω) vs the distribution of A1 (ω).

In principle, there can be distortions in markets for inputs and outputs. Let τtf (ω) and τtY (ω) respectively denote input and output-side wedges—where a wedge is the difference between the amount paid by buyers and received by sellers. We are, in particular, interested in labor market distortions due to labor wedges. These wedges represent the difference between the amount a firm pays to employ workers and what the workers receive. Cost minimization in the presence of

- 32Several papers have shown that larger firms use more advanced technologies, including Foster, Haltiwanger, and Krizan (2006), Bernard and Jensen (1999), and Bernard, Jensen, Redding, and Schott (2007). A few papers have previously classified firms by their use of modern and traditional technologies, including Lagakos (2016), Diao, Ellis, McMillan, and Rodrik (2021), and Midrigan and Xu (2014), who use measures such as firm-size and formality to construct their classification.
- 33We find that the cutoff ω which breaks down firms into modern and traditional locates at the 46% percentile of the distribution of total sales.


distortions implies

γtf λft (ω)

τtf (ω)τtY (ω) =

,

where λft (ω) is the ratio of payments to input f relative to total sales, and γtf is the output elasticity with respect to input f. In the absence of distortions, the output elasticity of input f equals the

cost share of that input. In the general case, however, knowledge of {γtf}f is not sufficient to disentangle the input wedge from the output wedge. Given our focus on labor market distortions, we overcome this issue by normalizing the wedge on non-labor inputs and on outputs. Under this normalization, it is straightforward to recover labor wedges, τtL, given labor cost shares in total revenues, λLt (ω) , and labor output elasticities, γtL. We observe λLt (ω) in our data, and estimate γtL as explained below.

We estimate the elasticity of output with respect to labor, γtL, for each technology class, using the control function approach (Levinsohn and Petrin, 2003; Olley and Pakes, 1996).34 Specifically, we run regressions of total sales against total payments to labor, including a flexible polynomial function of the payments to intermediate inputs and capital. Given our estimates of γtL for each technology, we use data on λft (ω) to recover τtL (ω).35

### F.3 Estimation and Calibration of Factor Intensity Parameters

The estimation of the output elasticity of labor is based on the control function approach (Levinsohn and Petrin, 2003; Olley and Pakes, 1996). Specifically, the main insight from this literature is that the output elasticity of transitory inputs can be estimated by controlling for a flexible function of the non-transitory inputs (e.g. capital) and the intermediate inputs. We therefore estimate:

yst (ω) = αst +  ̃γstLlst (ω) + fst (kst (ω),ist (ω)) + st (ω), (F.1)

where yst (ω) is the log of total sales of firm ω in industry s using technology t, lst (ω) is the log of total payments to labor, kst (ω) is the log of total payments to capital, ist (ω) is the log of total payments to intermediate inputs, and αst is a set of fixed effects. We employ a fifth order polynomial of kst (ω) and ist (ω) and interaction terms between kst (ω) and ist (ω). Here, γ ̃stL is the output elasticity of labor.36

- 34We notice that our estimation of γtf is based on revenue data, in practice, we therefore recover the revenue elasticity of labor instead of the output elasticity. As discussed in Hashemi, Kirov, and Traina (2022), when one uses revenue data, the ratio of the revenue elasticity to input cost share in total revenue already recovers the labor wedge, without any normalization on output wedge.
- 35Following the control function approach, we assume that labor is the flexible input and that capital is a state variable for the firm. As such, we can consistently estimate the output elasticity of labor by controlling for a flexible polynomial of capital and intermediate inputs, which will absorb the effect of the unobserved firm-level productivity. Since we do not have a panel-data, we are unable to fully implement the production function estimation approach in the literature (Levinsohn and Petrin, 2003; Olley and Pakes, 1996) to estimate the output elasticity of the remaining inputs. When we take the model to data, we calibrate the remaining factor intensity parameters of the production functions using aggregate moments and our assumption that production functions are constant-returns-to-scale.
- 36As discussed in the main body of the paper, since we use revenue data instead of output data, we recover the revenue elasticity of labor (Hashemi, Kirov, and Traina, 2022). We would still recover the relevant object


In the discussion of our empirical patterns, we use both our estimates of labor intensity γ ̃stL by industry, as well as our estimates of labor intensity when we pool all the manufacturing industries, so that we have one labor-intensity for the modern technology, γ ̃1L, and one for the traditional technology, γ ̃0L. Because we find these labor-intensity parameters to be similar across industries, to simplify matters, in our quantitative analysis of the model we work with the case in which the output elasticity of the modern technology and the traditional one are the same across industries.

Once with estimates of γ ̃tL, as we turn to the calibration of the model, we impose the assumption that the production function is Cobb-Douglas with constant returns to scale. In that case, the output elasticity of labor, given by our estimate of γ ̃tL from Equation (F.1), becomes the share of labor in the Cobb-Douglas function, γtL. To recover the rest of the parameters, we rely on the constant-returns to scale assumption and assume that there are three factors of production: (i) labor (L), (ii) managerial capital (Z), and (iii) intermediate inputs (M). This gives us 6 parameters to be calibrated: {γtL,γtZ,γtM}t∈{0,1}. We already have γ0L and γ1L from our estimation of Equation (F.1). We are then left with 4 parameters to be calibrated. Imposing constant returns to scale (γtL + γtZ + γtM = 1) gives 2 equations:

- γ0L + γ0Z + γ0M = 1 (F.2)
- γ1L + γ1Z + γ1M = 1 (F.3)


We still need two additional equations. The third equation that we use is:

ρ0γ0M + ρ1γ1M = γ ̄M (F.4)

where γ ̄M is the average cost share of intermediate inputs across firms, ρ0 is the share of sales under the traditional technology, and ρ1 is the share of sales under the modern one. We pick ρ0 and ρ1 directly from our classification of firms into modern and traditional technologies using the WBES data. For γ ̄M, we have different potential values to pick, depending on the interpretation of the model and the data. Since we work with a static model, what we refer to as the intermediate input category includes, in part, durable intermediate goods such as various forms of tradeable machinery and equipment. Some of these items, in turn, are likely to be counted under the category of capital in firm-level data such as WBES. On the other hand, input-output databases such as GTAP dataset are likely to have a different definition to distinguish between intermediate inputs and capital. In addition, input-output records largely rely on imputations in the case of missing records and inconsistencies in the accounting of flows. In other words, input-output tables are not observed data, but constructed data subject to the accounting of trade and production flows. For these reasons, the average cost share of intermediate inputs differs between WBES and GTAP. We therefore use a simple rule and pick the average between these two sources of data as the value of γ ̄M.

To obtain our fourth equation, we impose the assumption that firms select into modern and traditional technologies based on a Fr ́echet distribution. This gives us the following ratio of average

for our purpose in this paper.

employment of workers in the modern, L1, and traditional sectors, L0:37

γ1L γ0L

- γ0Z

- γ1Z


L1 L0

. (F.5)

=

As such, we have four equations (F.2)-(F.4) and four unknowns, which allows us to pin down all the factor shares. Aggregating across manufacturing industries, we obtain the intensity parameters of the manufacturing traditional technology, (γ0L,γ0M,γ0Z) = (0.404,0.120,0.476), and modern technology, (γ1L,γ1M,γ1Z) = (0.281,0.596,0.123).

### F.4 Calibration of the Baseline Equilibrium

To calibrate the baseline equilibrium of our model, we combine the country-level data from GTAP dataset and statistics and estimates that we have obtained based on the WBES dataset.

From WBES, we obtain the share of firms in traditional and modern technologies across countries, their corresponding share of sales. Since the number of firms covered in WBES are relatively low for some country-industry pairs, we assign the national-level share of modern firms in the aggregate of manufacturing to individual manufacturing industries, αi,st ≡ αi,t. In turn, we observe the technology-specific share of sales, ρi,st.

From GTAP, we obtain within-industry share of expenditure (trade shares), πij,s, withinintermediate expenditure shares (input-output parameters), φi,ss , (here, we assume that withinintermediate-input shares are common to both technologies, φi,ss 0 = φi,ss 1 = φi,ss ) and final expenditure shares, βi,s. We use the technology-specific intermediate input shares, γi,stM , as explained in Section F.3.

The general equilibrium of our model requires that the following three equations hold (Equations 7, 8, 9),

φi,s stγsMtρi,s tRi,s

Ei,s = βi,sYi +

s ∈S t∈T

Yi =

s∈S t∈T

1 − γi,stM ρi,stRi,s

Ri,s =

πij,sEj,s

j∈I

Given {ρi,st,πij,s,φi,s s,γstM,βi,s}, We solve for {Ei,s,Ri,s,Yi} consisting of industry-level expenditures, Ei,s, industry-level sales, Ri,s, and GDP, Yi, such that the above system of equations hold.

37To see that, notice that the average ratio of sales in the modern and traditional technology satisfies γ1Z

R1 N1

R0 N0

= γ0Z

, where Rτ is total sales and N is the total number of firms. Given our Cobb-Douglas

wL0/N0 γ0L

wL1/N1 γ1L

= γ0Z

assumption, that expression can be written as γ1Z

. Assuming that wages equalize across firms give us equation (F.5).

### F.5 Robustness using Formal vs Informal Firms

This section describes how we construct our robustness analyses for the case in which we classify firms into modern and traditional types depending on whether they operate in the formal or informal sector.

To simulate the model using the data on formal and informal firms from WBES, we have to

obtain different production elasticities (γtM, γtZ and γtL), new labor wedges (τi,tL), share of firms that are in the formal sector (αi,kt), and share of revenues in the modern sector (ρi,kt).

To estimate new production technologies, we estimate, separately for each dataset, the output elasticity of labor (γtL), using the control function approach. We follow the same procedure as described in section F.3 to recover the other elasticities — i.e., γtM and γtZ. Notice that to accomplish that, we need the share of revenues on informal firms, which we pick from Schneider and Buehn (2007) — in some cases, we impute the data on these share based on the linear prediction against GDP per capita. To convert the share of GDP to share of total sales, we use the average share of intermediate inputs in the informal and formal sector given by the WBES data. As a result, we get for the informal sector (γ0L,γ0M,γ0Z) = (0.528, 0.411, 0.060) and for the formal sector, (γ1L,γ1M,γ1Z) = (0.392, 0.587 ,0.019).

To recover the wedges, since we only have data on the informal sector for 23 countries, we adopt the following procedure. First, we recover, for these 23 countries, the wedge implied by the production function that we estimate, which we call τi,tL,F. We then run a regression of these wedges against the wedges that we recovered in our baseline analysis, which we call τi,tL,M:

τi,tL,F = αt + βtτi,tL,M + i,t

we then use the predicted values from that regression for our analysis. Appendix Figure A.8 shows the distribution of labor wedges in this new classification that we use to feed our model.

Lastly, to simulate the model we also need the share of firms in the formal and informal sector. To do so, we use information on the total sales in the informal sector, constructed based on Schneider and Buehn (2007), and we then apply the following relationship implied by our model:

γs,tρi,st t ρi,s tγstZ

.

αi,st =

With the pieces above, we have all the elements that we need to simulate our counterfactuals.

## G Additional Tables and Figures

- Table A.1: Labor Intensity by Firm Technological Classification - Alternative Estimation Specifications

Control Traditional Modern Criterion Function Cutoff Avg Min Max Avg Min Max Diff Variable Polynomial Criterion (1) (2) (3) (4) (5) (6) (7) Total sales Second Median 0.422 0.390 0.477 0.286 0.233 0.327 -0.135 Total sales Fifth Median 0.418 0.388 0.470 0.275 0.228 0.317 -0.142 Total sales Second Top quartile 0.434 0.399 0.498 0.221 0.166 0.279 -0.212 Total sales Fifth Top quartile 0.430 0.397 0.490 0.216 0.163 0.277 -0.213 Total costs Second Median 0.491 0.443 0.550 0.399 0.332 0.459 -0.092 Total costs Fifth Median 0.491 0.443 0.548 0.397 0.331 0.453 -0.094 Total costs Second Top quartile 0.463 0.425 0.507 0.397 0.320 0.453 -0.065 Total costs Fifth Top quartile 0.462 0.423 0.507 0.395 0.319 0.448 -0.066

Notes: This table presents the distribution of our estimates of the labor intensity using different specifications. We use two different variables to group firms into modern and traditional: total sales and total costs. We use different flexible polynimals for the control function and the interactions between the inflexible variable and the intermediate inputs in levels. We also split the sample into modern and traditional based on whether the firm is above the median in the grouping variable, or in the top quartile. The final column presents the difference between the average labor intensity among modern and traditional firms.

- Table A.2: Direct Evidence on the relationship between Market Distortions and Modern Firms across countries in Different Levels of Economic Development


Labor Informal Taxes Regulation Sector Barrier

(1) (2) (3) Modern 0.647*** 0.756 1.035***

(0.196) (0.469) (0.226) Modern × log(GDP per capita) -0.062*** -0.103* -0.111***

(0.022) (0.056) (0.024) pseudo-R2 0.110 0.062 0.073 Obs 76364 73420 77574 Country FE Y Y Y

Notes: This table report results from the estimation of the following equation

yic = αc + γ × 1(moderni) + β × 1(moderni) × log (GDPc) + ic,

where i denotes a firm and c a country. 1(moderni) is an indicator for whether a firm is classified as modern, yic are the direct measures of market distortions from WBES, and ic is the error term. All regressions are estimated via poisson pseudo-likelihood regression and weighted according to firms sampling weights. The dependent variables in each column are: (1) an indicator variable whether the practices of competitors in the informal sector are a large barrier for their activities, (2) an indicator variable for whether labor market regulations are a large barrier for their activities, and (3) an indicator variable for whether taxes are a large obstacle for their activities. * / ** / *** denotes significance at the 10 / 5 / 1 percent level. Robust standard errors are clustered at the country level.

##### Table A.3: Wedges, Firms' Technology, and GDP per capita - Alternative Specifications

Control Modern LGDP × Modern Criterion Function Cutoff coef coef Obs pseudo-R2 Variable Polynomial Criterion (1) (2) (3) (4) Total sales Second Median 1.287*** -0.104*** 63987 0.113 Total sales Fifth Median 1.261*** -0.103*** 63987 0.111 Total sales Second Top quartile 1.074*** -0.115*** 63987 0.095 Total sales Fifth Top quartile 1.063*** -0.115*** 63987 0.095 Total costs Second Median 1.407*** -0.136*** 63987 0.100 Total costs Fifth Median 1.400*** -0.136*** 63987 0.100 Total costs Second Top quartile 1.012***** -0.087** 63987 0.098 Total costs Fifth Top quartile 1.009***** -0.088** 63987 0.098

Notes: This table reports results for the relationship between labor market wedges and firms' technological classification across countries in different levels of economic development. Each row shows the estimation of the following equation

τickt = αc + φk + γ × 1(moderni) + β × 1(moderni) × log (GDPc) + ickt,

where i denotes a firm, c a country, k a sector, and t a technology type. 1(moderni) is an indicator for whether a firm is classified as modern, τickt are the model-implied measures of labor distortions, and ickt is the error term. For each specification. For each alternative specification in the estimation of labor elasticity, we run a regression of the labor wedge against an indicator variable for modern technology classification, an interaction term between the log of GDP per capita of the country, and country and industry fixed effects. Regressions are estimated via PPML, so that coefficients should be interpreted as elasticities. * / ** / *** denotes significance at the 10 / 5 / 1 percent level. Standard errors are clustered at the country level.

##### Table A.4: Labor Wedges and Market Distortions

Log of Labor Log of Informal Log of Taxes Regulation Sector Barrier

(1) (2) (3) Log of avg labor wedge -0.056 0.458*** 0.267*

(0.145) (0.138) (0.135) R2 0.001 0.155 0.055 Obs 77 77 78

Notes: * / ** / *** denotes significance at the 10 / 5 / 1 percent level. Robust standard errors. This table reports the coefficients of a regression of different direct measure of market distortions, from the WBES surveys, on the labor distortions implied by our calibration procedure.

##### Table A.5: The Impacts of Trade Liberalization on Labor Markets in Low-income Countries

(1) (2) (3) (4)

Trade Development Trade and Col (3) relative to Shock Shock Development Shock the baseline of Col (2)

Agg. Labor Productivity 4.2% 84.7% 97.4% 6.5% Real Wages 7.9% 104.7% 129.1% 11.3% VA per worker in Mfg 8.1% -52.3% -47.0% 10.6% Share of Mfg. Modern Firms 18.4% 83.4% 94.3% 5.4% Mfg. Employment 1.6% -39.6% -41.1% -3.4% Avg. Mfg. Labor Intensity -2.2% -5.1% -6.1% -1.1% Avg. Mfg. Intrm. Input Intensity 7.5% 18.5% 22.2% 3.1%

Notes: This table shows the average percentage change to selected variables in low-income countries in response to the trade shock and/or development shock in line with our design of counterfactuals discussed in Section (6.2).

##### Figure A.1: Labor Intensity by Modern and Traditional Firm across Sectors

|0.39<br><br>0.28<br><br>0.39<br><br>0.19<br><br>0.40<br><br>0.25<br><br>0.37<br><br>0.26<br><br>0.36<br><br>0.27<br><br>0.38<br><br>0.28<br><br>0.38<br><br>0.29<br><br>0.43<br><br>0.29<br><br>0.44<br><br>0.31<br><br>0.40<br><br>0.31<br><br>0.38<br><br>0.31<br><br>0.43<br><br>0.34<br><br>0.1.2.3.4.5 Labor intensity<br><br>ALL Vehicles Metals Elec/MachOther Mfg Plastic Food Paper Textile Wood ChemicalsMinerals<br><br>|Traditional Firms Modern Firms|
|---|
|
|---|


0.1.2.3.4.5 Labor intensity

Notes: This figure shows our estimates of output elasticity of labor by firm status in terms of modern and traditional technology, for the manufacturing industry as a whole, and by disaggregation, using firm-level data from WBES. Section F provides details about the methodology that we apply to estimate production technologies and assign firms into modern and traditional technological types.

##### Figure A.2: Labor Intensity according to Three Technology Types - Complementary Pattern 1

|0.42<br><br>0.27<br><br>0.21<br><br>0.37<br><br>0.28<br><br>0.16<br><br>0.40<br><br>0.25<br><br>0.17<br><br>0.38<br><br>0.24<br><br>0.19<br><br>0.34<br><br>0.25 0.21<br><br>0.38<br><br>0.25 0.22<br><br>0.39<br><br>0.26 0.22<br><br>0.39<br><br>0.24 0.22<br><br>0.44<br><br>0.32<br><br>0.22<br><br>0.36<br><br>0.29 0.25<br><br>0.41<br><br>0.31<br><br>0.25<br><br>0.41<br><br>0.26<br><br>0.28<br><br>0.1.2.3.4.5.6 Labor intensity<br><br>ALL Vehicles Metals Plastic Other MfgChemicalsElec/Mach Food Textile Wood Minerals Paper<br><br>|Top Medium Bottom|
|---|
|
|---|


Notes: This figure replicates the exercise in Figure A.1 but using three technology regimes rather then two. Here, we split the sample in terms of firm size according to three groups within each sector of the economy: (1) those in the first quartile in the distribution of firm size; (2) those in the bottom quartile in that distribution; and (3) those in the second and third quartile.

##### Figure A.3: Welfare Cost of Misallocation in Closed Economies

Notes: This figure shows the distance to the efficient frontier (i.e., welfare costs of labor market distortions) for closed economies. Quantifying the distance to the efficient frontier of closed economies requires two counterfactuals. First, we move economies to autarky by raising trade costs to infinity. Second, in addition to moving economies to autarky, we eliminate their labor market distortions. The difference between these two counterfactual outcomes maps to the welfare cost of misallocation if countries were operating as closed economies. Each bar shows our results by averaging them across countries in the high, middle, and lowincome groups, evaluated at three different values of the technology elasticity (θ). The figure shows that the welfare cost of misallocation is larger in low-income countries, and particularly more so when the technology elasticity (θ) is larger.

##### Figure A.4: Impact of Trade on Real Wage with and without Distortions

Notes: This figure shows the percentage change to real wage among low-income countries in response to a 20% reduction in trade costs. The x-axis reports changes under the status quo labor wedges, the y-axis reports changes under no labor wedges.

##### Figure A.5: Impact of Trade on Value Added per Worker in Manufacturing with and without Distortions

Notes: This figure shows the percentage change to value added per worker in manufacturing among lowincome countries in response to a 20% reduction in trade costs. The x-axis reports changes under the status quo labor wedges, the y-axis reports changes under no labor wedges.

##### Figure A.6: Impact of Trade on Welfare with and without Distortions

Notes: This figure shows the percentage change to aggregate welfare among low-income countries in response to a 20% reduction in trade costs. The x-axis reports changes under the status quo labor wedges, the y-axis reports changes under no labor wedges.

##### Figure A.7: Impact of Trade liberalization on Aggregate labor Productivity across Low, Middle, and High-income Countries

Notes: This figure shows the percentage change to aggregate labor productivity in response to a 20% reduction in trade costs, averaging the results for low, middle, and high-income country groups.

FigureA.8:ProductionTechnologyandLaborWedges-AlternativeEstimationProcedures

- (a)LaborIntensity

|0.38<br><br>0.30<br><br>.5 .4 .3 .2 .1 0<br><br>Output elasticity of labor<br><br>|Traditional Firms<br><br>Modern Firms|
|---|
<br><br>ditional Firms<br><br>dern Firms|
|---|


- (b)LaborWedges

|1.28<br><br>2.12<br><br>2 1.5 1 .5 0<br><br>Labor Wedge<br><br>Traditional Firms<br><br>Modern Firms|
|---|


1.28

2.12

Traditional Firms

Modern Firms

- (c)LaborIntensity

|0.53<br><br>0.39<br><br>.8 .7 .6 .5 .4 .3 .2 .1 0<br><br>Output elasticity of labor<br><br>Informal Firms<br><br>Formal Firms|
|---|


0.53

0.39

Informal Firms

Formal Firms

- (d)LaborWedges


BaselineFormalvs.Informal

|1.91<br><br>5.04<br><br>5 4 3 2 1 0<br><br>Labor Wedge<br><br>Informal Firms<br><br>Formal Firms|
|---|


5.04

Informal Firms

Formal Firms

1.91

- (e)LaborIntensity

|0.38<br><br>0.30<br><br>.5 .4 .3 .2 .1 0<br><br>Output elasticity of labor<br><br>|Traditional<br><br>Modern|
|---|
<br><br>Traditional<br><br>Modern|
|---|


0.38

0.30

Traditional

Modern

- (f)LaborWedges

|2.61<br><br>5.62<br><br>6 4 2 0<br><br>Labor Wedge<br><br>|Traditional<br><br>Modern|
|---|
<br><br>Traditiona<br><br>Modern|
|---|


2.6

Traditio

Modern

- (g)LaborIntensity

|0.41<br><br>0.28<br><br>.5 .4 .3 .2 .1 0<br><br>Output elasticity of labor<br><br>|Traditional<br><br>Modern|
|---|
<br><br>Traditional<br><br>Modern|
|---|


0.41

0.28

Traditional

Modern

- (h)LaborWedges


LowIncomeHigh-andMiddle-Income

|2.26<br><br>2.90<br><br>3 2 1 0<br><br>Labor Wedge<br><br>|Traditional<br><br>Modern|
|---|
<br><br>Traditional<br><br>Modern|
|---|


2.90Traditional

2.26

Modern

Notes:ThesefiguresshowestimatesofthelaborintensityandthelaborwedgesdiscussedinSection7.Panels(a)and(b)reportthelaborintensity

basedonwhethertheyareformalorinformal,asdiscussedinSection7.1.Panels(e)to(h)reportourresultswhenweseparatelyestimatethelabor

andlaborwedgeforourbaselineanalysis.Panels(c)and(d)thelaborintensityandlaborwedgeswhenweclassifyfirmsintomodernandtraditional

intensitiesandwedgesbasedonwhetherthecountryislow-incomeormiddle-andhigh-income,asdiscussedinSection7.2.

FigureA.9:RobustnessCheckonTradeLiberalization

(b)RealWage(c)ALP(d)RealWage(a)ALP

MultipleTechnologiesFormalvs.Informal

(e)ALP(f)RealWage(g)ALP(h)RealWage

LowThetaHigh-Theta

Notes:Thesefiguresshow,foreachcalibrationprocedure,thepercentagechangetoaggregatelaborproductivityandrealwageinresponsetoa20%

reductionintradecosts.ResultsarediscussedinSection7.

##### Figure A.10: Impact of Trade liberalization on Aggregate Labor Productivity and Technology Adoption along Different Values of the Technology Elasticity

Notes: This figure shows, for each value of the technology elasticity (θ) on the x-axis, the percentage change (averaged across low income countries) to the share of modern firms (right-hand side y-axis) and aggregate labor productivity (left-hand side y-axis) in response to a 20% reduction in trade costs.

## Appendix References

Asturias, J., and J. Rossbach (2019): "Grouped Variation in Factor Shares: An Application to Misallocation," Available at SSRN 3546842.

Bernard, A. B., and J. B. Jensen (1999): "Exceptional exporter performance: cause, effect, or both?," Journal of international economics, 47(1), 1–25.

Bernard, A. B., J. B. Jensen, S. J. Redding, and P. K. Schott (2007): "Firms in international trade," Journal of Economic perspectives, 21(3), 105–130.

Diao, X., M. Ellis, M. S. McMillan, and D. Rodrik (2021): "Africa's Manufacturing Puzzle: Evidence from Tanzanian and Ethiopian Firms,"Discussion paper, National Bureau of Economic Research.

Foster, L., J. Haltiwanger, and C. J. Krizan (2006): "Market selection, reallocation, and restructuring in the US retail trade sector in the 1990s,"The Review of Economics and Statistics, 88(4), 748–758.

Hashemi, A., I. Kirov, and J. Traina (2022): "The production approach to markup estimation often measures input distortions," Economics Letters, 217, 110673.

La Porta, R., and A. Shleifer (2008): "The unofficial economy and economic development," Discussion paper, National Bureau of Economic Research.

(2014): "Informality and development," Journal of economic perspectives, 28(3), 109–126. Lagakos, D. (2016): "Explaining Cross-Country Productivity Differences in Retail Trade," Jour-

nal of Political Economy, 124(2), 579–620. Levinsohn, J., and A. Petrin (2003): "Estimating production functions using inputs to control for unobservables," The review of economic studies, 70(2), 317–341. Midrigan, V., and D. Y. Xu (2014): "Finance and misallocation: Evidence from plant-level data," American economic review, 104(2), 422–58. Olley, G. S., and A. Pakes (1996): "The Dynamics of Productivity in the Telecommunications Equipment Industry," Econometrica, 64(6), 1263–1297. Schneider, F., and A. Buehn (2007): "Shadow economies and corruption all over the world: revised estimates for 120 countries," economics, 1(1).
