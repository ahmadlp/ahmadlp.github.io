---
title: Discrete Trade
slug: discrete-trade
status: published
date: '2020-09-01'
display_date: September 2020
venue: Journal of International Economics
authors:
- Ahmad Lashkaripour
coauthors: []
abstract: International quality specialization (IQS) and pricing-to-market (PTM) are
  two of the most studied phenomena in international trade. I present new evidence
  that PTM and IQS are significantly more pronounced in discrete industries that involve
  indivisible consumption goods. In light of this observation, I develop a generalized
  model of international trade that accommodates both discrete and continuous industries.
  Using this general framework, I argue that IQS and PTM in discrete industries are
  magnified by (i) affordability constraints, and (ii) cross-country differences in
  the price of non-traded services. These predictions find strong support from micro-level
  trade data. Furthermore, I show that the unique forces underlying discrete trade
  shed fresh light on the gains from trade and the "big-push" effects of globalization.
summary: This paper shows that indivisible goods generate stronger pricing-to-market
  and quality specialization patterns than standard trade models predict. It uses
  that insight to reinterpret how globalization works in discrete-product industries.
keywords:
- discrete trade
- quality specialization
- pricing to market
- trade models
- globalization
topics:
- quantitative-trade-models
- markups-scale-economies-and-trade
body_source: latex
latex_dir: latex-src/discrete-trade
latex_main: Discrete_R3.tex
latex_engine: pdflatex
pdf_url: Lashkaripour_Discrete_2020.pdf
markdown_url: sources/discrete-trade.md
canonical_url: https://alashkar.pages.iu.edu/papers/discrete-trade.html
updated_at: '2026-04-01'
sort_order: 9
published_url: https://www.sciencedirect.com/science/article/abs/pii/S0022199620300799
slides_url: null
working_paper_url: null
online_appendix_url: null
dashboard_url: null
replication_slug: discrete-trade-replication
raw_replication_url: Replication_Page_Discrete_Trade.html
---

## Machine-readable full text

This section was extracted with OpenDataLoader PDF from the hosted PDF so the full text is accessible in HTML and Markdown.

Journal of International Economics 126 (2020) 103363

Contents lists available at ScienceDirect

# Journal of International Economics

journal homepage: www.elsevier.com/locate/jie

Full length articles

## Discrete trade

Ahmad Lashkaripour

Indiana University, Wylie Hall 305, 100 S Woodlawn Ave, Bloomington, IN 47405, USA

a r t i c l e i n f o a b s t r a c t

International quality specialization (IQS) and pricing-to-market (PTM) are two of the most studied phenomena in international trade. I present new evidence that PTM and IQS are significantly more pronounced in discrete industries that involve indivisible consumption goods. In light of this observation, I develop a generalized model of international trade that accommodates both discrete and continuous industries. I argue that IQS and PTM in discrete industries are magnified by (i) affordability constraints, and (ii) cross-country differences in the price of non-traded services—both of which arelessrelevantin continuousindustries.Thispredictionfindssupportfrom micro-leveltradedata.I then map the discrete model to macro-level data and show that the unique forces underlying the model shed fresh light on the gains from trade and the "big-push" effects of globalization.

Article history: Received 25 February 2019 Received in revised form 23 June 2020 Accepted 24 June 2020 Available online 12 July 2020

Research data related to this submission: https://alashkar.pages.iu.edu/ Replication_Page_Discrete_Trade.html

Keywords: © 2020 Elsevier B.V. All rights reserved. Discrete Indivisible Quality specialization Pricing to market Non-traded Services,Gains from trade Scale effects Big push Home-market effect

1. Introduction

Around 50% of all U.S. import transactions from 1989 to 2015 involved discrete goods such as "Transport Equipment", "Electronics & Appliances," and "Machinery." A defining feature of these goods is that they are indivisible and durable. That is, consumers can purchase discrete goods, like cars, smartphones, or washer-dryers, in only integer quantities. However, once purchased, these goods supply a continuous flow of transportation, communication, or laundry services.1

Indivisibility of this kind has sharp implications for consumer choice. Most importantly, consumers cannot buy a fraction of multiple discrete goods. They are instead left with two options: (a) pay the price of one full unit, which is akin to paying a fixed acquisition cost; or (b) purchase a service that can substitute for such goods. They can also combine these two options. For instance, a consumer may purchase a personal vehicle for day-to-day use and spend the rest of their transportation budget on more-specialized transportation services. Either way and unlike what standard models assume, consumers cannot just buy a small fraction of different varieties of cars for different transportation demands.2

E-mail address: .

- 1 Researchers often thinkof discrete goods as providinga flowof services: Cars, for instance, provide a flowoftransportation services, or washer-dryer units providea flow of dry-cleaning services—see Benhabib et al. (1991), Cooley and Prescott (1995), and Fernandez-Villaverde and Krueger (2011), among many others, for this analogy.
- 2 There is always the option of renting or leasing multiple varieties of a discrete good. Here, I treat that option as a type of service. But even then, one should bear in mind that in most low-income countries this option is not widely-accessible (see Banerjee (2003)). Also, this option is less plausible for non-portable discrete goods such as home appliances.


https://doi.org/10.1016/j.jinteco.2020.103363 0022-1996/© 2020 Elsevier B.V. All rights reserved.

These practical issues have received formal attention in several fields, including industrial organization and macroeconomics. Given the prevalence of discrete trade, one may also expect careful modeling of these same issues in mainstream theories of international trade. However, on the contrary, the issue of discreteness remains largely untreated in mainstream trade models.

A possible argument for this lack of attention is that discreteness plays a less critical role when studying macro-level trade patterns. But a basic analysis of product-level US trade data challenges this argument. In particular, comparing discrete industries to continuous (non-discrete) counterparts, such as "Food," "Chemicals," or "Textile & Apparel," indicates that

- (i) There is significantly more cross-national quality/price heterogeneity within discrete industries;
- (ii) There is a greater degree of international quality specialization (IQS) in discrete industries; and
- (iii) There is a greater degree of pricing-to-market (PTM) in discrete industries.


These differences remain significant, even after we control for other characteristics like the intended final use or degree of product differentiation. At face value, the above regularities suggest that in discrete industries, trade patterns such as IQS and PTM are amplified by forces that are dormant in continuous industries. Such forces are also inevitably overlooked by mainstream theories that treat all industries or goods as continuous.

Motivated by this evidence, I develop a simple model of discrete trade that pursues two objectives. First, I use the model to elucidate how discreteness may affect macro-level trade patterns (like IQS and PTM) in ways that are difficult to understand from the lens of standard trade models. Second, I use the discrete model to determine how accounting for discrete trade revises our understanding of the gains from trade—an issue that has received considerable attention in the contemporary trade literature.

My theory accommodates both continuous and discrete industries. Continuous industries are modeled in a fairly standard fashion. My modeling of discrete industries, however, is grounded in three basic assumptions. (i) Discrete goods are indivisible, wherein purchasing them involves paying a unit price that is akin to a fixed acquisition cost. (ii) The consumption flow derived from a personally-acquired discrete good is increasing in its quality and can be substituted with analogous services. (iii) Quality and quantity are not isomorphic: a firm cannot produce a lower quality version of their product by employing fewer inputs under the same production technology. Instead, any supply-side adjustment to output quality involves paying a fixed R&D cost.

Using the above model, I show that in discrete industries, IQS and PTM are magnified by two forces that are less relevant in continuous industries:

- (i) Cross-national heterogeneity in the price of non-traded services, and
- (ii) Affordability constraints, whereby consumers with a limited budget cannot afford certain discrete varieties.


Both of these forces operate in a somewhat similar fashion. They lead to the market-level demand elasticity and demand for quality to diverge across rich and poor markets, even when individual-level preferences are homothetic and identical across rich and poor consumers.

The role of force (i) in prompting cross-national demand differences can be explained as follows. In each national market, discrete goods compete head-to-head with services; but services are significantly more expensive in high-wage economies (i.e., the Balassa-Samuelson effect). As a result, the opportunity cost of acquiring a discrete good is lower in high-wage markets, and this is true across all income groups. These considerations give rise to two macro-level demand patterns. First, the overall demand for discrete goods is less price-elastic in high-wage markets. Second, there is also more demand for high-quality (high-cost) discrete varieties in these markets.

To give an example, consider a premium hair-clipper that is a discrete tradable good. In Mumbai, India, the supplier of the hair-clipper competes with $5 haircut services, whereas in Oslo, Norway, it competes with $80 haircut services.3 As a result, Indian consumers (across all income groups) will exhibit a higher degree of price sensitivity when purchasing the hair-clipper. The supplier will internalize this when setting their price or choosing their output quality for these two markets.

Contrast this with continuous goods like shampoo or hair products. Since these goods perish upon consumption, they cannot be directly substituted with services. Instead, one has to (indirectly) pay for them even if they use the barber service. The same goes for the gas used in transportation services or the food used in restaurant services. One can circumvent paying for the full price of a vehicle or a premium grill, by taking a cab or going to a restaurant. But irrespective of whether they use such services or operate their personal vehicle/grill, they have to pay for the continuous perishable input, which is food or gas in this example.

Force (ii) prompts cross-national demand differences in a different way. Since discrete goods cannot be purchased in fractional quantities and come with a pre-customized quality, they can be unaffordable to low-budget consumers. Consider, for example, the Toyota Corolla which, in 2017, came with a price tag that was 8-times the annual wage rate in India. In such circumstances, one TOYOTA COROLLA can be prohibitively expensive for a significant portion of Indian consumers—especially given that most lowincome consumers do not have access to financing options (Banerjee, 2003). Correspondingly, a marginal increase in price can rule out a non-trivial measure of potential customers.

The elasticity of demand in discrete industries, therefore, depends on the hazard rate at which a price increase renders the product unaffordable to marginal, low-budget consumers. This hazard rate is itself decreasing in the discrete good's overall degree of affordability, i.e., its price relative to the wage rate in the economy.4 These considerations, once again, give rise to two macro-

- 3 Source: http://www.businessinsider.com/how-expensive-haircuts-are-around-the-world-2015-9
- 4 This relationship holds for any empirically-relevant income distribution, since they exhibit an Increasing Generalized Failure Rate—see Lariviere and Porteus (2001)


and Lariviere (2006).

level demand patterns. First, the overall demand for discrete goods is less price-elastic in high-wage markets, where the good is on average more affordable. Second, there is more demand for high-quality (high-cost) varieties in these markets.

The cross-national demand differences triggered by Forces (i) and (ii), can magnify the extent of PTM and IQS in discrete industries quite significantly. First, they prompt the suppliers of discrete goods to set higher markups in high-wage markets where their good is more affordable and also competes with expensive services. Second, the affordability-driven and service price-driven local demand for quality in high-wage economies prompts high-quality specialization in these economies through scale effects.

To test the relevance of these forces, I combine data on export prices, export sales, and non-traded service prices for 147 countries across 5231 6-digit (HS6) industries in the year 2011. As in the prior literature, I document that in all industries export price levels depend systematically on market size, income per capita, and geography. In discrete industries, however, export prices increase with three additional factors that are less-relevant in continuous industries: (i) the price of non-traded services in the importing market, (ii) the price of non-traded services in the exporting economy, and (iii) the exporting economy's overall cost efficiency in the industry of interest. While the empirical significance of these additional factors confirms the predictions of the model, the estimated effects are also quite profound. For example, a 10% increase in the price of services in an importing market is associated with a 2.5% increase in the price of discrete imports.

On a broader level, accounting for discrete trade can revise our estimates for the gains from trade. When the traded sector is modeled as discrete rather than continuous, the predicted gains from trade are on average 28% larger but more unequally distributed across countries. These differences are driven by two factors. The first factor is somewhat mechanical: The gains from discrete trade depend on the quantity share of foreign goods in national consumption, whereas the gains from continuous trade depend on the value share of foreign goods in national expenditure (Arkolakis et al., 2012).

The second factor is more profound. The discrete model predicts scale-driven gains from trade that are absent in the continuous model. To elaborate, in the continuous model, the scale of national production in the traded sector is invariant to trade.5 In the discrete model, however, opening to trade induces firm-relocation from large to small and low-income economies. This type of relocation allows firms to collect a higher markup on marginal cost when selling to large and rich international markets. It also expands the scale of production in small and low-income economies at the expense of others.

Consider Canada, for instance, which is located close to the richer and larger U.S. market. From the lens of the discrete model, trade-induced scale expansion accounts for 5.6% of Canada's real GDP. Intuitively, trade openness induces firms to relocate from the U.S. to Canada, using it as a platform to export to the U.S. at a higher markup. Given the sheer size of the U.S. economy, these developments provide a sizable boost for Canada's real GDP. They also relate to the "big-push" effects of economic development, wherein the growth of an economy may be hindered by its small local market (Rosenstein-Rodan, 1943; Lewis, 1954; Murphy et al., 1989). But through firm-relocation, international trade can push such an economy out of this supposed growth trap.

Aside from contributing to ongoing debates about the size and nature of the gains from trade, the present paper contributes to our understanding of IQS and PTM. Existing theories of IQS and PTM often model industries as continuous.6 As a result, they naturally emphasize non-homothetic preferences and cross-national technology differences as the drivers of PTM and IQS. Prior theories of IQS and PTM that admit discrete goods (e.g., Flam and Helpman, 1987; Murphy and Shleifer, 1997; Verhoogen, 2008; Khandelwal, 2010; Fajgelbaum et al., 2011; Dingel, 2017; Auer et al., 2018), have often (i) abstracted from affordability constraints, and (ii) do not include a non-traded service sector.7 As a result, from the lens of these models, discreteness in itself does not contribute to IQS or PTM. Accordingly, these models cannot explain why IQS and PTM are more pronounced in discrete industries.

- 2. Suggestive evidence


I uncover four new regularities, which suggest that discrete goods account for a significant portion of global trade; and that macro-level trade patterns such as international quality specialization (IQS) and pricing-to-market (PTM) occur more intensively in discrete product categories. These regularities are documented using the publicly-available US import and export databases compiled and updated by Feenstra et al. (2002). The data covers 36 years of US trade, reporting the f.o.b. (free on board) value and physical quantity of district-level imports (exports) from (to) various countries during the 1989–2015 period. Each observation classifies the goods based on the 10-digit Harmonized System (HS10) classification and reports the "unit" in which quantity is measured.8 The import-side data, for instance, reports quantity in 48 different units, with well over 70% of the observations reporting quantity in terms of either "count" or "kilogram."

- 5 Morespecifically,the national scaleofproduction in thetraded sector isdeterminedexclusively by population size.This resultwillbe revised ifwe modelthetraded

sector as a blend of multiple industries with different scale elasticities—see Costinot and Rodrguez-Clare (2014) and Kucheryavyy et al. (2016).

- 6 See Schott (2004); Hallak (2006); Choi et al. (2009); Baldwin and Harrigan (2011); Lugovskyy and Skiba (2015); Feenstra and Romalis (2014); Antoniades (2015);


Jaimovich and Merella (2015); Alcalá (2016) for papers studying IQS using continuous good frameworks, as well as Atkeson and Burstein (2008); Hummels and Lugovskyy (2009); Bekkers and Simonovska (2015) Chen and Juvenal (2014); Simonovska (2015); Bertoletti et al. (2018) for papers studying PTM using continuous good frameworks.

- 7 For instance, in the seminal work of Fajgelbaum et al. (2011), IQS is driven solely by non-homothetic preferences for quality, through the home-market effect. An-

other closely related framework byMatsuyama (2000) emphasizes a hierarchicaldemand system where different sectors produce goods of differentpriority as opposed to different quality.

- 8 There is a small subset of observations for which the unit of measurement is missing. Also, during the 1990–2006 period, the HS10 codes underwent multiple re-


visions. So, to concord HS10 codes across revisions, I use the mapping developed by Pierce and Schott (2012).

My analysis in this section is complicated by two basic challenges: First, discreteness may be correlated with other product characteristics such as degree of differentiation or intent of final use. Second, discreteness may be correlated with hidden firmlevel characteristics that are impossible to control for in the aggregate-level US data. To address the former issue, I use the classification by Rauch (1999) to control for product differentiation and the classification of Broad Economic Categories (BEC) to control for the intent of final use. To address the latter concern, I cross-check all the benchmark results with firm-level evidence. This evidence is documented using firm-level Colombian import and export data, which report trade statistics corresponding to individual importing and exporting firms at the HS10 level of product aggregation during the 2007–2013 period—see Appendix A for a more detailed description.

- Regularity 1. A significant portion of foreign trade involves discrete goods.

I classify an HS10 category as discrete if it involves countable goods.9 As reported in Table 1, discrete HS10 products typically belong to the "Machinery," "Electrical & Optical Equipment," and "Transport Equipment" industries. More than 90% of import transactions in these industries involve discrete goods like passenger cars, television sets, or washer/dryers. In many widelyused classifications, these industries are also often classified as durable.

In comparison, industries like "Food", "Chemicals", and "Textiles" consist of mostly non-discrete HS10 categories. They feature products such as coffee beans, rubbing alcohol, or yarns that typically report quantity in kilograms. Considering that weight is a relatively continuous unit of measurement and to fix ideas, I refer to such HS10 categories as continuous.

A possible concern with the above classification is that some HS10 product codes involve countable but inexpensive goods such as flashlights. The low unit price in these categories can render indivisibility or discreteness redundant. So, when documenting the subsequent regularities, I check robustness under a more conservative classification, wherein HS10 categories are coded as discrete if they are both (i) countable and (ii) exhibit an average unit price above $1000.10

- Regularity 2. There is significantly more international price heterogeneity within discrete product categories. I establish the above regularity using quantity-weighted unit prices, which I denote by pji;kt (origin country j–US district i–HS10

product k–year t). Table 2 reports basic statistics describing the cross-national heterogeneity in pji;kt within HS10 product×district×year cells. For discrete product categories, the median cell exhibits a 75/25 percentile price spread of 12.0. For continuous product categories, however, the median cell exhibits a 75/25 price spread of only 2.1. The difference is even greater if we adopt a more conservative definition of discreteness, whereby product categories are classified as discrete if they are not only countable but also exhibit an average price per good of at least $1000. In that case, the median 75/25 price spread stands at 29.3. The same exact ranking is borne out if we use the within-product coefficient of variation as our measure of price heterogeneity.

The lower panel in Table 2 demonstrates that similar patterns hold even after we control for the importing firm's character-

istics. This panel reports the (within cell ikt) heterogeneity in pji;kt, where i now indexes a Colombian importing firm. To elaborate, firm i may purchase HS10 product k in year t from various origin countries indexed by j. The discrete products purchased by the same firm in the same year exhibit significantly more cross-supplier price heterogeneity than non-discrete products.

Trade economists generally attribute such within-product price heterogeneity to international quality and markup differences (Schott, 2004; Hallak, 2006; Baldwin and Harrigan, 2011; Hallak and Schott, 2011). Under this interpretation, Regularity 2 suggests that there is significantly more international quality and markup heterogeneity in discrete product categories. The following two regularities confirm that the greater quality/markup heterogeneity in discrete product categories has a systematic nature, and may be due to the greater degrees of IQS and PTM.

- Regularity 3. North-South quality specialization is more pronounced in discrete product categories.


To analyze quality specialization, I adopt the perspective in Schott (2004)] and Hummels and Klenow (2005), whereby the cross-national variation in export prices to the same market is attributed to quality differences.11 Correspondingly, I define the degree of North-South quality specialization as

∂ lnexport unit price ∂ lnorigin0sGDPp=c

. To determine how product discreteness influences NorthSouth quality specialization, I run the following regression on the US import data12:

logpji;kt 1⁄4 βw þ βDw 1fDiscreteg logGDPp=cj;t þ Controlsj;t þ δikt þ εjikt; ð1Þ

- 9 A very small minority of HS10 codes report quantity in multiple units. These observations are dropped throughout my analysis.
- 10 Intheinterest ofspace, Regularities 3 and4 are documented and reportedonlyunder the benchmarkclassification.However,they canbestatedasisunder my more

conservative classification of discrete products.

- 11 Recent theoretical advances have corroborated this interpretation. Most notably, Arkolakis et al. (2019) show that (if the firm-level productivity distribution is Pa-


reto), the distribution of markups from country j to i is invariant to country j's characteristics. That being the case, the cross-exporter variation in prices can be entirely attributed to export quality differences.

12 Manova and Zhang (2012) adopt a similar estimating equation to analyze the within-product heterogeneity in unit prices, but with firm-level data.

- Table 1 Discrete versus continuous industries in data.

Industry US Imports US Exports

% Share of discrete goods

% Share of industry in total imports

% Share of discrete goods

% Share of industry in total exports

Machinery 97.8 12.3 96.0 14.2 Electrical & Optical

Equipment

96.8 13.6 94.3 14.4

Transport Equipment 93.0 19.2 78.8 19.3 N.E.C. & Recycling 51.0 2.8 52.2 0.8 Rubber & Plastic 38.0 1.6 24.3 2.1 Minerals 17.5 1.1 20.7 0.8 Paper 16.6 2.5 27.4 4.3 Textiles, Leather & Footwear 12.5 10.1 5.0 3.4 Wood 9.3 1.5 7.1 0.9 Basic & Fabricated Metals 6.7 6.6 6.2 6.4 Agriculture & Mining 2.3 13.5 2.4 8.7 Chemicals 2.1 7.9 1.6 15.6 Food 0.0 4.0 1.0 6.7 Petroleum 0.0 3.4 0.0 2.3 Total 47.9 100.0 45.1 100.0

Note: All percentage shares are value-weighted. The sectoral classification is from the WIOD. Observations that report quantity in units of "count" are classified as discrete.

- Table 2 Price heterogeneity: discrete vs. continuous HS10 categories.


Discrete Continuous All Pavg>$1000 District-level data (United States)

75/25 price spread (median) 12.00 29.32 2.06 CV of unit price (median) 221% 267% 131% Observations 9,069,000 3,613,000 7,520,000

Discrete Continuous All Pavg>$1000 Firm-level data (Colombia)

75/25 price spread (median) 4.35 4.88 1.16 CV of unit price (median) 89% 93% 10% bservations 2,407,000 1,304,000 881,000

Note: All statistics are value-weighted. The statistics in the top panel are documented using district-level US import data from 1989 to 2015. The statistics in the bottom panel are documented using firm-level Colombian import data from 2007 to 2013. Continuous goods correspond to observations that report quantity in unit other than count.

The dependent variable, pji;kt denotes the unit price of country j's exports to US district i in HS10 product category k, in year t. On the right-hand side, GDPp/cj,t controls for the origin country's GDP per capita; 1{Discrete} is a dummy variable that assumes a value of 1 if product category k is discrete and is zero otherwise; Controlsj,t is composed of a set of standard gravity controls like total GDP, geo-distance, and Free Trade Agreements; and finally, δikt controls for district-product-year fixed effects.

In addition to estimating Eq. (1) on the entire sample, I perform the same estimation while restricting the sample to (i) only final consumption goods, and (ii) only differentiated goods as classified by Rauch (1999). Doing so removes the possible concern that discreteness is correlated with other characteristics like the intended use or the degree of product differentiation. Also, since each observation in my country-level data represents a quantity-weighted average of firm-level variables, the above estimation is subject to the classic heteroskedasticity problem. To attain consistent estimates, I follow Kmenta (1997) and weigh each observation by the underlying trade quantity.13 To account for sample selection, I use the two-step correction developed by Wooldridge (1995).14

- 13 When handling grouped data, the weighted estimator where each observation is weighted by the square root of group size is BLUE. Here, trade quantity serves as a

theory-consistent proxyfor group size.Adopting such a weightingscheme delivers consistent estimates evenifgroup size is correlatedwith εjikt—see Solon etal. (2015).

- 14 Specifically, I estimate an analog of Regression 1 by Tobit, but with trade values as the dependent variable. The residual from this first regression is then used as an


additional control when estimating Eq. (1)—see Harrigan et al. (2015) for further details.

Discreteness and north-south quality specialization (dependent: logpj;ikt). All goods Final goods Differentiated goods District-level data (United States)

logGDPp/cj, t 0.14∗∗∗ 0.02∗∗∗ 0.11∗∗∗ 0.09∗∗∗ 0.13∗∗∗ 0.01

(0.010) (0.009) (0.007) (0.010) (0.010) (0.015) logGDPp/cj, t × Discretek ... 0.18∗∗∗ ... 0.04∗∗∗ ... 0.17∗∗∗

(0.014) (0.011) (0.017) Observations 16,636,000 6,647,000 13,107,000 Fixed effects Importing district × HS10 prdouct × year

All goods Final goods Differentiated goods Firm-level data (Colombia)

logGDPp/cj, t 0.16∗∗∗ 0.12∗∗∗ 0.16∗∗∗ 0.12∗∗∗ 0.17∗∗∗ 0.13∗∗∗

(0.010) (0.008) (0.010) (0.008) (0.010) (0.009) logGDPp/cj, t × Discretek ... 0.05∗∗∗ ... 0.06 ∗∗∗ ... 0.04∗∗∗

(0.007) (0.008) (0.008) Observations 3,288,000 2,533,000 2,474,000 Fixed effects Importing firm × HS10 prdouct × year

Note: The estimating equation is Eq. (1). The top panel is produced using district-level US import data from 1989 to 2015. The bottom panel is produced using firm-level Colombian import data from 2007 to 2013. All estimations are conducted with additional controls for total GDP, distance, and free trade agreements. Each observation is weighted by the corresponding trade quantity. Standard errors are reported in parentheses and clustered by exporting country and year. ∗∗ p < 0.05, ∗∗∗ p < 0.01.

In the above regression, the coefficient βw reflects the baseline degree of North-South quality specialization, while βDw reflects the extent to which this kind of specialization is more pronounced in discrete product categories. The estimation results reported in Table 3 point to a positive and statistically significant βDw, indicating that IQS is noticeably more pronounced in discrete product categories. This remains to be true if we confine our sample to only final consumption goods or differentiated goods.15

The bottom panel in Table 3 documents the same pattern while controlling for firm-level characteristics. The results in this panel correspond to an estimation of Eq. (1) on the firm-level Colombian import data, in which case index i indexes an importing firm rather than a district. These results indicate that IQS is more pronounced in discrete product categories even after we control for importing firm-product-year fixed effects and divide goods by degree of differentiation and intent of final use.

The above claims rest on an implicitly-assumed link between quality and unit price, which can be complicated by crossnational productivity differences. Specifically, the results in Table 3 can be alternatively interpreted as high-income countries having a comparative cost advantage in continuous industries. I discuss this issue more elaborately in Section 5, where I analyze the role of discreteness while controlling for cross-country productivity differences as well as other confounding factors.

- Regularity 4. Pricing-to-market is more pronounced in discrete product categories.


To analyze PTM, I adopt the perspective in Alessandria and Kaboski (2011) and Simonovska (2015), whereby the cross-market variation in prices from the same exporter is attributed to markup differences.16 Accordingly, I define the degree of PTM as

∂ lnexport unit price ∂ lndestination0sGDPp=c

. To determine how discreteness influences PTM, I run the following regression on the US export data:

logpji;kt 1⁄4 β~w þ β~Dw 1fDiscreteg logGDPp=ci;t þ Controlsi;t þ δjkt þ εjikt ð2Þ

The dependent variable, pji;kt, denotes the unit price of US district j's exports to country i in HS10 category k, in year t. On the right-hand side, GDPp/ci,t controls for the destination country's GDP per capita, 1{Discrete} is a discrete product dummy; Controlsi,t is composed of a set of standard gravity controls like total GDP, geo-distance, and Free Trade Agreements; and finally, δjkt controls for district- product-year fixed effects. Also, as before, I estimate Eq. (2) separately for all goods as well the subset of final consumption goods and differentiated goods.

In the above regression, β~w reflects the baseline degree of PTM, while β~Dw reflects the extent to which PTM is more pronounced in discrete product categories. The estimation results reported in Table 4 point to a positive and statistically significant β~Dw,

- 15 The Weighted OLS estimator may not correct for the overrepresentation of observations with extreme values of the explanatory variables (Solon et al.,2015).Nonetheless, dropping observations with explanatory variables that fall above/below the 95/5 percentile does not qualitatively change any of the conclusions deduced from my analysis.
- 16 Alternatively, the same pattern can be attribute to firm varying their quality across markets. In that case, Regularity 4 can be stated as firms vary their product quality more intensively discrete industries.


Discreteness and pricing-to-market (dependent: logpji;kt). All goods Final goods Differentiated goods District-level data (United States)

logGDPp/ci, t 0.04∗∗∗ 0.02∗∗∗ 0.05 ∗∗∗ 0.01∗∗∗ 0.09∗∗∗ 0.05∗∗∗

(0.007) (0.004) (0.007) (0.004) (0.015) (0.011) logGDPp/ci, t × Discretek ... 0.06∗∗∗ ... 0.13∗∗∗ ... 0.06∗∗∗

(0.018) (0.026) (0.024) Observations 7,855,000 1663,00 5,832,608 Fixed effects Exporting district×HS10 prdouct×year

All goods Final goods Differentiated goods Firm-level data (Colombia)

logGDPp/ci, t 0.04∗∗∗ 0.02 ∗∗∗ 0.05∗∗∗ 0.01∗∗∗ 0.09∗∗∗ 0.05∗∗∗

(0.007) (0.004) (0.007) (0.004) (0.015) (0.011) logGDPp/ci, t × Discretek ... 0.06∗∗∗ ... 0.13∗∗∗ ... 0.06∗∗∗

(0.018) (0.026) (0.024) Observations 668,000 387,000 567,000 Fixed effects Exporting firm×HS10 prdouct×year

Note: The estimating equation is Eq. (2). The top panel is produced using district-level US export data from 1989 to 2015. The bottom panel is produced using firm-level Colombian export data from 2007 to 2013. All estimations are conducted with additional controls for total GDP, distance, and free trade agreements. Each observation is weighted by the corresponding trade quantity. Standard errors are reported in parentheses and clustered by importing country and year. ∗∗ p < 0.05, ∗∗∗ p < 0.01.

indicating that PTM is in fact noticeably more pronounced in discrete product categories. This also remains to be true if we confine our sample to only final consumption goods or differentiated goods.

The bottom panel in Table 4 documents the same pattern while controlling for firm-level characteristics. The results in this panel are derived by estimating Eq. (2) on the firm-level Colombian export data, in which case index j identifies an exporting firm rather than a district.17 They indicate that PTM is more pronounced in discrete product categories even after we control for exporting firm-product-year fixed effects and divide goods by degree of differentiation and intent of final use.

To take stock, the evidence presented in this section indicate that IQS and PTM are more pronounced in discrete industries. One possible reason for this is that the standard drivers of IQS and PTM operate more forcefully in discrete industries. Another possibility is that discreteness gives rise to alternative driving forces behind IQS and PTM that are otherwise irrelevant. In what follows, I present a theoretical framework that highlights two such alternative forces.

3. Theoretical framework

My main objective in this section is to highlight two alternative drivers of IQS and PTM in discrete industries. Considering this objective, my theory purposely abstracts from taste-driven or cost-driven IQS and PTM, which have little to do with discreteness. Accordingly, I model continuous industries in a rather standard fashion. My modeling of discrete industries and the insights that derive from it, however, rests on three distinctive assumptions:

- (i) Discrete goods are indivisible: purchasing them requires paying the price of one full unit, which is akin to paying a fixed acquisition cost.
- (ii) The consumption flow derived from a personally-acquired discrete good can be substituted with analogous servicese.g., consumers can forgo buying a truck for moving purposes by renting a moving service.18
- (iii) Quality and quantity are not isomorphic. In particular, from the perspective of a firm, supplying higher quality is different from supplying more quantity. The former requires incurring a sunk R&D cost, whereas the latter only requires employing more inputs without necessarily altering one's production technology.


For the sake of composition, I also make various parametric assumptions throughout this section; but these assumptions are less consequential to the theoretical results that follow—Appendix B shows that the main predictions of the model hold equally in a more general (less-parametric) environment.

- 17 In the Colombia sample numerous firms supply both discrete and continuous goods. To give an example, firm #900500347 exports both durometers

(HS9024800000) that are discrete and priced over $500 per unit as well as continuous aluminum sheets (HS7616999000).

- 18 This feature can be attributed to the strong overlap between discreteness and durability (see Section 2). Unlike perishable consumption goods, durable consump-


tion goods are non-rival. That is, one consumer's usage of the good does not exclude others from using it later. Accordingly, one can use a taxi service without (effectively) paying for the car but by only paying for the labor and the perishable fuel used in providing the service. This feature of durable goods has been widely-invoked in macro-economics literature—see Benhabib et al. (1991), Cooley and Prescott (1995), and Fernandez-Villaverde and Krueger (2011).

- 3.1. Economic environment


- 3.1.1. Countries The global economy consists of i = 1, ..., I countries, with C denoting the set of countries. Country i is populated by Li indi-


viduals, each of whom is endowed with y ∈ R+ units of effective labor that is the sole factor of production. All individuals are perfectly mobile across the production of different goods but are immobile across countries; and are paid an economy-wide wage, wi, per unit of effective labor.

- 3.1.2. Income distribution I assume that the distribution of effective labor, y, across individuals within country i is given by

GiðyÞ 1⁄4 1−e−ζ

iðy−yiÞ:

Since each individual residing in country i collects an income equal to ywi, then Gi(.) also governs the distribution of income in that country. The exponential parametrization of the income distribution is motivated by evidence in Drăgulescu and Yakovenko (2001) and Gabaix (2009). I allow parameters ζi and yi to vary arbitrarily across countries; but I impose that the mean of the distribution equals one in all countries, i.e., EiðyÞ 1⁄4 yi þ ζi 1⁄4 1 for all y.

- 3.1.3. Industries The economy is composed of multiple industries (indexed by k) that fall under three general categories:

- (i) Continuous industries, which involve traded and infinitely-divisible goods, with KC denoting the set of all continuous industries
- (ii) Discrete industries, which involve traded but indivisible goods, with KD denoting the set of all discrete industries.
- (iii) Non-traded service industries that supply a homogeneous output, which serves as a substitute for discrete goods.


I hereafter use the tilde notation to distinguish variables corresponding to the service sector. For instance, based on this choice of notation, p~i;k denotes the price of industry k-related services in market i.

- 3.1.4. Product space Traded goods (whether continuous or discrete) are horizontally and vertically differentiated. That is, they come in different


firm-level varieties (indexed by ω) and different quality tiers (indexed by φ). The set of admissible quality tiers in each industry is predetermined and denoted by Φk. As in Fajgelbaum et al. (2011), firms sort into (only one) of these predetermined quality tiers and supply their differentiated variety in that particular quality level.

In such a setup, the firm index ω uniquely identifies not only the supplying firm but also the quality of the variety supplied by that firm. To be more specific, let Ωj,k(φ) denote the set of all firms supplying quality φ from country j in industry k. Then, if ω ∈ Ωj,k(φ) it is automatically implied that ω ∉ Ωj,k(φ′) for any φ′ ≠ φ. In that regard, the index ω implicitly conveys full information about quality as well as industry and country of origin.

3.2. Demand and supply in continuous industries

I start by describing the supply and demand structure in continuous industries. Given its standard underpinning, the continuous model can also serve as a useful benchmark to better understand my less-standard model of discrete industries.

3.2.1. Demand

The demand structure is similar to Krugman (1980), except that there are multiple quality tiers to choose from. In particular, each individual spends a constant fraction, ek, of their income on industry k goods.19 The budget allocated to continuous industry k∈KC can be spent on buying a fractional quantity of various firm-level varieties. An individual's utility from consuming a basket q = {qji,k(ω)} of firm-level varieties is given by a nested-CES function,20

1 þ γk

0 1þγk B @

1 C A

γk ;

" #1þθk

γk

1

θk 1 þ θk

θk

k∈KC

UkðqÞ 1⁄4 ∑

∑

∑

φ

1þθk qji;kðωÞ

φ∈Φk

ω∈Ωj;kðφÞ

j∈C

where γk and θk > 0 reflect the degree of within- and cross-quality substitutability between different firm-level varieties. Utility maximization subject to the budget constraints, ∑φ∑j∑ωpji,k(ω)qji,k(ω) ≤ ekwiyι implies that the share of spending on variety ω

- 19 To be specific, the welfare of individual ι is a Cobb-Douglas aggregate of the industry specific utility levels. Namely, Wι 1⁄4 Q

k∈KUe

k

ι;k.

- 20 Implicit in the above formulation is that markets are segmented. Without this assumption, PTM and the possibility of international arbitrage may lead to zero trade


between countries—see Foellmi et al. (2017).

is independent of personal income and given by,

pji;kðωÞ−θ

k

λji;kðωÞ 1⁄4

∑'∈C∑ω0∈Ω';kðφÞp'i;kðω0Þ−θ

k

ei;kðφÞ; ∀ω∈Ωj;kðφÞ ð3Þ

where ei,k(φ) is the total share of spending on quality φ:

γk=θk

';kðφÞp'i;kðωÞ−θ

φ∑'∈C∑ω∈Ω

k

γk=θk; ∀φ∈Φk:

ei;kðφÞ 1⁄4

';kðφ0Þp'i;kðωÞ−θ

∑φ0∈Φk φ0∑'∈C∑ω∈Ω

k

Accordingly, total demand for variety ω in market i can be expressed as,

qji;kðωÞ 1⁄4 λji;kðωÞekwiLi=pji;kðωÞ; ð4Þ

where wiLi is total income in market i—the fact that total income equals wiLi derives from my earlier choice of normalization, EiðyÞ 1⁄4 1.

- 3.2.2. Supply The supply-side of the economy is similar to Fajgelbaum et al. (2011) extension of Krugman (1980). That is, labor is the sole

factor of production. Firms supplying goods of the same quality (in industry k) are symmetric within each country, and compete under monopolistic competition–as shown in Appendix D the model can be easily extended to account for firm heterogeneity. A typical firm ω supplying quality φ from country j has to incur a sunk entry cost, wjfke(φ). It also incurs a marginal cost for each unit of output produced and transported to market i that is given by

cji;kðωÞ 1⁄4 τji;kaj;kcðφÞwj: ω∈Ωj;kðωÞ

In the above cost specification τji,k denotes the iceberg transport cost; aj,k is a quality-neutral (country×industry-specific) cost shifter; and c(φ) is a universal cost shifter that accounts for high-quality output being more costly to produce in every country. An important feature of the above parametrization is that it precludes any Ricardian comparative advantage along the quality margin.

The variable profit collected by a typical firm ω is, thus, given by

πji;kðωÞ 1⁄4 hpji;kðωÞ−cji;kðωÞiqji;kðωÞ;

where qji,k(ω) is determined by Eq. (4). Firms choose their optimum price, pji,k(ω), by maximizing πji,k(ω), which implies a standard monopoly markup over marginal cost. The number of firms supplying quality φ from country j (namely, Nj,k(φ)) is then determined by the free-entry condition, wherein firms enter until net profits are drawn to zero in every quality tier of industry k:

X

i∈C

πji;kðωÞ 1⁄4 wjfekðφÞ; ∀ω∈Ωj;kðφÞ:

- 3.3. Demand and supply in discrete industries


Discrete industries involve goods that are indivisible and substitutable with analogous services. I use a discrete choice framework to model consumer demand in these industries. On the supply-side, though, I assume that discrete industries are identical to continuous counterparts.

- 3.3.1. Demand To draw consumption utility from a discrete variety ω ∈ Ωj,k(φ), consumers have to pay the unit price, pji,k(ω), which is akin to


paying a fixed acquisition cost. After the good is acquired, it delivers a flow of consumption quantity, qk(φ), that is increasing in the good's quality, φ. The flow of personal consumption provided by a discrete good (like a car) is substitutable with analogous services (like a taxi service). Consumers can, therefore, circumvent paying the acquisition cost altogether, or they can purchase a cheaper (lower-φ) discrete variety and complement it with a range of specialized services.

Suppose individual ι purchases discrete variety ω ∈ Ωj,k(φ) (a firm-level variety of quality φ originating from country j) for personal use and combines it with q~k hours of service. The utility they derive from this choice is given by

Uιðω;q~Þ 1⁄4 q~k þ qkðφÞ þ ξιðωÞ; ω∈Ωj;kðφÞ

where qk(φ) (as defined earlier) denotes the consumption quantity derived from a personally-acquired unit of good ω; and ξι(ω) is an individual × variety-specific utility shifter that accounts for individual ι's personal taste for variety ω. Implicit in the above parametrization is the fact that the consumption derived from a discrete good is perfectly substitutable with analogous services. Without loss of generality, I henceforth impose that qk(φ) = φ.

As is common in the literature, I assume that the vector ξι,k ≡ {ξι(ω)}, which describes individual ι's taste with respect to various industry k varieties, is drawn independently from a General Extreme Value distribution: Fk(ξι,k) = exp (−∑φ∈Φ

(∑ω exp (ξι(ω))−θ

k

k/θk), where θk ≥ γk ≥ 0 are parameters governing the heterogeneity of consumer taste within and across quality levels in industry k. This assumption allows me to obtain closed-form demand functions.

)γ

k

An individual (with endowment y) maximizes their utility by choosing their preferred variety, ω, within industry k subject to a personal budget constraint. Recall that a fraction ek of an individual's income is spent on industry k goods/services (e.g., transportation goods and services). The budget constraint imposes that the price of variety ω not exceed one's budget,

ekwiy. Moreover, given the choice of ω, the budget constraint implicitly determines their choice of service consumption, q~k. That is, if an individual chooses variety ω ∈ Ωj,k(φ), their budget constraint,

p~i;kq~k þ pji;kðωÞ 1⁄4 ekwiy;

implicitly pins down q~k 1⁄4 1⁄2ekwiy−pji;kðωÞ =p~i;k. Taking into account the individual's budget constraint and appealing to the Theorem of Extreme Value, utility maximization then implies that the share of individuals with endowment y who choose variety ω is given by

exp pji;kðωÞ −θk=

p~i;k

p~i;k ei;kðφ;yÞ; ð5Þ

λji;kðω; yÞ 1⁄4

∑'∈C∑ω0∈Ω';kðφ;yÞ exp −p'i;kðω0Þ −θk=

pji;kðωÞ ekwi

if y≥

; and is zero otherwise (see Appendix C.1 for proof). The share of individuals with endowment y who choose a variety with quality φ is similarly given by

γk θk

φ ∑'∈C∑ω0∈Ω';kðφ;yÞ exp −p'i;kðωÞ −θk=

p~i;k

ei;kðφ;yÞ 1⁄4

γk θk;

X

φ0 ∑'∈C∑ω0∈Ω';kðφ0;yÞ exp −p'i;kðωÞ −θk=

p~i;k

φ0∈Φk

where Ωj,k(φ,y) ⊂ Ωj,k(φ) denotes the subset of varieties in set Ωj,k(φ) that are affordable to individuals with endowment y. The total demand facing firm ω can, therefore, be calculated as the sum of the demand across all individuals in the economy as follows:

0 B @

1 C ALi: ð6Þ

qji;kðωÞ 1⁄4 Z ∞ y1⁄4

λji;kðω; yÞdGiðyÞ

pji;kðωÞ ekwi

Before moving forward let me draw a brief comparison between the demand structure in discrete and continuous industries. In both sets of industries, individual-level preferences are homothetic in the following sense. If two individuals have different income levels (namely, y′ and y) but can choose from the same set of varieties, then

λji;kðφ; yÞ 1⁄4 λji;k φ;y0 :

Moreover, if the above condition is satisfied, it automatically follows that the two individuals also exhibit the same demand for quality: ei,k(φ,y) = ei,k(φ,y′).

- 3.3.2. Supply On the supply side, discrete industries are assumed to be identical to continuous industries. That is, labor is the only factor of


production and firms compete under monopolistic competition. Each firm in country j incurs a sunk cost, wjfke(φ), to enter

industry k in quality tier φ. Upon entry, it also incurs a marginal cost equal to cji,k(ω) = τji,kaj,kc(φ)wj in order to supply each unit of output to market i. Recall that this cost structure rules out Ricardian comparative advantage along the quality margin. Each firm sets their optimum price by maximizing their variable profit,

πji;kðωÞ 1⁄4 hpji;kðωÞ−cji;kðωÞiqji;kðωÞ;

where qji,k(ω) is now given by Eq. (6). Profit maximization simply entails a standard monopoly markup over marginal cost. The number of firms in every quality tier of industry k is determined by the free-entry condition, wherein firms enter until net profits are drawn to zero: ∑i∈Cπji,k(ω) = wjfke(φ).

It is important to note that the production of quality is subject to scale economies in all industries. That is, the average cost of supplying quality is decreasing in total output. As a result, to circumvent trade costs, high-quality firms agglomerate in economies where there is a relatively large local demand for high-quality varieties, leading to the well-known home-market effect.

- 3.4. Demand and supply of non-traded services

The demand for non-traded services is implicitly determined by the consumption choice in discrete industries.21 I also assume that the service sector is perfectly competitive. In principle, services may employ discrete goods as an intermediate input (e.g., taxi services use cars as an input), but I assume that due to repeated use, the fixed cost paid for acquiring the discrete good constitutes a negligible fraction of the total cost.22 Consequently, the average cost, effectively, equals the marginal cost, a~i;kwi, for service suppliers.

I also assume that the marginal labor cost of supplying services is the same across all industries, i.e., a~i;k 1⁄4 a~i;g for all g and k ∈KD. Altogether, these assumptions imply that the competitive price of services in market i equals:

p~i;k 1⁄4 p~i 1⁄4 a~iwi ∀k:

The above equation indicates that p~i and the local wage rate, wi, are positively but not perfectly correlated.23 We can actually construct many theory-consistent examples where the price of non-traded services differ across two markets with the same wi. This distinction plays an important role when testing the model, later in Section 5.

- 3.5. Equilibrium


In equilibrium, each firm ω that supplies quality φ from country j in industry k (i.e., ω ∈ Ωj,k) charges the same price and sells the same quantity of output. Considering this, I can express all variables as a function of quality rather than the firm-level index, ω. In that case, pji,k(φ) denotes the price charged in market i by a typical firm ω ∈ Ωj,k(φ). With this choice of notation, I now present the main equilibrium outcomes and formally define the equilibrium.

Following Eqs. (3) and (5), the market share of origin j varieties in country i can be expressed as24

8

Nj;kðφÞpji;kðφÞ−θ

k

ei;kðφ;yÞ if k∈KC

∑'∈CN';kðφÞp'i;kðφÞ−θ

k

><

θk p~i

ð7Þ

λji;kðφÞ 1⁄4

−

Z ∞

Nj;kðφÞ exp pji;kðφÞ

ei;kðφ;yÞ dGiðyÞ if k∈KD

pji;kðφÞ ekwi

θk p~i

y1⁄4

−

>:

∑'∈C

iðφ;yÞN';kðφÞ exp p'i;kðφÞ

where KC denotes the set of continuous industries; KD denotes the set of discrete industries; and Ci(φ,y) ∈ C denotes the subset of countries whose quality φ varieties are affordable to income group y in market i. The share of quality φ in total consumption is,

- 21 This is a simplifying but innocuous assumption. One can always assume thatthe economy features an extraset of non-traded service industries that are unrelated to

discrete industries. Adding this feature, as long as we maintain the Cobb-Douglas assumption on industry-level expenditure shares, will not change any of the results in the paper.

- 22 Specifically, consider an incumbent firm supplying industry k-related services in market i. Suppose such a firm spends~cDi;k on purchasing discrete input varieties and


sells in totalQ~i;k units of services. The implicit assumption here is that~cDi;k=Q~i;k ≈ 0, so that the average cost for this supplier is approximately equal to the marginal cost: AC~ i 1⁄4 a~i;kwi þ

~cDi;k Q~i;k

≈ a~i;kwi:

- 23 The positive relation between p~i and wi is contingent on a~i's being sufficiently homogeneous across countries. This condition serves as the foundation of the cele-

brated Blasssa-Samuelson effect (Bhagwati (1984); Samuelson (1994)).

- 24 Note that in the case of continuous industries, λji,k(φ) denotes the value-share of spending; whereas in the case of discrete industries, it denotes the quantity-share.


meanwhile, given by:

ei;kðφ;yÞ 1⁄4

8

γk=θk

φ∑'∈CN';kðφÞp'i;kðφÞ−θ

k

γk=θk if k∈KC

N';k φ0 p'i;k φ0 −θ

∑φ0∈Φk φ0 ∑ '∈C

k

θk p~i!γ

><

k=θk

−

φ∑'∈Cðφ;yÞN';kðφÞ exp p'i;kðφÞ

γk=θk if k∈KD

0 p~i B @

1 C A

θk

−

∑φ0∈Φk φ0∑'∈C

iðφ;yÞN';kðφ0Þ exp p'i;kðφ0Þ

>:

The above expressions immediately imply that the equilibrium demand elasticity facing individual firms can be stated as (see Appendix C.3 for derivation):

εji;kðφÞ 1⁄4

8 <

θk þ 1 if k∈KC θk

pji;kðφÞ p~i þ ζi

pji;kðφÞ ekwi

if k∈KD

:

ð8Þ

The difference between the demand elasticity faced by firms in discrete versus continuous industries plays a key role in my theory. So, I will discuss these differences more elaborately in the following Subsection. Finally, given the expression for λji,k(φ), aggregate trade values, Xji,k(φ) ≡ Nj,k(φ)pji,k(φ)qji,k(φ), are given by

8 <

λji;kðφÞekYi if k∈KC λji;kðφÞ

pji;kðφÞ wi

; ð9Þ

Xji;kðφÞ 1⁄4

Yi if k∈KD

:

where Yi ≡ wiLi. Equilibrium corresponds to a vector of prices, p ≡ {pji,k(φ)}, wage rates, w ≡ {wj}, and the number of firms, N ≡ {Nj,k(φ)}, that satisfy (i) the optimal monopoly pricing condition (MP), (ii) the balanced trade condition (BT), and (iii) the free entry condition (FE):

8 ><

εji;kðφÞ εji;kðφÞ−1

τji;kaj;kcðφÞwj ∀φ∈Φk; k∈K ðMPÞ ∑j∈C∑k∈K∑φ∈Φ

pji;kðφÞ 1⁄4

;

Xi';kðφÞ ∀k∈K ðBTÞ Nj;kðφÞwjfekðφÞ 1⁄4 ∑i∈CXji;kðφÞ=εji;kðφÞ ∀k∈K ðFEÞ

Xji;kðφÞ 1⁄4 ∑'∈C∑k∈K∑φ∈Φ

>:

k

k

By Walras' law, the satisfaction of the BT and FE conditions ensures that labor markets also clear in each country.

- 3.6. Discussion: the demand elasticity facing discrete goods


While I assumed that individual preferences for traded goods are homothetic, the market-level demand elasticity facing discrete goods varies systematically across markets. This variation is driven by (i) cross-market heterogeneity in the price of nontraded services, and (ii) affordability constraints being more-or-less binding in different markets. To elaborate on these two channels, we can decompose the demand elasticity facing discrete goods in market i as follows:

pji;kðφÞ p~i

εji;kðφÞ 1⁄4 θk

|fflfflfflfflfflffl{zfflfflfflfflfflffl}

NT−driven

pji;kðφÞ ekwi

þ ζi

:

|fflfflfflfflffl{zfflfflfflfflffl}

affordability−driven

In the above expression, the NT-driven component accounts for cross-country differences in the price of non-traded services. This component depends on (a) the degree of product differentiation θk, the role of which is well understood, as well as (b) pji;kðωÞ=p~i, which is the amount of service consumption one forgoes to acquire a full unit of variety ω. Importantly, the demand elasticity is lower the higher the price of services in market i.

25 As shown in Appendix B, even when Gi(y) does not exhibit a constant hazard rate, the propositions that follow hold as long as Gi(y) satisfies the IGFR property.

The affordability-driven component is driven by the fact that an incremental increase in pji,k(ω) can make variety ω prohibitively expensive for a fraction of existing consumers in market i. The extent of demand loss due to this channel, depends on (a) variety ω's degree of affordability in market i, pji,k(ω)/ekwi, as well as (b) the hazard rate of the income distribution, ζi.25

- 4. Quality specialization and pricing-to-market


In this section, I use my theoretical model to outline two alternative drivers of pricing-to-market (PTM) and international quality specialization (IQS) in discrete industries. This section, therefore, sheds light on why (as documented in Section 2) PTM and IQS occur more intensively in discrete industries.

- 4.1. Pricing-to-market (PTM)

Using the demand elasticity specified by Eq. (8), we can immediately calculate the optimal monopoly price for each traded variety. Doing so, implies the following price formulation in continuous (k∈KC) and discrete (k∈KD) industries:

pji;kðφÞ 1⁄4

ð1 þ 1=θkÞcji;kðφÞ if k∈KC cji;kðφÞ þ θi;kwi if k∈KD

;

with 1=θi;k ≡

θk a~i þ

ζi ek

denoting a market-specific structural parameter. The above equation indicates that (absent non-homothetic

preferences) there is no scope for PTM in continuous industries. In discrete industries, however, PTM occurs even though preferences are homothetic; as suppliers charge systematically higher prices in markets where (a) they compete with higher-priced services; and (b) their product is more affordable to the average consumer.

These results can perhaps explain why PTM is more pronounced in discrete industries. In both discrete and continuous industries, PTM may be driven by non-homothetic preferences. But in discrete industries, PTM is magnified by (a) cross-national heterogeneity in the price of non-traded services, and (ii) affordability constraints; both of which are less relevant in continuous industries.

- 4.2. International quality-specialization (IQS)


To fix ideas, allow me to first define IQS formally from the lens of the present model. Let Qji,k(φ) ≡ Nj,k(φ)qji,k(φ) denote aggregate export quantity and suppose φH and φL respectively denote a high and a low-quality tier in industry k, i.e., φH > φL. As a matter of definition, an increase in country-level characteristic x prompts high-quality-specialization if and only if

( ) > 0;

Qji;kðφHÞ=Q'i;kðφHÞ Qji;kðφLÞ=Q'i;kðφHÞ

∂ ∂xj=x'

for (nearly) all j, l, and i ∈ C. So, to determine patterns of IQS based on this definition, we need to derive an expression for the relative exports of φH to φL. Doing so in Appendix C.4, yields the following expression:

Qji;kðφHÞ=Q'i;kðφHÞ Qji;kðφLÞ=Q'i;kðφLÞ

≈

8 ><

1 if k∈KC

θi;k wi if k∈KD

ðτ'iw'a';k−τjiwjaj;kÞ

Nj;kðφHÞ=N';kðφHÞ Nj;kðφLÞ=N';kðφLÞ

e

>:

ð10Þ

The above expression clearly indicates that there is no scope for IQS in continuous industries. That is because IQS in these industries is either cost-driven or taste-driven, both of which have been ruled out by assumption. By contrast, in the case of discrete industries, the above expression identifies two alternative drivers of IQS that are neither cost-driven nor taste-driven.

The first of these are affordability constraints, which operate (primarily) through the exponential term in Eq. (10). The exponential terms account for the fact that, due to affordability constraints, an across-the-board increase in the cost of all varieties supplied by country j has a disproportionally higher effect on demand for high-quality (high-cost) varieties. To demonstrate this, we

- 26 The above result offers a possible micro-foundation for the assumption underlying Alcalá (2016) that efficiency or productivity is quality-biased.
- 27 A higher p~i lowers the demand elasticity for discrete goods, which in turn creates relatively more demand for high-quality (high-cost) product varieties—see


Fajgelbaum et al. (2011); Matsuyama (2015); Dingel (2017) for a similar argument, but in the case where the home-market effect is driven by non-homothetic preferences over quality.

can take a basic derivative from Eq. (10) with respect to the national level cost-shifters, aj,k, which implies that:

( ) > 0 if k∈KD:

Qji;kðφHÞ=Q'i;kðφHÞ Qji;kðφLÞ=Q'i;kðφLÞ

∂ ∂a';k=aj;k

Based on the above expression, countries tend to specialize in higher-quality varieties in industries where they are more costefficient. The intuition is that affordability constraints are more binding for high-quality varieties. So, an improvement in costefficiency (keeping all else the same) increases market access disproportionally more for high-quality varieties. Such a link between within-industry IQS and industry-level cost efficiency is quite unique and has little precedent in the literature.26

The second driver of IQS in discrete industries is the home-market effect, which operates through the number of firms in Eq. (10). Unlike standard theories, though, the home-market effect here is not driven by non-homothetic taste for quality. Instead, it is driven (primarily) by cross-market differences in p~i. That is, a higher price of services increases the home-market demand for quality, leading to high-quality specialization due to scale economies in production.27 To demonstrate this point formally, we can take a simple derivate from the free-entry condition with respect to p~i, noting that ∂εji;kðφÞ=∂p~i < 0 for all j and i. Doing so, implies the following, provided that international trade costs are sufficiently high:

( ) > 0 ⇒

Nj;kðφHÞ=N';kðφHÞ Nj;kðφLÞ=N';kðφLÞ

∂ ∂p~j=p~'

( ) > 0: ð11Þ

Qji;kðφHÞ=Q'i;kðφHÞ Qji;kðφLÞ=Q'i;kðφHÞ

∂ ∂p~j=p~'

Let me reiterate that the home-market effect in itself is not specific to this model. In fact, Costinot et al. (2016) have already characterized this result under very general conditions.28 What is instead novel, is that the home-market effect is not driven by non-homothetic taste but by cross-country differences in the price of non-traded services. Along similar lines, affordability constraints can also trigger IQS through the home-market effect, given that high-quality varieties are more affordable and, therefore, more-demanded in high-wage markets. The following proposition summarizes the above results.

Proposition 1. Absent Ricardian comparative cost advantage and non-nomothetic preferences: (a) There is no scope for either quality specialization nor pricing-to-market in continuous industries; but (b) quality specialization and pricing-to-market can still occur in discrete industries due to cross-national differences in the price of non-traded services and affordability constraints.

Fig. 1 elucidates the above arguments using a simulated economy that features multiple countries and quality tiers.29 It compares two countries in this simulated economy (namely, North, n, and South, s) that differ only in a Hicks-neutral cost shifter, as/an = 2. The left panel assumes all varieties are universally affordable and IQS is driven by the combination of scale economies and cross-national differences in p~i. The right panel shuts down scale economies, so that IQS is driven solely by affordability constraints.

A natural follow-up question to Proposition 1 is whether the alternative forces that drive PTM and IQS in discrete industries are empirically distinguishable from cost-driven or taste-driven IQS and PTM? To answer this question, it is useful to define two aggregate trade statistics that are often used to describe standard theories of IQS and PTM. The first statistic is the industry-level export unit price, which can be defined as

∑φ∈Φ

pji;kðφÞQji;kðφÞ ∑φ∈Φ

pji;k ≡

k

:

Qji;kðφÞ

k

The second statistic is the industry-level export quality, which can be analogously defined as:s

∑φ∈Φ

φ Qji;kðφÞ ∑φ∈Φ

φji;k ≡

k

:

Qji;kðφÞ

k

As proven in Appendix C.5, combining the above definition with our prior results on PTM and IQS, yields the following proposition.

- 28 In the present model, the scale elasticity (defined as ∂ ln Qji,k(φ)/∂ ln Nj,k(φ)) is equal to "one." So, scale effects are strong enough to trigger a strong home-market

effect (see Costinot et al. (2016)). That is, all else equal, high-wage countries are not only gross exporters of high-quality but also net exporters of high-quality varieties.

- 29 The example involves 5 economies producing/consuming only discrete varieties in 50 different quality tiers: φ = 1, ..., 50. Population size in all countries is nor-


malized to one: Lj = 1, ∀j; but countries differ intheir productivity: aj = 1 + 0.25(j − 1).The region with the lowestproductivity is labeled theSouth (s) and the highest productivity region is labeled the North (n): as/an = 2. I also assume c(φ) = 0.08φ, f(φ) = φ0.25, θ = 4, and τji = 2 for all j ≠ i.

Fig. 1. Numerical example: north-south quality specialization. Note: This graph compares demand and output across different quality levels (φ = 1, . . , 50) for two economies (North and South) that differ only in their Hicks-neutral productivity, i.e., aN/aS = 2. In the left panel, service prices vary between countries but affordability constraints are non-binding. In the right panel, affordability constraints are bindings but there are no scale economies in production. More details about the simulated economy are provided in Footnote 29.

- Proposition 2. (i) Export unit prices are increasing in the price of non-traded services in the importing market, but only so in discrete industries:


0

∂pji;kð Þ:

∂p~i 1⁄4 0 if k∈KC ∂pji;kð Þ: ∂p~i

;

B @

> 0 if k∈KD

- (ii) Export unit prices are increasing in the price of non-traded services in the exporting market, but only so in discrete industries.

∂pji;kð Þ: ∂ lnp~j 1⁄4 0 if k∈KC ∂pji;kð Þ: ∂ lnp~j

> 0 if k∈KD

0

B @

;

- (iii) Export quality is increasing in a country's industry-level degree of comparative cost advantage, but only so in discrete indus-


tries:

0

∂φji;kð Þ:

∂aj;k 1⁄4 0 if k∈KC ∂φji;kð Þ: ∂aj;k

B @

< 0 if k∈KD

The above proposition presents a set of comparative static results indicating that the price of non-traded services and cost-efficiency have differential effects on aggregate export price/quality levels in discrete versus continuous industries. In the following section, I will use the above proposition to empirically test my theory. Before doing so, let me note that p~i, p~j, aj,k affect the price of exports/imports through both the quality and markup channels. These two channels are independent, but (in the present setup) they always reinforce one another's effect on prices. That being the case, I can just rely on readily observable price data to test the model's predictions. Encouragingly, as I will show next, the above predictions are all borne out.

30 The ICP data has been released for years 1970, 1973, 1975, 1980, 1985, 1993, 2005, and 2011. Here, I choose 2011 as the benchmark year for my analysis. 31 I treat the following basic headings in the ICP as non-tradable:'Housing', 'Education','Health', and'Restaurants and Hotels'. In the main analysis'Communication' is

not treated as a non-tradable heading, but treating it as one does not alter any of the results qualitatively. Moreover, similar Sposi (2015), I treat "Change in inventories and valuables," as unclassified.

- 5. Testing the predictions of the model


Proposition 2 will serve as the basis for testing my theory. In particular, I test (a) if the export unit price, pji;k, is positively related to p~i, p~j, and aj,k; and also (b) if these relationships are amplified by discreteness. To conduct my analysis, I merge two different datasets. The first of which is from the 2011 International Comparison Program (ICP) compiled by the World Bank Development Data Group.30 The ICP data reports national expenditures and PPPs for more than 150 " Basic Headings" categories. This information allows me to construct the aggregate price of non-traded services, p~i for 182 countries.31

I merge the ICP data with the COMTRADE-BACI database, which is the most comprehensive database on export unit prices. The BACI data is compiled by the CEPII based on the United Nations COMTRADE database but uses a harmonization methodology to reconcile mirror flows. This harmonization approach provides a more complete geographical coverage than if only a single direction of COMTRADE statistics were to be used—Gaulier and Zignago (2010) describe the BACI approach to harmonization, which involves computing a weighted average of mirror flows. For the year 2011, the COMTRADE-BACI database reports physical quantities and values of bilateral trade flows by 6-digit HS product category, allowing me to construct the corresponding unit price levels.

Combining the ICP and the BACI datasets, leaves me with a sample of bilateral trade statistics for 147 importers and 147 exporters across 5231 HS6 product categories in the year 2011. For each country in the sample, Head et al. (2010) report matching data for GDP, distance, and population size. So, altogether, for every exporting country j×importing country i×HS6 industry k (observation ji,k), I can construct a quantity-weighted unit price, pji;k, as well as exporter/importer characteristics such as total GDP, GDP per capita, geo-distance, p~j, and p~i. To test the prediction (iii) from Proposition 2, I also need data on the degree of industry-level comparative cost advantage. Unfortunately, the technology parameters, aj,k, are not directly observable. So, as is common in the literature, I infer them from sales data. To this end, I construct the Balassa index of revealed comparative advantage for each country j in industry k, as follows32:

∑iXji;k=∑i∑gXji;g ∑'∑iX'i;k=∑'∑i∑gX'i;g

RCAj;k 1⁄4

The above measure provides a theory-consistent proxy for aj,k; since from the lens of the model, a lower aj,k (ceteris paribus) is associated with a higher RCAj,k.

The BACI data does not explicitly report the units in which quantity is measured.33 So, I use the U.S. import and export data to identify the discrete product categories, with 1k∈K

denoting the corresponding discrete product dummy.34 This approach can classify 90% of observations in the BACI. Alternatively, to preserve all observations, I can classify a HS6 product category as discrete if it belongs to either the "Machinery," "Electrical & Optical Equipment," or "Transport Equipment" sectors. Both approaches deliver qualitatively similar results.

D

To test the model, I run the following regression on the final sample that includes 5,249,424 observations35:

lnpji;k 1⁄4 β1 þ βD1 1k∈K

lnp~i þ β2 þ βD2 1k∈K

lnp~j þ β3 þ βD3 1k∈K

D

D

lnRCAj;k þ Controlsji þ δk þ εji;k;

D

ð12Þ

where δk controls for HS6 fixed effects; and Controlsji is composed of additional controls including total GDP, GDP per capita, and geo-distance. In addition to the baseline specification, I run the above regression under alternative specifications, controlling for exporter, importer, and exporter × importer fixed effects.36

Based on Proposition 2, the estimated coefficients βD1 , βD2 , and βD3 should be positive and statistically significant.37 Encouragingly, the estimation results presented in Table 5 support theses predictions.

In line with prediction (i) from Proposition 2, the elasticity of export prices with respect to the price of non-traded services in the destination market is significantly higher in discrete industries. To provide numbers, consider Column 3 that controls for

- 32 The results of my analysis are qualitatively robust to adopting alternative measures of revealed comparative advantage, such as that proposed by Proudman and

Redding (2000).

- 33 Unlike the U.S. data which identify the unit in which physical quantity is measured, the Baci data only reports the weight-equivalent of physical quantity for all

observations.

- 34 By this classification, discrete goods account for 36% of global trade in the BACI dataset.
- 35 Using a linear regression to test the comparative static results outlined by Proposition 2, requires some clarification. In the words of Reiss and Wolak (2007), the


standard reasoning behind this choice is that "When the conditional expectation of y is nonlinear in x, statistical theory tells us (under certain sampling assumptions) that a regression provides a best (minimum expected squared prediction error) linear approximation to the nonlinear conditional expectation function." However, as Reiss and Wolak (2007) point out, there are basic caveats associated with using a linear reduced-form specification to test comparative static results.

- 36 As in Section 2, since I am dealing with grouped data each observation is weighted by trade quantity, which is a theory-consistent measure of the number of firms

grouped into each observation—refer to Section 2 for a more elaborate discussion.

- 37 The estimated coefficients β1, β2, and β3 may be positive given that 1k∈K


does not perfectly identify discrete product categories. More specifically, an industry where 1k∈K

D

1⁄4 0 may still contain a small fraction of observations that correspond to discrete goods. 38 Adding lnGDPpercapitai 1k∈K

D

as an additional control does not change the sign of the coefficients reported in Table 5. However,it increases the standarderrors, which can be indicative of multicollinearity between lnGDPpercapitai 1k∈K

D

and 1k∈K

lnp~i.

D

D

39 That RCAj,k matters in continuous industries may be driven by two factors. First, industries coded as continuous in my analysis may feature a small number of discrete categories. Second, that RCAj,k is inherently related to export prices as it reflects either a comparative quality advantage or a comparative cost advantage. In the former case, RCAj,k is positively related to pji;k, while in the latter case it is negatively related to pji;k.

The determinants of IQS and PTM (Dependent Variable: lnpji;k). Regressor (log) (1) (2) (3) (4)

- p~i 0.074∗ ... 0.006 ... (0.039) (0.022)

- p~i Discrete 0.015 ... 0.153∗∗∗ 0.161∗∗∗ (0.108) .a (0.021) (0.021)
- p~j 0.070 0.073∗∗ ... ... (0.051) (0.033)


- p~j × Discrete 0.061∗ 0.067∗∗ ... 0.104∗∗∗ (0.033) (0.029) (0.029)


RCAj,k 0.032∗∗∗ 0.021∗∗∗ ... 0.029∗∗∗ (0.005) (0.004) (0.005) RCAj,k × Discrete 0.091∗∗∗ 0.055∗∗∗ ... 0.071∗∗∗ (0.015) (0.011) (0.012)

Controls for GDP & GDP p/c Y Y Y ... Controls for Distance Y Y Y ... HS6 FE Y ... ... Y Exporter×HS6 FE N N Y N Importer×HS6 FE N Y N N Exporter×Importer FE N ... ... Y Observations 4,734,290 4,734,290 4,734,290 4,734,290

Note: this table corresponds to estimating Eq. (12). Standard errors are reported in parentheses and clustered by destination and origin country. Unit prices are constructed using the BACI database in 2011; the price of non-traded services are constructed using the ICP database in the same year; and each observation in the sample is weighted by trade quantity. ∗ p < 0.10, ∗∗ p < 0.05, ∗∗∗ p < 0.01.

exporter×HS6 fixed effects. A 10% increase in p~i, is associated with a 1.53% increase in the price of exports to market i in discrete industries. But in continuous industries, the effect is only 0.06% and statistically insignificant. To put this number in perspective, the same estimation indicates that a 10% increase in the GDP per capita of country i is associated with an only 1.6% increase in the price of exports to that market.38

Prediction (ii) is also borne out, albeit less decisively. Discreteness has a positive and statistically significant effect on how export prices vary with the price of non-traded services in the origin country. In general, this outcome may be driven by services being used as an input in production. This channel perhaps explains why pji;k and p~j are positively correlated, even in continuous industries. However, in line with the discrete model's prediction, this positive correlation is significantly more pronounced in discrete industries; standing around 0.67 percentage points higher (Table 5, Column 2).

Finally, prediction (iii) is also borne out: In discrete industries, a 10% increase in the origin country's degree of comparative advantage, RCAj,k, is associated with a 0.77% increase in export prices. In continuous industries, by comparison, RCAj,k is associated with a mere 0.21% increase in export prices (Table 5, Column 2).39 One caveat here, though, is that I am not testing the model's predictions

directly with information on quality and markups. The above analysis, therefore, cannot rule out the case where p~j, p~i, and RCAj,k have countervailing effects on export markups and qualities. Instead, loosely speaking, the analysis can only identify the joint effect of these variables on quality × markup. This limitation is, however, hard to overcome as estimates for quality and markup are difficult to attain at the scale in which my analysis is conducted. This limitation notwithstanding, the above results plus those presented in Section 2 corroborate the assertion that IQS and PTM are magnified by additional forces in discrete industries.

- 5.1.1. Restricting sample to differentiated or final goods In the above analysis, discreteness may be accounting for other omitted product characteristics such as the degree of differen-

tiation or intent of final use. To address this issue, I reestimate Eq. (12) on two restricted samples: First, a sample that only includes differentiated HS6 products as classified by Rauch (1999). Second, a sample that includes only HS6 products that are intended for final consumption, based on the Broad Economic Categories (BEC) classification.

The results derived from these restricted samples are reported in Table 6. They indicate that, even within differentiated goods, discreteness has a significant effect on how export prices, pji;k; vary with the price of services in the origin and destination economies, p~j, and p~i. Likewise, discreteness has a significant effect on how export prices vary with the origin country's degree of comparative advantage as measured by RCAj,k. The same applies when we restrict attention to only final consumption goods.

- Appendix E presents an additional test in which HS6 products are grouped into more- or less-differentiated bins according to the demand elasticity estimates in Broda and Weinstein (2006). Estimating Eq. (12) separately for these product groups produces similar results.


- 6. The big picture: the gains from discrete trade


Does accounting for discrete trade revise our understanding of the gains from trade? To answer this question, we can appeal to the result in McFadden et al. (1978) that the expected welfare of each individual in country i with respect to discrete industry k

Testing the model on only differentiated and final goods (Dependent: lnpji;k). Regressor (log) Final goods Differentiated goods

(1) (2) (3) (1) (2) (3)

- p~i ... 0.074∗∗ ... ... 0.056∗ ... (0.034) (0.034)

- p~i × Discrete ... 0.179 ∗∗∗ 0.183∗∗∗ ... 0.148∗∗∗ 0.156∗∗∗ (0.019) (0.019) (0.021) (0.016)
- p~j −0.087 ... ... 0.079 ∗∗∗ ... ... (0.086) (0.039)


- p~j × Discrete 0.186∗∗∗ ... 0.155 ∗∗∗ 0.052∗∗∗ ... 0.097∗∗∗ (0.025) (0.021) (0.005) (0.019)


RCAj,k 0.036∗∗∗ ... 0.050∗∗∗ 0.017∗∗∗ ... 0.029∗∗∗ (0.006) (0.005) (0.007) (0.006) RCAj,k × Discrete 0.004 ∗∗∗ ... 0.012 0.057 ∗∗∗ ... 0.070∗∗∗ (0.001) (0.008) (0.011) (0.010)

Controls for GDP & GDP p/c Y Y ... Y Y ... Controls for Distance Y Y ... Y Y ... HS6 FE ... ... Y ... ... Y Exporter × HS6 FE N Y N N Y N Importer × HS6 FE Y N N Y N N Exporter × Importer FE ... ... Y ... ... Y Observations 1,413,000 3,589,000

Note: this table estimates Eq. (12) separately for differentiated and final good categories. Differentiated goods are identified based on Rauch (1999). Final goods are identified using the BEC classification. Standard errors are reported in parentheses and clustered by origin and destination country. Unit prices are constructed using the BACI database in 2011; the price of non-traded services are constructed using the ICP database in the same year; and each observation in the sample is weighted by trade quantity. ∗ p < 0.10, ∗∗ p < 0.05, ∗∗∗ p < 0.01.

∈KD can be expressed as follows:

1 γk

γk 0 θk

1

2 p~i 6 4

3 7 5

θk

−

Wi;kðyÞ 1⁄4 expðyÞ ∑

φ ∑

Nj;kðφÞ exp pji;kðφÞ

;

B @

C A

φ∈Φk

j∈Ji;kðy;φÞ

where J i;kðy;φÞ 1⁄4 fj∈Cjpji;kðφÞ≤ekwiyg denotes the set of countries from which an individual with endowment y can affordably buy quality φ varieties. Correspondingly, the expected welfare of the same individual under autarky (denoted by A) is given by

γk 0 θk

1

γk

2 p~i 6 4

3 7 5

θk

−

WAi;kðyÞ 1⁄4 expðyÞ ∑

; k∈KD

φNi;kðφÞ exp pii;kðφÞ

B @

C A

φ∈ΦkðyÞ

where Φk(y) = {φ ∈ Φk|pii, k(φ) ≤ ekwiy} denotes the set of quality levels that can be affordably purchased from domestic suppliers. Combining the above two equations; using the exact hat-algebra notation, ^x ≡ x=xA; and noting that the gains from trade in continuous industries are governed by the Arkolakis et al. (2012) (ACR) formula, yields the following proposition.

- Proposition 3. [The Gains from Trade] The gains from trade, GTi(y) ≡ ΔWi(y)/Wi(y), for income group y residing in country i are given by


Y

GTiðyÞ 1⁄4 1−

k∈K

!ek γk

γk θk ei;kðφ; yÞ

γk θkN^i;kðφÞ

−

∑

λii;kðφ; yÞ

;

φ∈Φk

where ei,k(φ,y) denotes the probability of choosing quality level φ ∈ Φk, while λii, k(φ,y) denotes the probability of purchasing a domestic variety.

Based on the above proposition, the gains from trade are materialized through two distinct channels: (i) the scale-driven gains

that depend on N^i;kðφÞ; and (ii) the import variety gains that depend on λii, k(φ,y). Beholding this decomposition, let me first qualitatively discuss the distributional consequences of trade. Then, I will formally quantify the aggregate gains from discrete trade.

- 6.1. The distributional gains from trade

A straightforward corollary of Proposition 3 is that the gains from trade favor consumers that are more likely to purchase foreign varieties, i.e., consumers who exhibit a low λii, k(φ,y). In discrete industries, if trade costs are sufficiently large, low-income individuals cannot afford many imported varieties. Hence, even if individual-level preferences are homothetic, λii, k(φ,y) can be decreasing in y, and the gains from trade can favor high-income (high-y) individuals.

So, how can we reconcile the above claim with the claim in Fajgelbaum and Khandelwal (2014) that the gains from trade favor low-income consumers who spend a greater fraction of their income on tradables? The answer lies in the different interpretations of λii, k(φ,y) in discrete versus continuous industries. In continuous industries, λii, k(φ,y) perfectly coincides with the share of expenditure on domestic varieties. In discrete industries, however, λii, k(φ,y) can be strictly unrelated to the expenditure share. In particular, high-income individuals may be more likely to purchase imported varieties; but since they buy only one unit of each good, such a purchase may exhaust a smaller fraction of their income. Quantifying these distributional gains, though, requires detailed international expenditure data across various income groups. That type of data is largely inaccessible to researchers at this point. Given this underlying challenge, I turn my attention instead to quantifying the aggregate gains from trade.

- 6.2. The aggregate gains from trade

My discussion above indicated that affordability constraints matter for the distributional consequences of trade. Now, I purposely abstract from these constraints to quantify the representative gains from trade for the case where affordability constraints are non-binding and preferences are Gorman representable. In this special case, unobservable quality differentiation is also irrelevant for the aggregate gains from trade, and we can disregard it hereafter.40 The representative gains from trade can, therefore, be expressed as follows:

GTi 1⁄4 1−

Y

k∈K

λii;k=N^i;k

ei;k θk : ð13Þ

From the lens of the above formula, discrete and continuous industries are distinguished by (i) the different interpretations of

λii, k, and (ii) the different characterizations of N^i;k in discrete versus continuous industries. If we treat all industries as continuous, the above formula can be simply interpreted as the celebrated ACR formula.

- 6.3. Computing the gains from trade


To transparently highlight the role of discreteness, I use Eq. (13) to quantify the gains from trade in two extreme cases. First, as is common in the literature, I treat the traded sector of the economy as one integrated continuous industry. Second, I opt for the other extreme, treating the traded sector as one integrated discrete industry. Accordingly, I hereafter drop the industry subscript, k, and use C and D to respectively indicate if the traded sector is modeled as continuous or as discrete.41

When applying Eq. (13) under the presumption that the traded sector is continuous (k 1⁄4 C), λii;C can be calculated as the value share of domestic goods in tradable consumption. N^i;C can be derived using the free entry condition. In particular, free entry implies that Ni;C 1⁄4 ri;CLi=ð1 þ θÞfe, with ri;C denoting the share of economy i's total revenue generated in the traded sector. From this expression we can conclude that N^i;C 1⁄4 1 since rAi;C 1⁄4 ri;C 1⁄4 ei;C, where ei;C denotes the share of expenditure on traded goods.42 Plugging N^i;C 1⁄4 1 back in to Eq. (13), yields the following formula for the gains from trade under the continuous interpretation of the economy:

ei;C

GTACRi 1⁄4 1−λii;C

θ : ð14Þ

In the other extreme where the traded sector is treated as entirely discrete (D), λii;D can be calculated as the quantity share of domestic goods in tradable consumption. N^i;D can be once again derived from the free entry condition. As demonstrated in Appendix C.6, free entry implies that Ni;D 1⁄4 ∑'∈Cðλi';DY'=YiÞLi=θfe and, correspondingly, NAi;D 1⁄4 Li=θfe.43 Combining these two

- 40 To elaborate, if preferences are Gorman representable, then λii, k(y,φ) = λii, k(y,φ′) for all φ and φ′ ∈ Φk. Consequently, the quality dimension disappears from the

gains from trade equation in this case. This outcome, though, is an artifact of assuming that θk is uniform across different quality tiers within the same industry.

- 41 An alternative approach would be to use industry-level data and treat select industries as discrete. Under this approach the resulting intuitions would remain qual-

itatively the same.

- 42 rAi;C 1⁄4 ri;C 1⁄4 ei;C results from assuming one traded sector and balanced trade.
- 43 These expressions are derived under the implicit assumption that productivity in the traded sector is sufficiently high, so that domestic discrete varieties are afford-

able to local consumers irrespective of international trade costs. This assumption ensures that the demand function facing domestic varieties is continuous and welldefined.

- 44 See Appendix 10 for a descriptive list of consumption categories that fit this bill.


expressions, N^i;D 1⁄4 Ni;D=NAi;D is given by

N^i;D 1⁄4 X '∈C

Y' Yi

: ð15Þ

λi';D

Plugging the above expression back into Eq. (13), yields the following formula for the gains from trade under the discrete interpretation of the economy:

ei;D θ

ei;D θ

−

; ii;D ð16Þ

∑

λi';DY'=Yi

GTDiscretei 1⁄4 1−λ

'∈C

where ei;D denotes the share of expenditure on categories where discrete goods are bundled with non-traded services in the consumption basket.44

Evaluating Eq. (14) is rather straightforward, but mapping Eq. (16) to data involves a couple of auxiliary steps. First, we need to evaluate λii;D, which corresponds to the quantity share of domestic consumption. The COMTRADE–BACI database reports import quantities, but measuring λii;D also requires information on the quantity of domestic consumption. One way to overcome this measurement challenge is to infer λii;D from the domestic expenditure shares and prices. To demonstrate this, recall that Xji denotes country i's total spending on tradable varieties from country j, with pji denoting the corresponding price of these varieties. Given information on {Xji} and {pji}, we can express λii;D 1⁄4 Qii=∑jQji as follows

Xii=pii Xii=pii þ ∑j≠iXji=pji 1⁄4

Xii=Xi Xii=Xi þ ð1−Xii=XiÞpii=p−ii

λii;D 1⁄4

;

Xji Xi

where Xi = ∑jXji, while p−ii ≡ ∑j≠i

pji denotes the (trade-weighted average) unit price of country i's imports from the rest of the world. To evaluate the above equation, we need data data on pii=p−ii and {Xji}. Data on the former variable is obtainable from the Penn World Tables (PWT), which report aggregate price levels for imports and domestic expenditure. The data on tradable

expenditure values, {Xji} are taken from the 2008 version of the World Input-Output Database (WIOD, Timmer et al. (2012)).45 Combining the aforementioned data, I can measure λii;D for 31 countries. Likewise, measures for ei;C and ei;D can be constructed with data on {Xji} by grouping industries into traded and non-traded categories—see Table E in the appendix for details.46

ei;D

−

θ ; is computed using bilateral trade quantities, Qjl, from the COMTRADE–BACI database described in Section 5. Specifically, the export quantity share λi';D is computed as,

The second term in Eq. (16), ð∑'∈Cλi';DY'=YiÞ

Qi' ∑j≠'Q j'

1−λll;D :

λi';D 1⁄4

Data on total domestic absorption, Yi, are taken from the PWT. Plugging values for λ'i;D and Yi into Eq. (16) and combining it with the previously-constructed data for λii;D, allows me to compute the gains from discrete trade for each of the 31 countries in the 2008 WIOD sample. For the same set of countries, I can compute the gains implied by the ACR formula by plugging data values for ei;C, ei;D, and λii;C 1⁄4 Xii=Xi into Eq. (14).

- 6.3.1. Estimating θ I estimate θ using the triple difference approach developed by Caliendo and Parro (2015). This approach is fully described in


- Appendix F, and requires data on bilateral trade shares and tariff rates. Trade shares are taken directly from the WIOD. Data on bilateral tariff rates are taken from the United Nations Statistical Division, Trade Analysis and Information System (UNCTADTRAINS, see Appendix F). The estimated θ is reported in Table 7. The main difference between the continuous and discrete cases is that under the former the estimating equation reduces to the familiar log-log specification implied by CES-based models. Under the latter, the estimating equation adopts a log-level specification—see Appendix F for further details. These differences notwithstanding, both approaches estimate a relatively similar value for θ, which is in line with exiting estimates from the literature.47


- 45 To make the data consistent with theory, I purge it from trade imbalances following the methodology in Costinot and Rodrguez-Clare, 2014).
- 46 Table 8 reports the corresponding values for ei;C and ei;D for each of the 31 countries. Unlike the continuous model that is calibrated to the share of tradable expen-


diture, the discrete model is calibrated toei;D, which is the sum of expenditure on discrete tradables and matching services. In Appendix G, I check if the discrete model can replicate the (out-of-sample) share of tradable expenditure in isolation. Reassuringly, the model performs relatively well on this front.

47 Broda and Weinstein (2006) estimate an import demand elasticity that is analogous to θ + 1. Their product-level estimates exhibit an average value of 6.

Estimated θ under discrete and continuous models.

Discrete model Continuous model Estimated θ 4.30 3.63

(0.53) (0.52) observations 163,058

Note: This table reports the estimated θ using the triple differences methodology described in Appendix F. The estimation uses (a) pooled data on trade shares from the 2008 version of the WIOD that span 15 traded industries, and (b) matched tariff data from the UNCTAD-TRAINS database. The first column treats traded industries as discrete. The second columns treats traded industries as continuous. Standard errors are reported in parentheses.

- 6.4. Quantitative results

The computed gains from trade are reported in Table 8. In summary, the discrete interpretation of the data predicts gains from trade that are on average larger (7.6% versus 5.9%) and more heterogeneous than those implied by the continuous interpretation. These differences are driven by two factors: First, from the view of the discrete model, the gains from trade can be large even if a country spends a small fraction of its income on tradable goods. To elaborate, consider the US and Mexican economies that spend a similar fraction of their income on categories where traded goods are bundled with services. The US economy, though, spends only 27% of its total expenditure on specifically traded goods compared to 44% in Mexico. The continuous interpretation of the economy attributes this pattern to the US consumers assigning a lower weight to traded goods in their preferences. This interpretation inevitably predicts relatively small gains for the US. The discrete model, however, attributes the same pattern to the income-inelastic nature of discrete goods and the higher purchasing power of US consumers relative to Mexican Consumers.

Second, the discrete model admits scale-driven gains that are highly heterogeneous across countries. They favor small countries (e.g., Belgium and Canada) or low-income countries (e.g., Brazil and Indonesia) that are located in the proximity of larger and richer markets. For instance, the ACR formula predicts that trade increases Brazil's real GDP by only 1.8%. The discrete model, meanwhile, predicts gains of around 6.3% for Brazil, of which 3.6% is purely scale-driven. For Canada, the ACR formula predicts gains of around 5.4%. The discrete model predicts 15% in gains, of which 5.6% is scale-driven. As I will elaborate below, these gains are driven by firm-relocation into these countries from larger and richer trading partners like the US. Correspondingly, the scale-driven gains from trade are negative for the US and stand around −3%.

- 6.5. Elucidating the scale-driven gains from discrete trade


The scale-driven gains from discrete trade operate through a unique channel that is akin to a reverse home-market effect. After opening to trade, firms relocate from richer and larger economies that host their main costumer-base to lower-income countries. Doings so exposes them to higher trade costs but allows them to collect a higher markup over marginal cost. To better understand these effects, consider a world economy with two countries: i = 1, 2. Suppose the two countries have identical productivity levels and face similar trade costs, but differ in their population sizes:

a1;D 1⁄4 a2;D 1⁄4 a; a~1 1⁄4 a~2 1⁄4 1; τ12 1⁄4 τ21 1⁄4 τ > 1; L2 > L1:

In this basic setup, the free entry condition implies that (see Appendix C.6)

Ni;D 1⁄4 X '1⁄41;2

w'L' wiLi

λi';D

Li θfe

; i 1⁄4 1;2: ðFree EntryÞ

Moreover, given that pij;D 1⁄4 τawi þ wj=θ, the balanced trade condition can be expressed as follows:

1 θ

w2 w1 þ

τa

1 θ

- w1
- w2 þ


λ21;Dw1L1 1⁄4 τa

λ12;Dw2L2: ðBalanced TradeÞ

48 We can see the same effect by reformulating Eq. (15) as follows:

∑'∈Cð1−μ−i';1DÞωi';D ∑'∈Cð1−μ−'i;1DÞλ'i;D

N^i;D 1⁄4

;

where μi';D ≡ pji;D=cji;D denotes the multiplicative markup over marginal cost, and ωi';D denotes the share of market l in country i's total exports (∑'∈Cωi';D 1⁄4 1).

The gains from trade.

Country ei;C ei;D GDP Li GTi continuous GTi Discrete Total Scale-driven

(1) (2) (3) (4) (5) (6) (7)

- AUS 0.25 0.56 0.07 0.07 3.1% 8.4% 3.1%
- AUT 0.32 0.64 0.03 0.03 8.1% 8.2% −5.2% BEL 0.32 0.63 0.04 0.04 12.7% 25.0% 4.1% BRA 0.42 0.76 0.63 0.11 1.8% 6.3% 3.6% CAN 0.31 0.68 0.11 0.10 5.4% 15.0% 5.6% CHN 0.63 0.79 4.36 0.31 3.2% 2.5% −0.8% CZE 0.42 0.69 0.03 0.02 8.6% 13.0% 0.6% DEU 0.35 0.67 0.27 0.26 6.3% 5.3% −4.6% DNK 0.27 0.63 0.02 0.02 7.3% 8.7% −5.5% ESP 0.31 0.60 0.15 0.11 4.1% 3.1% −3.8% FIN 0.35 0.64 0.02 0.02 4.9% 7.2% −0.6% FRA 0.28 0.59 0.21 0.20 4.2% 3.3% −4.2% GBR 0.21 0.62 0.20 0.19 4.4% 4.0% −6.3% GRC 0.33 0.65 0.04 0.02 5.3% 2.1% −6.9% HUN 0.45 0.73 0.03 0.01 11.5% 12.4% −4.1% IDN 0.51 0.73 0.77 0.03 3.5% 8.5% 4.3% IND 0.51 0.76 3.86 0.08 3.2% 2.7% −1.2% IRL 0.27 0.58 0.01 0.02 5.8% 5.0% −5.5% ITA 0.34 0.65 0.19 0.16 3.7% 2.6% −3.5% JPN 0.36 0.66 0.42 0.33 2.2% 0.6% −2.5% KOR 0.52 0.77 0.16 0.07 5.4% 3.3% −3.3% MEX 0.44 0.70 0.38 0.07 4.9% 6.8% 0.1% NLD 0.27 0.62 0.05 0.06 8.8% 16.0% −0.8% POL 0.39 0.69 0.13 0.04 6.0% 7.5% −1.9% PRT 0.33 0.65 0.03 0.02 6.4% 5.9% −5.2% RUS 0.42 0.69 0.47 0.11 5.9% 9.1% 5.1% SVK 0.41 0.71 0.02 0.01 11.5% 17.5% 0.0% SVN 0.38 0.64 0.01 0.00 11.4% 12.5% −4.2% SWE 0.30 0.64 0.03 0.03 6.0% 8.8% −2.3% TUR 0.42 0.73 0.23 0.05 3.9% 3.0% −2.9% USA 0.27 0.67 1.00 1.00 2.3% 1.5% −3.0%


Note: ei;C denotes the share of expenditure on traded goods in country i. ei;D denotes the share of expenditure on categories where traded goods are bundled with matching services. See Table 1 in the appendix for details.

Combining the balanced trade and free entry conditions yields the following expression for the mass of firms located in country i = 1, 2 (see Appendix C.7):

1 C A

0 B @

w−i wi

wi w−i wi

−

Li θfe

Ni;D 1⁄4 1 þ

: ð17Þ

λ−ii;D

1 aτθ

w−i þ

Since NiA = Li/θfe denotes the mass of firms under autarky, the above equation states that opening to trade preserves the total mass of firms, globally; but induces firm-relocation from the high- to low-wage country. The intuition is that by relocating to the low-wage country, firms can collect a higher multiplicative markup over marginal cost, as is evident from the optimal price equa-

wj wiÞ.48 Furthermore, we can invoke the balanced trade condition to show that the larger economy, in our

1 aτθ

tion, pij;D 1⁄4 aτwið1 þ

example, pays a higher wage, i.e., w2 > w1. In that case, Eq. (17) implies that opening to trade induces firm-relocation from the larger to the smaller country:

N^1;D > 1; N^2;D < 1:

These effects resemble the "big-push" effects of economic development, as formalized by Rosenstein-Rodan (1943), Lewis (1954), and Murphy et al. (1989). To outline this connection, note that the scale of production in small or poor economies is constrained by their inadequate local demand. Opening to trade, however, relocates production activity towards these economies. In doing so, it provides them with the necessary pig-push platform to expand.

7. Concluding remarks

"Why nations trade" and "how much they gain from trade" are perhaps two of the most central questions in the history of economic thought. Economists have historically approached these two questions with trade models that treat all goods as infinitely divisible. This paper asked how our answers to these old questions are revised if we account for the discrete nature of traded goods. In this process, I identified two new drivers of international specialization and pricing-to-market. I further demonstrated that these previously-overlooked forces are empirically significant. Perhaps most importantly, I illustrated that accounting for the discrete or lumpy nature of trade can greatly modify our estimates for the gains from trade.

In the quest to understand discrete trade, this paper only scratched the surface. Given the fruitful nature of this preliminary step, several extensions of the discrete model are in order. First, the model provides a new perspective on the determinants of market power. In that regard, it can potentially shed light on the documented rise of global market power in importcompeting industries (see De Loecker and Eeckhout, 2017). Relatedly, the discrete model can provide a fresh perspective on the trade slowdown and zeros. To elaborate on the latter subject, there is a withstanding puzzle as to why the incidence of zero trade is related to income per capita. Appealing to affordability constraints can perhaps help resolve this puzzle. Finally, in the interest of space, the present paper resorted to quantifying the aggregate gains from discrete trade. Applying the discrete trade framework to micro-level expenditure data presents a promising avenue for feature research on the distributional consequences of trade.

- Appendix A. The firm-level colombian export and import data

The firm-level data used in Section 2 covers the universe of Colombian import and export transactions for the 2007–2013 period. The data has been collected and made available by the National Tax Agency. For each import transaction, it identifies the exporting and importing firm's id, the 10-digit Harmonized System (HS10) classification to which the imported or exported goods belong, as well as the f.o.b. value in US dollars, quantity, and the unit in which quantity is reported.

The import database features 7296 distinct HS10 product categories, and 226,288 firms from 251 different countries. Each of these import transactions is conducted by Colombian firm that is identified by their unique 9-digits tax id. In total there are 95,071 of such importers, most of which import a wide range of discrete and non-discrete HS10 products. The export database features 6590 distinct HS10 product categories sold to 231 different markets. Each of these export transactions is conducted by Colombian firm that is identified by their unique 9-digits tax id. In total there are 33,075 exporting firms in the database, many of which export a wide range of discrete and non-discrete HS10 products to various markets.

The Colombia import and export data report quantity in 10 different units. The vast majority of entries report quantity either in counts, "UNIDADES O ARTICULOS", or in kilograms, "KILOGRAMO." 72% of all observations in the import data (51% in value terms) involve goods that report quantity in counts. In comparison, 63% of all observations in the export data (12% in value terms) involve goods that report quantity in counts. I classify such goods are discrete and classify all other goods as continuous.

- Appendix B. Non-parametric model


In this appendix, I present a general non-parametric version of the model, which features the following elements: (i) the demand-side is governed by a general non-parametric discrete choice framework that can reproduce an important class of continuous and discrete demand functions, (ii) income heterogeneity is governed by a non-parametric endowment distribution, Gi(y), and (iii) the supply-side is identical to the baseline model.

- B.1. General discrete choice preference structure


Demand in all industries is characterized by a general discrete choice framework that can reproduce an important class of well-known demand systems. As in the baseline model, the economy is populated with k = 1, ..., K industries, with ek denoting the constant share of expenditure on industry k. Unless stated otherwise, the notation is similar to the one used in Section 3. The utility individual ι extracts from choosing variety ω ∈ Ωj,k(φ) and consuming qji,k(ω) units of it plus q~ hours of industry k-related services is given by:

UιðqðωÞ;q~;φÞ 1⁄4 Ukðq~;qðωÞ; φÞ þ ξιðωÞ; ω∈Ωj;kðφ; yÞ

where ξι(ω) is an individual×variety-specific utility shifter that accounts for individual ι's personal taste for variety ω. Ωj,k

- (φ,y) ⊂ Ωj,k(φ) denotes the subset of varieties affordable to an individual with endowment y. An individual residing in country i with endowed yι has a budget equal to ekyιwi. The discrete choice problem facing them, therefore, can be stated as


max

qðωÞ;q~

Ukðq~;qðωÞ;φÞ þ ξιðωÞ

49 Proof provided in Appendix C.1.

s:t: p~i;k q~ þ pji;kðωÞ qðωÞ≤ekyιwi :

The above problem can be solved in two separate steps. First, conditional on choice ω, the optimal choice for q(ω) and q~ can be

attained by maximizing Ukð:Þ subject to the budget constraint. This stage delivers an indirect utility function Vkðywi;p~i;k;pji;kðωÞÞ, which can be used to solve the second stage, which is choosing the optimal variety ω given the menu of prices and individual taste. Namely,

max

ω

Vk ywi;p~i;k;pji;kðωÞ; φ þ ξιðωÞ: ðB:1Þ

To simplify the notation, I define Vkð:Þ ≡ expðVkð:ÞÞ. Moreover, to decouple the role of horizontal and vertical differentiations, I assume that Vkð:Þ is separable in quality:

Vk ywi; p~i;k; pji;kðωÞ;φ 1⁄4 vk ywi; p~i;k;pji;kðωÞ fkðφÞ

As in the baseline model, ξι, k ≡ {ξι(ω)} is drawn independently from a General Extreme Value distribution, Fk(ξk) = exp (−∑φ∈Φ

(∑ω exp (ξ(ω))−θ

k/θk), where θk ≥ γk ≥ 0. With this assumption, we can invoke the theorem of General Extreme Value (McFadden et al. (1978); Ben-Akiva et al. (1985)) to produce the following lemma about individual-level and market-level demand functions.49

)γ

k

k

Lemma 1. The probability of choosing variety ω ∈ Ωi,k(φ,y) by an individual with is

k−γk

Pi;kðφ;yÞθ

λk y;wi;pji;kðωÞ; φ;p~i;k;PiðyÞ 1⁄4 Vk ywi; pji;kðωÞ;p~i;k;φ θk

;

∑φ0∈ΦkPi;kðφ0;yÞ−γ

k

−1

i;kðφ;yÞVkðywi;pji;kðωÞ; p~i;k; φÞθ

where Pi;kðφ; yÞ ≡ 1⁄2∑j∈C∑ω∈Ω

θk is an income- and quality-specific demand shifter. Accordingly, the market-level Marshallian demand facing variety ω ∈ Ωi,k(φ,y) can be expressed as50

k

qk wi;pji;kðωÞ;φ;p~i;k;Pi;k;Gi 1⁄4 Z

Dk ywi;pji;kðωÞ;φ;p~i;k λk y;pji;kðωÞ;φ;p~i;k;PiðyÞ dGiðyÞ Li

y

where Dkð:Þ is the demand function associated with Vk(.). In the above lemma, Pi,k(y) = {Pi,k(φ,y)} and Pi,k = {Pi,k(y)} denote the vector of demand shifters for various quality levels and

income groups. Likewise, I use i;kðyÞ ≡ fΩi;kðφ;yÞgφ∈Φk to denote the complete set of varieties (from all quality levels) affordable to individuals with endowment y in market i.

At this point, it is useful to formally define homothetic preferences from the lens of the model. I say that individual-level preferences are homothetic iff

∂λk y;wi;pji;kðωÞ; φ;p~i;k; PiðyÞ =∂y 1⁄4 0;

provided that ∂i;kðyÞ=∂y 1⁄4 0. The above definition outlines two sources of income-driven variation in individual-level demand. First, conditional on choosing from the same set of affordable varieties, λk(.) may vary with y due to the functional-form of the indirect utility function, Vkð:Þ. Second, λk(.) may vary with y due to the expansion of set i;kðyÞ with y.51 In what follows, I apply the demand system characterized by Lemma 1 to two special cases: (i) continuous industries, and (ii) discrete industries.

- B.1.1. Continuous industries Continuous industries involve goods that are (i) infinitely divisible, and (ii) not directly substitutable with services. As a result,


all continuous goods are affordable to all individuals by assumption, i.e., Ωi,k(φ,y) = Ωi,k(φ) for all y. I implement these features in

- 50 In order to make the notation more compact, I use Pi(y) instead Pi(ywi).
- 51 Following thechainrule,if λk(.)isinvarianttoincome,soisthe individual-leveldemandelasticity, εk(.)≡∂ lnλk(.)/∂ lnpji,k(ω). Likewise, ifpreferencesarehomothetic(as

defined above) the share of individuals that chose a variety with quality φ, namely, Λi,k(y,φ) ≡ Pi,k(φ,y)−γ

k

/∑φ′∈Φ

k

Pi,k(φ′,y)−γ

k

, does not vary with y.

- 52 To be clear, the price of non-traded services does not enter the indirect utility function, because of the implicit assumption that continuous goods are not directly

substitutable with services.

- 53 See Bertoletti et al. (2018) for an elaborate review of indirectly additive preferences.


my general discrete choice model by assuming that individuals spend their entire budget on buying multiple units of their preferred variety: q(ω) = ekywi/pji,k(ω). As we will see shortly, at the market-level, this choice structure is isomorphic to individuals having indirectly additive preferences and buying a fractional quantity of multiple varieties. The indirect utility, therefore, can be formulated as52

Vkð Þ 1⁄4: vk ekywi=pji;kðωÞ fkðφÞ; ω∈ΩkðφÞ:

Plugging the above characterization of Vkð:Þ into Lemma 1, the probability that a consumer with income y in country i chooses variety ω ∈ Ωj,k(φ) is given by

k−γk

Pi;kðφ; yÞθ

λk y;ekwi=pji;kðωÞ; φ; Pi;kðyÞ 1⁄4 vk yekwi=pji;kðωÞ θk

;

∑φ0∈ΦkPi;kðφ0; yÞ−γ

k

−1

j;kðφÞvkðyekwi=pji;kðωÞÞθ

where Pi;kðφ; yÞ 1⁄4 fkðφÞ1⁄2∑j∈C∑ω∈Ω

θk . Another characteristic of continuous industries is that all varieties are accessible to all consumers—i.e., Ωi,k(y,φ) = Ωi,k(φ) for all y. Correspondingly, the market-level demand facing firm ω in market i can be calculated as

k

qk ekwi=pji;kðωÞ;φ;Pi;k; Gi 1⁄4 Z

yekwi=pji;kðωÞ λk y;ekwi=pji;kðωÞ; φ; Pi;kðyÞ dGiðyÞ Li; ðB:2Þ

y

where the above expression uses the fact that Dkð:Þ ≡ yekwi=pji;kðωÞ. The above demand function is identical to that arising from indirectly additive preferences.53 This class of preferences includes the CES demand system presented in Section 3 as a special

case, where vk(x) = x. The above demand function immediately characterizes the market-level price elasticity of demand, both in the general case and in the special case where preferences are homothetic (i.e., CES).

- Lemma 2. [Demand Elasticity in Continuous Industries]


- (a) The market-level Marshallian demand elasticity facing firm ω ∈ Ωi,k(φ) depends primarily on the average consumption level in

market i (i.e., ekwi/pji,k(ω)):

εji;kðωÞ 1⁄4 εk ekwi=pji;kðωÞ; φ;Pi;k;Gi ;k∈KC:

- (b) In the case where preferences are homothetic (i.e., xvk ' (x)/vk(x) = 1), the market-level Marshallian demand elasticity is con-


stant: εji,k(ω) = 1 + θk.54

A formal proof for the above lemma is provided in Appendix C.2. But the basic intuition behind Lemma 2 can be provided by focusing on the case without income heterogeneity. In this special case, the market-level demand elasticity is given by

qji;kðωÞ v0k qji;kðωÞ vk qji;kðωÞ

εk qji;kðωÞ; φ 1⁄4 1 þ θk

:

where qji;kðωÞ ≡ ekwi=pji;kðωÞ. The above formula implies that the main source of variation in the market-level demand elasticity is the level of consumption. Moreover, εk(.) is strictly increasing in the average consumption level, q, as long as individual-level

∂ ∂q

qv0kðqÞ vkðqÞ

< 0, which is also known as Marshall's second law of demand

demand satisfies the sub-convexity assumption,

(Mrázová and Peter Neary (2017)). The above property is at the core of many existing theories of PTM and IQS. That is, as individuals become richer and consume more, they become less price-sensitive. Correspondingly, firms charge higher markups in

- 54 More generally, individual-level preferences are invariant to income if xvk′(x)/vk(x) = constantk; but here to simplify the exposition focus on the case where xvk′(x)/

vk(x) = 1.

- 55 There is another well-known class of continuous demand functions, popularized by Arkolakis et al. (2019) (ACDR), where the market-level demand elasticity varies


notdirectlyasa functionofindividual consumption,but as function of price pji,k(ω) relative to a market-levelchoke price.The ACDR class ofpreferences isclosely related to the indirectly additive preferences nested by the present model. However, to formally reproduce the ACRD class of demand systems with a discrete choice frame-

work, one has to impose stronger functional form assumptions onVkð:Þ—see Thisse and Ushchev (2016) who reproduce the ACDR demand system using a multinomial logit framework.

56 Theoretically, the choice of forgoing a discrete purchase can be thought of as follows. There is a choice categoryφ~∈Φk (in addition to all existing categories), which consists of homogeneous varieties (i.e.,~θ→∞ in this particular category). Each variety pertaining to this category is priced competitively atp~i;k. Hence, choosing a variety from this category is akin to spending one's entire budget on services.

markets that are populated with high-income, less price-sensitive individuals. The special case where preferences are homothetic (i.e., qvk′(q)/vk(q) = 1), is isomorphic to the CES model. The fact that the homotheticity and constant elasticity of market-level demand coincide, is a basic corollary of Bergson' s theorem. This result is significant, as it states that the market-level demand for continuous goods varies across low- and high-wage markets only and only if individual-level preferences are nonhomothetic.55

- B.1.2. Discrete industries Discrete industries involve goods that are (i) indivisible, and (ii) substitutable with services. I implement these features in my


general discrete choice model by assuming that individuals acquire one unit of their preferred discrete variety, and spend the rest of their budget on corresponding services. They can also forgo paying an acquisition cost by spending their entire budget on services.56 Considering this, an individual with endowment y who opts for variety, ω ∈ Ωk(φ,y), purchases one unit (i.e., q(ω) = 1) and is left with ekywi − pji,k(ω) to spare on services. The indirect utility associated with Ukð:Þ can, therefore, be expressed as

Vkð Þ 1⁄4: vk hekwiy−pji;kðωÞi=p~i;k fkðφÞ; ω∈Ωi;kðy; φÞ

Plugging the above formulation into Lemma 1, implies that the individual-level probability of choosing variety ω ∈ Ωi,k(y,φ) is given by

!θ

k−γk

k Pi;kðφ; yÞθ

pji;kðωÞ p~i;k

λk y;pji;kðωÞ=p~i;k;φ;Pi;kðyÞ 1⁄4 vk ~ei;ky−

; ðB:3Þ

∑φ0∈ΦkPi;kðφ0; yÞ−γ

k

1 θk. Noting that Dkð:Þ 1⁄4 1, the market-level demand

where ~ei;k ≡ ek=a~i;k, and Piðφ; yÞ 1⁄4 fkðφÞ1⁄2∑j∈C∑ω0∈Ωj;kðy;φÞvkð~ei;ky−pji;kðωÞ=p~i;kÞθ

k

facing variety ω can, therefore, be expressed as

2 6 4

3 7 5Li: ðB:4Þ

qk pji;kðωÞ=ekwi;pji;kðωÞ=p~i;k;φ;Pi;k; Gi 1⁄4 Zpji;kðωÞ ekwi

∞

λk y; pji;kðωÞ=p~i;k;φ;Pi;kðyÞ dGiðyÞ

where, unlike the continuous case, the above aggregation takes into account that variety ω is affordable only to consumers with an endowment y ≥ pji,k(ω)/ekwi.

Before moving forward, it should be noted that the above framework differs from existing discrete choice trade models (e.g., Verhoogen (2008) and Fajgelbaum et al. (2011)) in two key aspects. First, the present setup allows for discrete goods to be combined with "non-traded" services, whereas prior discrete choice models do not feature a non-traded sector.57 Second, the present model allows for affordability constraints to bind. Using Eq. (B.4), I can derive the market-level demand elasticity both in the general case and in the homothetic case.

- Lemma 3. [Demand Elasticity in Discrete Industries]


- (a) The market-level Marshallian demand elasticity facing firm ω ∈ Ωi,k(φ) is primarily a function of its overall affordability (i.e., pji,k

(ω)/ekwi) and its price relative to non-traded services (i.e., pji;kðωÞ=p~i;k):

εji;kðωÞ 1⁄4 εk pji;kðωÞ=ekwi; pji;kðωÞ=p~i;k;φ;Pi;Gi ; k∈KD:

- (b) In the case where preferences are homothetic (i.e., vk ' (x)/vk(x) = 1), the market-level demand elasticity is given by


εji;kðωÞ 1⁄4 θkpji;kðωÞ=p~i;k þ ρji;kðωÞHi pji;kðωÞ=ekwi pji;kðωÞ=ekwi; k∈KD:

57 To be specific, the present framework can replicate Verhoogen, 2008 under the following assumptions: (i) v(x) = eαx and f(x) = eβx; (ii) all varieties are affordable; (iii) services are costlessly traded across markets, i.e., p~i 1⁄4 1 for all i (Verhoogen (2008) though allows f(.) to be market-specific). Likewise, the present framework can replicate the framework in Fajgelbaum et al. (2011) under the following assumptions: (i) Vðy; p~i;pωi;φÞ 1⁄4 expðφðy−pωiÞ=p~iÞ, (ii) all varieties are affordable, and (iii) services are costlessly traded across markets, i.e.,p~i 1⁄4 1for all i. Note, however, that the framework in Fajgelbaum et al. (2011) does not satisfy Assumption A1, which as stated earlier is not consequential to any of our claims that follow.

- 58 IGFR stands for Increasing Generalized Failure Rate, which is satisfied by nearly all empirically-relevant income distributions (see Lariviere and Porteus (2001) and

Lariviere (2006)).

- 59 In the discrete case the existence of a solution is implied by the fact that εk(.) is increasing in νji,k(φ).


where ρji,k(ω) reflects the importance of the marginal consumers and Hi(.) denotes the hazard rate of the income distribution in market i.

The above lemma, which is proven in Appendix C.3, indicates that one source of cross-market variation in εk(.) is the functional-form of vk(.). Specifically, if vk′(x)/vk(x) ≠ 1, preferences will be non-homothetic and will naturally produce crossmarket heterogeneity in demand. The demand elasticity corresponding to the homothetic case differs from the formula presented in Section 3, because it is derived under an arbitrary endowment distribution, Gi(y). The empirically-relevant case, though, is one where the income distribution satisfies the IGFR property.58 In that case, Hi(x)x is increasing and εji,k(ω) is lower the more the affordable variety ω. The term ρji,k(ω), is the purchase probability of variety ω's marginal consumers relative to its average consumer. Theoretically, ρji,k(ω) may be greater than 1, even when preferences are homothetic. That is because the marginal consumer buying ω may be choosing from a narrower set of affordable varieties. However, for any variety ω, we can set ρji,k(pji,k (ω)) ≈ 1 to a first-order approximation if (i) vk′(.)/vk(.) = 1, and (ii) Ωi,k(φ) is composed of a discrete set of varieties.

- B.2. Equilibrium

Given Lemmas 2 and 3, the demand elasticity facing variety ω in market i is uniquely determined by pji,k(ω)/wi plus marketlevel demand shifters, Pi,k. The symmetry of firms within economy j entails that they all charge the same price pji,k(φ) for industry k goods as a function of quality φ. Defining νji,k(φ) ≡ pji,k(φ)/wi, we can express the optimal monopoly pricing equation as follows59:

νji;kðφÞ 1⁄4

εk νji;kðφÞ; φ;Pi;k;Gi εk νji;kðφÞ;φ; Pi;k;Gi −1

τjiaj;kcðφÞwj wi

;

where Pi,k = Pi,k(w,Nk,νi,k) is uniquely determined by νi,k ≡ {νji,k(φ)}ω∈Ωk(φ), φ∈Φk, the vector of aggregate wage rates, w = {wi}i, and number of firms Nk = {Ni,k(φ)}i∈C, φ∈Φk. Similarly, given νi,k, w, and Nk we can uniquely pin down the matrix of industry-level bilateral trade values as

Xji;k φ;w; Nk;νi;k;Gi 1⁄4 νji;kðφÞNj;kðφÞλk νji;kðφÞ;φ;Pi;k; Gi Yi ðB:5Þ

where λkð:Þ ≡ qkð:Þ=L denotes the market-level probability of choosing an imported variety. Subsequently, given the matrix Xk ≡ {Xji,k(φ,w,Nk,νi,k,Gi)}j, i∈C, φ∈Φk, we can calculate the variable profits in each country and industry.

So, altogether, we can define the equilibrium as a vector of normalized prices νi,k, wage rates w, number of firms Nk, and market-specific demand shifters, Pi,k = Pi,k(w,Nk,νi,k), that satisfy (i) the optimal pricing equation, (ii) the balanced trade condition (BT), and (iii) the zero-profit condition (FE):

νji;kðφÞ 1⁄4

εkðνji;kðφÞ;φ; Pi;k;GiÞ εkðνji;kðφÞ;φ;Pi;k; GiÞ−1

τjiaj;kcðφÞwj wi

∀φ∈Φk;k∈K

∑j∑k∑φ∈Φ

k

Xji;kðφ; w;Nk;νi;k;GiÞ 1⁄4 ∑'∈∑k∑φ∈Φ

k

Xi';kðφ; w;Nk;νi;k;GiÞ ∀k∈K ðBTÞ

Nj;kðφÞ 1⁄4 f∑i

νji;kðφÞ λkðνji;kðφÞ;φ;Pi;k; GiÞ εkðνji;kðφÞ; φ; Pi;k;GiÞ

Yi Y jg

Lj fekðφÞ

∀k∈K ðFEÞ

8

><

>:

;

By Walras' law, the satisfaction of the BT and FE conditions ensures that labor markets also clear in each country.

- B.3. IQS and PTM: discrete vs. continuous industries


Recall that, when preferences are homothetic, the demand elasticity is (a) constant and uniform across markets in continuous industries, but (ii) variable and heterogeneous across markets in discrete industries. This outcome immediately implies that we can produce the following analog of Proposition 1, using the general non-parametric model.

Proposition 4. (a) Non-homothetic preferences and Ricardian technology differences are the only drivers of international quality specialization and pricing-to-market in continuous industries; but (b) in discrete industries, international quality specialization and pricingto-market may be alternatively driven by affordability constraints and cross-national heterogeneity in the price of non-traded services.

The proof of the above theorem follows trivially from Lemmas 2 and 3, but needs a basic qualification. There exist a class of continuous preferences that are not indirectly additive, but are homothetic and imply a non-constant demand elasticity, e.g., Kimball preferences. In that case, the above proposition should be restated as follows: PTM may occur under homothetic preferences, but not PTM as a function of income per capita, which is the focus of this paper.

- Appendix C. Proofs and derivations


- C.1. Demand shares under general discrete choice preferences


Suppose the utility of the individual ι with income Y can be expressed as

UιðωÞ 1⁄4 lnVk Y;pji;kðωÞ;p~i;k þ ξιðωÞ; ω∈Ωj;kðφÞ

In this appendix, I invoke the theorem of "general extreme value" to characterize the share of consumers who choose variety ω as their preferred variety. To this end, define Hk(V) as follows

HkðVÞ 1⁄4 X φ∈Φk

k!γ

k=θk

AðφÞVðωÞθ

∑

∑

ω∈Ωj;kðφ;yÞ

j∈C

where V ≡ {V(ω)}, with VðωÞ ≡ VkðY;pji;kðωÞ; p~i;kÞ. Note that Hk(.) is a continuous and differentiable function of vector V and has the following properties:

Hkð Þ: ≥0;

- (i) Hk(.) is a homogeneous function of rank θk: Hk(ρV) = ργ

k

Hk(V); limV(ω)→∞Hk(V) = ∞ , ∀ ω ∈ ∪j∈CΩj,k;

- (ii) the m'th partial derivative of Hk(.) with respect to a generic combination of m variables V(ω), is non-negative if m is odd and non-positive if m is even.


Following Ben-Akiva et al. (1985), if ξι(ω)'s (the idiosyncratic taste parameters) are drawn from the following distribution

0 @

X

FkðξÞ 1⁄4 expð−HkðexpðξÞÞÞ 1⁄4 exp −

φ∈Φk

1 A;

k!γ

k=θk

AðφÞ expðξðωÞÞθ

∑

∑

ω∈Ωj;kðφ;yÞ

j∈C

then the probability of choosing variety ω ∈ Ωi,k(φ,y), namely, λðωÞ ≡ λðY; p~i;k; pωi; φÞ is given by

∂HkðVÞ ∂VðωÞ

γk θk

−1

VðωÞ

AðφÞVðωÞθ

k ∑j∈C∑ω0∈Ωj;kðφ;yÞAðφÞV ω0 θ

k

λðωÞ 1⁄4

1⁄4

γk θk

γkHkðVÞ

∑φ0∈Φk ∑ω0∈Ωi;kðφ0;yÞAðφ0ÞVðω0Þθ

k

γk θk

AðφÞ ∑j∈C∑ω0∈Ωj;kðφ;yÞV ω0 θ

VðωÞθ

k

k

1⁄4

:

γk θk

∑j∈C∑ω0∈Ωj;kðφ;yÞVðω0Þθ

k

∑φ0∈Φk Aðφ0Þ ∑j∈C∑ω0∈Ωj;kðφ0;yÞVðω0Þθ

k

The expression for qk(.) follows trivially from the above expression by integrating over all consumers in market i.

- C.2. Demand elasticity in continuous industries


This appendix derives the demand elasticity in continuous industries, which amounts to proving Lemma 2 from Appendix B. Claim (a) in Lemma 2 can be proven by taking the derivative of qk(.) w.r.t. pji,k(ω):

Z

∂qk pji;kðωÞ;... ∂pji;kðωÞ

∂ ∂pji;kðωÞ

Dk ekywi; pji;kðωÞ λk y; ekwi=pji;kðωÞ;φ;Pi;kðyÞ dGiðyÞ Li

1⁄4

y

" #Li

!dGiðyÞ

1⁄4 Z

∂Dkð Þ: ∂pji;kðωÞ

∂λkð Þ: ∂pji;kðωÞ

λk y; ekwi=pji;kðωÞ;φ;Pi;kðyÞ þ Dk ekywi;pji;kðωÞ

y

0 @

1 ADk ekywi;pji;kðωÞ λkð Þ: dGiðyÞ

2 4

3 5Li

1⁄4 − Z

v0k ekywi=pji;kðωÞ vk ekywi=pji;kðωÞ

1 pji;kðωÞ

ekywi pji;kðωÞ

1 þ θk

y

- 1 þ θkZ y

ekywi pji;kðωÞ

v0k ywi=pji;kðωÞ vk ywi=pji;kðωÞ

dGi;k y;wi=pji;kðωÞ; φ;Pi

- 2 4


3 5;

qkð Þ: pji;kðωÞ

1⁄4 −

where Gi;k denotes the demand-weighted income distribution, which augments the actual income distribution, Gi(.), by weighing each income group by their demand:

λk y;ekwi=pji;kðωÞ;φ;PiðyÞ dGiðyÞ R

dGi;k y;wi=pji;kðωÞ; φ;Pi ≡

y0λk y; ekwi=pji;kðωÞ;φ; Piðy0Þ dGiðy0Þ

Using the above expressions, we can immediately calculate the demand elasticity, εk(.) = ∣ ∂ ln qk(.)/∂ ln pji,k(ω)∣, as follows:

2 4

εk ekwi=pji;kðωÞ; φ; Pi; Gi 1⁄4 1 þ θk Z

3 5 ekwi

v0k yekwi=pji;kðωÞ vk yekwi=pji;kðωÞ

y dGi;k y;ekwi=pji;kðωÞ;φÞ

:

pji;kðωÞ

y

The above equation clearly states that apart from the aggregate demand shifters, Pi, the income distribution, Gi(.), and the quality level, φ, which applies to all firms in set Ωi,k(φ), εk(.) only depends on the average demand level, ekwi/pji,k(ω).

To prove Claim (b), I first need to characterize the conditions under which λk(.) is invariant to income. To this end, defining xji,k(ω) ≡ eky/pji,k(ω), we can take the derivative of λk(.) as follows:

0 @

1 A

∂ lnvk xji;kðωÞ ∂ lny

∂ lnvk xji;k ω0 ∂ lny

λk xji;k ω0 ; φ;Pi Λkðφ;yÞ

∂ lnλkðxω;φ;PiÞ ∂ lny 1⁄4 θk

X

X

−

j∈C

ω0∈Ωj;kðy;φÞ

2 4

∂ lnvk xji;k ω0 ∂ lny

λk xji;k ω0 ; φ;Pi Λkðφ; yÞ

−γk X j∈C

X

ðC:1Þ

ω0∈Ωj;kðy;φÞ

3 5;

∂ lnvk xji;k ω0 ∂ lny

X

X

X

xji;k ω0

λk xji;k ω0 ;φ0; Pi

−

j∈C

φ0∈Φk

ω0∈Ωj;kðy;φÞ

where Λk(φ,y) ≡ Pi,k(φ,y)−γ

[Pi,k(φ′,y)−γ

/∑φ′∈Φ

] denotes the share of consumers choosing quality φ. Given that the probability shares add up to one, i.e.,

k

k

k

X

X

λk xji;k ω0 ;φ; Pi =Λkðφ;yÞ 1⁄4 X

j∈C

ω0∈Ωj;kðy;φÞ

φ0∈Φk

X

X

λk xji;k ω0 ; φ0;Pi 1⁄4 1;

j∈C

ω0∈Ωj;kðy;φÞ

a sufficient condition for ∂ ln λk(.)/∂y = 0 is that ∂ ln vk(x)/∂ ln y = constant. Given that x ≡ ey/p, this condition can be otherwise stated as

xv0kðxÞ=vkðxÞ 1⁄4 ck;

where ck is an industry-level constant. It follows trivially from Eq. (C.1) that the above condition is also necessary for the invariance of λk(.) w.r.t. y. In particular, if ∂ ln λk(xji,k(ω),φ,Pi)/∂ ln y = 0 is to be satisfied simultaneously for all ω, then it should be the

case that xvk′(x)/vk(x) = ck. Plugging this condition into the general demand elasticity formula, yields the constant elasticity expression:

εk ekwi=pji;kðωÞ; φ; Pi; Gi 1⁄4 1 þ θkck;

where the formula stated under Lemma 2 concerns the special case, where ck = 1.

- C.3. Demand elasticity in discrete industries


Claim (a) can be proven by applying the Leibniz integral rule as follows:

∂qk pji;kðωÞ;... ∂pji;kðωÞ

pji;kðωÞ ekwi

1⁄4 −λk

; pji;kðωÞ;p~i;k;φ;PiðyÞ gi pji;kðωÞ=ekwi Li=ekwiþ

!

0

1

pji;kðωÞ p~i;k

ekwi p~i;k

v0k y

−

Z p∞ji;kðωÞ ekwi

θk p~i;k

−

!λk y;pji;kðωÞ; p~i;k;φ; PiðyÞ dGiðyÞ

Li:

B @

C A

pji;kðωÞ p~i;k

ekwi p~i;k

−

vk y

where, as defined in the mains text, λkðpji;kðωÞ;p~i;φ; PiðyÞÞ ≡ qkð:Þ=1⁄21−Giðpji;kðωÞ=ekwiÞ Li denotes the purchase probability of the average consumer who can afford ω. Recalling the definition of Gi;kð:Þ from Appendix C.2, the above equation immediately implies the following expression for the demand elasticity, εk(.) = ∣ ∂ ln qk(.)/∂ ln pji,k(ω) ∣ :

!

2

3

pji;kðωÞ ekwi

pji;kðωÞ p~i;k

; φ; PiðyÞ

λk

;φ;Pi;Gi!

;

gi pji;kðωÞ=ekwi 1−Gi pji;kðωÞ=ekwi

pji;kðωÞ ekwi

pji;kðωÞ p~i;k

pji;kðωÞ ekwi

εk

1⁄4

;

6 4

7 5

λk pji;kðωÞ;φ;p~i;k;PiðyÞ

!

2

3

pji;kðωÞ p~i;k

v0k ~ei;ky−

;φ; Pi!

þ θk Z p∞ji;kðωÞ ekwi

pji;kðωÞ p~i;k

pji;kðωÞ p~i;k

!dGi;k y;

;

6 4

7 5

pji;kðωÞ p~i;k

vk ~ei;ky−

where ~ek ≡ ek=a~i;k. The above equation clearly states that apart from the aggregate demand shifters, Pi, the income distribution, Gi (.), and the quality level, φ, which applies to all firms in set Ωj,k(φ,y), εk(.) only depends on (i) the degree of affordability pji,k(ω)/ ekwi, and (ii) the price relative to services, pji;kðωÞ=p~i;k.

To prove Claim (b), I first need to characterize the conditions under which λk(.) is invariant to income. To this end, we can take the same exact steps outlined earlier in the proof of Lemma 2, which imply that individual demand probabilities are (conditionally) invariant to y iff ∂ ln vk(x)/∂ ln y = constant. In the case of discrete demand industries, where x 1⁄4 ðy−pji;kðωÞÞ=p~i;k, this condition simply reduces to

v0kðxÞ=vkðxÞ 1⁄4 ck;

where ck is an industry-level constant. Plugging this condition into the general demand elasticity formula, yields the following formulation:

pji;kðωÞ p~i;k þ ρji;kðωÞHi

εk pωi=ekwi;pji;kðωÞ=p~i;k;φ;Pi;Gi 1⁄4 ckθk

pji;kðωÞ ekwi

pji;kðωÞ ekwi

;

where Hi(y) = gi(y)/(1 − Gi(y)) the hazard rate of the income distribution in market i. Also, note that the formula stated under Lemma 3 concerns the special case, where ck = 1. The demand elasticity in benchmark model presented in 3 can be attained as a special case of the above formula, where (i) ck = 1, and (ii) the endowment distribution is exponential, with a constant hazard rate Hi(.) = ζi. So, given that ρji,k(ω) = ρji,k(pji,k(ω)) ≈ 1 to a first-order approximation, the above elasticity formula in this special case reduces to Eq. (8) from Section 3:

pji;kðωÞ p~i;k þ ζi

pji;kðωÞ ekwi

εji;kðφÞ 1⁄4 θk

:

- C.4. Deriving Eq. (10)

Continuous industries (k∈KC): In the case of continuous industries, the CES demand implies that

Qji;kðφHÞ=Qji;kðφLÞ Qji;kðφHÞ=Qji;kðφLÞ

1⁄4 1⇔

pji;kðφHÞ=pji;kðφLÞ pji;kðφHÞ=pji;kðφLÞ

1⁄4 1; k∈KC:

The right-hand side of the above condition holds due to the assumption price exhibits a constant markup and the countryspecific cost-shifter is quality-neutral: pji,k = μkτji,kaj,kc(φ)wi.

Discrete industries (k∈KD): The demand facing a firm supplying discrete varieties from country j to market i is given by:

qji;kðφÞ 1⁄4 Zpji;kðφÞ ekwi

∞

exp −pji;kðφÞ=θk Ψi;kðφ;yÞe−ζ

iðy−χiÞdy

2 6 4

3 7 5 φ∈Φk; ðC:2Þ

In the above equation, Ψi,k(φ,y) is a quality×income-specific demand shifters, which can be expressed as follows:

Ψi;kðφ;yÞ 1⁄4

h∑'∈CN';kðφÞ exp −pji;kðφÞ=θk iγk

θk

−1

∑φ∈Φ

k

h∑'∈CN';kðφÞ exp −pji;kðφÞ=θk iγk

θk

Li:

Since, Ψi,k(φ,y) is piecewise differentiable with ∂Ψi,k(φ,y)/∂y = 0, we can perform integration by parts (pice-by-piece) to rewrite Eq. (C.2) as follows:

qji;kðφÞ 1⁄4 exp −pji;kðφÞ=p~iθk

1 ζi

e

−ζi

pji;kðφÞ ekwi

−yi

" #Ψi;k φ;pji;kðφÞ=ekwi

1⁄4 Ai exp pji;kðφÞ=wi −θi;kΨi;k φ;pji;kðφÞ=ekwi ;

where 1=θi;k ≡ θk=a~i þ ζi=ek and Ai ≡ eζi

y

i=ζi. Noting that (i) Qji,k(φ) = Nj,k(φ)qji,k(φ) and (ii) pji,k(φ) = τji,kaj,kwjck(φ) + θi,kwi, the above equation yields the following expression:

Qji;kðφHÞ Qji;kðφLÞ

1⁄4

Nj;kðφHÞ Nj;kðφLÞ

exp hpji;kðφLÞ−pji;kðφHÞi θi;k

wi

Ψi;k φH;pji;kðφHÞ=ekwi Ψi;k φL;pji;kðφLÞ=ekwi

1⁄4

Nj;kðφHÞ Nj;kðφLÞ

expð1⁄2ckðφLÞ−ckðφHÞ τji;kaj;kwjÞ

θi;k

wi Ψi;kðφH;pji;kðφHÞ=ekwiÞ Ψi;kðφL;pji;kðφLÞ=ekwiÞ

:

Finally, given that to a first-order approximation Ψi;kðφ; yÞ 1⁄4 Ψi;kðφ; yiÞ for all y, then for any two suppliers j and l,

Ψi;k φH; pji;kðφHÞ=ekwi =Ψi;k φL;pji;kðφLÞ=ekwi Ψi;k φH; p'i;kðφHÞ=ekwi =Ψi;k φL;p'i;kðφLÞ=ekwi

≈ 1:

That being the case, Eq. (C.3) immediately implies Expression 10 for k∈KD.

- C.5. Proof of Proposition 2


Let rji,k(φ) = Qji,k(φ)/∑φ′∈ΦkQji,k(φ′) and let us only focus on a discrete industry k∈KD. An immediate corollary of Eq. (10) (derived in the previous appendix) is that for any φH and φL ∈ Φk such that φH > φL:

∂rji;kðφHÞ=rji;kðφLÞ ∂p~i

;

∂rji;kðφHÞ=rji;kðφLÞ ∂p~j

;

∂rji;kðφHÞ=rji;kðφLÞ ∂aj;k

> 0:

Combining the above relationship with the fact that ∑φ∈Φ

rji,k(φ) = 1, the above expression simply implies that

k

∂2rji;kðφÞ ∂φ∂p~i

;

∂2rji;kðφÞ ∂φ∂p~j

;

∂2rji;kðφÞ ∂φ∂aj;k

> 0:

∂pji;kðφÞ ∂p~i

∂pji;kðφÞ ∂φ

Now let us focus on the effect of p~i on the aggregate export unit price, pji;k. Given that (a)

, (b)

> 0, and (c) ∂2rji;kðφÞ ∂φ∂p~i

> 0, it immediately follows that

! > 0; k∈KD:

∂pji;k ∂p~i 1⁄4 X

∂rji;kðφÞ ∂p~i þ

∂pji;kðφÞ ∂p~i

pji;kðφÞ

rji;kðφÞ

φ0∈Φk

∂φji;k ∂aj;k

∂pji;k ∂p~j

∂pji;k ∂p~i 1⁄4

∂pji;k

> 0 if k∈KD. Meanwhile, the fact

∂p~j 1⁄4 0 if k∈KC follows trivially from all components of rji,k(φ) and pji,k(φ) being invariant top~j, p~i. Relatedly,

> 0 and

Along the same line arguments we can establish that

∂φji;k ∂aj;k 1⁄4 0 follows from rji,k(φ)

being invariant to aj,k.

- C.6. Gains from trade formulas

This appendix derives the gains from trade formula presented in Section 6 under Eq. (16). Recall that this equation is derived

under the assumption that (a) the traded sector is entirely discrete (labeled D), and (b) consumers spend ei;D of their total budget on consumption categories where traded discrete goods are combined with non-traded services. Based on these assumptions, Eq. (13) implies that

GTi 1⁄4 1− λii;D=N^i;D

ei;D θ :

To arrive at Eq. (16) from the above expression, we need to characterize N^i;D. To this end, we can appeal to the free-entry condition:

Ni;Dwife 1⁄4 X '∈C

pi';D−ci';D Qi';D:

where Qi';D 1⁄4 λi';DL'. In the absence of affordability constraints, pi';D 1⁄4 ci';D þ w'=a~'θ. Assuming a~' 1⁄4 1 for all l, and substituting for pi';D−ci';D in the above expression yields

Ni;Dwife 1⁄4 X '∈C

w' θ

λi';DL' 1⁄4 X '∈C

1 θ

λi';D

w'L' wiLi

wiLi:

Rearranging the above equation implies, Ni;D 1⁄4 ∑'∈Cðλi';D

w'L' wiLi Þ

Li θfe

. Accordingly, under autarky, NAi;D 1⁄4

Li θfe

, which yields

N^i;D 1⁄4 NAi;D=Ni;D 1⁄4 X '∈C

λi';D

w'L' wiLi

:

Plugging the above expression back in to expression for GTi, yields 16.

- C.7. Derivation of Eq. (17)


As shown in the previous appendix, the number of firms located in country 1 (i.e., the Free Entry equation) can be stated as

w2L2 w1L1 þ λ11;D

w1L1 w1L1

N1;D 1⁄4 λ12;D

L1 θfe 1⁄4 λ12;D

w2L2 w1L1 þ λ11;D

L1 θfe

: ðC:4Þ

w2L2 w1L1

Rearranging the Balanced Trade equation, the term λ12;D

0 B @

1 C Aλ21;D

1 θ

w2 w1 þ

τa

w2L2 w1L1 1⁄4

λ12;D

1 θ

- w1
- w2 þ


τa

2 6 4

3 7 5 1⁄4 λ21;D 1 þ

2 6 4

3 7 5:

w2 w1

- w1
- w2


w2 w1

- w1
- w2 1


−τa

−

τa

1⁄4 λ21;D 1 þ

1 θ

- w1
- w2 þ


- w1
- w2 þ


τa

aτθ

(in Eq. (C.4)) can be alternatively expressed as

w2L2 w1L1

Plugging the above expression for λ12;D

back into Eq. (C.4) yields the following expression for N1;D:

0 B @

0 B @

1 C A

1 C A

2 6 4

3 7 5 þ λ11;D

w2 w1

- w1
- w2 1


w2 w1

- w1
- w2 1


−

−

L1 θfe 1⁄4 1 þ

L1 θfe

N1;D 1⁄4 λ21;D 1 þ

; ðC:5Þ

λ21;D

- w1
- w2 þ


- w1
- w2 þ


aτθ

aτθ

where the second line follows from λ21;D þ λ11;D 1⁄4 1. Following the same exact steps, we can derive the following expression for N2, D:

0 B @

- w1
- w2


w2 w1

−

N2;D 1⁄4 1 þ

1 aτθ

w2 w1 þ

1 C A

L2 θfe

: ðC:6Þ

λ21;D

Eqs. (C.5) and (C.6) can be alternatively formulated as

1 C A

0 B @

w−i wi

wi w−i wi

−

Li θfe

Ni;D 1⁄4 1 þ

λ−ii;D

:

1 aτθ

w−i þ

Appendix D. Discrete trade with firm-level heterogeneity

Below, I outline the implications of firm-heterogeneity for the model. Before doing so, note that the firm-level predictions of the model, with regards to PTM, are not sensitive to firm-level heterogeneity by construction. The macro-level predictions, regarding IQS, however, can change with the introduction of firm heterogeneity.

In the baseline model, ck(φ, z) denotes the marginal labor requirement for producing quality φ in industry k. In the baseline case, z differs across countries but is the same across all firms in a given country. So, to model firm heterogeneity I make the following amendments to the baseline model:

(i) Firms are ex-ante identical in industry k. After paying the entry cost, firms are assigned a productivity, z, which is the realization of a random variable drawn independently across firms from a Pareto distribution:

Fj;kðzÞ 1⁄4 1−Aj;kz−η

k

;

where Aj,k is a country×industry-specific productivity shifter. (ii) Firms have to incur a fixed cost, fi,k(φ), to serve market i in quality level φ ∈ Φk.

Extending the discussion in Appendix B, the profits facing each firm with productivity z can be expressed as πk(νji,k(φ,z),φ,Pi, k), where νji,k(φ,z) ≡ pji,k(φ,z)/wi. The zero-profit cutoff is, therefore, determined by the following equation:

πk νji;kðφ; zÞ;φ;Pi;k 1⁄4 wifi;kðφÞ:

Importantly, the above equation implies that νji∗,k(φ,z) should be uniform across all exporting countries. Namely,

νji;k φ; zji;kðφÞ ≡ νi;kðφÞ:

Correspondingly, the total value of exports from country j to market i in quality-level φ ∈ Φk is given by

!wiLi: ðD:1Þ

Xji;kðφÞ 1⁄4 Nj;kðφÞ Z ∞

νji;kðφ;zÞλk νji;kðφ; zÞ; φ;Pi;k wiLi dFj;kðzÞ

zjiðφÞ

To present the next step transparently, let mk(νji,k(φ,z),φ,Pi,k) ≡ ε/ε − 1 denote the markup charged by a firm with characteristics (φ,z), exporting industry k goods from country j to market i. Then, by definition, mk(νji,k(φ,z),φ,Pi,k)wjτjick(φ)/wiz = νji,k

- (φ,z); and we can write d ln z in terms of d ln ν as follows


∂ lnmk ∂ lnν

d lnz 1⁄4 1 þ

d lnν:

The above expression, in turn, implies that

ckðφÞmk ν;φ;Pi;k ν 1 þ

wjτji wi

dν ν

dz 1⁄4

:

−1

∂ lnmk ∂ lnν

Given the Pareto productivity distribution, the above equation yields the following formulation for dFj,k(z):

dFj;kðzÞ 1⁄4 ηkAj;kz−η

k−1dz

0

1

−ηk

ckðφÞmk ν; φ;Pi;k ν 1 þ

wjτji wi

dν ν

1⁄4 ηkAj;k

:

B @

C A

−1

∂ lnmk ∂ lnν

Plugging the above equation back into Eq. (D.1), yields the following expression for Xji(φ):

XjiðφÞ 1⁄4 ψkAj;kNjðφÞ

τji;kwj wi

−ηk

wiLiQi;kðφÞ;

where

2

3

−ηk

Qi;kðφÞ ≡ Z ν

ckðφÞmk ν;φ; Pi;k ν 1 þ

i;kðφÞ 0

λk ν;φ; Pi;k

dν;

6 4

7 5

−1

∂ lnmk ∂ lnν

depends only on the characteristics of the importing market, i. Letting Ei(φ) denote the total expenditure on quality φ ∈ Φk, the budget constraint of consumers in market i entails that ∑j∈CXji(φ) = Ei(φ). This condition plus the above equation, imply the

Table E1 Grouping products based on Broda-Weinstein elasticities (Dependent: lnpji;k).

Regressor (log) σBW ≤ 3.6 σBW>3.6

(1) (2) (3) (1) (2) (3)

- p~i −0.051 0.021 (0.045) (0.025)

- p~i × Discrete 0.129∗∗∗ 0.134∗∗∗ 0.165∗∗∗ 0.158∗∗∗ (0.019) (0.017) (0.026) (0.016)
- p~j 0.158∗∗∗ 0.054∗∗∗ (0.002) (0.001)


- p~j × Discrete 0.095∗∗∗ 0.186 ∗∗∗ 0.022∗∗∗ 0.047∗∗ (0.003) (0.022) (0.002) (0.021)


RCAj, k 0.026∗∗∗ 0.032∗∗∗ 0.021∗∗∗ 0.031∗∗∗

- (0.000) (0.005) (0.000) (0.004)

RCAj, k × Discrete 0.035∗∗∗ 0.036∗∗∗ 0.061∗∗∗ 0.082∗∗∗

- (0.001) (0.011) (0.001) (0.010)


Controls for GDP & GDP p/c Y Y ... Y Y ... Controls for Distance Y Y ... Y Y ... HS6 FE ... ... Y ... ... Y Exporter×HS6 FE N Y N N Y N Importer×HS6 FE Y N N Y N N Exporter×Importer FE ... ... Y ... ... Y Observations 2,204,000 2,492,000

Note: This table corresponds to estimating Eq. (12) on more- and less differentiated goods as implied by Broda-Weinstein elasticity estimates, σBW. Robust standard errors are reported in parentheses. ∗ indicates statistically significant at 10% level, ∗∗ indicates statistically significant at 5% level, and ∗∗∗ indicates statistically significant at 1% level. Unit prices are constructed using the BACI database in 2011; the price of non-traded services are constructed using the ICP database in the same year; and each observation in the sample is weighted by trade quantity.

following gravity equation describing macro-level export values:

Aj;kNjðφÞ τji;kwj −ηk ∑'∈CA';kN'ðφÞ τ'i;kw' −ηk

XjiðφÞ 1⁄4

EiðφÞ:

Considering the above expression, the prediction of model regarding the home-market driven quality specialization remains intact. That is, high-wage countries, which have a greater home-market demand for quality, would host a greater number of highquality producing firms. Accordingly, due to their higher Nj(φ) in high-quality (high-φ) categories, they would export relatively more high-quality goods. However, based on the above equation, the prediction that affordability constraints induce IQS no longer holds. One should nonetheless keep in mind that the break-down of affordability-driven IQS is a mere artifact of the Pareto assumption, rather than firm heterogeneity per se.

- Appendix E. Additional test the model

Section 5 tested Proposition 2 while restricting the BACI dataset to sub-samples of (i) only final goods and (ii) only differentiated goods. In this appendix I present an alternative test that groups HS6 product by their underlying demand elasticity. To this end, I use the estimated elasticities by Broda and Weinstein (2006). I classify HS6 products as less- and more- differentiated based on the following criteria:

- (i) More-differentiated HS6 products exhibit a lower-or-equal-to-median elasticity, i.e., σBW ≤ 3.6.
- (ii) Less-differentiated HS6 products exhibit an above-median demand elasticity, i.e., σBW > 3.6.


I then re-estimate Eq. (12) separately on these two sub-groups of products. The estimation results are reported in Table E, and corroborate the model's prediction that export price levels –in discrete product categories– vary systematically with the price of non-traded services in the origin and destination economy as well the origin economy's degree of comparative advantage. At the same time, these same patterns are either non-existent or weaker in continuous product categories—refer to Section 5 for a more elaborate discussion of these predictions.

- Appendix F. Estimation of θ


This appendix describes how the triple difference procedure developed by Caliendo and Parro (2015) can be employed to estimate θ. This procedure relies on applied tariff data. So, before outlining the procedure, I describe how the data on applied tariffs is compiled.

The UNCTAD-TRAINS Data The United Nations Statistical Division, Trade Analysis and Information System (UNCTAD-TRAINS) reports data on applied tariff for 2008, spanning 31 two-digit (in ISIC rev.3) sectors, 181 importers, and 245 export partners. In

line with Caliendo and Parro (2015), I use the simple tariff line average of the effectively applied tariff (AHS) denoting it by tji,k. In instances where tariff data are missing for 2008, I use tariff data for the nearest available year, giving priority to earlier years. To aggregate the UNCTAD-TRAINS data into individual WIOD industries, I closely follow the methodology outlined in Kucheryavyy et al. (2016). Importantly, individual European Union (EU) member countries are not represented in the UNCTAD-TRAINS data during the 2000–2014 period. So, I infer their applied tariff rates from applied EU tariffs, given that intra-EU trade is subject to zero tariffs while all EU members impose a common external tariff on non-members.

Continuous Model. Eq. (7), bilateral trade shares in continuous traded industries can be characterized as

λji;k 1⁄4 Nj;kΩi;khcji;k 1 þ tji;k i−θ k∈KC;

where Ωi,k ≡ ∑n(Nn, k[cni, k(1 + tni, k)]−θ)ei,k can be treated as an importer×industry fixed effect, and cji,k denotes the marginal cost of producing and transporting industry k goods from origin j to destination i. Suppose lncji,k = ln νj,k + ln dji,k + εji,k, where dji,k = dij, k is a systematic and symmetric component that accounts for the cost-equivalent effect of distance, common language, and common border, and εji,k is a random disturbance term that represents deviation from symmetry. Using this decomposition, we can produce the following estimating equation for any triplet (j,i,n):

1 þ tji;k 1 þ tin;k 1 þ tnj 1 þ tij;k 1 þ tni;k 1 þ tjn;k

λji;kλin;kλnj;k λij;kλni;kλjn;k 1⁄4 −θ ln

ln

þ ~εjin;k;

where ~εjin;k ≡ θkðεij;k−εji;k þ εin;k−εni;k þ εnj;k−εjn;kÞ. The above equation can be used to attain unbiased and consistent estimates for θ under the identifying assumption that Cov(tji,k,εji,k) = 0. I estimate the above equation using data on trade shares, λji,k, from the WIOD and matching data on applied tariffs, tji,k, from the UNCTAD-TRAINS. As noted earlier, the original WIOD data features 16 traded industries. Since I am interested in attaining an economy-wide estimate for θ, I perform the estimation while pooling data across all 16 industries, treating them as continuous.

Discrete Model. Eq. (7), trade shares in discrete traded industries can be characterized as:

λji;k 1⁄4 Nj;kΩi;k exp cji;k þ tji;k −θ=

p~j; k∈KD:

p~

where Ωi;k ≡ ∑nðNn;k expðcni;k þ tni;kÞ−θ=

Þei;k can be once again treated as an importer × industry fixed effect, and tji;k is the perunit equivalent of the ad-valorem tariff rate, tji,k. Suppose cij;k=p~j 1⁄4 νj;k þ δi;k þ dij;k þ εij;k, where dji,k = dij, k is a systematic and symmetric component that accounts for the cost-equivalent of distance, common language, and common border, and εji,k is a random disturbance term that represents deviation from symmetry. This decomposition produces the following estimating equation for any triplet (j,i,n):

i

" #

λji;kλin;kλnj;k λij;kλni;kλjn;k 1⁄4 −θ

tji;k p~i þ

tnj;k p~j

tij;k p~j

tjn;k p~n

tin;k p~n þ

tni;k p~i

−

−

−

ln

þ ~εjin;k;

where ~εjin;k ≡ θkðεij;k−εji;k þ εin;k−εni;k þ εnj;k−εjn;kÞ. The above equation can be used to attain unbiased and consistent estimates for θ under the identifying assumption that cov(tji,k,εji,k) = 0. I estimate the above equation using data on trade shares and applied tariffs from the the WIOD and UNCTAD-TRAINS. Since I am interested in attaining an economy-wide estimate for θ, I perform the estimation while pooling data across the 16 traded WIOD industries, treating them all as discrete.

- Appendix G. Out-of-sample performance of the discrete model


This appendix investigates the out-of-sample predictive power of the discrete model that is calibrated to data in Section 6. The data moment of interest is the share of expenditure on traded versus non-trade sectors. Recall that the model is calibrated to fit only the total share of expenditure on categories where traded and non-traded services are bundled in the consumption basket.

In line with my analysis in Section 6, suppose the traded sector consists of only discrete industries. In that case, the Li consumers in economy i purchase in total Qi 1⁄4 K Li units of traded goods across all K industries. Hence, letting pi denote the average price of tradable consumption in economy i, the total expenditure on non-traded services can be calculated as E~i 1⁄4 wiLi−piQi. Correspondingly, the share of service expenditure is given by

E~i Yi 1⁄4

wiLi−piQi wiLi 1⁄4 1−κ

pi p~i

~ei ≡

;

where κ ≡ K=a~. Given the above equation and data on pi=p~i, we can calculate the model's prediction with regards to the share of service expenditure as ln1d−~ei 1⁄4 lnκ þ lnpi=p~i. The data on pi=p~i is readily accessible for 182 countries from the 2011 ICP data, which was described in Section 5. The same data also reports the factual share of non-traded service expenditure, ~ei, for each economy. Using this information, I contrast the predicted values for ~ei with factual values in Fig. G1. Encouragingly, the discrete

model performs remarkably well in predicting the cross-national variation in service expenditure. Finally, note that by allowing for a~i to be a free-moving parameter, I can perfectly match ~ei in all countries. The gains from trade implied in that case, though, closely resemble those implied by my benchmark analysis.

Fig. G1. Discrete model's predictive power w.r.t. relative service expenditure.

Note: This graph compares data and predicted values for (relative) service expenditure across 182 countries, including the 31 countries in the WIOD sample. The predicted values are obtained from a model that (i) treats the entire traded sector as discrete, and (ii) the entire service sector as one that complements discrete consumption. See Appendix G for more details about the construction of each data point and predicted value.

Table H1 Classification of Industries in the WIOD.

WIOD sector Sector's description Category

- 1 Agriculture, Hunting, Forestry and Fishing Traded
- 2 Mining and Quarrying
- 3 Food, Beverages and Tobacco
- 4 Textiles and Textile Products
- 5 Leather and Footwear
- 6 Wood and Products of Wood and Cork
- 7 Pulp, Paper, Paper, Printing and Publishing
- 8 Coke, Refined Petroleum and Nuclear Fuel
- 9 Chemicals and Chemical Products
- 10 Rubber and Plastics
- 11 Other Non-Metallic Mineral
- 12 Basic Metals and Fabricated Metal
- 13 Machinery, Nec
- 14 Electrical and Optical Equipment
- 15 Transport Equipment
- 16 Manufacturing, Nec; Recycling
- 17 Electricity, Gas and Water Supply Non-Traded Service
- 18 Construction
- 19 Sale, Maintenance and Repair of Motor Vehicles and Motorcycles; Retail Sale of Fuel Non-Traded Service, bundled w/Tradables
- 20 Wholesale Trade and Commission Trade, Except of Motor Vehicles and Motorcycles Non-Traded Service
- 21 Retail Trade, Except of Motor Vehicles and Motorcycles; Repair of Household Goods
- 22 Hotels and Restaurants Non-Traded Service, bundled w/Tradables
- 23 Inland Transport
- 24 Water Transport
- 25 Air Transport
- 26 Other Supporting and Auxiliary Transport Activities; Activities of Travel Agencies
- 27 Post and Telecommunications
- 28 Financial Intermediation Non-Traded Service
- 29 Real Estate Activities
- 30 Renting of M&Eq and Other Business Activities
- 31 Education
- 32 Health and Social Work Non-Traded Service, bundled w/Tradables
- 33 Public Admin and Defence; Compulsory Social Security
- 34 Other Community, Social and Personal Services
- 35 Private Households with Employed Persons


| |
|---|


- Appendix H. Classification of the WIOD industries


This appendix describes my classification of the 35 industries in the WIOD sample, which is used to compute ei;C and ei;D. My classification groups industries into three different categories:

- (i) Traded industries (as classified by Costinot and Rodrguez-Clare (2014));
- (ii) Non-traded industries whose services are bundled with traded discrete goods in the consumption basket; and
- (iii) Other non-traded service industries.


The assignment of the WIOD industries into these categories is reported in Table H1. To briefly explain my classification, consider the industries supplying transportation services (i.e., industries numbers 23–24 in Table H1). A consumer may purchase a personal car, jet, or yacht, and spend the rest of their transportation budget on other types of ground, air, or sea transportation services that are infeasible to perform with their personally-acquired transportation device. Similarly, a consumer may purchase a personal grill or an RV (Recreational Vehicle) and spend the rest of their food and travel budget on hotel and restaurant services (i.e, industry number 22 in Table H1). Similar examples can be constructed for household- and health-related services (i.e., industries numbers 32–35 in Table H1). But the same argument cannot be readily extended to real estate services or services supplying residential water, electricity, and gas. Relatedly, financial services are classified as solely non-traded, because they concern a non-repetitive service that has to be frequently customized to match the consumer's needs on a case-to-case basis.

References

Alcalá, Francisco, 2016. Specialization across goods and export quality. J. Int. Econ. 98, 216–232. Alessandria, George, Kaboski, Joseph P., 2011. Pricing-to-market and the failure of absolute PPP. Am. Econ. J. Macroecon. 3 (1), 91–127. Antoniades, Alexis, 2015. Heterogeneous firms, quality, and trade. J. Int. Econ. 95 (2), 263–273. Arkolakis, C., Costinot, A., Rodriguez-Clare, A., 2012. Clare, 2012, new trade models, same old gains. Am. Econ. Rev. 102 (1), 94. Arkolakis, Costas, Costinot, Arnaud, Donaldson, Dave, Rodrguez-Clare, Andrés, January 2019. The elusive pro-competitive effects of trade. Rev. Econ. Stud. 86 (1),

46–80. Atkeson, Andrew, Burstein, Ariel, 2008. Pricing-to-market, trade costs, and international relative prices. Am. Econ. Rev. 98 (5), 1998–2031. Auer, Raphael A., Chaney, Thomas, Sauré, Philip, 2018. Quality pricing-to-market. J. Int. Econ. 110, 87–102. Baldwin, Richard, Harrigan, James, 2011. Zeros, quality, and space: trade theory and trade evidence. Am. Econ. J. Microecon. 3 (2), 60–88. Banerjee, Abhijit V., 2003. Contracting constraints, credit markets, and economic development Abhijit V. Banerjee. Advances in Economics and Econometrics: Theory

and Applications, Eighth World Congress. vol. 3. Cambridge University Press 1. Bekkers, Eddy, Simonovska, Ina, 2015. The Balassa–Samuelson effect and pricing-to-market: the role of strategic complementarity. Econ. Lett. 126, 156–158. Ben-Akiva, Moshe E., Lerman, Steven R., Lerman, Steven R., 1985. Discrete Choice Analysis: Theory and Application to Travel Demand. vol. 9. MIT press. Benhabib, Jess, Rogerson, Richard, Wright, Randall, 1991. Homework in macroeconomics: household production and aggregate fluctuations. J. Polit. Econ. 99 (6),

1166–1187. Bertoletti, Paolo, Etro, Federico, Simonovska, Ina, 2018. International trade with indirect additivity. Am. Econ. J. Microecon. 10 (2), 1–57. Bhagwati, Jagdish N., 1984. Why are services cheaper in the poor countries? Econ. J. 94 (374), 279–286. Broda, Christian, Weinstein, David E., 2006. Globalization and the gains from variety. Q. J. Econ. 121 (2), 541–585 URL. http://qje.oxfordjournals.org/content/121/2/541.

short. Caliendo, Lorenzo, Parro, Fernando, January 2015. Estimates of the trade and welfare effects of NAFTA. Rev. Econ. Stud. 82 (1), 1–44 rdu035. Chen, Natalie, Juvenal, Luciana, 2014. Quality, Trade, and Exchange Rate Pass-Through. International Monetary Fund, pp. 14–42. Choi, Yo Chul, Hummels, David, Xiang, Chong, 2009. Explaining import quality: the role of the income distribution. J. Int. Econ. 77 (2), 265–275. Cooley, Thomas F., Prescott, Edward C., 1995. Economic growth and business cycles. Front. Bus. Cycle Res. 1. Costinot, Arnaud, Rodrguez-Clare, Andrés, 2014. Trade theory with numbers: quantifying the consequences of globalization. Handb. Int. Econ. 4, 197.

Costinot, Arnaud, Donaldson, Dave, Kyle, Margaret, Williams, Heidi, 2016. The More we Die, the More we Sell? A Simple Test of the Home-Market Effect. Tech. rep.

National Bureau of Economic Research. De Loecker, Jan, Eeckhout, Jan, 2017. The Rise of Market Power and the Macroeconomic Implications. Tech. rep. National Bureau of Economic Research. Dingel, Jonathan I., October 2017. The determinants of quality specialization. Rev. Econ. Stud. 84 (4), 1551–1582 rdw054. Drăgulescu, Adrian, Yakovenko, Victor M., 2001. Evidence for the exponential distribution of income in the USA. Eur. Phys. J. B-Condens. Matter Complex Syst. 20 (4),

585–589. Fajgelbaum, Pablo D., Khandelwal, Amit K., 2014. Measuring the Unequal Gains from Trade. Tech. rep. National Bureau of Economic Research. Fajgelbaum, Pablo, Grossman, Gene M., Helpman, Elhanan, 2011. kIncome distribution. Prod. Qual. Int. Trade, lJ. Polit. Econ. 118 (4) 721. Feenstra, Robert C., Romalis, John, 2014. International prices and endogenous quality. Q. J. Econ. 129 (2), 477–527. Feenstra, Robert C., Romalis, John, Schott, Peter K., 2002. US imports, Exports, and Tariff Data, 1989–2001. Tech. rep. National Bureau of Economic Research URL. http://

www.nber.org/papers/w9387. Fernandez-Villaverde, Jesus, Krueger, Dirk, 2011. Consumption and saving over the life cycle: how important are consumer durables? Macroecon. Dyn. 15 (5),

725–770. Flam, Harry, Helpman, Elhanan, 1987. Vertical product differentiation and North-South trade. Am. Econ. Rev. 810–822. Foellmi, Reto, Hepenstrick, Christian, Josef, Zweimüller, 2017. International arbitrage and the extensive margin of trade between rich and poor countries. Rev. Econ.

Stud. 85 (1), 475–510. Gabaix, Xavier, 2009. Power laws in economics and finance. Annu. Rev. Econ. 1 (1), 255–294. Gaulier, Guillaume, Zignago, Soledad, 2010. Baci: International Trade Database at the Product-Level (the 1994–2007 Version). Hallak, Juan Carlos, 2006. Product quality and the direction of trade. J. Int. Econ. 68 (1), 238–265 URL. http://www.sciencedirect.com/science/article/pii/

S0022199605000516. Hallak, Juan Carlos, Schott, Peter K., 2011. Estimating cross-country differences in product quality. Q. J. Econ. 126 (1), 417–474 URL. http://qje.oxfordjournals.org/con-

tent/126/1/417.short. Harrigan, James, Ma, Xiangjun, Shlychkov, Victor, 2015. Export prices of US firms. J. Int. Econ. 97 (1), 100–111. Head, Keith, Mayer, Thierry, Ries, John, 2010. The erosion of colonial trade linkages after independence. J. Int. Econ. 81 (1), 1–14. Hummels, David, Klenow, Peter J., 2005. 9The variety and quality of a nation s Exports9. Am. Econ. Rev. 95 (3). Hummels, David, Lugovskyy, Volodymyr, 2009. International pricing in a generalized model of ideal variety. J. Money Credit Bank. 41 (s1), 3–33. Jaimovich, Esteban, Merella, Vincenzo, 2015. Love for quality, comparative advantage, and trade. J. Int. Econ. 97 (2), 376–391. Khandelwal, Amit, 2010. The long and short (of) quality ladders. Rev. Econ. Stud. 77 (4), 1450–1476 URL. http://restud.oxfordjournals.org/content/77/4/1450.short. Kmenta, Jan. 1997. Elements of Econometrics. University of Michigan Press. Krugman, Paul, 1980. Scale economies, product differentiation, and the pattern of trade. Am. Econ. Rev. 70 (5), 950–959 URL. https://doi.org/10.2307/1805774. Kucheryavyy, Konstantin, Lyn, Gary, Rodrguez-Clare, Andrés, 2016. Grounded by Gravity: A Well-Behaved Trade Model with Industry-Level Economies of Scale. Tech.

rep. National Bureau of Economic Research. Lariviere, Martin A., 2006. A note on probability distributions with increasing generalized failure rates. Oper. Res. 54 (3), 602–604. Lariviere, Martin A., Porteus, Evan L., 2001. Selling to the newsvendor: an analysis of price-only contracts. Manuf. Serv. Oper. Manag. 3 (4), 293–305. Lewis, W. Arthur, 1954. Economic development with unlimited supplies of labour. Manch. Sch. 22 (2), 139–191. Lugovskyy, Volodymyr, Skiba, Alexandre, 2015. How geography affects quality. J. Dev. Econ. 115, 156–180. Manova, Kalina, Zhang, Zhiwei, 2012. Export prices across firms and destinations. Q. J. Econ. 127 (1), 379–436. Matsuyama, Kiminori, 2000. A Ricardian model with a continuum of goods under nonhomothetic preferences: demand complementarities, income distribution, and

north-south trade. J. Polit. Econ. 108 (6), 1093–1120. Matsuyama, Kiminori, 2015. The Home Market Effect and Patterns of Trade between Rich and Poor Countries. McFadden, Daniel, et al., 1978. Modelling the Choice of Residential Location. Institute of Transportation Studies, University of California. Mrázová, Monika, Peter Neary, J., 2017. Not so demanding: demand structure and firm behavior. Am. Econ. Rev. 107 (12), 3835–3874. Murphy, Kevin M., Shleifer, Andrei, 1997. Quality and trade. J. Dev. Econ. 53 (1), 1–15. Murphy, Kevin M., Shleifer, Andrei, Vishny, Robert W., 1989. Industrialization and the big push. J. Polit. Econ. 97 (5), 1003–1026. Pierce, Justin R and Peter K Schott. 2012. "A concordance between ten-digit US Harmonized System Codes and SIC/NAICS product classes and industries." Journal of

Economic and Social Measurement 37 (1,2):61–96. Proudman, James, Redding, Stephen, 2000. Evolving patterns of international trade. Rev. Int. Econ. 8 (3), 373–396. Rauch, James E., 1999. Networks versus markets in international trade. J. Int. Econ. 48 (1), 7–35 URL. http://www.sciencedirect.com/science/article/pii/

S0022199698000099. Reiss, Peter C., Wolak, Frank A., 2007. Structural econometric modeling: rationales and examples from industrial organization. Handb. Econ. 6, 4277–4415. Rosenstein-Rodan, Paul N., 1943. Problems of industrialisation of eastern and South-Eastern Europe. Econ. J. 53 (210/211), 202–211. Samuelson, Paul A., 1994. Facets of Balassa-Samuelson thirty years later. Rev. Int. Econ. 2 (3), 201–226. Schott, Peter K., 2004. Across-product versus within-product specialization in international trade. Q. J. Econ. 119 (2), 647–678 URL. http://qje.oxfordjournals.org/con-

tent/119/2/647.short. Simonovska, Ina, 2015. Income differences and prices of tradables: insights from an online retailer. Rev. Econ. Stud. 82 (4), 1612–1656. Solon, Gary, Haider, Steven J., Wooldridge, Jeffrey M., 2015. What are we weighting for? J. Hum. Resour. 50 (2), 301–316. Sposi, Michael, 2015. Trade barriers and the relative price of tradables. J. Int. Econ. 96 (2), 398–411. Thisse, Jacques-Francois, Ushchev, Philip, 2016. When Can a Demand System Be Described by a Multinomial Logit with Income Effect? Timmer, Marcel, Erumban, Abdul A., Gouma, Reitze, Los, Bart, Temurshoev, Umed, de Vries, Gaaitzen J., Arto, I-aki, Genty, Valeria Andreoni AurŽlien, Neuwahl, Frederik,

Francois, Joseph, et al., 2012. The World Input-Output Database (WIOD): Contents, Sources and Methods. Tech. rep. Institue for International and Development Economics.

Verhoogen, Eric A., 2008. Trade, quality upgrading, and wage inequality in the Mexican manufacturing sector. Q. J. Econ. 123 (2), 489–530. Wooldridge, Jeffrey M., 1995. Selection corrections for panel data models under conditional mean independence assumptions. J. Econ. 68 (1), 115–132.
