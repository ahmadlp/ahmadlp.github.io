---
title: Can Trade Policy Mitigate Climate Change?
slug: can-trade-policy-mitigate-climate-change
status: published
date: '2025-09-01'
display_date: September 2025
venue: Econometrica
authors:
- Farid Farrokhi
- Ahmad Lashkaripour
coauthors:
- Farid Farrokhi
abstract: Trade policy is often cast as a solution to the free-riding problem in international
  climate agreements. This paper examines the extent to which trade policy can deliver
  on this promise. We incorporate global supply chains of carbon and climate externalities
  into a multi-country, multi-industry general equilibrium trade model. By deriving
  theoretical formulas for optimal carbon and border taxes, we quantify the maximum
  efficacy of two trade policy solutions to the free-riding problem. Adding optimal
  carbon border taxes to existing tariffs proves largely ineffective, delivering only
  3.4% of what could be achieved under globally optimal carbon pricing. In contrast,
  Nordhaus's (2015) climate club framework, in which border taxes are used as contingent
  penalties to deter free-riding, can achieve 33-68% of the globally optimal carbon
  reduction, depending on the initial coalition (EU, EU+US, or EU+US+China). In all
  cases, the climate club ensures universal compliance, thereby preserving free trade.
summary: This paper asks whether trade policy can solve free-riding in climate cooperation.
  It shows that ordinary border taxes do little on their own, while climate-club style
  penalties can deliver much larger emissions cuts.
keywords:
- trade policy
- climate clubs
- carbon border adjustment
- climate change
- border taxes
topics:
- trade-policy
- climate-clubs-and-carbon-border-adjustments
- wto-and-trade-agreements
body_source: latex
latex_dir: latex-src/can-trade-policy-mitigate-climate-change
latex_main: FL_manuscript.tex
latex_engine: pdflatex
pdf_url: Farrokhi_Lashkaripour_2025.pdf
markdown_url: sources/can-trade-policy-mitigate-climate-change.md
canonical_url: https://alashkar.pages.iu.edu/papers/can-trade-policy-mitigate-climate-change.html
updated_at: '2026-04-01'
sort_order: 1
published_url: null
slides_url: FL2023_slides.pdf
working_paper_url: null
online_appendix_url: null
dashboard_url: null
replication_slug: null
raw_replication_url: null
---

## Machine-readable full text

This section was extracted with OpenDataLoader PDF from the hosted PDF so the full text is accessible in HTML and Markdown.

## Can Trade Policy Mitigate Climate Change?

Farid Farrokhi Boston College

Ahmad Lashkaripour Indiana University* January 2025

Trade policy is often cast as a solution to the free-riding problem in international climate agreements. This paper examines the extent to which trade policy can deliver on this promise. We incorporate global supply chains of carbon and climate externalities into a multi-country, multiindustry general equilibrium trade model. By deriving theoretical formulas for optimal carbon and border taxes, we quantify the maximum efficacy of two trade policy solutions to the freeriding problem. Adding optimal carbon border taxes to existing tariffs proves largely ineffective, delivering only 3.4% of what could be achieved under globally optimal carbon pricing. In contrast, Nordhaus's (2015) climate club framework, in which border taxes are used as contingent penalties to deter free-riding, can achieve 33-68% of the globally optimal carbon reduction, depending on the initial coalition (EU, EU+US, or EU+US+China). In all cases, the climate club ensures universal compliance, thereby preserving free trade.

*We dedicate this paper to the memory of Jonathan Eaton, our mentor, and advisor, whose guidance and insights truly inspired us. This paper has previously circulated as "Trade, Firm Delocation, and Optimal Climate Policy." We are grateful to Vernon Henderson, Sam Kortum, Volodymyr Lugovskyy, Ishan Nath, William Nordhaus, Ralph Ossa, Heitor Pellegrina, Robert Staiger, John Sturm Becko, and Maksym Chepeliev for their valuable comments, and participants in many seminars and conferences for their helpful discussions and feedback. Email: farid.farrokhi@bc.edu and alashkar@iu.edu.

###### 1 Introduction

Climate change is accelerating at an alarming rate, yet governments have been unsuccessful in forging an agreement to effectively tackle this pressing issue. Major climate agreements, like the 1997 KYOTO PROTOCOL and the 2015 PARIS CLIMATE ACCORD, have failed to deliver a meaningful reduction in global carbon emissions. This failure is often attributed to the free-riding problem: Countries have an incentive to free-ride on the rest of the world's reduction in carbon emissions without undertaking proportionate abatement themselves.

The shortcoming of existing climate agreements has led experts to propose alternative solutions that are resistant to free-riding. Two canonical trade policy proposals have emerged:

- Proposal 1: Climate-conscious governments use carbon border taxes as a second-best policy to curb untaxed carbon emissions beyond their jurisdiction.
- Proposal 2: Climate-conscious governments form a climate club, using collective and contingent trade penalties to incentivize climate cooperation by reluctant governments.


While both proposals combine carbon pricing with trade policy, they differ starkly in their approach. Proposal 1 is grounded in unilateralism. It presumes that global climate cooperation is improbable, but unilateral policies can serve as a viable second best solution. Proposal 2 relies on the premise that unilateral action is insufficient and that the failure of past multilateral agreements could be reversed through better institutional design.

The maximal efficacy of these proposals remains unclear due to the challenges in characterizing their optimal design within quantitative frameworks. Traditional theories of optimal trade and environmental policy are limited to stylized models that preclude quantitatively important considerations. Existing quantitative studies examine simplified variants of these proposals that are not optimal, sidestepping the computational challenges associated with optimal policy analysis. Thus, they reveal only a fraction of what these proposals could potentially achieve.

We overcome these challenges by combining optimal policy analysis with quantitative general equilibrium modeling. First, we incorporate global carbon supply chains and climate externalities into a multi-country, multi-industry general equilibrium trade model. Second, we derive theoretical formulas for optimal carbon border taxes and climate club penalties that internalize climate damage from carbon emissions and terms-of-trade effects under rich general equilibrium considerations. Third, we map our model and optimal policy formulas to data on trade, production, and emissions to evaluate the maximal effectiveness of carbon border taxes and climate clubs.

Section 2 presents our theoretical framework, that is a general equilibrium semi-parametric model of international trade with many countries and industries. Our framework incorporates production, distribution, and utilization of fossil fuel energy which gives rise to international climate externalities. The resulting framework is particularly attractive as it tractably combines the carbon externality and terms-of-trade rationales for policy intervention. Section 3 derives theoretical formulas for optimal carbon and border taxes in our general equilibrium framework. Our optimal policy formulas represent a notable advance over traditional theories. In addition to internalizing multilateral leakage and ripple effects through carbon supply chains, our formulas pave the way for an in depth quantitative analysis of the above canonical climate policy proposals.

We derive computationally efficient formulas for optimal policy using a dual decomposition method that breaks down the general equilibrium optimal policy problem into independent subproblems. Specifically, the optimal policy problem consists of a system of first-order conditions involving complex derivatives, representing the general equilibrium response of non-policy variables to policy. These derivatives are challenging to characterize, making optimal policy derivation difficult in general equilibrium settings. Our decomposition method simplifies this by dividing the problem into independent sub-problems that can be solved without calculating such complex derivatives.1 This approach mirrors the logic of the envelope theorem, in which the optimal policy for each instrument sets the marginal effect of a subset of variables to zero, making changes in those variables irrelevant when optimizing across other instruments.

Our analytical formulas indicate that the unilaterally optimal domestic carbon tax equals the disutility from carbon emissions for domestic households. This policy choice is inefficient from a global standpoint as it does not internalize the home country's carbon externality on foreign residents. Unilaterally optimal import tariffs and export subsidies are composed of two components: a conventional terms-of-trade-driven component and carbon border adjustments. Relevant to Proposal 1, these carbon adjustments impose a tax on imported goods based on the carbon content per dollar value and provide a subsidy to exported goods based on the carbon intensity of competing foreign varieties. Relevant to Proposal 2, the unilaterally optimal border taxes represent the trade penalties that maximize welfare transfers from free-riders to climate club members.

To better understand these non-cooperative policy choices and elucidate the free-riding problem, we compare them with optimal policy under global cooperation. The first-best policy from a global standpoint features zero border taxes/subsidies and a globally optimal carbon tax that

- 1 Our decomposition method relies on the simplifying assumption that policy-induced changes to relative wages among foreign countries have no first-order effect on domestic welfare.


equals the global disutility from carbon emissions. Importantly, the globally optimal carbon tax rate greatly exceeds the unilaterally optimal rate as it penalizes a country's carbon externality on not only its own residents but also foreign households. Governments acting in their own selfinterest, therefore, have incentives to deviate from the globally optimal rate, thus perpetuating the free-riding problem in climate action.

Sections 4 and 5 leverage our optimal tax formulas for counterfactual analysis to determine the maximal efficacy of carbon border taxes and the climate club proposal in reducing carbon emissions. The required data for counterfactual policy analysis are obtained as follows: First, observable shares are constructed from national and environmental accounts data. Second, the governments' perceived disutility from climate change is inferred from their applied environmentallyrelated taxes. Third, structural parameters including the industry-level trade elasticities and the energy demand elasticity are estimated using cross-sectional tax and expenditure data, utilizing conventional identification strategies. The required data on trade, production, carbon emissions, and taxes are primarily taken from the GTAP Database for 2014 augmented by several auxiliary data sources. Our final database covers 18 broadly defined industries, including energy, representing the entire vector of production across 13 major countries, the European Union, and five aggregate regions containing neighboring blocs of countries.

Our analysis reveals that adding border taxes to unilaterally optimal domestic carbon taxes yields limited carbon reduction. Introducing optimally-designed border taxes reduces global emissions by an additional 1.3%—addressing merely 3.4% of the excess emissions caused by freeriding behavior. Border taxes' inefficacy as an indirect form of carbon taxation stems from three factors. First, carbon border taxes fail to incentivize abatement among foreign firms because they tax firms based on industry-wide national averages rather than the firm-specific carbon intensity. Since individual firms cannot meaningfully influence these broad averages, they have no incentive to reduce their carbon intensity in response to these taxes. Second, carbon border taxes cannot target emissions from non-traded goods, which account for a significant share of global emissions. Third, carbon border taxes cannot prevent carbon leakage through general equilibrium price changes. As pre-tax energy prices fall in response to border taxes, energy use and carbon emissions tend to increase in countries without a domestic carbon tax.

To examine the climate club, we solve a sequential game where core members move first, followed by other countries. Core members and non-core countries that join the club abide by the rules of membership: they impose unilaterally optimal trade penalties against non-members and commit to free trade among members. Furthermore, they raise domestic carbon prices to

meet a specified carbon tax target. Non-members can use their trade taxes to retaliate against club members but keep their other taxes unchanged. When considering joining the club, countries weigh the cost of higher domestic carbon taxes against the benefits of evading the climate club's collective trade penalties.2

In setting the climate club's carbon tax target, we balance two considerations. The first is a trade-off reminiscent of the Laffer curve. Higher taxes encourage greater emission cuts per member, but also discourage participation—yielding an inverted U-shape relationship between global carbon reduction and the carbon tax target. The second consideration is upholding free trade. Trade penalties against non-members are intended as deterrent threats, so the ideal target must be set at a level that elicits universal participation, rendering the imposition of such penalties unnecessary. Considering these dual objectives, our analysis sets the carbon tax target at the maximal rate that results in an inclusive club of all nations.

The climate club framework can effectively reduce global carbon emissions, but its success hinges on the makeup of core members. If the EU and US initiate a climate club as core members, universal participation will be attained at a maximal carbon tax target of 53 ($/tCO2), yielding a 18.6% reduction in global carbon emissions. Though substantial, the EU-US alliance lacks the necessary market power to elicit a higher tax target. However, by incorporating China as a core member, the maximal carbon tax target can be raised to 89 ($/tCO2) leading to a 28.0% reduction in global carbon emissions. This figure represents 68% of the emissions reduction achievable under globally first-best carbon taxes, based on a social cost of carbon of 156 ($/tCO2). Overall, the climate club's efficacy in mitigating climate change relies on assembling an influential group of core members and setting an appropriate carbon tax target. Moreover, comparing the efficacy of the climate club to carbon border taxes reveals that trade policy is more effective when used as a contingent penalty at deterring free-riding than an indirect mechanism for carbon taxation.

Climate clubs outperform non-coordinated, unilateral policies for two reasons. First, they employ trade penalties as an enforcement tool rather than a means of indirect carbon taxation. These penalties are specifically designed to compel governments to increase their domestic carbon taxes. Domestic taxes are more effective than indirect border taxes because they induce abatement among local firms and can cover both traded and non-traded goods. Second, the multilateral

- 2 Analyzing the climate club proposal quantitatively poses two major challenges. First, computing optimal trade penalties in a strategic game involving many players is practically infeasible with numerical optimization methods. We circumvent this issue by leveraging our theoretical formulas for optimal trade penalties. Second, solving the climate club game suffers from the curse of dimensionality, requiring that one searches over an excessively large number of possible outcomes. To overcome this challenge, we shrink the space of possible outcomes using a procedure that closely mimics the iterative elimination of dominated strategies.


structure of climate clubs amplifies the impact of trade penalties compared to unilateral measures. By leveraging their collective market power, club members can impose more consequential penalties on free-riders, generating stronger pressure for compliance.

###### Related Literature

Our work contributes to several areas of literature. First, we contribute to theoretical analyses of trade and environmental policy. Early works such as Markusen (1975), Copeland (1996), and Hoel (1996), use partial equilibrium or two-country models to study how unilaterally-applied trade taxes can mitigate transboundary environmental damages. More recent research by Kortum and Weisbach (2021) and Weisbach et al. (2023) characterizes unilaterally-optimal carbon policy in a two-country Dornbusch et al. (1977) model, emphasizing the effectiveness of combining supply and demand-side carbon taxes. Another body of literature examines international agreements that link trade and climate policy, wherein free trade is contingent on climate action (Barrett 1997; Nordhaus 2015; Maggi 2016; Nordhaus 2021; Harstad 2024; Iverson 2024). Our work advances this literature by characterizing optimal policy in a multi-country and industry general equilibrium model amenable to rich quantitative analysis.

Second, our analysis is related to quantitative examinations of environmental and energyrelated policies in open economies, e.g., Babiker (2005), Elliott et al. (2010), Taheripour et al.

- (2019), and Farrokhi (2020). Our paper is especially relevant to studies analyzing the efficacy of carbon border adjustment policies, including Böhringer et al. (2016), Larch and Wanner (2017), and Shapiro (2021). Although these studies feature rich specifications of the global economy, they lack a concept of optimal policy design. Consequently, they do not reveal the full potential of trade policy for reducing carbon emissions. We complement this literature by utilizing optimal policy formulas to uncover the frontier of trade and climate policy outcomes.

Third, our work relates to an emerging literature characterizing optimal policy in modern quantitative trade models, e.g., Costinot et al. (2015), Bartelme et al. (2021), Beshkar and Lashkaripour

- (2020), Lashkaripour (2021), Caliendo and Parro (2022), and Lashkaripour and Lugovskyy (2023). These studies have bridged a longstanding divide between classic partial equilibrium trade policy frameworks and modern general equilibrium trade theories. Our dual decomposition technique advances this effort towards closing the gap. It shows that optimal policy formulas can be derived without characterizing complex general equilibrium elasticities, removing a primary impediment to general equilibrium optimal policy analysis. This particular result sharpens and extends the


result in Lashkaripour and Lugovskyy (2023) to settings with global carbon supply chains and international consumption externalities, an example of which is climate change damage.

Lastly, we contribute to research on trade and the environment by examining trade policy as a tool to mitigate climate change. This literature incorporates environmental issues, from local pollution to global deforestation, into trade models, e.g., Shapiro and Walker (2018) and Farrokhi et al. (2023), with key advances reviewed by Desmet and Rossi-Hansberg (2023). For broader reviews, see Copeland and Taylor (2004) and Copeland, Shapiro, et al. (2021) , and for a discussion on integrating climate change into the existing world trade system, see Staiger (2021).

- 2 Theoretical Framework

The global economy consists of multiple countries indexed by i, j, n ∈ C ≡ {1,..., N} and multiple industries indexed by k, g ∈ {0,1,..., K}. Each country i is endowed by L ̄i workers and R ̄i carbon reserves. Workers are perfectly mobile across industries but immobile across countries, and each worker supplies one unit of labor inelastically. Production in the global economy can be thought of as a two stage process. First, each country's energy industry (indexed by k = 0) employs labor and carbon reserves—as a specific input—to produce energy. Second, other industries (indexed by k = 1,..., K) employ labor and energy to produce final goods. Markets are perfectly competitive3 and goods in all industries are internationally traded.

We denote quantities of energy in terms of their CO2 emission content. Along the carbon supply chain, we count CO2 emissions when energy is used by final good producers and households. Since every individual producer or consumer is infinitesimally small, they do not internalize the impact of their production or consumption choices on CO2 emissions.4

- 2.1 Prices and Tax Instruments


Subscript (ji, k) indexes a variety corresponding to origin j−destination i−industry k—i.e., a variety of industry k that is produced in origin j and shipped to destination i. Country i's government has access to the following tax instruments:

- 1. Import tax, tji,k, applied to imported variety ji, k (tii,k = 0 by design);
- 2. Export subsidy, xij,k, applied to exported variety ij, k (xii,k = 0 by design);


- 3 In Section 6.3, we consider a more general case with monopolistic competition and firm entry.
- 4 Throughout the paper, we use "energy" as a shorthand for "fossil fuel energy" and we use "carbon emissions" interchangeably with "CO2 emissions".


3. Carbon tax, τi,k, applied to the carbon content of energy use;

Border taxes/subsidies create a wedge between the after-tax consumer price, P ̃ji,k, and the beforetax producer price, Pji,k, of each variety (ji, k),

1 + tji,k 1 + xji,k × Pji,k, k = 0,1,..., K. (1) A representative "energy distributer" in country i purchases varieties of energy from international suppliers j = 1,..., N, at prices P ̃ji,0 j, and aggregates them into a composite energy bundle with price P ̃i,0 = P ̃i,0 P ̃1i,0,..., P ̃Ni,0 . This bundle is sold to domestic producers after the inclusion of an end-use-specific carbon tax, which creates a wedge between P ̃i,0 and the final price paid by producers for use in industry k:

P ̃ji,k =

P ̃i,0k = P ̃i,0 + τi,k, k = 1,..., K. (2)

where P ̃i,0k denotes the price of energy input for use in industry k = 1,..., K (after the inclusion of all taxes) and τi,k is the carbon tax. The above-listed tax instruments are sufficient for obtaining the first-best policy outcome under cooperative and non-cooperative scenarios. Additional tax instruments (e.g., production or consumption taxes) are redundant as their effects can be perfectly mimicked with the appropriate choice of existing instruments.

###### 2.2 Consumption

The representative household in country i maximizes a non-parametric utility function Ui(Ci) by choosing the vector of consumption quantities, Ci = Cji,k j,k≥1 subject to the budget constraint,

N

K

P ̃ji,kCji,k, (3)

#### ∑

#### ∑

Ei =

j=1

k=1

where Ei denotes national household expenditure, and P ̃ji,k is the consumer price index of variety ji, k (Equation 1). Let P ̃ i = P ̃ji,k j∈C,k≥1 denote the entire vector of consumer prices in country

- i. The household's utility maximization implies an indirect utility function, Vi Ei, P ̃ i , and a Marshallian demand function for each variety ji, k,


Cji,k = Dji,k Ei, P ̃ i , k = 1,..., K. (4)

We denote the elasticity of demand for variety (ji, k) with respect to the price of variety (ni, g) by:

∂ lnDji,k(Ei, P ̃ i) ∂ ln P ̃ni,g

ε(jini,k,g) ≡

, εji,k ∼ ε(jiji,k,k); (5)

with the own price elasticity of demand compactly denoted as: εji,k ∼ ε(jiji,k,k) ≤ −1.

We use β and λ to denote household expenditure shares. The within-industry expenditure share on variety ji, k (origin j–destination i–industry k) is denoted by λji,k, and the overall expenditure share of country i on industry k ̸= 0 is denoted by βi,k,

P ̃ji,kCji,k ∑nN=1 P ̃ni,kCni,k

∑nN=1 P ̃ni,kCni,k ∑nN=1 ∑Kg=1 P ̃ni,gCni,g

∑nN=1 P ̃ni,kCni,k Ei

. (6)

, βi,k ≡

λji,k ≡

=

A familiar special case is the Cobb-Douglas-CES form, where a constant fraction of expenditure, βi,k, is spent on industry k whose varieties are differentiated by source countries under a constant elasticity of substitution, σk. The demand function in this special case is:

bji,kP ̃ji−,kσk ∑n bni,kP ̃ni1−,kσk

[special case: Cobb-Douglas-CES] Dji,k Ei, P ̃ i =

βi,kEi,

with demand elasticities given by ε(jini,k,k) = −σk n=j + (σk − 1) λni,k and ε(jini,k,g) = 0 if g ̸= k.

###### 2.3 Production

Energy Extraction. The extraction industry (k = 0) in each country j produces energy by employing exogenously-given carbon reserves, R ̄ j, as specific input and labor, Lj,0, as variable input under a Cobb-Douglas technology:

1−φj R ̄ j φj

φj

Lj,0 1 − φj

Qj,0 = φ ̄j,0

. (7)

Here, φ ̄j,0 is an exogenous productivity parameter and Qj,0 is the output quantity of energy which can be thought of as carbon supply from each economy j. Extracted energy varieties are traded internationally subject to border taxes but without incurring iceberg trade costs. The producer price of the energy variety extracted in country j equalizes across destinations i,5

Pji,0 = Pjj,0 =

1 φ ̄j,0

w1j−φjrφj j, (8)

- 5 This specification implies an energy supply curve, Pjj,0 = p ̄j,0 × wj × Qφj ̃,0j , where p ̄j,0 = φ ̄j,0 × R ̄j/φj


is an exogenous shifter and φ ̃j ≡ φj/ 1 − φj > 0 is the inverse energy supply elasticity.

φj −1/(1−φj)

Here, wj is the wage rate in country j, and rj represents the rental rate of carbon reserves in that country. Similar to other goods, energy varieties are subject to border taxes, resulting in a

destination-specific consumer price, P ̃ji,0 = 11++xtji,0

Pjj,0.

ji,0

Energy Distribution. A representative energy distributer in each country i purchases varieties of energy Cji,0 i from international suppliers j = 1,.., N, aggregates them into a bundle of energy, Zi = Zi (C1i,0,...,CNi,0), and sells this energy bundle to domestic final-good producers. The price of the energy bundle, P ̃i,0, is determined by a homogeneous-of-degree-one aggregator:

P ̃i,0 = P ̃i,0 P ̃1i,0,..., P ̃Ni,0 . (9)

The energy price aggregator, P ̃i,0, is implied by a homothetic demand system for international energy varieties. The distributor's demand for variety (ji,0) is a function of total expenditure on energy varieties, Ei,0 = ∑j P ̃ji,0Cji,0, and the vector of energy prices, P ̃ i,0 = P ̃1i,0,..., P ̃Ni,0 , which includes border taxes but excludes the carbon tax applied post-distribution. Namely,

Cji,0 = Dji,0 Ei,0, P ̃ i,0 . (10)

As earlier, we use ε(jini,0,0) = ∂ lnDji,0 (.) / ln P ̃ni,0 as the price elasticity of demand for energy varieties. A special case of the above specification is the CES aggregator, which implies the following price and quantity equations:6

[special case: CES] P ̃i,0 P ̃i,0 = ∑

bji,0P ̃ji1,0−σ0

j

1 1−σ0

bji,0P ̃ji−,0σ0Ei,0 ∑n bni,0P ̃ni1−,0σ0

; Dji,0 Ei,0, P ̃ i,0 =

.

Note that P ̃ji,0 includes border taxes on energy but not the carbon tax. The latter is applied after bundling of energy varieties, so that the final price of the energy bundle paid by final-good producers k is P ̃i,0k = P ̃i,0 + τi,k.

Household Energy Consumption. Our setup accommodates energy use by households, which we model by making use of a fictitious industry k0 ∈ {1,..., K} that purchases the energy bundle, at price P ̃i,0 + τi,k0, and converts it without generating any value added into a final good of the same price. This fictitious industry is nontradeable and sells exclusively to domestic households.7 Therefore, households' consumption of final good k0 corresponds to their energy consumption

- 6 The finite elasticity of substitution between energy sources, as shown in Farrokhi (2020), can be micro-founded via aggregation over sourcing choices of input-users who face variability in transport costs vis-a-vis exporters.
- 7 This is equivalent to the standard specification where households buy energy directly from the energy distributor, subject to a household-specific carbon tax, τi,k0.


and their associated CO2 emission.

Production of Final Goods. Production of final good k = 1,..., K in country i is conducted by symmetric competitive firms that combine labor and the energy input. Total production in each industry is represented by an aggregate constant-reruns-to-scale production function:

Qi,k = φ ̄i,k Fi,k (Li,k, Zi,k) . (11)

The arguments Li,k and Zi,k denote the quantity of labor and energy inputs, and φ ̄i,k > 0 is a Hickneutral productivity shifter. International trade in final goods is subject to iceberg trade costs, d ̄in,k ≥ 1, with d ̄ii,k = 1. Per cost minimization, the competitive producer price of variety in, k is:

d ̄in,k

φ ̄i,k × ci,k wi, P ̃i,0k , (12) where ci,k (.) is a homogeneous-of-degree-one aggregator of input prices: the wage rate, wi, and the after-tax price of the energy, P ̃i,0k = P ̃i,0 + τi,k. Assuming that the demand for inputs is homothetic, the cost share of energy, αi,k ≡ P ̃i,0kZi,k/Yi,k, is also fully-determined by wi and P ̃i,0k, with Yi,k = Pii,kQi,k denoting the total value of sales of origin i–industry k.

Pin,k =

A canonical special case of our setup is the case of CES production function, with

1

Fi,k (Li,k, Zi,k) = (1 − κ ̄i,k)

ς−1 ς

ς−1 ς

1

i,k + (κ ̄i,k)

ς L

ς Z

i,k

ς ς−1

,

where κ ̄i,k ∈ [0,1] represents exogenous energy intensity, and ς > 0 is the elasticity of substitution between labor and energy inputs. In this special case, the input cost aggregator becomes:

[special case: CES] ci,k = ci,k wi, P ̃i,0k ≡ (1 − κ ̄i,k)wi1−ς + κ ̄i,kP ̃i1,0−kς

1

1−ς ;

where ς regulates the "energy demand elasticity," implying αi,k = κ ̄i,k P ̃i,0,k/ci,k 1−ς.

- 2.4 CO2 Emissions Aggregate CO2 emission from each industry k = 1,..., K can be decomposed as:


Zi,k = zi,k Qi,k, (13)

where zi,k represents the emissions per unit quantity and Qi,k is output quantity.8 The emission per quantity is determined by the after-tax energy input price, P ̃n,0k, and the wage rate:

zi,k = zi,k P ̃i,0k, wi .

A carbon tax, τi,k, raises the consumer price of energy, P ̃i,0k, resulting in a lower energy use Zi,k per unit of final good production. Country i's total CO2 emissions, Zi, and the distributor's total energy expenditure, Ei,0, are:

K

Zi,k, Ei,0 = P ̃i,0Zi. (14)

#### ∑

Zi =

k=1

Under the special case with CES production, the emission per quantity takes the following parametric representation,

ς ς−1

κ ̄i,kP ̃i1,0−kς (1 − κ ̄i,k)wi1−ς + κ ̄i,kP ̃i1,0−kς

[special case: CES] zi,k P ̃i,0k, wi = zi,k

,

1 1−ς

where z ̄i,k ≡ κ ̄

i,k /φ ̄i,k is a constant shifter. Lastly, global CO2 emission can be calculated by summing over national CO2 emissions:

###### 2.5 General Equilibrium

Z(global) ≡ ∑

Zi (15)

i

Tax Revenues and National Income. We denote by Ti the tax revenues collected by country i's government from imports, exports, and carbon taxes and rebated to consumers in that country,

K

K

K

tni,k 1 + tni,k

xin,k 1 + tin,k

P ̃ni,kCni,k

P ̃in,kCin,k

#### ∑

#### ∑

#### ∑

#### ∑

#### ∑

Ti =

[τi,kZi,k]

−

+

n̸=i

n̸=i

k=1

k=0

k=0

carbon tax

import taxes

export subsidies Let Yi,k denote sales of country i−industry k,

Yi,k = Pii,kQi,k. (16)

Industry sales, on aggregate, generate an income level of ∑kK=0 Yi,k = wiL ̄i + riR ̄i in each country i. We assume trade is balanced, so that national income is the sum of the wage bill, rental payments

- 8 In Copeland and Taylor (2004) terminology, zi,k represents technique, Qi,k is scale, and Zi,k k represents composition.


to carbon reserves, and tax revenues:

Yi = wiL ̄i + Πi + Ti, where Πi = riR ̄i. (17)

General Equilibrium. For a given set of taxes tji,k, xij,k, τi,k , a general equilibrium is a vector of consumption, production and input use, Cji,k, Qi,k, Li,k, Zi,k , final goods and energy input prices, Pji,k, P ̃ji,k, P ̃i,0, P ̃i,0k , wage and rental rates, {wi,ri}, and income, sales and expenditure levels, {Yi,Yi,k, Ei, Ei,0}, such that equations (1)-(17) hold; goods market clear, equating national consumption expenditure with income, Ei = Yi, and each industry's total output with demand,

Qi,k =

and the factor markets clear according to:

N

d ̄in,kCin,k (18)

#### ∑

n=1

K

wiL ̄i =

[(1 − αi,k)Yi,k] + (1 − φi)Yi,0, Πi ≡ riR ̄i = φiYi,0; (19)

#### ∑

k=1

where the wage rate in each country clears the labor market and the rental rate of carbon reserves clears the market for energy extraction.

###### 3 Optimal Policy and the Free-Riding Problem

Our analysis builds on the realization that the globally optimal climate outcome is politically infeasible due to free-riding incentives, but climate-conscious countries can use trade policies to target global emissions. In this section, we first characterize the unilaterally optimal carbon and border taxes, elucidating the two rationales for policy intervention from a unilateral standpoint. Next, we characterize the globally optimal policy to highlight the free-riding problem in climate agreements. Finally, we discuss two trade policy remedies for the free-riding problem: carbon border taxes and the climate club. We explain how our theoretical optimal policy results provide the groundwork for quantitatively evaluating these policies. To set the stage, we begin with a formal definition of policy objectives.

Social Welfare with Climate Damage. The welfare of the representative consumer in country i is the utility from consumption net of the disutility from CO2 emissions.9 Namely,

Wi = Vi Ei, P ̃ i − δi × Z(global). (20)

- 9 We exclude political economy factors for two reasons. First, they predominantly influence the within-national rather


The first component represents the indirect utility from consumption and the second component is the disutility from global CO2 emissions. δi is a parameter that represents the disutility per unit of CO2 emissions for country i's residents. However, since individual producers or consumers, take Z(global) as given, they do not internalize the associated externality in their energy consumption decisions. Governments, meanwhile, can influence CO2 emissions and internalize them in their policy choice. So, for all practical purposes, δi hereafter represents the disutility from CO2 emissions as perceived by governments—meaning that our analysis does not rule out that δi may be disconnected from the actual climate cost facing country i's residents.10 With this in mind, we turn to characterizing optimal policy under various scenarios.

###### 3.1 Unilaterally Optimal Policy Problem

Unilaterally optimal policies apply to non-cooperative settings, where governments choose policies to maximize national welfare as specified by Equation (20) without considering effects on foreign households. The government in country i can utilize a comprehensive set of tax instruments denoted by Ii ≡ tji,k, xij,k, τi,k j,k. The unilateral optimal policy choice is formally defined below, with an expansive formulation of the optimal policy problem provided in Appendix B.1.

Definition. The Unilaterally Optimal Policy for country i consists of taxes, Ii∗ ≡ {t∗

ji,k, x∗

ij,k, τi∗,k}j,k, that maximize country i's welfare in general equilibrium:

Ii∗ = argmax Wi (Ii,I ̄−i) subject to general equilibrium Equations (1) − (19);

where Wi is described by Equation (20) and I ̄−i denotes policy choices in the rest of the world, which country i takes as given.

The unilaterally optimal policy seeks to correct the two sources of inefficiency in the decentralized equilibrium from country i's unilateral standpoint: First, private energy production and consumption decisions fail to internalize the associated climate externality on country i's residents (as measured by δi). Second, country i's producers fail to internalize their collective market power when pricing the goods, so there is unexploited market power which country i's government can exploit to improve its terms of trade vis-a-vis the rest of the world.11

than cross-national distribution of welfare or rents, which is not the focus of our analysis—see Ossa (2016). Sec-

- ond, quantifying political economy weights is infeasible due to over-identification issues. For any hypothetical tax schedule, there exists a set of political weights that would rationalize it as optimal.


- 10 We also examine an alternative specification where δi maps to estimates of country-level climate change damage.
- 11 Similarly, domestic consumers fail to internalize their collective monopsony power when buying foreign varieties.


The targeting principle provides some guidance on the unilaterally optimal policy choices. Domestic carbon taxes are the first-best remedy for correcting carbon emissions from domestic economic activity. Border taxes (based on the carbon content of goods) are the unilaterally optimal instrument for correcting foreign emissions. And border taxes (based on national-level market power) are the first-best instrument for manipulating the terms-of-trade. However, characterizing the optimal policy is complicated in multi-country, multi-industry general equilibrium models. Below, we introduce a method to bypass some of these complexities.

Before beginning our analysis, it is useful to conceptualize an equilibrium under optimal policy as the joint solution to two mappings: (a) the equilibrium allocation given optimal taxes, and (b) the optimal taxes given an equilibrium allocation. The following section provides a unique representation for mapping (b), with Section 4.1 detailing how we jointly solve (a) and (b).12

###### 3.2 Dual Decomposition Technique for Optimal Policy Derivation

To derive the unilaterally optimal policy, we first reformulate the problem of selecting taxes,

- Ii ≡ tji,k, xij,k, τi,k j,k, into an equivalent problem where the government directly selects aftertax prices: Pi = P ̃ji,k, P ̃ij,k, τi,k j,k. Optimal import tariffs and export subsidies can be derived


P ̃ji∗,k Pji,k and 1 + x∗

P ̃ij∗,k Pij,k. The reformulated optimal

−1

from optimal prices, Pi∗, using 1 + t∗

ji,k =

=

ij,k

policy problem can be expressed as:

Vi Ei, P ̃ i − δiZ(global).

max

P ̃ i

The first-order condition (F.O.C.) w.r.t. to a generic policy instrument P ̃ ∈ P ̃ i is:

∂Z(global) ∂P ̃

∂Vi (.) ∂Ei

∂Vi (.) ∂P ̃ − δi

∂Ei ∂P ̃

###### = 0.

+

A critical aspect of our approach is specifying Ei and Z(global) as functions of select variables and expressing ∂∂EP ̃i and ∂Z∂Pn ̃,k in terms of their derivatives. Total expenditure is equal to national income, given by the following function:

Ei = Yi = Yi (Pi, w,C, Zi, P0) .

The function, Yi (.), is a unique mapping from policy Pi, wages w ≡ [wi, w−i], consumption quantities C ≡ [Ci,C−i,Ci,0,C−i,0], local emissions Zi, and energy producer prices P0 to national

12Note that mapping (b) is unique up to the multiplicity introduced by the Lerner symmetry. Moreover, if mapping (a) admits multiple solutions, this multiplicity will extend to the joint solution of (a) and (b). In the presence of multiple equilibria, our optimal policy results do not offer guidance on how to choose between the multiple joint solutions.

income, Yi, which is the sum of factor rewards and tax revenues. Using the vector notation for compactness, the function Yi (.) is defined as

Yi (Pi, w, P0,C, Zi) = wiLi + Πi (Pi,0, wi) + τ⊺i Zi

+ P ̃ i,0 − Pi,0 ⊺ Ci,0 + P ̃ −i,0 − P−i,0 ⊺ C−i,0

+ P ̃ i − Pi (.) ⊺ Ci + P ̃ −i − P−i (.) ⊺ C−i;

Here, Πi (Pii,0, wi) is a function that maps wage and producer price in the energy extraction sector to the surplus, Πi, paid to fixed reserves, following cost minimization. The column vector Zi = [Zi,k]k contains local industry-level emissions and τ⊺i = [τi,k]⊺k is the corresponding row vector of carbon taxes. Ci,0 ≡ {Cni,0}n denotes local energy consumption quantities with corresponding after- and pre-tax prices P ̃ i,0 and Pi,0; C−i,0 ≡ {Cin,0}n̸=i denotes energy export quantities with corresponding prices P ̃ −i,0 and P−i,0. Similarly, Ci and P ̃ i denote the consumption quantity and after-tax price of locally-consumed final goods, and C−i and P ̃ −i denote the quantity and after-tax price of exported final goods. The functions Pi (.) = [Pni,k (.)]j,k>0 and P−i (.) = Pij,k (.) j̸=i,k>0 represent the producer prices of locally-consumed and exported final goods, where Pin,k (Pi, wi) for all n and Pni,k (Pi, P−i,0, wn) for n ̸= i, map policy, wages, and energy prices to producer prices that satisfy cost minimization.

Global emissions are the sum of domestic and foreign emissions, Z(global) = ∑k Zi,k +∑k ∑n̸=i Zn,k, where emissions for home (i) and foreign countries (n ̸= i) are described by

Zi,k = zi,k (Pi, wi) Qn,k, Zn,k = zn,k P ̃in,0, P−i,0, wn Qn,k.

The functions zi,k (.) and zn,k (.) for n ̸= i map input prices to the intensity of energy use (i.e., carbon emission per unit of output) as implied by cost minimization.13 Total output Qn,k is given by the function Qn,k (.), which maps demand quantities for country n's varieties in industry k to

13Recall that carbon emissions intensities are fully determined by energy and labor input prices: zn,k = zn,k P ̃n,0k, wn

for all n. The energy price, P ̃i,0k = P ̃i,0 {P ̃ji,0}j + τi,k, in home country i is fully determined by policy, {P ̃ji,0}j, τi,k ∈ Pi. In foreign country n ̸= i, the energy price is determined by foreign energy prices, P−i,0,

and price of home's energy variety, P ̃in,0, which is set by home's export policy. So, we can reformulate the emission intensity function as:

zn,k P ̃in,0, P−i,0, wn n ̸= i zi,k (Pi, wi) n = i

zn,k P ̃n,0k, wn =

A similar consideration applies to the above definition of producer prices of final goods (k > 0), Pin,k (Pi, wi) for all n and Pni,k Pi, P−i,0, wn for n ̸= i.

total output:

Qn,k = Qn,k Cnj,k j ≡

N

#### ∑

dnj,kCnj,k

j=1

Generic First-Order Condition. For expositional purposes, we present the logic of our dual decomposition method disregarding foreign energy price effects, ∂P−i,0

∂P ̃ . However, our actual derivation in the appendix accounts for these effects. Under this simplification, the F.O.C. with respect to policy instrument P ̃ ∈ P ̃ i, can be expanded as14

∂Vi (.) ∂Ei

∂Yi (.) ∂P ̃

∂Yi (.) ∂w

∂Yi (.) ∂C

∂Yi (.) ∂Zi

∂Vi (.) ∂P ̃

∂w ∂P ̃

∂C ∂P ̃

∂Zi ∂P ̃

+

+

+

+

∂Ei/∂P ̃

∂Q−i ∂P ̃

∂zn (.) ∂P ̃

∂zn (.) ∂wn

∂wn ∂P ̃

∂Zi ∂P ̃

#### + ∑

= 0 (21)

1 + z−i

###### Qn

−δi

+

n̸=i

∂Z(global)/∂P ̃

Terms such as ∂V∂iP ̃(.), ∂Y∂iP ̃(.) and ∂z∂nP ̃(.) represent the partial derivative of known functions with respect to a specific argument. In contrast, ∂∂wP ̃ , ∂∂CP ̃ , ∂∂ZP ̃i, and ∂Q−i

∂P ̃ are general equilibrium (GE) derivatives, which are difficult to characterize. They result from the implicit differentiation of a complex and interdependent system of equilibrium conditions. Traditionally, optimal policy formulas are either presented in terms of these complex derivatives (Dixit 1985) or they are simplified through strong parametric assumptions that remove equilibrium interdependencies, reducing the noted derivatives into partial equilibrium objects.15 Our method takes a different approach. We use less restrictive assumptions, which allow us to bypass the task of calculating complex GE derivatives while maintaining the model's rich GE structure.16

Assumption 1. Policy-induced changes to relative wages between foreign countries (wn/wj, for all n, j ̸= i) and changes to the fraction of wage to total income in foreign countries (wnLn/Yn for all n ̸= i) have no

14 To maintain compact notation, we omit the transpose sign hereafter, with the understanding that each product in the

F.O.C. represents compatible row and column vectors, e.g.,∂Y∂wi(.) ∂∂wP ̃ = ∑n ∂∂Ywi(.)

∂wn

∂P ̃ .

n

η−1 η

15For instance, consider a quasi-linear and separable utility function, U = C0 +Σku(Ck), where u(Ck) = η−η1(C

k −1) for each good k. Here, Ck = Dk P ̃k = P ̃k−η depends only on the own price P ̃k, given the choice of numeraire, P ̃0 = 1. In particular, the GE elasticity ∂∂CP ̃k reduces to a constant parameter, −η, if P ̃ = P ̃k and is zero otherwise.

- 16 Our approach advances the dual technique from Lashkaripour and Lugovskyy (2023) in two ways. First, we enhance their approach by recasting it as a dual decomposition method that partitions the optimal policy problem into independent sub-problems. This reformulation enables standardized application across a broad range of optimal policy problems. Second, we extend their approach by incorporating international externalities, such as climate change, that operate through cross-border consumption and production effects, independently of terms-of-trade externalities. Our analysis introduces new lemmas (E1, E2, and E3, in Appendix B) that characterize endogenous energy price changes throughout the global carbon supply chain.


first-order effect on country i's welfare in the neighborhood of the optimum.

Normalizing the wage rate in one of the foreign countries per Walras' Law, we can invoke Assumption 1 (henceforth, A1) to solve the F.O.C.s, disregarding changes to wages and income in the rest of the world. In other words, A1 effectively converts the generic system of F.O.C.s into

- one that can be solved as if there is a single foreign wage. Quantitatively, we confirm in Appendix D that A1 provides an accurate approximation and relaxing it has a negligible effect on optimal policy outcomes.17 The reason is that each country's policy exerts a negligible influence on relative foreign wages. Additionally, changes to relative foreign wages have an insignificant effect on home's welfare, as they represent transfers between foreign nations. Likewise, changes in foreign wage-to-income ratios represent transfers between agents within those countries, with minimal consequences for country i's welfare. A1 becomes redundant in a standard trade policy framework, involving two countries, a single production factor, and a laissez-faire foreign country.


Beyond a two-country model, A1 simplifies the generic first-order condition (21) in two ways. First, the terms including foreign wage effects, ∂∂Ywi(.)

∂P ̃ − δi ∑n̸=i ∂∂zwn(.)

w−i

∂wn

∂P ̃ Qn, can be disregarded at the optimum. Second, the GE derivatives of foreign demand with respect to policy reduce to Marshallian price elasticities of demand, ∂C−i

n

−i

∂P ̃ = ∂D−i(.)

∂P ̃ , which are easier to characterize.18

Nevertheless, the F.O.C.s still involve the GE derivatives of local variables, such as ∂∂wP ̃i, ∂∂CP ̃i, ∂∂ZP ̃i, and ∂Q−i

∂P ̃ , which remain the main obstacles to deriving streamlined optimal policy formulas.

Building on several intermediate results, we demonstrate that the optimal policy problem can be decomposed into independent sub-problems and solved without characterizing these GE derivatives.19 The first intermediate result (Lemma 1) shows that the terms containing the GE derivatives of local factor prices, ∂∂wP ̃i, and ∂∂PPii ̃,0 drop out of the first-order condition:

∂Yi (.) ∂wi

∂Yi (.) ∂Pii,0

= 0. [Lemma 1]

=

- 17 In Appendix D, we validate the accuracy of our optimal policy formulas through extensive numerical testing, focusing particularly on the implications of A1. First, we show that the welfare gains predicted by our formulas are almost identical to those from numerical optimization. Second, we show that A1 provides an accurate approximation: perturbing a country's taxes around their optimal levels, has negligible effects on foreign wages and wage-to-income ratios. Importantly, our method offers substantial computational advantages: while direct numerical optimizations require 108 minutes to find a country's optimal unilateral policy, our algorithm accomplishes this in just 3.5 seconds. This dramatic improvement in computational speed is crucial for conducting our climate club analysis.


18The derivative of demand in foreign location n ̸= i can be expressed as ∂∂CP ̃n = ∂D∂nP ̃(.) + ∂D∂En(.)

∂En ∂P ̃ , where by invoking

n

- A1 the second term can be disregarded near Pi∗. The reason is that changes in En = wYn


nLn wnLn are driven solely by changes in country n's wage (wn) and wage-to-income ratio (wnLn/Yn), neither of which has first-order effects on country i's welfare around the optimum, per A1. However, in the general case considered in the appendix, we also

∂P−in(.) ∂P−i,0

account for GE effects related to foreign energy prices, i.e., ∂∂CP ̃n = ∂D∂nP ̃(.) + ∂∂DP ̃n(.)

∂P−i,0

∂P ̃ . 19 Appendix B contains the details of these intermediate results and their proofs.

−in

Based on the above result, the optimal policy could be derived without specifying the GE derivatives, ∂∂wP ̃i, and ∂∂PPii ̃,0. The logic is that any welfare gains from perturbing local factor prices will be fully internalized by the price instruments in Pi. Conditional on Pi, changing local factor prices merely redistributes income between primary factors and government revenues, leaving total expendable income, Yi, unchanged.

Optimal local prices. The F.O.C. with respect to local consumer prices, P ̃ ∈ P ̃ i, τi , can be simplified by appealing to utility maximization and cost minimization—namely, Roy's identity and Shephard's lemma. This point constitutes our second intermediate result (Lemma 2):20

∂Vi (.) ∂Ei

∂Yi (.) ∂P ̃

∂Vi (.) ∂P ̃

= 0, ∀P ̃ ∈ P ̃ i, τi [Lemma 2] Moreover, local prices do not directly enter the functions that regulate foreign emissions and demand, indicating that ∂z∂nP ̃(.) = 0 and ∂C−i

###### +

∂P ̃ = ∂D−i(.)

∂P ̃ = 0 for all P ̃ ∈ P ̃ i, τi . Considering this point and Lemma 2, and invoking A1 to discard the terms involving foreign wages, the first-order condition (equation 21), reduces to

∂Q−i (.) ∂Ci

∂Yi (.) ∂Ci − δ ̃iz−i

∂Ci ∂P ̃

+ τi − δ ̃i1

∂Zi ∂P ̃

###### = 0,

−1

where δ ̃i ≡ δiP ̃i is the carbon disutility adjusted for the consumer price index, P ̃i ≡ ∂V∂Ei(i.)

. In the above equation, the terms in the bracket are easy to evaluate as they involve the derivative of known functions w.r.t. specific arguments. The GE derivatives, ∂∂CP ̃i, and ∂∂ZP ̃i, however, are difficult to characterize. But as hinted above, they need not be characterized to obtain the optimal policy formulas. This point is formalized by another intermediate result (Lemma 3), which states that local price optimality entails that ∂Yi (.)

∂Q−i (.) ∂Ci

∂Ci − δ ̃iz−i

= 0, τi − δ ̃i1 = 0, [Lemma 3]

The above result decomposes the optimal local price problem into independent sub-problems that merely involve the derivative of functions, Q−i (.) and Yi (.) with respect to specific arguments. As we elaborate shortly, Lemma 3 also serves as an envelope-like result that simplifies the characterization of optimal export prices.

20For instance, consider the imported price of industry k from origin j, P ̃ = P ̃ji,k. When i's government raises P ̃ji,k,

i's income increases proportional to its imported quantity ∂∂YP ̃i(.)

= Cji,k, whereas Roy's identity implies ∂∂VP ̃i(.)

= −∂V∂Ei(i.) × Cji,k. Together, ∂∂VP ̃i(.)

ji,k

ji,k

+ ∂V∂Ei(.)

∂Yi(.) ∂P ̃ji,k = 0.

i

ji,k

Optimal export prices. Now, consider the policy instrument, P ̃ ∈ P ̃ in ⊂ P ̃ −i, which regulates export prices to country n ̸= i. Notice that ∂V∂iP ̃(.) = 0, since P ̃ is not a local price. Moreover, P ̃ ∈ P ̃ in influences demand in foreign market n through ∂∂CP ̃n = ∂D∂nP ̃(.), and demand and emissions in the local market i through general equilibrium effects, i.e., ∂∂CP ̃i ∼ ∂D∂Ei(i.)

∂Ei ∂P ̃ . Considering these

points, the F.O.C. w.r.t. P ̃ ∈ P ̃ in becomes:

∂Q−i (.) ∂Cn

∂Dn (.) ∂P ̃ − δ ̃i

∂Yi (.) ∂Cn − δ ̃iz−i

∂zn (.) ∂P ̃

∂Yi (.) ∂P ̃

1 P ̃ = P ̃in,0

###### +

∂Q−i (.) ∂Ci

∂Yi (.) ∂Ci − δ ̃iz−i

∂Ci ∂P ̃

∂Zi ∂P ̃

+ τi − δ ̃i1

###### = 0.

###### +

Following Lemma 3, the second line collapses to zero if local prices are set optimally. This makes Lemma 3 akin to an envelope result, allowing us to solve for the optimal export prices without considering their impact on local consumption and emissions. In other words, the export price problem simplifies into another independent sub-problem.

Altogether our dual approach breaks down the initial optimal policy problem into a set of

independent sub-problems, that are free from GE derivatives (e.g., ∂∂CP ̃i, ∂∂ZP ̃i, ∂∂wP ̃i).21 We present this result under the following proposition.

- Proposition 1. Country i's unilaterally optimal policy can be obtained by solving three independent sub-


problems:

 

τi − δ ̃i1 = 0 [SP 1] ∂Yi(.)

∂Ci − δ ̃iz−i ∂Q−i(.)

∂Ci = 0 [SP 2] ∂Yi(.)



###### − δ ̃iz−i ∂Q−i(.)

∂P ̃ − δ ̃i ∂z∂nP ̃(.)1 P ̃ = P ̃in,0 = 0 [SP 3] Solving these sub-problems involves taking partial derivatives of known functions w.r.t. to their arguments, without specifying complex general equilibrium derivatives such as ∂∂CP ̃i, ∂∂ZP ̃i, and ∂∂wP ̃i.

∂P ̃ + ∂∂YCi(.)

∂Dn(.)

∂Cn

n

As mentioned earlier, our presentation here abstracted away from foreign energy price effects,

∂P−i,0

∂P ̃ . Our main derivation in Appendix B accounts for these effects showing that energy price

effects can be specified as the product of a matrix of equilibrium variables and demand effects ∂∂CP ̃ (Lemmas E1, E2 and E3 in the appendix). This result allows absorbing the energy price effects into

Sub-problems 2 and 3, while preserving the modularity and independence of these sub-problems.

21 Costinot et al. 2015 present an alternative method for optimal policy derivation in a general equilibrium Ricardian model. Their primal approach breaks down the optimal policy problem into an inner problem involving goodspecific and independent cell problems, and an outer problem that determines the economy-wide wage rate.

###### 3.3 Unilaterally Optimal Policy Formulas

We build on Proposition 1 to derive the unilaterally optimal policy formulas. To present our formulas, we denote by vn,k the CO2 emission per unit value of output in country n−industry k, and let ρni,k denote market i's share from that industry's total sales, Yn,k,

Zn,k Yn,k

Pni,kCni,k Yn,k

, ρni,k =

vn,k =

(22)

Additionally, we denote the elasticities of demand for the composite energy input (equivalently, CO2 emissions) with respect to the energy input price at the industry and national levels as22

∂ lnZn,k (.) ∂ ln P ̃n,0k

∂ ln ∑k Zn,k (.) ∂ ln P ̃n,0k

Zn,k Zn

#### = ∑

ζn,k. (23)

, ζn ≡

ζn,k ≡

k̸=0

In the special case with CES production functions, ζn,k = −ς (1 − αn,k), with (ς) as the elasticity

- of substitution between energy and labor inputs. Below, we present formulas for the unilaterally optimal policy , which by the Lerner symmetry is unique up to an arbitrary tax shifter.23


- Proposition 2. Country i's unilaterally optimal policy consists of (i) uniform carbon taxes (τi∗,k = τi∗),


τi∗ = δ ̃i ≡ δiP ̃i,

- (ii) import tariffs and export subsidies on final goods (k ≥ 1) that are unique up to a uniform and arbitrary tax-shifter, t ̄i ≥ 0, augmented by a carbon border adjustment based on the CO2 content per unit value of imported goods vn,k (Eq. 22),

1 + t∗

ni,k = (1 + t ̄i) + τi∗vn,k 1 + x∗

in,k =

1 + εin,k

εin,k ∑

j̸=i

1 + t∗

ji,k

λjn,k 1 − λin,k

- (iii) import tariffs and export subsidies on energy,


ζl P ̃l,0 1 + xin∗ ,0 =

ψ ̃(jni,0)ρjl,0

1+t∗ni,0 = (1+t ̄i) (1+ωni,0)+τi∗ ∑

#### ∑

j̸=i

l̸=i

1 + εin,0

λjn,0

ζn P ̃n,0

εin,0 ∑

1 + t∗ji,0

1 − λin,0 − Λin,0 + τi∗

j̸=i

(1 + t ̄i) εin,0

,

where Λin,0 = ∑k∑αn,kYn,kρni,k

k αn,kYn,k is the fraction of energy exports re-imported via the carbon supply chain;

22The function Zn,k (.) is defined based on Equation (13) as Zn,k = Zn,k P ̃n,0k, wn, Qn,k ≡ zn,k P ̃n,0k, wn Qn,k. 23 For a clearer presentation, the export subsidy formulas are reported for additively separable preferences across

industries and generalized separability within industries. General formulas are provided in Appendix B.7.

ωni,0 = ∑j̸=i ψ ̃(jni,0)ρji,0 is the inverse export supply elasticity of energy (for flows from n to i), where ψ ̃(jni,0) ≡ 1−φjφjψ(jni,0)YYj,0

represents backward linkages in the energy sector;24 λ and ρ represent international expenditure and sales shares (Eqs. 6 and 22); ζ is the demand elasticity of composite energy input (Eq. 23), and ε denotes the Marshallian demand elasticities (Eq. 5).

n,0

Proposition 2 characterizes the unilaterally optimal policy as a function of non-policy variables, such as demand elasticities (ε) and trade shares (λ). Section 4.1 explains how to solve for equilibrium under the optimal policy, accounting for the dependence of non-policy variables on the policy itself.

The unilaterally optimal carbon tax, τi∗, corrects only the carbon externality imposed on households in country i.25 Specifically, it equals the welfare cost per unit of CO2 emissions to residents of country i adjusted for the consumer price index, i.e., δ ̃i ∼ δiP ̃i,0. The unilaterally optimal border taxes, however, pursue two objectives. First, they seek to manipulate the terms of trade in country i's favor. Second, they include a carbon border tax component that indirectly taxes the carbon externality of foreign production and consumption.

To better understand carbon border taxes, it is helpful to examine a small open economy under Cobb-Douglass CES preferences.26 Under the CES assumption, the import demand elasticity takes the form εin,k = −σk + (σk − 1) λin,k. The small open economy assumption sets λin,k ≈ ρni,k ≈ 0. Plugging these into our general optimal policy formulas yields a simplified representation:



τi∗ = δ ̃i ∼ δiP ̃i [carbon tax] t∗



ni,k = t ̄i + τi∗vn,k t∗ni,0 = t ̄i [import tax] 1 + x∗

+ τi∗ ∑j̸=i λjn,kvj,k σkσ−1

in,k = (1 + t ̄i) σkσ−1

[export subsidy (non-energy)]

k

k



###### 1 + xin∗ ,0 = (1 + t ̄i) σ0σ−1

+ τi∗σ1

ζn

P ̃n,0 [export subsidy (energy)]

0

0

The optimal import tax on final-good variety ni, k, which is unaffected by the CES and small open

24Specifically, ψ(jni,0)is entry (j, n) of matrix Ψ(i,0) ≡ inv IN − j̸=i ∑l̸=i 1−φnφ

ρjl,0ε(jln,0l,0)

, measuring the exposure of country j's energy output to demand for country n's energy, as detailed in Appendix .B.

n

j,n

- 25 Alternatively, the carbon tax could be applied at the point of energy extraction with appropriate adjustments to energy border taxes. See Appendix E.3 for optimal policy formulas featuring an explicit extraction tax. In our framework, extraction taxes are non-essential due to product differentiation in energy markets, where border taxes serve as a more direct instrument for regulating foreign emissions. However, when energy is a homogeneous commodity, the distinction between border and extraction taxes becomes irrelevant, making extraction taxes an essential component of the optimal policy schedule, as in Kortum and Weisbach (2021).
- 26 Our definition of a small open economy differs from the conventional definition, which is based on a lack of influence over world prices. Instead, we define a country a small open economy if it accounts for a vanishingly small share of foreign sales and expenditure (see also Caliendo and Feenstra 2024).


economy simplification, can be decomposed as: t∗

ni,k = t ̄i + τi∗ × vn,k

. (24)

Carbon Border Tax

The uniform tariff component t ̄i reflects the standard terms-of-trade rationale for import taxation.27 The carbon border tax component mimics the unilaterally-optimal domestic carbon tax. It taxes the carbon content per dollar value of imports, vn,k, at the unilaterally optimal rate, τi∗. Remarkably, the unilaterally optimal border tax rate coincides with the accounting border adjustment that neutralizes the domestic cost disadvantage caused by carbon-pricing. Our formula presents a welfare rationale for these widely-used border adjustment schemes.28

The unilaterally optimal export subsidy on final-good variety in, k can be decomposed as

σk − 1 σk

in,k = (1 + t ̄i)

1 + x∗

σk − 1 σk

### + τi∗ ×∑

, (25)

λjn,kvj,k

j̸=i

Carbon Border Subsidy

where the first component corresponds to the optimal markup on exports from the terms-of-trade standpoint.29 The carbon border subsidy depends on the average carbon intensity of competing foreign varieties in market n, namely, ∑j̸=i λjn,kvj,k . This differs from accounting border adjustment schemes that simply rebate the carbon taxes toward exports. The optimal carbon border subsidy seeks to mimic a carbon tax, τi∗, on foreign varieties sold to market n ̸= i. It accomplishes this by subsidizing the price of domestically produced exports varieties. Since domestically produced and foreign varieties are substitutable, the subsidy lowers demand for foreign goods in market n ̸= i, imitating the demand drop if those goods were taxed directly.

Turning to border taxes on energy varieties, the uniform tariff, t ̄i, on energy imports is motivated by terms-of-trade considerations.30 Since imported energy varieties, after bundling and distribution, are subjected to a domestic carbon tax τi∗, no additional import duty on energy is

- 27 This element of our formula echoes the familiar result that, absent climate externalities, optimal tariffs are uniform across differentiated constant-returns-to scale industries.
- 28 The above carbon border tax configuration does not account for origin country carbon tax rates, therefore risking double taxation. This is due to the non-cooperative nature of these taxes since governments may doubly tax the carbon externality to generate revenue. As shown in Appendix C, double taxation is avoided in a cooperative setting. The optimal cooperative carbon border tax is τ − τn × vn,k, taxing the difference between the globally optimal rate τ and the rate applied in the origin country, thus preventing double taxation.
- 29 Since σkσ−1

k

< 1, the optimal export policy in the absence of climate externalities would involve an export tax under the normalization t ̄i = 0.

- 30 A small open economy's optimal energy import tax has no climate-driven element, since imported energy varieties face a carbon tax after bundling and distribution. However, for a large economy, the optimal energy import tax internalizes climate impacts arising from general equilibrium linkages, as Proposition 2 indicates. We elaborate on these general equilibrium linkages in the next paragraph.


needed. The optimal policy, however, includes a carbon-based tax on energy exports equal to τi∗ × σ1

ζn/P ̃n,0 . The rationale is that country i would ideally levy a tax on country n's composite energy input at an ad valorem rate of τi∗/P ̃n,0. This policy is infeasible, but the energy export tax is passed on to foreign's energy price, imitating this intended tax. Echoing this logic, the optimal export tax rate depends on the magnitude of tax passthrough, which is determined by the foreign countries's energy input demand elasticity, ζn ≡ ∂ln∂∑lnkPZ ̃n,k(.)

0

< 0, and the elasticity of substitution between international energy varieties, σ0.

n,0

Building on the intuition from the small open economy case, let us revisit the general formulas presented under Proposition 2. The optimal export subsidy for non-energy goods depends on foreign demand elasticity ε, which is determined by structural parameters (like σ in the case of CES) and endogenous expenditure shares. The optimal border taxes on energy, meanwhile, account for GE linkages, which are non-trivial for large economies (as shown by lemmas E1, E2, E3 in Appendix B). Import taxes on energy contract export supply and increase the marginal cost of energy extraction abroad. This triggers price changes that alter global energy demand, prompting further energy price shifts worldwide. These GE ripple effects are captured by the backward linkage matrix, Ψ(i,0), whose elements determine the optimal import tariff. Energy export subsidies, meanwhile, influence the cost of foreign goods using the subsidized or taxed input. Some of these goods are imported by country i and face a carbon border tax upon importation. The optimal energy export subsidy is, thus, adjusted to prevent double marginalization. The optimal adjustment depends on the fraction Λin,0 of energy exports re-imported via the energy supply chain.

###### 3.4 Globally Optimal Carbon-Pricing and Free-Riding

This section characterizes the optimal carbon policy from a global standpoint. Comparing the globally optimal policy with the unilaterally optimal policy, derived earlier, elucidates the freeriding problem that impedes cooperation on climate action. We obtain the globally optimal policy by solving a global planning problem, where the planner selects tax instruments I ≡ {Ii}i∈N and lump-sum international transfers, ∆ ≡ {∆i}i, to maximize an internationally representative social welfare function. Letting I ̃ ≡ {I, ∆} denote the policy set, the planing problem can be formulated compactly as

∑θilnWi I ̃ subject to General Equilibrium Equations (1)−(19),

max

I ̃

where Wi ∼ Vi Ei + ∆i, P ̃i − δi × Z(global) is country i's climate-adjusted welfare under policy, with ∑i ∆i = 0, and θi is country i's weight in the planner's problem. The inclusion of income

transfers is essential, as it separates redistribution, addressed via transfers, from climate-related externalities, addressed via taxes.

Capitalizing on a variation of Proposition 2, we derive the globally optimal policy in Appendix C. The optimal policy from a global perspective involves carbon taxes that correct the worldwide externality of carbon emissions, along with zero trade taxes31:

δ ̃i ∼ τ , ti,k = xi,k = 0 (∀i, k) . (26)

#### τi,k = ∑

i

The globally optimal border taxes are zero because border taxes are an inefficient policy for reducing carbon emissions compared to directly targeted carbon taxes. In the unilateral case, carbon border taxes were justified since country i's government could not directly tax foreign carbon inputs. This missing policy limitation no longer applies in the globally optimal context.

The free-riding problem stems from the gap between the unilaterally optimal and globally optimal carbon tax rates. Specifically,

τi∗ = δ ̃i < τ = ∑

δ ̃n.

n

This means that if all other countries commit to τ , country i's welfare-maximizing government will be inclined to lower its carbon tax rate from τ to τi∗. Strategic behavior by all governments in this manner triggers a race to the bottom in climate action. In the next section, we discuss two potential solutions to the free-riding problem.

###### 3.5 Two Remedies for the Free-Riding Problem

Two types of policies can mitigate the free-riding problem, both involving border tax measures:

- Proposal 1. Governments use border taxes as a second-best policy to correct the climate externality of foreign emissions on their citizens. The maximal efficacy of this proposal will be realized if carbon border tax rates are set to the optimal rate specified by Proposition 2.
- Proposal 2. Climate-conscious governments forge a climate club and leverage contingent trade penalties to deter free-riding. The maximal efficacy of this proposal will be realized if the trade penalties are applied based on the unilaterally optimal import and export tax rates (t∗ and x∗) specified by Proposition 2.


While Proposal 1 is rooted in unilateral action Proposal 2 seeks to revive multilateral climate

- 31Transfers, ∆i = (πi × ∑i Ei) − Ei, are pinned down by the optimal income shares: πi = θi WVi


i

/ ∑n θn WVn

n

.

efforts through better policy design. In theory, Proposal 2 could achieve first-best carbon pricing together with free trade. However, poorly-designed trade penalties and carbon tax targets for club members could decouple the climate club from the rest of the world. Here, our notion of optimal trade penalties refers to penalties that maximize welfare transfers from free-riders to climate club members, that coincide with the unilaterally optimal trade tax/subsides specified by Proposition 2.. In Section 6.2, we discuss policy designs when free-riding is not a concern or trade penalties are chosen differently.

###### 4 Mapping Theory to Data

This section describes how our model is mapped to data to simulate counterfactual policy outcomes. We first outline our strategy for computing counterfactual optimal policy outcomes, followed by a discussion of our data and estimation. For our quantitative analyses, we assume that the production function of final goods and the energy distributor has a CES form and the households' demand function takes a Cobb-Douglas-CES form. The baseline equilibrium, to which we introduce the optimal policy interventions, corresponds to the status quo in 2014, as explained in Section 4.2. We are interested in counterfactual outcomes when taxes are revised from their applied levels to their optimal rates under the non-cooperative and climate club scenarios.

###### 4.1 Quantitative Strategy

Required Data and Parameters. The baseline equilibrium under the status quo is characterized by the following statistics: expenditure shares {λni,k, βi,k} and employment shares {li,k}, where li,k ≡ Li,k/L ̄i is country i's share of employment in industry k; CO2 emissions, energy input cost shares, and CO2 intensity values, {Zi,k, αi,k, vi,k}; pre-carbon-tax price of energy P ̃i,0 ; and, national income accounting variables, {wiL ̄i,riR ̄i,Yi}.

Let BV stack the above-mentioned baseline variables, and let BT ≡ {xin,k, tni,k, τi,k} contain the applied policy variables—both of which are observable. Also, let BΘ = δ ̃i, φi, ς, σk denote the carbon disutility parameters, cost share of carbon reserves, energy input demand elasticity, and trade elasticities; with B ≡ BV,BT,BΘ denoting the required set of observable data and estimable parameters for conducting counterfactual policy analyses.

Counterfactual Policy Scenarios. Counterfactual outcomes under each policy scenario solve a system of equations consisting of equilibrium conditions and optimal tax formulas. The joint

solution to this system determines optimal policy, RT = x′

ni,k, τ′i,k , as well as changes to non-policy variables, RV = λˆ ni,k, lˆi,k, Zˆi,k, αˆi,k, vˆi,k, Pˆ ̃i,0, Pˆ ̃i, wˆi,rˆi,Yˆi . The prime notation denotes variables in the counterfactual equilibrium, with z ≡ z′/z denoting the change in a generic variable z.

in,k, t′

We evaluate Proposal 1 by simulating the non-cooperative equilibrium in which each country adopts its unilaterally-optimal policy. Under this scenario, country i's policy, RiT ≡ x′

in,k, t′ni,k, τ′i,k is determined by the optimal policy formulas presented under Proposition 2. These formulas express RT = RiT i as a function of B and RV, which we refer to as RT = f RV;B or mapping (b). In turn, the change in non-policy variables, RV, is described by general equilibrium conditions as a function of RT and B, as outlined in Appendix G.1. We refer to this relationship as RV = g RT;B or mapping (a). Jointly solving mappings (a) and (b), RV = g RT;B and RT = f RV;B , determines optimal policy RT and counterfactual non-policy outcomes RV as a function of the data and parameters in B. Appendix G.2 details the numerical algorithm used to solve this system, which starts with a guess of RT and iterates between RV = g RT;B and RT = f RV;B to find a joint solution. While we have not been able to prove convergence properties of this algorithm, it performs quickly in all the settings where we have examined, as reported in Appendix D.2.32 Likewise, our analysis of the climate club uses the unilaterally optimal trade taxes described by Proposition 2 as contingent trade penalties, and simulates counterfactual policy outcomes using the same logic.33

###### 4.2 Data and Parameters

In this section, we describe the required data and parameters for conducting counterfactual policy analysis, which include data on trade, production, and CO2 emissions (labeled as BV), applied taxes (BT), and the structural parameters of our model (BΘ).

- 32 The resulting equilibrium constitutes the Nash equilibrium of a one-shot game, wherein every country selects their best policy response given policies in the rest of world. Lashkaripour (2021) and Lashkaripour and Lugovskyy (2023) use a similar logic to quantify the counterfactual impact of non-cooperative trade policies.
- 33 Two clarifications are needed for interpreting our counterfactual policy outcomes. First, our counterfactual analy-


- ses measure long-run outcomes based on whether governments maintain a non-cooperative policy stance or form a climate club. Proposal 1 examines outcomes if heightened climate concerns lead governments to abandon shallow trade cooperation while raising domestic carbon taxes to the unilaterally optimal rate. Proposal 2 evaluates outcomes when climate considerations are integrated into free trade agreements. Second, the goal of our optimal policy framework is to outline the policy outcome frontier, not to necessarily explain government behavior. Actual policies often fall short of this frontier due to various obstacles, but it remains a useful tool for assessing long-term policy efficacy—a point we come back in Section 6.2 when discussing the EU's unilateral policy frontier.


Trade, Production, and Expenditure. We use data on international trade and production from the Global Trade Analysis Project (GTAP) database (Aguiar et al. 2019), which provides international trade flows by country-industry origin and destination for 2014. We consolidate our sample into (K + 1 = 18) "industries," comprising K = 17 non-energy ISIC-level industries and one composite energy industry, and (N = 19) "countries," consisting of the 13 countries with the largest GDP plus 6 aggregate regions. Tables 1 and 2 list the industries and countries in our sample, along with their key characteristics. Our final sample forms a 19×19×18 matrix of free-on-board flows, with element Xij(fob,k ) = P ̃ji,kCji,k/ 1 + tij,k corresponding to origin j–destination i–industry k.34

CO2 Emissions and Carbon Accounting. We obtain CO2 emissions associated with use of fossil fuels from the GTAP database, counting CO2 emissions at the location of energy use by end-users (i.e., non-energy industries and households). All energy types are consolidated into a composite energy industry, denoted as industry "0," with CO2 emissions calculated from both direct and indirect purchases of energy. Appendix F.1 details our carbon accounting procedure. Table A.2 reports total emissions (as the sum of direct and indirect emissions) by industries and households.

Let us highlight key statistics that will help interpret our quantitative results in Section 5. First, emissions from production constitute three-fourths of global CO2 emissions, with the remaining one-fourth generated by households (Appendix Table A.2). Second, most production-related CO2 emissions are embedded goods that never cross international borders (Appendix Figure A.2). For instance, highly tradeable industries like Electronics & Machinery, Textiles, and Motor Vehicles collectively account for only 6% of global CO2 emissions from production (Table 1). Lastly, low and middle-income countries are largets contributors to global CO2 emissions, with China alone accounting for over a quarter of these emissions. This proportion reaches 60% when considering all non-OECD countries (Table 2).

Input Cost Shares. We construct energy input cost shares for final-good industries, αn,k, using data on their sales and energy input expenditures, with global averages shown in Table 1. For the energy extraction industry, the carbon reserve cost share, φi, is determined based on the valueadded share of natural resources in each country's primary energy sector, which has an average of 0.37. See Appenidix F.2 for more details.

Baseline Taxes. We use 2014 tariff data from the GTAP database, accessed through the Market Access Map of the International Trade Centre, and set energy import tariffs to zero in the baseline.

- 34 To be consistent with our framework, we purge the data from trade imbalances following Ossa (2016).


Consistent with World Trade Organization rules, we assume export subsidies are negligible and

- set xij,k = 0 in the baseline. Carbon taxes, which are negligible in most countries in 2014, are derived from the World Bank's Carbon Pricing Dashboard. See Appenidix F.3 for more details.


Table 1: Industry-Level Statistics CO2 Emission Trade-to- Carbon Energy Trade Industry (% of Total) GDP Ratio Intensity Cost Share Elasticity

(v) (α) (σ − 1)

Agriculture 4.2% 8.9% 100.0 0.030 3.80 Other Mining 1.9% 28.9% 183.0 0.055 10.16 Food 3.3% 8.0% 45.9 0.015 3.80 Textile 1.9% 22.8% 59.7 0.021 4.25 Wood 0.5% 8.4% 61.0 0.026 6.50 Paper 2.1% 8.9% 125.9 0.061 6.55 Chemicals 9.5% 21.9% 179.5 0.062 8.60 Plastics 1.8% 13.5% 89.1 0.056 8.60 Nonmetallic Minerals 8.6% 6.0% 458.4 0.121 5.27 Metals 14.7% 14.6% 205.2 0.066 5.99 Electronics and Machinery 3.0% 30.0% 42.0 0.022 3.98 Motor Vehicles 1.2% 23.3% 34.0 0.014 4.88 Other Manufacturing 0.6% 21.5% 42.0 0.032 4.80 Construction 1.5% 0.6% 59.2 0.025 5.94 Wholesale and Retail 3.6% 2.4% 34.7 0.017 5.94 Transportation 27.3% 10.5% 498.3 0.171 5.94 Other Services 14.5% 3.1% 26.7 0.012 5.94

Note: This table shows for every of the 17 non-energy industries the share from world industrial CO2 emission (not including households' emission), world-level trade-to-GDP ratio, global average carbon intensity (CO2 emissions per dollar of output) normalized by that of agriculture, energy cost shares reported as unweighted mean across countries within each industry, and estimated trade elasticities.

Perceived Disutility from Carbon Emissions. We recover the perceived national disutility from CO2 emissions (δ ̃i) through governments' revealed preferences for tackling environmental issues. Specifically, we postulate that δ ̃i is proportional to applied environmentally-related taxes per unit of CO2 emissions, adjusted for country size. If perceptions of climate damage were symmetric across governments, δ ̃i would scale solely with country size. To account for the size effect, we impose δ ̃i/δ ̃j ∝ Li/Lj , where Li is country i's population. However, governments' attitudes towards climate change are markedly diverse—even after accounting for size effects. These considerations lead to the following proportionality condition:

(a)

- δ ̃i/Li

- δ ̃j/Lj


- Ti(env)/Zi

- Tj(env)/Zj


.

###### =

Table 2: Country-Level Statistics

Share from World Carbon Country Output CO2 Emission Population Intensity (v) Disutility (δ ̃) Australia 1.8% 1.2% 0.3% 147.5 1.5 EU 25.9% 12.3% 7.5% 100.0 53.2 Brazil 2.8% 1.6% 2.8% 135.3 6.0 Canada 1.9% 1.6% 0.5% 176.1 1.2 China 17.8% 26.7% 18.9% 378.1 20.9 Indonesia 1.0% 1.5% 3.5% 302.0 0.5 India 2.4% 6.4% 17.9% 620.4 12.5 Japan 6.2% 3.6% 1.8% 127.6 6.0 Korea 2.2% 1.7% 0.7% 188.7 3.2 Mexico 1.4% 1.4% 1.7% 218.8 0.3 Russia 1.9% 4.4% 2.0% 436.5 0.2 Saudi Arabia 0.4% 1.5% 0.4% 752.4 0.0 Turkey 1.0% 1.1% 1.1% 245.5 4.9 USA 20.4% 17.2% 4.4% 162.0 6.8 Africa 2.6% 3.6% 15.9% 285.3 22.2 RO Americas 3.0% 2.7% 4.1% 194.7 9.8 RO Asia and Oceania 5.1% 5.5% 11.8% 253.0 6.6 RO Eurasia 0.7% 2.2% 1.9% 671.6 0.1 RO Middle East 1.6% 3.9% 2.8% 494.9 0.3

Note: This table shows for every of the 19 regions (13 countries + the EU + Africa + 4 "Rest Of" regions as collection of neighboring countries), their share from world output, CO2 emission, and population, and carbon intensity (CO2 emissions per dollar of output) normalized by that of the EU, and CPI-adjusted disutility from one tonne of CO2 emission, which sum to the social cost of carbon.

where Ti(env) is the environmentally-related taxes collected by country i, sourced from OECDPINE. Moreover, the sum of disutility from CO2 emissions equates the global Social Cost of CO2:

δ ̃i = SC-CO2.

(b) ∑

i

We calibrate SC-CO2 based on the latest release of the United States Environmental Protection Agency (EPA)'s Final Report on the Social Cost of Greenhouse Gases. From this report, we adopt the middle scenario discount rate, yielding a SC-CO2 of $156.2 per tonne of CO2 in 2014.35 By consolidating conditions, (a) and (b), we recover the CPI-adjusted disutility from carbon emissions, δ ̃i. Table 2 reports our calibrated values of δ ̃i for each country in the sample.36

- 35 Table A.5 of the EPA's publication reports 193 ($/tCO2) for 2020 and 230 ($/tCO2) for 2030, in dollars of 2020, based on a 2% annual discount rate.. Using a linear projection to the year 2014, and adjusting for the inflation, we obtain a SC-CO2 of 156.2 ($/tCO2) for 2014 in terms of dollars of 2014.
- 36 We alternatively calibrate δ ̃i based on country-level social costs of carbon (see Figure A.5 and Section 6.1).


Trade Elasticities. We estimate the industry-level trade elasticities, (σk − 1), using an identification strategy resembling that of Caliendo and Parro (2015). Our estimation procedure is reported in Appendix F.4, with point estimates replicated in Table 1.37

Energy Demand Elasticity. The following equation describes the quantity of energy inputs relative to total input cost, Zi,k/TCi,k, in country i−industry k:

Zi,k TCi,k

= −ς ln P ̃i,0k + (1 − ς) ln mci,k + lnκ ̄i,k

ln

. (27)

=Φi(energy)+Φ(kenergy)+εi(,energyk )

The right-hand side variables include the after-tax price of energy, P ̃i,0k,38 the marginal cost, mci,k, and the exogenous input demand parameter, κ ̄i,k. We allow the combined effect of the latter two terms to systematically vary by country and industry through the fixed effects, Φi(energy) and Φ(kenergy), with εi(,energyk ) denoting the unobserved energy demand residual.

Our identification strategy relies on two assumptions. First, an individual industry's energy demand residual in a given country has a negligible effect on global pre-tax energy prices, as each industry is small relative to the global energy market. Second, the unobserved energy demand residual is assumed to be uncorrelated with energy tax rates after accounting for country and industry fixed effects. Table A.4 reports our estimation results, with our preferred specification in Column (3) showing an energy demand elasticity of 0.6539

Magnitudes of Optimal Border Taxes. To evaluate Proposals 1 and 2, we calculate unilaterally optimal border policies (which combine import tariffs and export subsidies) in our calibrated model. Absent climate externalities, these policies are driven solely by terms-of-trade considerations. Per Lerner's symmetry, only the ratio of the optimal tariff (t∗) to export subsidy (x∗) is determined, with a median of 17% across non-energy product varieties, i.e., (1 + t∗) / (1 + x∗) ≃ 0.17. The 10th and 90th percentiles of these ratios are 12% and 26%, respectively. These ratios vary inversely with the industry-level trade elasticity but modestly across countries.40 Carbon border

- 37 The table does not list the energy industry, as CO2 emissions are assigned to energy consumption rather than production. The global energy trade-to-GDP ratio is 24.6%, with an energy trade elasticity of (σ0 −1) = 10.16, estimated by pooling energy flow observations with Other Mining
- 38 The after-tax price of energy which we use here includes fuel taxes that are not related to climate change. In our quantitative analysis, these non-climate-related fuel taxes are captured by exogenous energy demand shifters.
- 39 Our elasticity parameters align with the long-run estimates in the literature, reflecting our focus on long-term outcomes. Labandeira et al. (2017) report an average long-run energy demand elasticity of 0.59, compared to our 0.65. Our calibration implies a greater-than-one energy supply elasticity consistent with the literature review in Kotchen

(2021). Lastly, our trade elasticity, ranging between 3.8 and 8.6 across manufacturing industries, is in line with larger and long-run estimates in the literature (Alessandria et al. 2021).

- 40 Our optimal border taxes are broadly consistent with, but on the lower side of existing estimates obtained from


taxes/subsidies represent a modest share of the optimal border tax/subsidy rate and vary significantly across countries, reflecting each country's unilaterally optimal carbon tax, τi∗ = δ ̃i. They also differ across industries, being more punitive in sectors with higher carbon intensities.41

###### 5 Quantitative Assessment of Climate Proposals 1 and 2

In this section, we provide a quantitative assessment of two prominent climate proposals that combine carbon taxes with border measures to address the free-riding problem. We examine the efficacy of each proposal by reporting the changes in carbon emissions and welfare resulting from these policies, compared to the status quo.

###### 5.1 Proposal 1: Non-Cooperative Carbon Border Taxes

Under Proposal 1, border taxes are employed as a second-best policy to cut (under-taxed) carbon emissions by non-cooperative trading partners. To gauge maximal efficacy, we simulate a non-cooperative Nash equilibrium in which each government enacts its best policy response consisting of unilaterally optimal border and carbon taxes. The resulting change in CO2 emissions (Z), real consumption (V), and climate-adjusted welfare (W) are reported in Table 3.

The first panel (titled "Noncooperative: Carbon + Border Tax") reports changes in outcomes relative to the status quo when all governments adopt their unilaterally optimal carbon and border tax measures non-cooperatively. To understand these results, note that domestic carbon taxes are small or virtually zero under the status quo. Therefore, the carbon reduction reported in this panel represents the combined reduction from both elevating the domestic carbon tax and border tax rates to their unilaterally optimal rates.

To isolate the net contribution of border taxes, the middle panel in Table 3 (titled "Noncooperative: Carbon Tax") reports outcomes under unilaterally optimal domestic carbon taxes that are not supplemented with any carbon border taxes. The difference between the numbers presented in the first and middle panels represents the net contribution of non-cooperative border taxes. To put the non-cooperative outcomes in perspective, the panel "Globally Cooperative" presents the

models without carbon externalities, e.g., Ossa (2014) and Lashkaripour (2021). The terms-of-trade component of optimal border taxes largely depend on the industry-level trade elasticity, (σk − 1), with a higher trade elasticity implying a lower degree of national-level market power. Our estimates of trade elasticity are on average 5.9, which is higher than the estimates of trade elasticity in Ossa (2014) and Lashkaripour (2021).

- 41 Appendix Figure A.3 illustrates this in the case of the EU's unilaterally optimal carbon import taxes.


effects of globally optimal (first-best) carbon taxes.42

The results in Table 3 suggest that optimally-designed non-cooperative border taxes deliver a 1.3% reduction in global CO2 emissions (i.e., (1−0.066)/(1−0.054) − 1 = 1.3%), complementing the

- 5.4% reduction attained through unilaterally optimal domestic carbon taxes.43 This stands in contrast to the additional 37.6% reduction in global CO2 emissions when domestic carbon prices are elevated to their first-best level (i.e., (1−0.410)/(1−0.054) − 1 = 37.6%). To rephrase, non-cooperative border taxes replicate only 3.4% of the potential CO2 reduction under global cooperation (i.e., 1.3/37.6 = 3.4%)—highlighting the limited effectiveness of non-contingent carbon border taxes at


addressing the free-riding problem.

The inefficacy of carbon border taxes at mitigating the free-riding problem stems from three factors. First, they fail to incentivize abatement by individual firms because the taxes are based on the average carbon intensity of all firms within a country and industry, rather than the firmspecific carbon intensity. As individual firms cannot meaningfully influence these broad averages, they have no motivation to reduce their carbon inputs and emissions in response to the taxes.

Second, border taxes cannot cut the CO2 emissions from non-traded goods, which constitute a significant portion of worldwide emissions. The "Transportation" sector, for example, is responsible for over 25% of global industrial CO2 emissions, yet it has a trade-to-GDP ratio of just 0.10 (see Table 1). Appendix Figure (A.2) compares the tradeability of industries to their global emissions share. Notably, the industries that have a trade-to-GDP ratio below 0.15 are responsible for over 80% of global CO2 emissions from production.

Third, border taxes are not immune to leakage via general equilibrium energy price adjustments. They reduce global demand for energy, which leads to lower pre-tax energy prices worldwide. This in turn causes a drop in the after-tax price of energy in countries like Russia and Saudi Arabia, which have lesser care for climate change. As a result, their CO2 emissions rise with carbon border taxes, dampening the overall reduction in global emissions.44

The modest CO2 reduction achieved with non-cooperative border taxes is offset by sizable consumption losses in most countries. Overall, global real consumption declines by 0.5% under these taxes, yielding only a negligible benefit in terms of emissions reduction. By comparison, globally optimal carbon taxes deliver a 41.0% reduction in global CO2 emissions, paired with

- 42 The outcomes presented in the last panel exclude the lump-sum inter-country transfers necessary for ensuring Pareto improvements. The country weights in the global planner's problem could be chosen to ensure such Pareto improvements. Here, we simply set these weights based on GDP share of countries in status quo.


43Let ∆xA = (xA − 1) be the percent change in x under policy "A," where xA ≡ xA/x. The percent change from counterfactual policy A to B is: (xB/xA − 1) = ([1 + ∆xA]/[1 + ∆xB] − 1).

- 44 Our carbon border tax specification exhibits similarities and differences with the EU's carbon border adjustment mechanism (CBAM). Both unilaterally levy duties on the carbon content of imports. However, the CBAM aims to target firm-level emissions when possible, exempting exporters who demonstrate abatement through monitoring. Thus, while the CBAM faces the second and third limitations highlighted above, the extent to which the first limitation applies is unclear. Additionally, the CBAM allows deduction of carbon taxes already paid in the origin country. This bears similarity to the globally-optimal carbon border taxes analyzed in Appendix E.1.


Table 3: The Impact of Non-cooperative and Cooperative Tax Policies

Non-Cooperative Globally Cooperative Carbon + Border Tax Carbon Tax

Country ∆CO2 ∆V ∆W ∆CO2 ∆V ∆W ∆CO2 ∆V ∆W

Australia 0.3% -0.6% -0.5% 1.9% -0.0% 0.1% -39.6% -1.2% -0.4% EU -22.2% -0.3% -0.0% -21.2% -0.0% 0.2% -38.5% -0.4% 1.7% Brazil -1.5% -0.1% 0.3% -1.0% 0.0% 0.3% -39.4% 0.3% 2.6% Canada 8.1% -1.6% -1.5% 3.5% -0.1% 0.0% -42.6% -1.2% -0.6% China -9.8% -0.1% 0.1% -8.3% 0.0% 0.1% -39.0% -1.7% -0.6% Indonesia 1.2% -0.2% -0.1% 2.4% -0.0% 0.1% -42.9% -3.1% -2.7% India -6.9% -0.3% 0.5% -5.3% 0.0% 0.7% -44.0% 4.5% 10.8% Japan -2.1% -0.3% -0.1% -0.6% 0.0% 0.1% -39.1% -1.5% -0.5% Korea 0.5% 0.3% 0.6% 0.9% 0.0% 0.2% -39.9% 1.6% 3.2% Mexico 4.3% -1.3% -1.2% 3.0% -0.0% 0.0% -41.5% -1.3% -1.1% Russia 7.1% -1.4% -1.3% 3.5% -0.2% -0.2% -43.8% -0.0% 0.1% Saudi Arabia 11.5% -3.9% -3.9% 4.8% -0.6% -0.6% -45.8% -0.6% -0.5% Turkey -4.6% -0.5% 0.3% -0.0% 0.1% 0.8% -39.1% 1.9% 7.6% USA -4.0% -0.3% -0.3% -1.9% 0.0% 0.0% -43.0% -1.7% -1.3% Africa -12.8% -1.2% 0.1% -10.2% -0.1% 1.1% -41.7% 8.4% 20.6% RO Americas -5.3% -0.7% -0.2% -3.4% -0.0% 0.4% -41.5% 2.0% 5.6% RO Asia -5.5% -1.0% -0.9% -0.9% 0.0% 0.2% -40.6% -0.9% 0.4% RO Eurasia 2.0% -1.1% -1.1% 3.6% -0.1% -0.1% -44.2% -2.2% -2.1% RO Middle East 5.6% -2.5% -2.5% 3.9% -0.3% -0.3% -43.3% 0.0% 0.2%

Global -6.6% -0.5% -0.2% -5.4% -0.0% 0.2% -41.0% -0.6% 1.1%

Note: This table shows for every country the change to CO2 emission, real consumption, and welfare from the baseline to noncooperative and cooperative equilibrium. In the baseline, each country's tariffs and carbon taxes are set at their applied rates in 2014 and export subsidies are zero. Optimal policy formulas for the noncooperative and cooperative outcomes are detailed in Sections 3.1and 3.4 and our quantitative implementation is described in Sections 4.1 and 4.2.

mere 0.6% loss to real consumption, which translates to a 1.1% increase in climate-adjusted welfare.

###### 5.2 Proposal 2: Climate Club with Contingent Trade Penalties

Under Nordhaus's (2015) climate club proposal, border taxes are used as a contingent penalty device to deter free-riding. We begin by specifying the climate club as a sequential game. A group of "core" countries move first and all countries simultaneously play afterwards. The game is characterized by a given set of core countries, denoted by N(core), and a "carbon tax target," denoted by τ(target). Given N(core), τ(target) , governments play according to the following rules:

Members. A member country must raise its domestic carbon tax to τ(target), set zero border taxes against other members, and impose unilaterally optimal trade taxes, as penalty, against non-members. By design, core countries adhere to these rules, while others conform only if they opt to join the club.

Non-members. Non-member nations retaliate by imposing their unilaterally optimal trade taxes

against member countries. Other than this, non-member countries retain their status quo tax policies—preserving existing tariffs against other non-member countries and maintaining their zero or near-zero carbon taxes.

For a game N(core), τ(target) , a partitioning of countries into non-core club members N(member), and non-members N(non-member) constitutes a Nash equilibrium if (i) No non-core country has an incentive to deviate from the partition to which it belongs. (ii) Each core country's welfare improves (compared to the baseline) under this partition

Quantitative Challenges.— Analyzing the climate club game in-depth poses significant challenges for two main reasons. First, iteratively determining optimal trade penalties for various countries across all conceivable partitions is practically infeasible with brute-force numerical optimization techniques. Our formulas for optimal border taxes, however, offer an analytical representation of these penalties, effectively circumventing this issue. Second, identifying all possible equilibria of the climate club game is complicated by the curse of dimensionality. Without a technique to shrink the outcome space, our analysis would involve examining 2N−N(core) combinations of national strategies.45 We address this challenge by noting that the severity of climate club penalties increases with the club's size. Consequently, the pay-off from joining the club rises with size, allowing us to shrink the outcome space via iterative elimination of dominated strategies.46

Carbon Tax Target.— The selection of the carbon tax target τ(target)is based on two key considerations. First, there is an inverted U-shaped relationship between the club's emission reduction and the carbon tax target, akin to the Laffer curve. When weighing club membership, non-core countries compare the costs of raising their carbon tax against trade penalties from club members. While a higher carbon tax target prompts more emission reduction per member, it also deters participation due to higher costs. This creates a trade-off: an excessively high tax target reduces membership limiting global emission cuts, while an overly low target delivers a limited reduction in global emissions despite maximal participation. Second, the climate club's aim is to cut emissions without triggering decoupling between club members and the rest of the world. That is, trade penalties are meant to deter free-riding without being exercised in equilibrium. To achieve

- 45 With nineteen countries in our sample and supposing one core member, we would be required to solve for 4.7 million general equilibrium outcomes. Each partitioning of non-core countries, N(member),N(non-member) , maps

to a different general equilibrium outcome, amounting to 218 cases. Additionally, for a given partitioning, checking whether any of the eighteen non-core countries has an incentive to unilaterally deviate corresponds to a new general equilibrium outcome. Therefore, in total, there are 18 × 218 ≈ 4.7 million general equilibrium outcomes to check.

- 46 This procedure requires that the benefits of membership increase as the climate club grows larger. This typically holds since a bigger club can impose harsher trade penalties on non-members. However, the relationship may not hold universally due to a caveat: As the climate club expands, global energy demand decreases, lowering the pre-tax price of energy worldwide. These general equilibrium price effects can diminish the desirability of club membership by raising the opportunity cost of carbon pricing. We cannot theoretically preclude scenarios where these general equilibrium forces undermine the link between club size and membership benefits. Instead, in the spirit of irreversible actions in theories of gradual coalition formation (Seidmann and Winter 1998), we assume that exiting the climate club damages reputation and carries a non-pecuniary cost that intensifies with the club's size. Therefore, even if escalating trade sanctions prove insufficient, the non-pecuniary cost of existing ensures that the benefits of maintaining membership rise as the club grows.


this, τ(target) must be ideally set to the maximal carbon tax target that supports an inclusive club of all nations as the Nash equilibrium.47

Solution Algorithm.— We employ the following two-tier procedure to identify the maximal carbon tax target. In the inner tier, we use the following iterative procedure for a given carbon tax target: In the first iteration, climate club penalties are applied only by core members. We identify non-core countries that would benefit from unilaterally joining the club, adding them to the club in the subsequent rounds. In the second iteration, climate club penalties are applied by core members plus those added from the previous round. We re-evaluate the gains from unilateral club membership under the new penalties and update the club accordingly. We repeat this procedure until we achieve convergence. The resulting outcome is an equilibrium club of all nations if: (i) the converged set corresponds to the set of all non-core countries who have no incentive to unilaterally withdraw, (ii) the welfare of core countries has increased relative to the status quo.48 In the outer tier, we incrementally increase the carbon tax target from a small initial value until we identify the maximum target at which the club of all nations is formed.

While we specify the climate club as a static one-shot game, our procedure offers a glimpse into the club's potential expansion trajectory. For example, consider a club with the EU and US as core members and a carbon tax target of 53 ($/tCO2), as detailed in Table 4. In Round 1, five countries with stronger trade ties to the EU and US find it beneficial to join. Given this outcome, two additional countries opt to join in Round 2 to evade penalties by the EU, US, and the five other members that joined in Round 1. Following this iterative process, the club eventually includes all non-core countries after eight rounds. At this point, we assess the benefits for the first movers—the EU and US—and find that their core membership has improved their national welfare compared to the status quo. It is worth noting this example uses the maximal carbon tax target of 53 ($/tCO2), as a higher target fails to deliver global participation.

The progression of country memberships in the above example reflects the gravity structure of trade relations. Nations like Turkiye and Canada join early given their strong trade ties with the EU and US. As the club expands, it attracts more distant countries with strong trade connections with the evolving club's collective body. Accordingly, the club's expansion occurs by the membership from the West toward the East.

- 47 In our quantitative exercises, this maximal target typically aligns with the peak of the emission reduction along the Laffer curve. The maximum emission reduction can be attained only when large developing countries such as India or Indonesia are in the club. At the same time, these countries are nearly marginal in joining the club or staying out. As a result, although that is not theoretically the case, in practice aiming for an inclusive club of all nations typically aligns with achieving the maximum emission reduction.
- 48 The second stage among non-core countries constitutes a coalition-proof equilibrium under the assumption referenced in Footnote footnote (46). Specifically, suppose that once a country joins the club, the increasing costs of exiting prevent it from leaving in subsequent rounds. Under this assumption as a universal feature, our procedure coincides with the iterative elimination of dominated strategies, allowing us to narrow the set of potential outcomes. Moreover, the resulting outcome is a coalition-proof equilibrium provided that the iterative elimination of dominated strategies converges to a unique outcome, which is the case in our analysis (Moreno and Wooders 1996). Lastly, we highlight that, for completeness, we always verify that the resulting outcome constitutes a Nash equilibrium even without the assumption in Footnote footnote (46).


Table 4: Climate Club Game with the EU & US as Core and Carbon Tax Target of 53 ($/tCO2) Core EU, United States

- Round 1 Brazil, Canada, Korea, Turkiye, RO Eurasia
- Round 2 Russia, RO Americas
- Round 3 Africa
- Round 4 Japan, Mexico, Saudi Arabia
- Round 5 China, Indonesia, RO Asia and Oceania, RO Middle East
- Round 6 Australia, India


Note: This table shows the convergence of our solution method via successive rounds to a club of all nations, for the case in which the EU and US are core members and the carbon tax target is at its maximal value of 53 $/tCO2. A country unilaterally evaluates to join or leave at each round given the club configuration at its previous round.

Outcomes Under Various Makeup of Core Members.— We analyze three climate club scenarios, each with a distinct composition of core countries. Initially, we consider the European Union (EU) as the sole core member, recognizing its status as a leader in environmental commitment. Subsequently, we explore a scenario where the United States joins the EU, forming a larger core. Our final scenario includes the EU, US, and China as the core members of the club.

For each scenario, Table 5 reports the maximal carbon tax target and the resulting global CO2 reduction. With the EU as the only core member, the maximal carbon price target is 36 ($/tCO2), leading to a 13.4% decrease in global emissions. When the EU and US unite as core members, the maximal target rises to 53 ($/tCO2), delivering a 18.6% reduction in global emissions. The addition of China as a core member further amplifies the club's impact: it allows for a maximal carbon price target of 89 ($/tCO2), culminating in a 28.0% reduction in global emissions. This is substantial when contrasted with the 41.0%, obtainable under first-best carbon pricing.49

Table 5: Climate Club Outcomes

Max Carbon Reduction in Core Target ($/tCO2) Global CO2

EU 36 -13.4% EU + USA 53 -18.6% EU + USA + China 89 -28.0%

Note: This table shows the climate club outcomes of the maximal carbon price target and the corresponding reduction in global CO2 emissions for each scenario of the core countries

These findings suggest that a well-structured climate club could achieve more than two-thirds of the first-best reduction in global carbon emissions (28.0/41.0≈0.68). The extent of this success, however, hinges critically on the initial composition of core members and the appropriate selection of the carbon tax target.

- 49 Tables A.5 and A.6 in the appendix show the rounds of accession with the EU and EU+US+China as core members. In addition, Figure A.4 compares welfare gains between participation and withdrawal for non-core countries, and shows core members' welfare improvements relative to status quo.


###### 6 Discussions

In this section, we examine the robustness of our results to alternative parameterizations, characterize alternative policy designs, and discuss extensions to our framework.

- 6.1 Sensitivity Analysis and External Validity We redo our analysis under five alternative specifications, with results reported in Tables A.7 and


- A.8. First, we set the social cost of carbon at 92 ($/tCO2) compared to 156 ($/tCO2) in our main analysis. This choice is consistent with the EPA's estimate under a 2.5% (instead of 2%) annual discount rate. Second, we leverage country-level estimates for the social cost of carbon from Ricke et al. (2018) to re-calibrate the carbon disutility parameters, δ ̃i.50 Third, we assign a common trade elasticity, σk ≡ σ = 6.7, to all industries, estimated using the pooled sample. In this case, export market power varies solely with export market share across industries. Fourth, we consider a Cobb-Douglas production function for final goods, representing a unitary substitution elasticity between energy and labor inputs (i.e., ς → 1), compared to ς = 0.65 in our main specification.


Lastly, we consider an alternative (inverse) energy supply elasticity by setting φi/(1 − φi) to 2.0 for all countries, compared to an average of 0.6 in our main specification. Following Kortum and Weisbach (2021), this choice aligns with data on the distribution of extraction costs among oil fields.51 For each specification, Table A.7 reports the effects of non-cooperative border taxes, while Table A.8 reports outcomes associated with the climate club. Across all scenarios tested, the qualitative results remain identical and quantitative results are similar to our main specification.

We additionally conduct two external validation checks on our model. First, we conduct an IVbased test in the spirit of Adao et al. (2024). To this end, we use our model to simulate countries' emission response to observed changes in carbon taxes from 2014 to 2022, holding all parameters of the model constant at their 2014 values. We then check whether the difference between the vector of model-implied and observed emission changes is uncorrelated with the vector of carbon tax changes. Following Adao et al. (2024), and provided that carbon tax changes are independent of other changes in model fundamentals, a significant non-zero correlation would suggest that our model is misspecified. Encouragingly, as Figure A.8 shows, the noted correlation is statistically indistinguishable from zero in our case.52 Second, we compare our model's predicted emissions

- 50 Specifically, we calibrate the disutility parameters by assuming that the relative disutility is proportional to the country-level cost of carbon and that the disutility parameters add up to SC-CO2 = 156.
- 51 Our specification of energy production, Equation (7), is isomorphic to the one in Kortum and Weisbach (2021). The latter assumes a continuum of fields that are heterogenous in their extraction costs, as captured by the unit labor requirement, a. Let Q0 = E(a ̄) = constant × a ̄ε represent the amount of energy that can be extracted with a unit

labor requirement a < a ̄. This formulation is equivalent to the production function, Q0 = constant × L10−φ, assumed in this paper by setting (1 − φ) = ε/(ε + 1). The choice of ε = 0.5 implied by the empirical distribution of extraction

costs, yields φ = 2/3, which corresponds to an inverse energy supply elasticity of φ/(1 − φ) = 2.

- 52 We view the test outcome as merely suggestive since applying that procedure in this context, with only one policy shifter, requires (a) the assumption that countries are approximately independent markets and (b) the asymptotic formula provided by (Adao et al. 2024) may be inaccurate with our small number of countries (N = 19).


reductions from globally-applied carbon taxes to estimates from other modeling approaches, including integrated assessment models, computable general equilibrium models, and ex-post empirical studies. Figure A.9 plots our model's projected global emission reductions against the global carbon tax rate, benchmarked against projections from leading studies in the literature. Despite differences in underlying assumptions, our results fall within the range reported across these previous analyses, providing additional support for the credibility of our model.

###### 6.2 Alternative Policy Designs

Our main analysis focused on policies that address the free-riding problem. Our analysis of Proposal 1 considered the most effective carbon border tax design that is resilient to free-riding, as characterized by Proposition 2. For Proposal 2, we focused on optimal penalties that maximize welfare transfers from non-members to members of the climate club. However, border taxes can deliver even greater emission reductions when free-riding is not the main obstacle to carbon pricing. These taxes can also be more punitive than the unilaterally-optimal taxes used in our climate club analysis. Below, we explore alternative border tax designs, which are relevant when freeriding is less of a concern or when countries are willing to exert harsher sanctions on free-riders.

First, consider a global economy where governments are willing to cooperate on climate issues but face political pressures that prevent them from implementing first-best carbon taxes. In this scenario, border taxes could serve as a second-best cooperative solution. We characterize the globally optimal border taxes under this scenario in Appendix C. Quantitatively, we find that this policy reduces global carbon emissions by only 0.9%, which is comparable to the non-cooperative border taxes examined earlier. The main takeaway here is that carbon border taxes have limited efficacy in reducing global emissions regardless of whether they address international free-riding or domestic political constraints. Instead, their ineffectiveness stems from the three structural limitations discussed in Section 5.1.

Second, envision a scenario where the home country's government assigns a non-zero weight to foreign welfare when designing its policy. The resulting optimal policy choices in that case trace out the home country's unilateral policy frontier. Each point on this frontier corresponds to a specific set of weights assigned to foreign countries' welfare. As detailed in Appendix C, placing more importance on foreign welfare dilutes the terms-of-trade component of the optimal border taxes. And when the weights on foreign welfare are sufficiently large, the home country's optimal policy has no negative externality on other countries—aligning with the optimal policy framework in Kortum and Weisbach (2021).

Figure A.6 in the appendix illustrates the EU's unilateral policy frontier. As the EU assigns a greater weight to non-EU countries, its optimal policy moves along the frontier to a point where it preserves non-EU's welfare. This policy, labeled "Externality-Free", elevates the EU's welfare by 0.19% compared to 0.32% under our baseline Unilaterally-Optimal policy. Moreover, global emissions drop by 3.4% under the Externality-Free policy compared to around 2% under the Unilaterally-Optimal policy. The Externality-Free policy, however, is difficult to implement due

to free-riding incentives. It effectively raises non-EU welfare to the detriment of EU countries compared to other policies on the frontier (top panel of Figure A.7). Additionally, policies that assign a greater weight to non-EU welfare trigger more carbon leakage, as displayed in the bottom panel of Figure A.7. The reason is that a higher non-EU weight prompts the EU to raise its domestic carbon tax, bringing it closer to the social cost of carbon. This increase in tax reduces the EU's energy demand and consequently lowers global pre-tax energy prices, prompting higher energy use and carbon emissions in non-EU regions.53

Lastly, the unilateral policy frontier shows the limitations of unilateral policy, regardless of whether governments implement optimal policies or not. The frontier shown in Figure A.6 determines the range of potential welfare outcomes possible under unilateral policy. Suboptimal policy decisions would result in outcomes inside the frontier. The maximum welfare increase realizable for the EU under unilateral policy is less than 0.4%, contrasting with the 0.7% increase feasible under the climate club led by the EU. Similarly, emissions reductions are capped at around 5% under the EU's unilateral policy, compared to more than 13% with the climate club initiated by the EU (Figure A.7 and Table 5). Essentially, even if governments do not optimize policies, the climate club's frontier remains far more promising.

###### 6.3 Extensions to Richer Settings

- (a) Increasing-returns to scale. We introduce increasing-returns to scale in final-good industries as in Krugman (1980), with details provided in Appendix H.1. In this setting, scale economies


arise from love-for-variety, governed by the elasticity of substitution, γk, between firm varieties.54 Firms' entry decisions do not internalize the full benefits of introducing new varieties, leading to inefficient entry and output across industries. Consequently, optimal policy aims to address inter-industry scale distortions while also managing the terms of trade and reducing emissions. For a small open economy under Cobb-Douglas-CES preferences, the unilaterally optimal policy formulas become:



τi∗ = δ ̃i ∼ δiP ̃i, s∗

i,k = γ 1

k−1 [carbon tax & domestic subsidy] t∗



ni,k = t ̄i + γkγ−1

τi∗vn,k t∗ni,0 = t ̄i [import tax (energy and non-energy)] 1 + x∗

k

+ γkγ−1

in,k = (1 + t ̄i) σkσ−1

τi∗ ∑j̸=i λjn,kvj,k σkσ−1

[export subsidy (non-energy)] 1 + xin∗ ,0 = (1 + t ̄i) σ0σ−1

k

k

k



+ τi∗σ1

ζn

P ̃n,0 [export subsidy (energy)]

0

0

(28)

- 53 The unilateral policy frontier, moreover, identifies the range of penalties a country could impose on its trade partners, for instance by assigning a negative weight to foreign welfare, as in Becko (2024). Under one such weighting scheme, a country could achieve the maximal reduction in foreign welfare without reducing its own welfare. The noted policy lies on the westernmost point of the frontier, labeled as "Maximal Sanction" in Figure A.6. In the context of a climate club, applying these extreme trade sanctions would have ambiguous effects on the club's efficacy. On one hand, the sanctions would make non-membership more costly. On the other hand, they would dilute the benefits of membership by prioritizing harm to foreign countries over domestic welfare.
- 54 As shown in Appendix H.1, this extended model is isomorphic to a setting with external economies of scale.


The above policy differs from the constant-returns to scale variant in two ways. First, it includes production subsidies, denoted by si,k. The optimal production subsidy is carbon-blind and corrects scale distortions by favoring high-returns-to-scale (low-γ) industries. Second, carbon border taxes are adjusted to account for scale economies, as they exert two countervailing effects on foreign emissions: they lower emissions by reducing output (Q), but concurrently, raise the per-unit emissions (Z/Q). The latter effect occurs because per unit emissions decline with output scale at an elasticity, (γk − 1)−1. To balance this trade-off, the optimal carbon border tax is revised downwards by a factor of γkγ−1

. In the limit where γk → ∞, industry k operates under constant-returns to scale and the above formulas reduce to the baseline formulas presented earlier.

k

Tables A.9 and A.10 in the appendix show the impacts of Proposals 1 (non-cooperative carbon border taxes) and 2 (climate club) under increasing-returns to scale. The analysis uses scale elasticities derived from the estimates in Lashkaripour and Lugovskyy (2023).55 The results indicate that carbon pricing policies deliver smaller reductions in global emissions due to the same trade-off highlighted earlier. Specifically, under increasing-returns to scale (IRS), contractions in output, Q, coincide with an increase in per-unit emissions (Z/Q). While this trade-off moderates the overall impact of policy on emissions, the relative efficacy of Proposals 1 and 2 is virtually unchanged compared to the baseline constant-returns-to-scale (CRS) scenario.56

- (b) Firm heterogeneity. We consider two sources of firm heterogeneity: differences in (1) total factor productivity and (2) carbon intensity across firms. The Krugman extension of our framework can readily handle the former, but modeling heterogeneity in carbon intensity is more challenging due to data limitations. Specifically, the formulas described in Equation 28 remain valid if there is firm heterogeneity only in total factor productivity. The formulas apply without qualification if serving new markets does not require paying a fixed overhead cost. In the presence of fixed costs, however, the optimal policy must account for self-selection of the most productive firms into export markets, à la Melitz (2003). Following Kucheryavyy et al. (2023), it can be shown that the Krugman extension of our model is isomorphic to the Melitz model when firm-level productivity follows a Pareto distribution. See Appendix H.2 for details. Therefore, Equation 28 describes optimal policy in the Melitz-Pareto case, albeit with a reinterpretation of parametersindicating our quantitative results would be unchanged.


A richer extension could incorporate firm heterogeneity in both productivity and carbon intensity (see Cherniwchan et al. (2017)). Here, border taxes could alter the average carbon intensity of exporting firms. This consideration lends itself to policy designs that target firm-level abatement, such as the Carbon Border Adjustment Mechanism (CBAM) referenced in footnote 44. But

55In this extension of our model, a necessary condition for uniqueness is μk ≡ (σk − 1) / (γk − 1) ≤ 1. Therefore, we use the estimates of μk from Lashkaripour and Lugovskyy (2023), which guarantee μk ≤ 1, together with our estimates of trade elasticity σk to recover the love-of-variety parameters, γk.

- 56 Despite similar aggregate results, some differences are noticeable at the level of individual countries. For example,


Figure A.10 compares the change in CO2 emissions under Proposal 1 between our main model (CRS) and extended model (IRS). Under the IRS model, when firms are subjected to border tax hikes, they tend to relocate to larger

markets to evade such taxes. These delocation effects can raise the scale of production and CO2 emissions even in climate-conscious regions like the EU that charge a relatively high carbon tax.

how this consideration affects optimal policy design depends on information asymmetry between governments and foreign firms. For instance, if governments know that more productive firms tend to be less carbon intensive, they could set a higher carbon border tax to deter entry by small, carbon-intensive firms. Yet with only industry-level data on carbon intensities, governments may implement voluntary certification schemes that incentivize low-emissions firms to disclose their output and emission levels (Cicala et al. 2022). Quantifying the global impacts of border taxes in either case requires international firm-level emissions data, which is presently unavailable.

###### 7 Conclusion

We analyzed two major climate policy proposals that use trade policy to address free-riding in climate action. One involves carbon border taxes as a second-best tool to limit transboundary emissions, while the other, the climate club, uses border taxes to incentivize cooperation from reluctant governments. Our results show that even optimally designed carbon border taxes achieve only modest global emissions reductions, whereas the climate club can be highly effective under appropriate composition of core members and the carbon tax target.

Our analysis puts forth methods with broader implications. For instance, carbon border taxes could target individual firms with proper monitoring, and collecting firm-level emissions data offers a promising research direction. Future work could also explore distributional considerations, such as international climate funds, technology transfers to developing nations, or supply-side carbon policies. Additionally, our analysis omits factors like adoption and innovation in renewable energy, which justify policies such as green technology subsidies.

###### References

Adao, Rodrigo et al. (2024). "Putting Quantitative Models to the Test: An Application to Trump's Trade War". In: Forthcoming at Quarterly Journal of Economics. Aguiar, Angel et al. (2019). "The GTAP data base: version 10". In: Journal of global economic analysis 4.1, pp. 1–27. Alessandria, George A et al. (2021). Trade-policy dynamics: Evidence from 60 years of us-china trade. Tech. rep. National Bureau of Economic Research. Babiker, Mustafa H (2005). "Climate change policy, market structure, and carbon leakage". In: Journal of international Economics 65.2, pp. 421–445. Barrett, Scott (1997). "The strategy of trade sanctions in international environmental agreements". In: Resource and Energy Economics 19.4, pp. 345–361. Bartelme, Dominick G et al. (2021). The textbook case for industrial policy: Theory meets data. Tech. rep. National Bureau of Economic Research. Becko, John Sturm (2024). "A theory of economic sanctions as terms-of-trade manipulation". In: Journal of International Economics 150, p. 103898. Beshkar, Mostafa and Ahmad Lashkaripour (2020). "The Cost of Dissolving the WTO: The Role of Global Value Chains". In. Böhringer, Christoph et al. (2016). "The strategic value of carbon tariffs". In: American Economic Journal: Economic Policy 8.1, pp. 28–51.

Caliendo, Lorenzo and Robert C Feenstra (2024). "Foundation of the small open economy model with product differentiation". In: Journal of International Economics 150, p. 103820. Caliendo, Lorenzo and Fernando Parro (2015). "Estimates of the Trade and Welfare Effects of NAFTA". In: The Review of Economic Studies 82.1, pp. 1–44.

— (2022). "Trade policy". In: Handbook of International Economics 5, pp. 219–295. Cherniwchan, Jevan et al. (2017). "Trade and the environment: New methods, measurements, and

results". In: Annual Review of Economics 9, pp. 59–85. Cicala, Steve et al. (2022). Adverse selection as a policy instrument: unraveling climate change. Tech. rep. National Bureau of Economic Research. Copeland, Brian R (1996). "Pollution content tariffs, environmental rent shifting, and the control of cross-border pollution". In: Journal of international Economics 40.3-4, pp. 459–476. Copeland, Brian R and M Scott Taylor (2004). "Trade, growth, and the environment". In: Journal of Economic literature 42.1, pp. 7–71. Copeland, Brian R., Joseph S. Shapiro, et al. (2021). Globalization and the Environment. Tech. rep. Working paper prepared for the Handbook of International Economics, Volume V. Costinot, Arnaud et al. (2015). "Comparative advantage and optimal trade policy". In: The Quarterly Journal of Economics 130.2, pp. 659–702. Desmet, Klaus and Esteban Rossi-Hansberg (2023). "Climate Change Economics over Time and Space". In. Dixit, Avinash (1985). "Tax policy in open economies". In: Handbook of public economics. Vol. 1. Elsevier, pp. 313–374. Dornbusch, Rudiger et al. (1977). "Comparative advantage, trade, and payments in a Ricardian model with a continuum of goods". In: The American Economic Review 67.5, pp. 823–839. Elliott, Joshua et al. (2010). "Trade and carbon taxes". In: American Economic Review 100.2, pp. 465– 69. Farrokhi, Farid (2020). "Global sourcing in oil markets". In: Journal of International Economics 125,

p. 103323. Farrokhi, Farid et al. (2023). "Deforestation: A Global and Dynamic Perspective". In. Harstad, Bård (2024). "Trade and trees". In: American Economic Review: Insights 6.2, pp. 155–175. Hoel, Michael (1996). "Should a carbon tax be differentiated across sectors?" In: Journal of public

economics 59.1, pp. 17–32. Iverson, Terrence (2024). "Tiered Climate Clubs: Global Abatement Without Global Agreement".

In: Available at SSRN 4849108. Kortum, Samuel S and David A Weisbach (2021). "Optimal unilateral carbon policy". In. Kotchen, Matthew J (2021). "The producer benefits of implicit fossil fuel subsidies in the United

States". In: Proceedings of the National Academy of Sciences 118.14, e2011969118. Krugman, Paul (1980). "Scale economies, product differentiation, and the pattern of trade". In: The American Economic Review 70.5, pp. 950–959.

Kucheryavyy, Konstantin et al. (2023). "Grounded by gravity: A well-behaved trade model with industry-level economies of scale". In: American Economic Journal: Macroeconomics 15.2, pp. 372– 412.

Labandeira, Xavier et al. (2017). "A meta-analysis on the price elasticity of energy demand". In: Energy policy 102, pp. 549–568. Larch, Mario and Joschka Wanner (2017). "Carbon tariffs: An analysis of the trade, welfare, and emission effects". In: Journal of International Economics 109, pp. 195–213. Lashkaripour, Ahmad (2021). "The cost of a global tariff war: A sufficient statistics approach". In: Journal of International Economics 131, p. 103419. Lashkaripour, Ahmad and Volodymyr Lugovskyy (2023). "Profits, scale economies, and the gains from trade and industrial policy". In: American Economic Review 113.10, pp. 2759–2808.

Maggi, Giovanni (2016). "Issue linkage". In: Handbook of commercial policy. Vol. 1. Elsevier, pp. 513– 564. Markusen, James R (1975). "International externalities and optimal tax structures". In: Journal of international economics 5.1, pp. 15–29. Melitz, Marc J (2003). "The impact of trade on intra-industry reallocations and aggregate industry productivity". In: econometrica 71.6, pp. 1695–1725. Moreno, Diego and John Wooders (1996). "Coalition-proof equilibrium". In: Games and Economic Behavior 17.1, pp. 80–112. Nordhaus, William (2015). "Climate clubs: Overcoming free-riding in international climate policy". In: American Economic Review 105.4, pp. 1339–70.

— (2021). "Dynamic climate clubs: On the effectiveness of incentives in global climate agreements". In: Proceedings of the National Academy of Sciences 118.45. Ossa, Ralph (2014). "Trade wars and trade talks with data". In: American Economic Review 104.12, pp. 4104–46.

— (2016). "Quantitative models of commercial policy". In: Handbook of commercial policy. Vol. 1. Elsevier, pp. 207–259. Ricke, Katharine et al. (2018). "Country-level social cost of carbon". In: Nature Climate Change 8.10, pp. 895–900. Seidmann, Daniel J and Eyal Winter (1998). "A theory of gradual coalition formation". In: The Review of Economic Studies 65.4, pp. 793–815. Shapiro, Joseph S (2021). "The environmental bias of trade policy". In: The Quarterly Journal of Economics 136.2, pp. 831–886.

Shapiro, Joseph S and Reed Walker (2018). "Why is pollution from US manufacturing declining? The roles of environmental regulation, productivity, and trade". In: American Economic Review 108.12, pp. 3814–54.

Staiger, Robert W (2021). A World Trading System for the Twenty-First Century. Tech. rep. National Bureau of Economic Research.

Taheripour, Farzad et al. (2019). "Market-mediated responses confound policies to limit deforestation from oil palm expansion in Malaysia and Indonesia". In: Proceedings of the National Academy of Sciences 116.38, pp. 19193–19199.

Weisbach, David A et al. (2023). "Trade, leakage, and the design of a carbon tax". In: Environmental and Energy Policy and the Economy 4.1, pp. 43–90.

# Appendices for "Can Trade Policy Mitigate Climate Change?" (for Online Publication)

Farid Farrokhi and Ahmad Lashkaripour

###### A Notational Preliminaries

###### A.1 Notation

To express the function that represents a generic variable X, we use an upright font with parentheses, X = X (.). This distinction helps us distinguish between a variable, whose value is determined in general equilibrium, and the function which represents it. For example, Cji,k denotes country i's consumption quantity of industry k from supplying country j, whereas Dji,k Ei, P ̃ i is a function whose value depends on national income Ei and the vector of consumer prices P ̃ i = [P ̃ji,k]j,k>0. Consequently, for policy choice P ̃ni,g ∈ Pi, the term ∂Cji,k/∂P ̃ni,g is the general equilibrium change in Cij,k, while ∂Dji,k (.) /∂P ̃ni,g is merely the partial derivative of the function Dji,k (.) with respect to P ̃ni,g as one of its arguments. The former is a complex general equilibrium change but the latter can be expressed in terms of a demand elasticity.

Moreover, to express a matrix that contains variable X over many markets and/or industries, we use a bold font, X = [X]. Moreover, we use matrix multiplication to avoid expansive sums. For example, τi = [τi,k]k>0 and Zi = [Zi,k]k>0 denote the K × 1 matrices of country i's carbon taxes and emissions, and τ⊺i Zi = ∑k>0 τi,kZi,k gives country i's carbon tax revenues.

Lastly, as in the paper and without loss of generality, our notation allows households to consume energy through their purchases of the output of a fictitious industry k0 ∈ {1,..., K} that converts the energy input bundle into a nontradeable final good without creating value added.

###### A.2 Functional Forms for Quantitative Analysis.

In our derivations of the optimal policy, we make no parametric assumptions about the generic demand and production functions. However, for our quantitative analysis, we adopt the following functional forms:

- 1. Cobb-Douglas-CES preferences for final goods deliver the following indirect utility:


K

Vi Ei, P ̃ i = Ei/P ̃i, where P ̃i =

∏

k=1

N

bji,kP ̃ji1,−kσk

∑

j=1

βi,k 1−σk

;

and, Marshallian demand functions, for home i and foreign l ̸= i:

bni,kP ̃ni1−,kσk ∑j bji,kP ̃ji1,−kσk

bnl,kPn1l−,kσk bil,kP ̃il,k + ∑j̸=i bjl,kPj1l−,kσk

βi,kEi, Dnl,k El, P ̃ il, P−il =

Dni,k Ei, P ̃ i =

βl,kEl

and, price elasticities of demand:

 

###### − [1 + (σk − 1) (1 − λni,k)] j = n, g = k (σk − 1) λni,k j ̸= n, g = k 0 g ̸= k

ε(jini,k,g) =



Lastly, note that income elasticities of CES demand equal unity.

- 2. CES aggregator over international energy varieties delivers the following demand function (for the energy distributor) for home i and foreign l ̸= i

Dni,0 Ei,0, P ̃ i,0 =

bni,0P ̃ni1−,0σ0 ∑j bji,0P ̃ji1,0−σ0

Ei,0, Dnl,0 El,0, P ̃il,0,P−il,0 =

bnl,0Pn1l−,0σ0 bil,0P ̃i1l−,0σ0 + ∑j̸=i bji,0Pji1,0−σ0

El,0

and, price elasticities of demand:

ε(jini,0,0) =

 



− [1 + (σk − 1) (1 − λni,0)] j = n (σk − 1) λni,0 j ̸= n

and, the aggregate price of the energy composite for home i and foreign l ̸= i,

Pi,0 P ̃ i,0 =

N

∑

j=1

bji,0P ̃ji1,0−σ0

1 1−σ0

, Pl,0 P ̃il,0,P−il,0 = bil,0P ̃i1l−,0σ0 + ∑

j̸=i

bjl,0Pj1l−,0σ0

1 1−σ0

- 3. CES production function of final goods is described by:


1

Fn,k (Ln,k, Zn,k) = (1 − κ ̄n,k)

ς−1 ς

ς−1 ς

1

n,k + (κ ̄n,k)

ς L

ς Z

n,k

ς ς−1

where ς is the elasticity of substitution between labor and energy input. With P ̃n,0k = P ̃n,0 + τn,k1(n = i), cost minimization implies:

- (a) Producer prices:

Pnl,k wn, P ̃n,0k = dnl,kpn,k (1 − κn,k) w1n−ς + κn,kP ̃n1,0−kς

1

1−ς ;

- (b) Energy input use (CO2 emission):


Zn,k = Zn,k P ̃n,0k, wn, Qn,k ≡ zn,k P ̃n,0k, wn Qn,k,

######  

######  

ς ς−1

κ ̄n,kP ̃n1,0−kς (1 − κ ̄n,k)w1n−ς + κ ̄n,kP ̃n1,0−kς

where zn,k P ̃n,0k, wn = zn,k

;

and, the elasticities of:

∂ lnZn,k (.) ∂ ln P ̃n,0

∂ ln ∑k Zn,k (.) ∂ ln P ̃n,0k

###### = −ς (1 − αn)

###### = −ς (1 − αn,k) , ζn ≡ ζn ≡

ζn,k ≡

where αn ≡ ∑g̸=0 αn,g ZZn,g

is the average energy input cost share in country n.

n

###### A.3 Auxiliary Variables

For completeness, we also reproduce the following auxiliary variables, which we make use of in our derivations:

[industry-level total sales] Yn,k = Pnn,kQn,k

[industry-level carbon intensity (per value)] vn,k = ZYn,k

n,k

[industry-level carbon intensity (per quantity)] zn,k = QZn,k

n,k

[within-industry international sales shares] ρni,k = ∑Pni,kCni,k

l Pnl,kCnl,k = PniY,kCni,k

n,k

[within-industry international expenditure shares] λni,k = ∑ P ̃ni,kCni,k

m P ̃mi,kCmi,k

[cross-industry expenditure shares] βi,k = ∑∑m P ̃mi,kCmi,k

k ∑m P ̃mi,kCmi,k = ∑m P ̃miE,kCmi,k

i

[CPI-adjusted climate damage cost] δ ̃i = P ̃i × δi; where P ̃i ≡ ∂∂VEii

−1

###### B Unilaterally Optimal Policy

###### B.1 Expansive Statement of the Unilaterally Optimal Policy Problem

This section outlines the unilaterally optimal policy problem for the government of country i as the tax-imposing country which we also refer to as home. The home's government has access to a full set of policy choices in the reformulated problem, namely the consumer prices of all goods that country

- i produces, the consumer prices of all goods that country i consumes, and carbon taxes in country i,


Pi ≡ [P ̃ji,k]j,k>0, [P ̃ij,k]j̸=i,k>0, [P ̃ji,0]j, [P ̃ij,0]j̸=i, [τi,k]k>0 ≡ P ̃ i, P ̃ −i, P ̃ i,0, P ̃ −i,0, τi . For a clearer exposition, we focus on the case in which tax rates in foreign countries are set to zero. Henceforth, we use

- i exclusively to refer to home, and n or l to refer to any country.


###### Formal Statement of the Unilaterally Optimal Policy Problem. The government of country i chooses Pi to maximize its welfare:

Wi = Vi Ei, P ̃ i − δiZ(global) (B.1)

where Vi (.) is country i's indirect utility function, P ̃ i ∈ Pi is to be selected by country i's government, δi is an exogenous climate damage parameter, and country i's income Ei and global emission Z(global) are determined in the system of general equilibrium (Equations B.2–B.15) as described below:

- – Consumption quantities of the varieties of final goods and energy are given by Marshallian demand functions Dnl,k (.) for k > 0 and Dnl,0 (.),


Cnl,k = Dnl,k Ei, P ̃ i ∀l, k > 0; (B.2)

Cnl,0 = Dnl,0 Ei,0, P ̃ i,0 ∀l, k = 0; (B.3)

- – Energy expenditures equal:

En,0 = ∑

k

αn,kPnn,kQn,k, ∀n; (B.4)

where the input cost share of energy is a function an,k (.) of wage and after-tax price of energy,

αn,k = an,k wn, P ̃n,0k , ∀n, k > 0; P ̃n,0k = P ̃n,0 + τn,k1 (n = i) . (B.5)

- – Distribution-level energy price index in home (i) and foreign countries (n ̸= i)

P ̃i,0 = P ̃i,0 P ̃ i,0 ; P ̃ i,0 = [P ̃li,0]l ∈ Pi, home (i); (B.6)

P ̃n,0 = P ̃n,0 P ̃in,0, P−i,0 ; P−i,0 = [Pll,0]l̸=i, foreign (n ̸= i) (B.7)

where P ̃n,0 (.) for all n is a homogenous-of-degree-one function of (pre-carbon-tax) prices of energy. In home country i, the pre-carbon tax prices of energy are chosen by country i's govern-

ment, P ̃ i,0 = [P ̃li,0]lN=1. In foreign countries n ̸= i, the price exported from home P ̃in,0 is a policy choice and the rest are determined by producer prices of energy elsewhere P−i,0 = [Pll,0]l̸=i.

- – Producer prices of final goods are determines by a function P (.) that maps input prices in each location to cost-minimizing producer prices. The producer price of final goods supplied by the home country i are

Pin,k = Pin,k (Pi, wi) ∼ Pin,k P ̃l,0k, wi ∀k > 0; (B.8)

where P ̃i,0k = P ̃i,0 + τi,k is the after-tax price of energy inputs used by industry k, which is fully determined by policy Pi. The producer price of final goods supplied by country l ̸= i are

Pln,k = Pln,k (Pi, wl, P−i,0) ∼ Pln,k wl,P ̃l,0 P ̃il,0, P−i,0 ∀l ̸= i, k > 0 (B.9)

where P ̃il,0 ∈ Pi is the price of country i's energy exports to l, which is a policy choice, and P ̃l,0 (.) for l ̸= i is defined by B.7.

- – Producer prices of energy are

Pll,0 = Pl,0 (wl, Ql,0) = pl,0wlQ

φl 1−φl

l,0 ∀l, k = 0 (B.10)

where Pl,0 (.) is the corresponding function and 1−φlφ

l

denotes the inverse supply elasticity in the energy sector. Energy varieties are traded without incurring iceberg trade costs (dln,0 = 1) which sets the destination-specific producer price Pln,0 = dln,0Pll,0 at the source producer price Pll,0.

- – Output quantity, Qn,k (.), is a function that sums over all destination-specific sales:


###### Qn,k = Qn,k ([Cnl,k]l) = ∑

dnl,kCnl,k ∀n, k; (B.11)

l

- – Emissions at different levels of aggregation are described by:

Zn = ∑

k

Zn,k, ∀n; Z(global) = ∑

n

Zn (B.12)

Zn,k = zn,k P ̃n,0k, wn Qn,k =

 



zn,k P ̃in,0, P−i,0, wn Qn,k n ̸= i zi,k (Pi, wi) Qi,k n = i

where zn,k (.) is a function representing emission per unit of output quantity in country n−industry k.

- – Labor market clearing condition in each country n is:

wnL ̄n = ∑

k>0

[(1 − αn,k) Pnn,kQn,k] + (1 − φn) Pnn,0Qn,0 (B.13)

- – National expenditure equals national income in home country (i), which is represented by the following function Yi (.),


Ei = Yi =Yi (Pi, w, P0,C ≡ [Ci,C−i,Ci,0,C−i,0], Zi)

=wiLi + Πi (Pii,0, wi) + τ⊺i Zi

###### + P ̃ i − Pi (.) ⊺ Ci + P ̃ −i − P−i (.) ⊺ C−i

+ P ̃ i,0 − Pi,0 ⊺ Ci,0 + P ̃ −i,0 − P−i,0 ⊺ C−i,0; (B.14) where:

- – τi = [τi,k]k>0, P ̃ i = [P ̃ji,k]j,k>0, P ̃ −i = [P ̃ij,k]j̸=i,k>0, P ̃ i,0 = [P ̃ij,0]j, P ̃ −i,0 = [P ̃ij,0]j̸=i denote carbon and after-tax prices, all which are elements of Pi.
- – w = [wi, w−i] is the vector of wage rates in the home country i and foreign countries −i.
- – P0 = [Pii,0, P−i,0] is the vector of producer prices of energy in the home country i and foreign countries −i.
- – C ≡ [Ci,C−i,Ci,0,C−i,0] denotes country i's consumption and exports of final goods (Ci,C−i) and energy (Ci,0, C−i,0).

- * Ci = [Cji,k]j,k>0 is the matrix of country i's consumption quantities of final goods;
- * C−i = [Cin,k]n̸=i,k>0 is the matrix of country i's export quantities of final goods;
- * Ci,0 = [Cij,0]j and C−i,0 = [Cji,0]j̸=i denote country i's quantities of input use and exports of energy


- – Zi = [Zi,k]k>0 is the vector of country i's emissions by industry
- – Pi (.) = Pji,k (.) j, k>0

collects the single-valued functions that describe the producer prices of final-good varieties sold to home country i

- – P−i (.) = Pij,k (.) j̸=i, k>0

collects the single-valued functions that describe producer prices of final-good varieties produced in home country i and sold to foreign markets.

- – The single-valued producer price functions from the above two bullet points are specifically:


- * Pin,k (Pi, wi) for all n and k > 0 is a function that maps input prices in the home economy to the producer prices of final goods Pin,k as defined under Equation B.8.


- * Pni,k (.) for n ̸= i and k > 0 is a function that maps input prices in foreign countries to the producer prices of final goods Pni,k as defined under Equation B.9.


More specifically, the components of income in Equation (B.14) can be broken down as:

(policy instruments) Pi = P ̃ i, P ̃ −i, P ̃ i,0, P ̃ −i,0, τi

(carbon tax revernues) τ⊺i Zi = ∑k̸=0 τi,kZi,k

(import tariffs and prod taxes on final goods) P ̃ i − Pi ⊺ Ci = ∑k̸=0 ∑n P ̃ni,k − Pni,k Cni,k

(export taxes on final goods) P ̃ −i − P−i ⊺ C−i = ∑k̸=0 ∑n̸=i P ̃in,k − Pin,k Cin,k

(import tariffs and prod taxes on energy) P ̃ i,0 − Pi,0 ⊺ Ci,0 = ∑n P ̃ni,0 − Pni,0 Cni,0

(export taxes on energy) P ̃ −i,0 − P−i,0 ⊺ C−i,0 = ∑n̸=i P ̃in,0 − Pin,0 Cin,0 National expenditure/income in foreign countries (n ̸= i),

En = Yn = Yn (wn, Pnn,0) = wnLn + Πn (wn, Pnn,0) , n ̸= i; (B.15) where Yn (.) and Πn (.) are the functions that represent foreign income and profits. Note on income function, Yi (.). Country i's consumer prices, export prices, and carbon taxes Pi ≡

P ̃ i, P ̃ −i, P ̃ i,0, P ̃ −i,0, τi as well as its consumption quantities, export quantities, and emission quantities (Ci,C−i,Ci,0,C−i,0, Zi) enter directly through tax revenues. In addition, Yi (.) depends on local

- wage rate, wi, through three channels: wage bills wiL ̄i, the profits collected in the energy sector Πi (.), and the producer prices of goods that are made in home country i, Pij,k = Pij,k(wi,.). Moreover, Yi (.) depends on the local producer price of energy, Pii,0, through the profit function in the energy sector, Πi (.). Less obviously is the way Yi (.) depends on foreign wage rates w−i = [wn]n̸=i and foreign producer prices of energy P−i,0 = [Pnn,0]n̸=i. To see this dependence, consider producer prices of final goods from a foreign country n ̸= i, on which i's import tariffs are applied: Pin,k is a function of n's wage rate, wn ∈ w−i, and n's distribution-level price of energy P ̃n,0, which is determined by country i's exported price of energy to n, P ̃in,0 ∈ Pi and other country's exported prices of energy to n, P ̃jn,0 = Pjj,0, with [Pjj,0]j̸=i ≡ P−i,0.


###### B.2 Assumption about Foreign Wages and Income

Assumption 1. Policy-induced changes in the relative wage rates among foreign countries and in the ratio of wage-to-total income among foreign countries have no first-order effect on country i's welfare in the neighborhood of its optimal policy Pi∗.

Under Assumption 1 (henceforth, A1), the derivation of the optimal policy does not require monitoring changes in wages and income levels in foreign countries (under the normalization that the wage rate in one of foreign countries is normalized by choice of numeraire). Importantly, since our analysis focuses on the optimal policy choice, this assumption is only needed in the vicinity of the optimum, not for the entire range of admissible policy choices.

A1 addresses two effects. First, country i's policy choice P ̃ ∈ Pi, may alter the relative wage rates among foreign countries, i.e., ∂ (wn/wn0) /∂P ̃ for n, n0 ̸= i, and the wage-to-income ratios abroad, i.e., ∂ (wnLn/Yn) /∂P ̃ for all n ̸= i. Under A1, The first effect represents a transfer from one foreign country to another, while the second represents a transfer among agents within a foreign country. While these extraterritorial transfers could theoretically influence country i's welfare via income effects in the global economy, their practical impact is negligible. This is because the transfers themselves are small—approaching zero for smaller countries—and affect country i's welfare only indirectly, primarily through income effects tied to export tax revenues. A1 asserts that these effects are zero in the vicinity of the optimum, where most welfare gains from extraterritorial income effects have already been internalized by the full set of policy instruments.

Notably, A1 becomes redundant in a two-country model where labor is the sole factor of production, as in Costinot et al. (2015). In this case, the neutrality of foreign wages is a consequence of Walras' law, with foreign income determined by its wage bill. Furthermore, A1 holds when the rest of the world actively regulates its internal balance of market access in response to country i's policy, as in Lashkaripour and Lugovskyy (2023). Alternatively, A1 is satisfied if preferences in the rest of the world are quasi-linear, as in Ossa (2011), with the linear good being exclusively traded internally within the rest of the world.

In Appendix D, we numerically check the accuracy of our results under A1, showing that the error introduced due to A1 is negligible.

- B.3 Generic Statement of the First-Order Conditions w.r.t. P ̃ ∈ Pi Our goal is to solve the unilateral policy problem of country i as detailed in Appendix B.1. The


- F.O.C. with respect to a generic policy instrument P ̃ ∈ Pi ≡ [P ̃ji,k]j,k, P ̃ij,k j̸=i, k


, [τi,k]k>0 , can be decomposed into three terms:

∂Wi ∂P ̃

=

∂Vi (.) ∂P ̃ × 1 P ̃ ∈ P ̃ i consumer price effect

+

∂Vi (.) ∂Ei

∂Ei ∂P ̃

income effect

∂Z(global) ∂P ̃

− δi

emission effect

= 0 (B.16)

The first term on the right-hand side represents the direct welfare impact of perturbing consumer prices via policy. The second term represents the welfare gains from changes in income. The third term represents the impact through altering global emissions. Noting that Ei = Yi (Pi, w,C, Zi, P0), where C ≡ [Ci,C−i,Ci,0,C−i,0], the income effects can be expanded according to57:

∂Yi (.) ∂P ̃ direct income effect

∂Yi (.) ∂w

∂Yi (.) ∂C

∂Yi (.) ∂Zi

∂Yi (.) ∂P0

∂Ei ∂P ̃

∂w ∂P ̃

∂C ∂P ̃

∂Zi ∂P ̃

∂P0 ∂P ̃

. (B.17)

=

+

+

+

+

indirect income effect

Additionally, since Z(global) = Zi1K + ∑n̸=i Zn1K = ∑k Zi,k + ∑n̸=i ∑k Zn,k, where Zn = zn (.) Qn, the emission effects can be unpacked as:

∂Z(global) ∂P ̃

∂Zi ∂P ̃

###### 1

=

home emission effect

∂Q−i ∂P ̃

∂P−i,0 ∂P ̃

∂zn (.) ∂P ̃

∂zn (.) ∂wn

∂zn (.) ∂P−i,0

∂wn ∂P ̃

###### + ∑

###### + z⊤

###### Qn

+

+

−i

n̸=i

foreign emission effect

###### (B.18)

- 57 To keep our notation compact and easier to follow, we omit the transpose sign hereafter, with the understanding that


each product in the F.O.C.s represents compatible row and column vectors (or matrices), e.g.,∂Y∂wi(.) ∂∂wP ̃ = ∑n ∂∂Ywi(.)

∂wn

∂P ̃ .

n

Equation B.16 with the income and emission effects given by Equations B.17 and B.18 are the basis of our derivations below. We take three steps dealing with wage effects, local prices, and export prices. Along these steps, we produce several lemmas summarizing our intermediate results. Proofs to the lemmas are provided after putting the lemmas together to present the final solution.

###### B.4 Local Input Price Neutrality

As our first intermediate result, we show that given the availability of policy instruments to control prices of domestically-produced goods, home's income Yi is neutral to domestic factor prices, wi and Pi,0, as formalized by the following lemma:

- Lemma 1. Country i's income is invariant to changes in its local factor prices, i.e., local wage rates and


extraction price of energy, wi and Pii,0,

∂Yi (.) ∂Pii,0

∂Yi (.) ∂wi

= 0 (B.19)

=

The proofs of Lemma 1 and subsequent lemmas are provided in Appendix B.9. Lemma 1 does not require the policy choice to be at the optimum, nor does it require the government to control the prices of imported goods. Instead, it merely follows from producers' cost minimization, as reflected by Shepard's lemma and Hotelling's lemma, and market clearing conditions. Furthermore, for Lemma 1 to hold, it is not necessary for country i's government to control all policy variables in the reformulated problem, Pi. It suffices that the government can regulate the consumer prices of all domesticallyproduced goods, P ̃in,k n,k ∈ Pi.

In addition, following Assumption A1, we can solve the first-order conditions disregarding the local welfare effects due to policy-induced changes in foreign wages, w−i ≡ [wn]n̸=i, and foreign wage-to-income ratios [wn/En]n̸=i. These effects correspond to:

∂Yi (.) ∂w−i

∂Yi (.) ∂C−i

∂D−i (.) ∂w−i

+

∂w−i

∂zn (.) ∂wn

∂P ̃ −δi ∑

n̸=i

∂wn

∂P ̃ ≈ 0, (B.20)

where function D−i is the Marshalian demand function reformulated to include foreign wages as an explicit input. In particular, Dn wn, P ̃n ≡ Dn En, P ̃n = Dn υ1

wnL ̄n, P ̃n , where υn is the share of wage payments to total income, which (invoking A1) is invariant to Pi.

n

###### B.5 Optimal Local Prices

We use the term "local prices" to refer to country i's consumer prices (for domestic or imported varieties) P ̃ i = [P ̃ni,k]n,k and carbon taxes τi = [τi,k]k̸=0. Invoking Assumption A1 (the expression shown by Equation B.20) and applying Lemma 1, the generic F.O.C. (described by Equations B.16-B.17-B.18)

w.r.t. a local price instrument, P ̃ ∈ P ̃ i, P ̃ i,0, τi , reduces to:58

∂Ci,0 ∂P ̃

∂P−i,0 ∂P ̃

∂Yi (.) ∂P ̃

∂Vi (.) ∂P ̃

∂Vi (.) ∂Ei

∂Yi (.) ∂Ci

∂Yi (.) ∂Ci,0

∂Yi (.) ∂Zi

∂Yi (.) ∂P−i,0

∂Ci ∂P ̃

∂Zi ∂P ̃

+

+

+

+

+

∂Ei/∂P ̃ − δi

∂Q−i ∂P ̃

∂P−i,0 ∂P ̃

∂zn (.) ∂P−i,0

∂Zi ∂P ̃

###### + ∑

Qn = 0

1 + z−i

n̸=i

Appealing to Roy's identity and Shephard's lemma, it follows that for any local price P ̃ ∈ P ̃ i, P ̃ i,0, τi , the mechanical gains from revenue generation, ∂V∂Ei(.)

∂Yi(.)

∂P ̃ , are exactly offset by a proportional loss to

i

consumer surplus due to higher prices, ∂V∂iP ̃(.). For instance, consider the imported price of industry k from origin j, P ̃ = P ̃ji,k. When country i's government raises P ̃ji,k, i's income increases proportional to

its imported quantity ∂∂YP ̃i(.)

= Cji,k, whereas Roy's identity implies ∂∂VP ̃i(.)

= −∂V∂Ei(i.) × Cji,k. Together,

ji,k

ji,k

∂Vi(.) ∂P ̃ji,k + ∂V∂Ei(.)

∂Yi(.) ∂P ̃ji,k = 0.

i

- Lemma 2. For any local price instrument, P ̃ ∈ P ̃ i, P ̃ i,0, τi ,


∂Vi (.) ∂Ei

∂Yi (.) ∂P ̃

∂Vi (.) ∂P ̃ consumer price effect

= 0 (B.21)

+

direct income effect

Lemma 2 indicates that the "consumer price effect" in the F.O.C. described by Equations B.16-

- B.17-B.18 exactly offsets the "direct income effect." This result reduces the F.O.C. w.r.t. local prices to:


∂Ci,0 ∂P ̃

∂Yi (.) ∂Ci

∂Yi (.) ∂Ci,0

∂Yi (.) ∂Zi

∂Yi (.) ∂P−i,0

∂Ci ∂P ̃

∂Zi ∂P ̃

+

+

+

∂Q−i ∂P ̃

∂zn (.) ∂P ̃

∂zn (.) ∂wn

∂wn ∂P ̃

∂Zi ∂P ̃

−δ ̃i

###### + ∑

Qn = 0

1 + z−i

+

n̸=i

−1

where (recall that) δ ̃i ≡ δi ∂V∂Ei(.)

.

i

The next step is to expand and simplify the remaining terms in the above equation. We begin with the terms ∂Y∂Zi(.)

and δ ̃iz−i ∂Q−i

∂P ̃ :

i

1. Under A1, local prices influence foreign output only through changes to local consumption of

foreign varieties.59 Applying the chain rule to Q−i = Q−i (.), we get:

∂Q−i ∂P ̃

∂Q−i (.) ∂Ci

∂Ci ∂P ̃

= δ ̃iz−i

δ ̃iz−i

where ∂Q−i(.)

∂Ci is a matrix that stacks the partial derivative of the output function Qn,k (.), defined by Equation B.11 for foreign countries n ̸= i w.r.t. their exports to home country i.

- 58 Note that local prices do not directly affect foreign consumption. Therefore, ∂Y∂iC(.) ∂∂CP ̃ reduces to ∂Y∂Ci(.)

i

∂Ci ∂P ̃ + ∂∂YCi(.)

i,0

∂Ci,0 ∂P ̃ for P ̃ ∈ P ̃ i, τi .

- 59 If we were not to invoke A1, we would also need to track changes in foreign consumption quantities via alterations


∂P ̃ = ∂D−i(.)

∂P ̃ + ∂D−i(.)

∂E−i

of foreign income levels. Specifically, ∂C−i

∂P ̃ = 0, where the first term on the right-hand side is zero by construction, and the second term is zero by invoking A1.

∂E−i

2. An increase in local emissions raises country i's income proportional to its local carbon taxes: ∂Yi (.) ∂Zi

###### = τi

Using Lemma 2 and the above two expressions, the first-order condition w.r.t. local price, P ̃ ∈

P ̃ i, P ̃ i,0, τi , can be simplified as follows:

∂Q−i (.) ∂Ci

∂Yi (.) ∂Ci − δ ̃iz−i

∂Ci ∂P ̃

∂Zi ∂P ̃

+ τi − δ ̃i1

∂Ci,0 ∂P ̃

∂Yi (.) ∂P−i,0 −δ ̃i ∑

∂zn (.) ∂P−i,0

∂Yi (.) ∂Ci,0

Qn

+

+

n̸=i

∂P−i,0 ∂P ̃

= 0 (B.22)

The trick to further simplifying the above equation is to represent ∂P−i,0

∂P ̃ in terms of ∂∂CPi ̃,0 and merge the energy price effects with the domestic demand effects. The following lemma enables this step.

- Lemma. (E1) The term consisting of foreign energy price effects in Equation B.22 can be represented in terms of local demand effects as


∂Yi (.) ∂P−i,0 −δ ̃i ∑

∂zn (.) ∂P−i,0

Qn

n̸=i

∂P−i,0 ∂P ̃

∂Ci,0 ∂P ̃

,

= −Ωi,0P0

where Ωi,0 is an N × 1 vector whose element j is ωji,0 = ∑n̸=i ψ ̃nj(i,0)ρni,0 + δ ̃i ∑l̸=i ∑n̸=i ψ ̃l(ij,0)ρln,0 P ̃ζn

. Here, ψ ̃nj(i,0) ≡ 1−φnφn ψnj(i,0)YYn,0

n,0

represents backward linkages in the energy sector, where ψnj(i,0)is entry (n, j) of matrix

j,0



  .

φj 1 − φj

ρnl,0ε(njll,0,0)

Ψ(i,0) ≡ inv

IN − n̸=i ∑

l̸=i

n,j

Using Lemma E1, the F.O.C. can be written as:

∂Q−i (.) ∂Ci

∂Yi (.) ∂Ci − δ ̃iz−i

∂Ci ∂P ̃

∂Zi ∂P ̃

+ τi − δ ̃i1

∂Ci,0 ∂P ̃

∂Yi (.) ∂Ci,0 − Ωi,0P0

###### = 0

+

(B.23)

Note that B.23 represents a system of equations, each with respect to a local policy instrument P ̃ ∈

P ̃ i, P ̃ i,0, τi . This system can be expressed in matrix form as XA = 0, where X stacks the coefficients and A stacks the GE derivatives, ∂∂CP ̃i , ∂∂ZP ̃i , ∂∂CPi ̃,0 . Provided that the matrix of GE derivatives,

- A, is invertible, the system's solution reduces to solving three independent sub-problems that set the coefficients to zero: 


τi − δ ̃i1 = 0 (a)



∂Ci − δ ̃iz−i ∂Q−i(.)

∂Yi(.)

(B.24)

∂Ci = 0 (b)



∂Yi(.) ∂Ci,0 − Ωi,0P0 = 0 (c)

Hence, we are able to characterize optimal local prices (and corresponding taxes) without having to calculate the complex GE elasticities ∂∂CP ̃i , ∂∂CPi ̃,0,∂∂ZP ̃i . Sub-problem (a) determines the optimal local

carbon taxes; sub-problem (b) pins down import tariffs and production subsidies on final goods; and, sub-problem (c) pins down the import tariffs and production subsidies on energy. To see this, note that:

∂Q−i (.) ∂Ci

∂Yi (.) ∂Ci

∂Yi (.) ∂Ci,0

###### = δ ̃i ∑

= P ̃ i,0 − Pi,0 , δ ̃iz−i

= P ̃ i − Pi ,

vnPni,

n̸=i

where (recall that) vn = [vn,k]k̸=0 with vn,k = Zn,k/Yn,k as emission per dollar of output in country n−industry k. In an expanded format, we could equivalently write Equation B.23 as:

∂Cii,k ∂P ̃

∂Cni,k ∂P ̃

P ̃ni,k − 1 + δ ̃ivn,k Pni,k

P ̃ii,k − Pii,k

###### ∑

###### + ∑

###### ∑

n̸=i

k̸=0

k̸=0

∂Zi,k ∂P ̃

∂Cii,0 ∂P ̃

∂Cni,0 ∂P ̃

τi,k − δ ̃i

P ̃ii,0 − Pii,0

P ̃ni,0 − (1 + ωni,0) Pni,0

###### + ∑

###### +∑

= 0 (B.25)

n̸=i

k

in conjunction with the solution to the sub-problems, Equation B.24, that are as follows in an expanded format:



τi,k − δ ̃i = 0, k > 0 (1) local carbon taxes P ̃ii,k − Pii,k = 0, k > 0 (b1) prod. tax on final goods P ̃ni,k − 1 + δ ̃ivn,k Pni,k = 0, n ̸= i, k > 0 (b2) import taxes on final goods P ̃ii,0 − Pii,0 = 0 (c1) prod. tax on energy P ̃ni,0 − (1 + ωni,0) Pni,0, n ̸= i (c2) import taxes on energy



(B.26)



where the labels in front of each line describe the tax instrument that corresponds to each sub-problem.

Before deriving the optimal export prices, we present an envelope result to simplify the upcoming derivation. As previously noted, the sub-problems characterized by Equation (B.24) (or their expanded format in Equation B.26) eliminate the need to characterize the GE elasticities of local demand and emissions with respect to local price instruments. Based on the same logic, if these sub-problems are satisfied, they eliminate the need to characterize the GE elasticities with respect to export price instruments. In other words, the conditions for optimality with respect to local prices, as defined by Equation B.24, allow us to disregard the GE effects of export prices on local variables. The following lemma formalizes this result:

- Lemma 3. [Envelope result] The optimal local prices are the solution to the three sub-problems listed in Equa-


- tion (B.24). Consequently, the following is satisfied for any policy instrument P ̃ ∈ Pi, i.e., both local price and export price instruments, provided that the policy choice is at the optimum Pi∗:


∂Q−i (.) ∂Ci

∂Yi (.) ∂Ci − δ ̃iz−i

∂Zi ∂P ̃

∂Ci ∂P ̃

+ τi − δ ̃i1

∂Ci,0 ∂P ̃

∂Yi (.) ∂Ci,0 − Ωi,0P0

###### = 0

+

###### B.6 Optimal Export Prices

The first-order condition w.r.t. any of country i's export price instrument, P ̃ ∈ P ̃ in n̸=i, can be written as:

∂P−i,0 ∂P ̃

∂Yi (.) ∂P ̃

∂Yi (.) ∂C

∂Yi (.) ∂Zi

∂Yi (.) ∂P−i,0

∂Vi (.) ∂Ei

∂C ∂P ̃

∂Zi ∂P ̃

+

+

+

∂Ei/∂P ̃ −δi

∂Q−i ∂P ̃

∂P−i,0 ∂P ̃

∂zn (.) ∂P ̃

∂zn (.) ∂P−i,0

∂Zi ∂P ̃

###### + ∑

+ z−i

+

n̸=i

Qn = 0,

where (recall that) C ≡ [Ci,C−i,Ci,0,C−i,0] and ∂V∂iP ̃(.) drops out because export prices do not explicitly enter the indirect utility function.

Consider any of country i's export prices in a given foreign country n ̸= i, P ̃ ∈ P ̃ in = [P ̃in,k]k. Invoking Assumption A1, the impact of P ̃ via changes that it induces to wages and income in all foreign countries can be treated as negligible (up to Walras's law). Therefore, P ̃ influences demand quantities around the world only through two channels: (i) directly, in foreign country n through the matrix of price elasticities of country n's Marshallian demand, Din (.); and (ii) indirectly, in the home country i through GE effects on home's income, Yi. Additionally, P ̃ influences global emissions, and the previous comment applies to the extent that the emission levels across countries scale up by their demand quantities. Consequently, for any of country i's export prices in country n ̸= i, P ̃ ∈ P ̃ in = [P ̃in,k]k, we can reorganize the first-order condition as:

∂Q−i (.) ∂Ci

∂Yi (.) ∂P ̃

∂Yi (.) ∂Cin

∂Din (.) ∂P ̃

∂Yi (.) ∂Ci − δ ̃iz−i

∂Ci ∂P ̃

+

+

∂Qj (.) ∂Cjn

∂Djn (.) ∂P ̃

∂zn (.) ∂P ̃

∂Zi ∂P ̃

Qn −δ ̃i ∑

+ τi − δ ̃i1

+1 P ̃ = P ̃in,0

zj

j̸=i

∂Ci,0 ∂P ̃

∂P−i,0 ∂P ̃

∂Yi (.) ∂P−i,0 −δ ̃i ∑

∂zn (.) ∂P−i,0

∂Yi (.) ∂Ci,0

= 0 (B.27)

Qn

+

+

n̸=i

We provide an analog of Lemma E1 for the case of export price instruments, which allows us to absorb the last line in the above equation into the terms appearing in the first two lines:

- Lemma. (E2) The term consisting of foreign energy price effects in Equation B.27 can be represented in terms of local demand effects as:


∂Yi (.) ∂P−i,0 −δ ̃i ∑

∂zn (.) ∂P−i,0

Qn

n̸=i

∂P−i,0 ∂P ̃

= −Ωi,0P0

where Ωi,0 is already defined in Lemma E1.

∂Ci,0 ∂P ̃in,k

+ 1 P ̃ = P ̃in,0

∂Dn,0 (.) ∂P ̃in,0

,

Using Lemma E2, we can rewrite the F.O.C. w.r.t. an export price instrument, P ̃ ∈ P ̃ in, as

∂Q−i (.) ∂Ci

∂Yi (.) ∂P ̃

∂Yi (.) ∂Cin

∂Din (.) ∂P ̃

∂Yi (.) ∂Ci − δ ̃iz−i

∂Ci ∂P ̃

+

+

∂Qj (.) ∂Cjn

∂Djn (.) ∂P ̃

∂zn (.) ∂P ̃

∂Zi ∂P ̃

Qn −δ ̃i ∑

+ τi − δ ̃i1

+1 P ̃ = P ̃in,0

zj

j̸=i

∂Ci,0

∂Ci,0 ∂P ̃

∂Dn,0 (.) ∂P ̃

∂Yi (.) ∂Ci,0

+ 1 P ̃ = P ̃in,0

= 0 (B.28)

∂P ̃ − Ωi,0P0

+

Invoking the envelope result (Lemma 3), the following must equal zero at the optimum,

∂Q−i (.) ∂Ci

∂Yi (.) ∂Ci − δ ̃iz−i

∂Ci ∂P ̃

+ τi − δ ̃i1

∂Zi ∂P ̃

+

∂Yi (.) ∂Ci,0 − Ωi,0P0

∂Ci,0 ∂P ̃

###### = 0

Therefore, the first-order conditions w.r.t. export prices of final goods P ̃ = P ̃ni,k (for all n ̸= i, k > 0) and energy P ̃ni,0 (for all n ̸= i) reduce to:60

 

∂P ̃ni,k − δ ̃i ∑j̸=i zj ∂∂QCj(.)

∂Djn(.)

∂Din(.)

∂Yi(.) ∂P ̃ni,k + ∂∂YCi(.)

∂P ̃ni,k = 0, (k > 0) (d)

in

jn

(B.29)

Qn − Ωi,0P0∂D∂P ̃n,0(.)

∂Din(.)

∂Yi(.) ∂P ̃in,0 + ∂∂YCi(.)

∂P ̃in,0 + ∂∂zP ̃n(.)



= 0, (k = 0) (e)

in

in,0

in,0

(General Version of) Proposition 1. Country i's unilaterally optimal policy can be obtained by solving the five sub-problems (a), (b), (c), (d), and (e) listed by Equations B.24 and B.29. Solving these sub-problems involve taking partial derivatives of known functions w.r.t. to their arguments, without specifying complex general equilibrium derivatives.

Note that for simplicity in exposition, Proposition 1 in the main text assumes producer prices of energy do not react to policy. In that case, sub-problem (c) in Equation B.24 reduces to P ̃ i,0 − Pi,0 = 0; and sub-problem (e) in Equation B.29 simplifies as Ωi,0 collapses to zero. Proposition 1 in the main text bundles the resulting expressions into three sub-problems that correspond to local carbon taxes, import prices, and export prices.

Next, we can use the definition of function Yi (.), as described by Equation B.14, and invoke Shep-

herd's lemma in the case of energy exports to characterize ∂Y∂iP ̃(.), which represents the mechanical revenue gains from policy.

- Lemma. (E3) The direct effect of export prices on income equals:


∂Yi (.) ∂P ̃in,k

= Cin,k, for k ̸= 0;

∂Yi (.) ∂P ̃in,0

= (1 + Λin,0) Cin,0,

where Λin,0 is the share of energy exports that are reimported via final good trade.61

Using Lemma E3 and noting that zj,g ∂∂QCj,k(.)

= vj,gPjn,g,62 we can write the first-order condition w.r.t. non-energy and energy export prices as:

jn,k

∂Din,g (.)

∂Djn,g (.) ∂P ̃in,k

P ̃in,g − Pin,g

∂P ̃in,k − ∑

###### ∑

Cin,k +∑

= 0 (B.30)

vj,gPjn,g

g

g

j̸=i

∂Djn,0 (.) ∂P ̃in,0

∂Din,0 (.) ∂P ̃in,0

ζn Pn,0

Cin,0 + P ̃in,0 − Pin,0

###### + ∑

1 + Λin,0 +

= 0 (B.31)

ωji,0Pj,0

j̸=i

- 60 Note that the term δ ̃i ∑j̸=i zj ∂∂QCj(.)


∂Djn(.)

∂P ̃ does not appear in the equation for the energy price instrument. This is because, in our notation, households consume energy through their purchases from a fictitious industry k0 ∈ {1,..., K} that converts the energy input bundle to a final good without generating any value added.

jn

- 61Specifically, Λin,0 = ∑k λinP,0 ̃ αn,kPni,kCni,k

in,0Cin,0 which can be shown to be also equal to Λin,0 = ∑k∑αn,kYn,kρni,k

k αn,kYn,k , where ρni,k = Pni,kCni,k/Yn,k denotes the sales share to country i out of total output Yn,k.

- 62 Specifically, zj,g ∂∂QCj,k(.)


= zj,gdjn,g = Pzj,gQj,g

jj,gQj,g Pjn,g = vj,gPjn,g.

jn,k

where ζn is the partial elasticity of energy input demand (equivalently, emission) w.r.t. the energy input price,

Zn,g Zn

∂ ln (∑k Zn,k (.)) ∂ ln P ̃n,0

= −ς(1−αn), where αn ≡ ∑

ζn ≡

αn,g

g̸=0

Lastly, using our short-hand notation for Marshallian demand elasticities, ∂ln∂lnDPjn ̃,g(.)

∼ ε(jnin,g,k), and country n's expenditure shares ein,g = P ̃in,gCin,g/En, we can write the first-order conditions more compactly as

in,k

[final goods] ein,k +∑

g

Pin,g P ̃in,g

1 −

ζn Pn,0

[energy] 1 + Λin,0 +

ein,0 + 1 −

ein,gε(inin,g,k) − ∑

###### ∑

g

j̸=i

vj,gejn,gε(jnin,g,k) = 0 (B.32)

Pin,0 P ̃in,0

ωji,0ejn,0ε(jnin,0,0) = 0 (B.33)

ein,0εin,0 + ∑

j̸=i

###### B.7 Proposition 2: Optimal Tax Formulas

Equations B.26, B.32, and B.33 characterize the optimal local carbon tax as well as the optimal consumerto-producer price wedges for all the goods associated with country i. From these, we can recover the corresponding tax rates as:

P ̃ji,k Pji,k

1 + tji,k =

(j ̸= i),

P ̃ii,k Pii,k

1 1 + si,k

,

=

1 1 + xij,k

P ̃ij,k Pij,k

P ̃ii,k Pii,k

/

.

=

where, for completeness, we allow for si,k to denote the production subsidy, which, unlike export subsidies, is applied irrespective of the final location of sale. We introduce si,k as an explicit policy instrument in our derivation to demonstrate its redundancy—as claimed in the main text.

From the optimal local price wedges, we can deduce that the optimal policy consists of a uniform carbon tax that is not supplemented with any production tax or subsidy (i.e., si∗,k = si∗,0 = 0),

τi∗,k ∼ τi∗ = δ ̃i (B.34)

and import tariffs that are carbon border adjustments for non-energy imports and the sum of termsof-trade- and climate-related restrictions for energy imports, encompassed in elasticity ω:

t∗

ni,k = τi∗vn,k t∗ni,0 = ωni,0. (B.35)

Here, ωni,0 is a composite general equilibrium climate-adjusted inverse export supply elasticity that can be decomposed as follows:

ζι P ̃ι,0 climate related

ψ ̃ι(ni,0)ριi,0

ψ ̃l(in,0)ρlι,0

###### + δ ̃i ∑

ωni,0 ≡ ∑

###### ∑

ι̸=i

ι̸=i

l̸=i

terms of trade

The above formulas hold irrespective of the underlying consumption utility aggregator. The optimal export tax can be recovered non-parametrically inverting and solving the system of Equations B.32 and B.33 market by market. As a practical step, we first derive the optimal export tax formula in the semi-parametric case where preferences are additively separable across industries and generalized

separable within industries. In this case, ε(ijij,k,g) = 0 if g ̸= k. Moreover, per Cournot aggregation, − 1 − λij,k ε(njij,,kk) = λij,k 1 + εij,k , where λij,k denotes the within industry expenditure share. Plugging these relationships into the F.O.C.s presented above, yields the following optimal export subsidy formulas for non-energy and energy goods:

1 + εij,k

###### εij,k ∑

###### 1 + x∗

ij,k =

n̸=i

1 + εij,0

###### εij,0 ∑

1 + xij∗,0 =

n̸=i

1 + εij,k

1 + δ ̃iνn,k λ` nj,k ∼

###### εij,k ∑

l̸=i

ζj P ̃j,0

1 + t∗ni,0 λ` nj,0 − Λij,0 + τi∗

ni,k λ` nj,k (B.36)

1 + t∗

1 εij,0

(B.37)

where εij,k ∼ ε(ijij,k,k) denotes the own-price elasticity of demand and λ` nj,k ≡ λnj,k/ 1 − λij,k , which satisfies the adding up property, ∑l̸=i λ` nj,k = 1. The above formulas describe the optimal policy nonparametrically in terms of generic final and input demand elasticity values. In the CES case, these elasticity values are given by εij,k = −σk + (σk − 1) λij,k, implying the following formulas for export subsidies on final goods k > 0:

[CES preferences] 1 + x∗

ij,k =

σk − 1 1 + (σk − 1) 1 − λij,k

###### ∑

l̸=i

1 + t∗

ni,k λnj,k .

The expression for energy goods (k = 0) is similar under a CES aggregator, but it includes an additional term corresponding to the second term on the right-hand side of Equation B.37.

Non-Separable Preferences. Previously, we derived the optimal export tax formula for the case where preferences are additively separable across industries. Here, we provide the formula for the general case. Appealing to the aggregation property, eij,k + ∑n,g enj,gε(njij,,gk) = 0, of Marshallian demand functions, we can express the first-order condition w.r.t. the export price P ̃ij,k, as follows:

1 + δ ̃iνn,g enj,gε(njij,,gk) = 0,

1+xij∗,g eij,gε(ijij,g,k) − ∑

###### ∑

###### − ∑

g̸=0

g̸=0

n̸=i

Noting that t∗ni,g = δ ̃iνn,g, we can re-write the above equation in matrix notation as





  

  

  

  

eij,1ε(ijij,1,1) ... eij,Kε(ijij,K,1)

1 + xij∗,1 . 1 + xij∗,K

1 + t1∗j . 1 + t∗Nj

... . eij,1ε(ijij,1,K) ... eij,Kε(ijij,K,K)

,

###### = − E1j · · · ENj

 

 

.

E−ij

1+xij∗

1+ti∗

Eij

where Enj is defined analogous to Eij for all n and t∗nj = t∗nj,k

is a K × 1 vector consisting of optimal

k

tariffs on origin n varieties. Since | eij,kε(ijij,k,k) | − ∑k̸=j eij,gε(ijij,g,k) = eij,k + ∑n̸=i ∑g eij,gε(njij,,gk) > 0, then Eij is strict diagonally dominant. Hence, given the Lèvy-Desplanques Theorem, Eij is invertible (Horn and Johnson (2012)) and the above system recovers 1 + xij∗ as

###### 1 + xij∗ = −E−1

ij E−ij (1 + ti∗) . (B.38)

###### B.8 Small Open Economy + CES-Cobb-Douglas

The small open economy case of our formulas can be helpful for obtaining intuition. Consider a small open economy for which ρni,k ≈ λin,k ≈ 0. In addition, suppose preferences have a CES-CobbDouglas parametrization. In that case, the optimal policy schedule becomes:



τi∗,k = τi∗ = δ ̃i/P ̃i,0 [carbon tax] t∗ni,k = δ ̃ivn,k t∗ni,0 = 0 [import tax] 1 + xin∗ ,k = σkσ−1



1 + δ ̃i ∑n̸=i vn,kλnj,k [export subsidy (non-energy)] 1 + xin∗ ,0 = σ0σ−1

k



δ ̃i/P ̃n,0 [export subsidy (energy)]

+ ζσn

0

0

where, if the non-energy production function is also CES, then ζn = −ς (1 − αn), where αn = ∑ αn,g ZZn,g

n

is the average carbon cost share in country n.

###### B.9 Proof of Intermediate Lemmas

- Proof of Lemma 1. Our goal is to prove the neutrality of local factor prices, ∂Y∂wi(.)


= ∂∂YPi(.)

= 0. We begin with the neutrality of local wages. According to Shephard's lemma, the derivative of the unit price of non-energy goods with respect to the wage rate (the price of labor inputs) is

ii,0

i

∂ lnPin,k (.) ∂ ln wi

###### = 1 − αi,k,

where 1 − αi,k is the cost share of labor in production and Pin,k(·) is the function that maps input prices to the output price (Equation B.8), according to cost minimization. For energy goods, we have a similar expression:

∂ lnPi,0 (.) ∂ ln wi

###### = 1 − φi

where φi ∼ αi,0 denotes the cost share of energy reserves (i.e., non-labor inputs) in energy production and Pi,0 (.) is given by Equation (B.10). Taking these into account, we compute the derivative of the function Yi (.), according to Equation B.14, with respect to argument wi:

∂Yi (.) ∂wi

∂Pin (.) ∂wi

∂ lnPin (.) ∂ ln wi

Pin wi

= Li −∑

Cin = Li −∑

Cin

n

n

1

(1−αi)PinCin = Li −∑

###### ∑

###### wi ∑

Lin,k

= Li −

n

n

k

where Li is the total labor supply in country i, Pin = Pin (.) is the vector of producer prices, and Cin is the vector of corresponding consumption quantities. The last line uses (1 − φi) Pin,kCin = wiLin,k, where Lin,k denotes the demand for labor services embedded in variety in, k. Since the total labor demand ∑k ∑n Lin,k equals the total labor supply Li, due to the labor market clearing condition, we conclude:

∂Yi (.) ∂wi

###### = 0

For the case of energy prices, we apply Hotelling's lemma, which states:

∂Πi (Pi,0, wi) ∂Pi,0

= Qi,0,

where Πi(Pii,0, wi) is the function describing the surplus paid to energy reserve based on profit maximization, and Qi,0 is total output of the local energy sector. Taking the derivative of Yi(·) with respect to Pii,0, we obtain:

∂Πi (.)

∂Yi (.) ∂Pii,0

d ̄in,0Cin,0 = Qi,0 −∑

d ̄in,0Cin,0.

∂Pii,0 −∑

=

n

n

The energy market clearing condition requires that the total supply and demand of energy goods are equal: Qi,0 = ∑n d ̄in,0Cin,0. Therefore, we find:

∂Yi(·) ∂Pii,0

###### = 0.

| |
|---|


- Proof of Lemma 2. Our goal is to show that for any local price P ̃ ∈ P ̃ i, τi , the following holds:


∂Yi (.) ∂P ̃

∂Vi (.) ∂P ̃

∂Vi (.) ∂Ei

###### = 0

+

We begin with the case of non-energy consumer prices P ̃ i. Using Roy's identity, the direct consumer price effect equals:

∂Vi(·) ∂P ̃ni,k

∂Vi(·) ∂Ei

Cni,k,

= −

Differentiating the income function Yi(·) with respect to P ̃ni,k yields ∂∂YP ̃i(·)

= Cni,k. Combining these results:

ni,k

∂Vi (.) ∂Ei

∂Yi (.) ∂P ̃ni,k

∂Vi (.) ∂P ̃ni,k

∂Vi (.) ∂Ei

(Cni,k − Cni,k) = 0

+

=

Next, consider the case of local energy consumer prices. Using Roy's identity:

∂Vi (.) ∂P ̃ni,0

∂Vi (.) ∂Ei

Cni(H,0),

= −

where Cni(H,0) denotes household consumption of energy. Our notation in the main text traces households' consumption of energy via use of a fictitious industry that converts energy inputs to a non-

tradeable final good without creating any value added. We, however, work with a more explicit notation here to track how energy prices affect the prices of final goods. By Shephard's lemma:

∂ lnPin,k (.) ∂ ln P ̃i,0k

= αi,k,

∂ lnP ̃i,0 (.) ∂ ln P ̃ni,0

= λin,0.

Differentiating Yi (.) with respect to P ̃ni,0 and applying the above relationships, yields:

∂Yi (.) ∂P ̃ni,0

where Cni(P,0) = P ̃1

ni,0

∂ P ̃i,0 + τi,k

∂P ̃i,0 (.) ∂P ̃ni,0

∂Pin,k (.) ∂P ̃i,0k

= Cni,0 −∑

###### ∑

Cin,k

∂P ̃i,0

n

k̸=0

######  

  Cin,k

Cni(P,0) Zi

Zin,k Cin,k

Pin,k P ̃ni,0

Cin,k = Cni,0 −∑

###### ∑

###### = Cni,0 −∑

###### ∑

αi,kλin,0

n

n

k̸=0

k̸=0

Zin,k Zi

Cni(H,0) +Cni(P,0) 1−∑

= Cni(H,0),

###### ∑

n

k̸=0

λin,0 ∑n ∑k̸=0 [αi,kPin,kCin,k] denotes the demand for energy as a production input.

Combining with Roy's identity:

∂Vi (.) ∂P ̃ni,0

∂Yi (.) ∂P ̃ni,0

∂Vi (.) ∂Ei

+

∂Vi (.) ∂Ei

=

Cni(H,0) − Cni(H,0) = 0

Finally, consider the case of local carbon taxes, τi. Since the carbon tax τi,k does not explicitly enter the indirect utility function: ∂∂τVi(.)

= 0. Differentiating Yi(·) with respect to τi,k yields:

i,k

∂ P ̃i,0 + τi,k

∂Pin,k (.) ∂P ̃i,0k

∂Yi (.) ∂τi

= Zi −∑

###### ∑

Cin,k

∂P ̃i,0k

n

k̸=0

Zin,k

Cin,k ×1 Cin,k = Zi −∑

###### ∑

= Zi −∑

###### ∑

n

n

k̸=0

k̸=0

So, altogether, we get the intended result for local carbon taxes:

Zin,k = 0,

∂Vi (.) ∂τi,k

∂Vi (.) ∂Ei

∂Yi (.) ∂τi,k

###### = 0.

+

| |
|---|


- Proof of Lemma E1. The proof proceeds in two steps: The first step characterizes the change in global


energy output, ∂∂QP ̃0, in terms of local demand changes, ∂∂CP ̃i , using the Implicit Function Theorem. Note that country n's energy output is Qn,0 = Qn,0 (.), where the function Qn,0 (.) is defined as

Qn,0(Cn1,0,...,CnN,0) ≡ ∑

dnι,0Cnι,0,

ι

where Cnι,0 = Dnι,0 Eι,0, P ̃ ι,0 . Also, following Equation (B.10) producer prices of energy are Pnι,0 = Pnι,0 (.) where the function Pnι,0 (.) is now defined as

φn 1−φn

Pnι,0 (wn, Qn,0) ≡ p ̄nι,0 wn Q

n . Considering these functions, we can apply the chain rule to obtain:

∂ ln Qn,0 ∂P ̃

∂ lnQn,0 (.) ∂ ln Cni,0

∂ ln Cni,0 ∂P ̃

=

∂ lnPlj (.) ∂ ln Ql,0

∂ lnDnj,0 (.) ∂ ln P ̃lj,0

∂ lnQn,0 (.) ∂ ln Cnj,0

∂ ln Ql,0 ∂P ̃

###### + ∑

###### ∑

,

j̸=i

l̸=i

= ρni,0 and ∂∂lnPlnQlj(.)

The above expression can be further simplified by noting that ∂∂lnQlnCn,0(.)

###### = 1−φlφ

. With these simplifications and leveraging our compact notation for Marshallian demand elasticities,

ni,0

l,0

l

∂ lnDnj,0(.)

∂lnP ̃lj,0 ∼ ε(njlj,0,0), the above equation can be rewritten in vector notation as:

∂ ln Q ∂P ̃

∂ ln Ci ∂P ̃

∂ ln Q ∂P ̃

φl 1 − φl

ρnj,0ε(njlj,0,0)

###### + ∑

,

= ρi,0

j̸=i

n,l Υ(i,0)

where Υ(i,0) is an N × N square matrix. Inverting the above systems yields the following expression:

∂ ln Cji,0 ∂ ln P ̃

∂ ln Qn,0 ∂ ln P ̃

ψnj(i,0)ρji,0

###### = ∑

, (B.39)

j̸=i

−1

where ψjn is the (n, j) entry of the matrix Ψ(i,0) ≡ I − Υ(i,0)

and measures forward linkages from local energy demand to foreign energy prices.

∂P ̃ and δ ̃i ∑n̸=i ∂∂Pzn−(i.,0) ∂P∂−P ̃i,0 Qn in terms of ∂∂CP ̃i . Considering ∂∂PYi(.)

∂P−i,0

In the second step, we use Equation B.39, to characterize ∂∂PYi(.)

−i,0

= C−ii,0, we get

−i,0

∂P−i,0 ∂P ̃

∂ lnPn,0 (.) ∂ ln Qn,0

∂ ln Qn,0 ∂ ln P ̃

∂Pn,0 ∂P ̃

∂Yi (.) ∂P−i,0

###### = ∑

###### = ∑

Cni,0

Pn,0Cni,0

n̸=i

n̸=i

∂ ln Cji,0 ∂P ̃

φn 1 − φn

ψnj(i,0)ρji,0

###### = ∑

###### ∑

Pn,0Cni,0

n̸=i

j̸=i

∂Cji,0 ∂P ̃

Yn,0 Yj,0

φn 1 − φn

ψnj(i,0)

###### =∑

###### ∑

ρni,0 Pj,0

j̸=i

n̸=i

∂Cji,0 ∂P ̃

ψ ̃nj(i,0)ρni,0 Pj,0

###### =∑

###### ∑

j̸=i

n̸=i

where ψ ̃nj(i,0) is the adjusted linkage coefficient normalized based on size and elasticity:

Yn,0 Yj,0

φn 1 − φn

ψ ̃nj(i,0) ≡

ψnj(i,0)

.

Using the same idea, we can specify the emission effects as

∂zn (.) ∂P−i,0

###### δ ̃i ∑

n̸=i

∂P−i,0 ∂P ̃

Qn = δ ̃i ∑

###### ∑

n̸=i

l̸=i

###### = δ ̃i ∑

l̸=i

###### = δ ̃i ∑

###### ∑

j̸=i

l̸=i

###### = δ ̃i ∑

###### ∑

j̸=i

l̸=i

∂P ̃n,0 (.) ∂ ln P ̃l,0

∂ ln Pl,0 ∂P ̃

∂ lnzn (.) ∂ ln P ̃n,0

Zn

∂ ln Pl,0 ∂P ̃

###### = δ ̃i ∑

###### ∑

Znςnλln,0

n̸=i

l̸=i

Yl,0

φl 1 − φl

ςn P ̃n,0

ψl(ij,0)

###### Yj,0 ∑

ρln,0

n̸=i

∂Cji,0 ∂P ̃

ςn P ̃n,0

###### ψ ̃l(ij,0) ∑

Pj,0

ρln,0

n̸=i

Pl,0Cln,0 P ̃n,0Zn

###### ∑

Znςn

n̸=i

∂Cji,0 ∂P ̃

Pj,0

∂ ln Pl,0 ∂P ̃

where ψ ̃l(ij,0) ≡ 1−φlφl ψl(ij,0)YYl,0

. Utilizing the above equations, we can merge and formulate the terms accounting for energy price effects as

j,0

∂Yi (.) ∂P−i,0 −δ ̃i ∑

∂zn (.) ∂P−i,0

Qn

n̸=i

where Ωi,0 is a N × 1 vector given by:

∂Ci,0 ∂P ̃

∂P−i,0 ∂P ̃

= −Ωi,0P0

ςn P ̃n,0

ψ ̃nj(i,0)ρni,0 +δ ̃i ∑

ψ ̃l(ij,0)ρln,0

###### Ωi,0 = ∑

###### ∑

n̸=i

n̸=i

l̸=i

j The subscript i,0 signifies that country i's government is setting all the local and export energy prices associated with location i (i.e., these price variables are pinned down by the policy choice , Pi).

| |
|---|


- Proof of Lemma E2. The proof of this lemma mirrors that of Lemma E1. Extrapolating from the proof


of Lemma E1, we can specify the change in global energy output in response to export price instrument, P ̃ as follows:

∂ ln Cji,0 ∂ ln P ̃

∂ lnDjn,0 (.) ∂ ln P ̃

∂ ln Ql,0 ∂ ln P ̃

ψl(ij,0) ρji,0

1 P ̃ = P ̃in,0

###### = ∑

+ ρjn,0

j̸=i

Here, 1 P ̃ = P ̃in,0 is an indicator variable that equals one if policy P ̃ regulates energy export prices to market n, and zero otherwise. The rationale is that, according to Assumption (A1), policy P ̃ affects energy demand only in the foreign market it targets and, indirectly, in the local market through general equilibrium income effects. Using the above equation, and following the logic outline previously under the proof of Lemma 3, we can write the foreign energy price-driven welfare effects associated with income changes as

∂P−i,0 ∂P ̃

∂ ln Qn,0 ∂ ln P ̃

∂ lnPn,0 (.) ∂ ln Qn,0

∂Pn,0 ∂P ̃

∂Yi (.) ∂P−i,0

###### = ∑

###### = ∑

Cni,0

Pn,0Cni,0

n̸=i

n̸=i

∂ lnDjn,0 (.) ∂ ln P ̃

∂ ln Cji,0 ∂P ̃

φn 1 − φn

ψnj(i,0) ρji,0

###### = ∑

###### ∑

Pn,0Cni,0

+ ρjn,0

n̸=i

j̸=i

∂Djn,0 (.) ∂ ln P ̃

∂Cji,0 ∂P ̃

Yn,0 Yj,0

φn 1 − φn

ψnj(i,0)

###### =∑

###### ∑

+ Pj,0

ρni,0 Pj,0

j̸=i

n̸=i

∂Djn,0 (.) ∂ ln P ̃

∂Cji,0 ∂P ̃

ψ ̃nj(i,0)ρni,0 Pj,0

###### =∑

###### ∑

+ Pj,0

j̸=i

n̸=i

where ψ is the forward linkage coefficient defined earlier (under the proof of Lemma 3) and ψ ̃nj(i,0) ≡

1−φn ψnj(i,0)YYn,0

φn

. Likewise, the welfare effects associated with global emissions changes can be specified

j,0

- as


∂Djn,0 (.) ∂ ln P ̃

∂Cji,0 ∂P ̃

∂P−i,0 ∂P ̃

∂zn (.) ∂P−i,0

ςn P ̃n,0

###### ψ ̃l(ij,0) ∑

###### δ ̃i ∑

Qn = δ ̃i ∑

###### ∑

Pj,0

+ Pj,0

ρln,0

n̸=i

j̸=i

n̸=i

l̸=i

Combining the above above equations, we can specify the welfare effects that channel through foreign energy prices as

∂Yi (.) ∂P−i,0

∂zn (.) ∂P−i,0

###### +δ ̃i ∑

Qn

n̸=i

∂Djn,0 (.) ∂ ln P ̃

∂Cji,0 ∂P ̃

∂P−i,0 ∂P ̃

###### = −∑

ωji,0 Pj,0

+ Pj,0

j̸=i

∂Ci,0 ∂P ̃in,k

∂Dn,0 (.) ∂P ̃in,0

+ 1 P ̃ = P ̃in,0

= −Ωi,0P0

| |
|---|


- Proof of Lemma E3. We want to show that ∂∂YP ̃i(.)


= [1 + Λin,01 (k = 0)] Cin,k. In the case of final goods (k ̸= 0), the proof follows trivially from the definition of the function Yi (.). In the case of the energy good the proof is more involved as energy export taxes are passed onto foreign producer prices for final goods, influencing the import tariff revenue from final goods. In particular,

in,k

∂ lnPn,0 (.) ∂P ̃in,0

∂Yi (.) ∂P ̃in,0

∂Pni (.) ∂ ln P ̃n,0

= Cin,0 + Cni

The second term on the right-hand side reflects the fact that a fraction of energy export taxes are passed on to domestic consumers via re-importation of the local energy content in foreign final goods.

This term can be expanded as follows using Shephard's Lemma:

More specifically,

∂ lnPni,k (.) ∂ ln P ̃n,0

= αi,0,

∂ lnPn,0 (.) ∂ ln P ̃in,0

= λin,0

∂ lnPn,0 (.) ∂P ̃in,0

∂Pni (.) ∂ ln P ̃n,0

Cni

∂ lnPni,k (.) ∂ ln P ̃n,0

Pni,k P ̃in,0

∂ lnPn,0 (.) ∂ ln P ̃in,0

###### = ∑

k̸=0

P ̃n,0Zn,k Yn,k

P ̃in,0Cin,0 P ̃n,0Zn

1 P ̃in,0

###### = ∑

Pni,kCni,k

k̸=0

λin,0 P ̃in,0

###### = ∑

Pni,kCni,kαn,k

k̸=0

Zn,k Zn

###### = ∑

Cin,0

ρni,k

k̸=0

where the term ∑k̸=0 ρni,k ZZn,k

in the last line represents the share of local energy content re-imported via the final good imports for country n, which we refer to by Λin,0:

n

Zn,k

∑k αn,kYn,kρni,k ∑k αn,kYn,k

Λin,0 ≡ ∑

.

Zn ∼

ρni,k

k̸=0

Plugging the simplified expression for price effects back into our initial expression for ∂∂YP ̃i(.)

, yields

in,0

∂Yi (.) ∂P ̃in,0

= (1 + Λin,0) Cin,0.

| |
|---|


###### C Optimal Cooperative Policies

This section characterizes optimal policy formulas for the globally first best. In this scenario, a global planner maximizes a weighted average of log national welfare values, as the global welfare, subject to the availability of lump-sum transfers. Note that the outcome of this scenario is equivalent to a Nash bargaining game with side payments.

###### C.1 First-Best: Globally Optimal Carbon Taxes

We consider a planning problem where the planner maximizes the global welfare, as the weighted average of log national welfare values, by setting prices and implementing income transfers. The planner's choice of transfers determine the share of national expenditure (πi) from global income, i.e., Ei = πiY, where Y = ∑i Yi. The optimal policy P ≡ P ̃ , τ, π consisting of consumers prices, carbon taxes, and inter-country transfers, can be obtained as the solution to following planning problem

θn lnWn, where Wn = Vn En, P ̃ n − δnZ(global)

###### P ∑

max

n

subject to equilibrium constraints and the availability of lump-sum international transfers. In particular, Ei = πiY (P, w, P0,C, Z), where

##### Y(P,w,P0,C,Z) ≡ ∑

[wiLi +Πi (wi,Pi,0)]+∑

i

i

##### P ̃i −Pi (P,w) ⊺Ci +∑

###### +∑

n,i

i

###### ∑

τi,kZi,k

k

P ̃ni,0 − Pn,0 Cni,0

The Pareto weights, θn, are exogenous policy parameters that add up to one, ∑n θn = 1. As before, let Wn = Vn (.) − δnZ(global) denote country n's climate-adjusted welfare. The first-order condition (∂W/∂P ̃ = 0) with respect to a generic policy instrument P ̃ ∈ P is

∂Vn (.) ∂En

∂Y (.) ∂P ̃

∂Y (.) ∂w

∂Y (.) ∂P0

∂Y (.) ∂C

- ∂Y (.)

- ∂Z


∂w ∂P ̃

∂P0 ∂P ̃

∂C ∂P ̃

∂Z ∂P ̃

θn Wn

###### ∑

+

+

+

+

πn

n

∂Y/∂P ̃

∂Z(global) ∂P ̃

∂Vn (.)

θn Wn

θn Wn

###### +∑

∂P ̃ − ∑

1 = 0

δn

n

n

The neutrality of inputs prices holds universally here, given that the planner sets output prices globally. Hence:

∂Y (.) ∂P0

∂Y (.) ∂w

###### = 0,

=

The above result can be shown in a virtually similar manner to Lemma 1 (Appendix B.4).

First-order Condition w.r.t. P ̃ i. The first-order condition with respect to local consumer prices in country i, P ̃ i = P ̃ni,k ∈ P ̃ , is:

∂Z(global) ∂P ̃ i

∂Y (.) ∂C

- ∂Y (.)

- ∂Z


∂Vn (.) ∂En

∂Y (.) ∂P ̃ i

∂Vi (.)

∂C ∂P ̃i

∂Z ∂P ̃

θn Wn

θn Wn

θi Wi

###### ∑

∂P ̃i − ∑

1 = 0 (C.1) Also, taking the derivative of function Y (.) with respect to P ̃i and appealing to Roy's identity, we get

+

+

+

πn

δn

n

n

∂Y (.) ∂P ̃ i

= Ci,

∂Vi (.) ∂P ̃ i

∂Vi (.) ∂Ei

###### Ci

= −

Plugging these expression back into Equation C.1, and noting thses intermediate properties:

- – δ ̃i ≡ ∂V∂Ei(i.)

−1

× δi,

- – ∂Y∂C(.) = P ̃ − P and ∂Y∂Z(.) = [τi,k]i,k ,


we can simplify the first-order condition with respect to P ̃ i as

###### ∑

n

∂Vn (.) ∂En −

θn Wn

πn

###### + ∑

###### ∑

j

k

∂Vi (.) ∂Ei

θi Wi

Ci +∑

n

πn

###### ∑

n

∂Vn (.) ∂En

θn Wn

πn

∂Vn (.) ∂En

θn Wn

∂Vn (.) ∂En

θn Wn

τj,k −∑

n

∂C ∂P ̃ i

P ̃ − P ⊺

∂Zj,k ∂P ̃ i

δ ̃n

= 0 (C.2)

First-order Condition w.r.t. τi,k and P ̃ i,0. The first-order condition w.r.t the instrument P ̃ ∈ [τi,k]k , P ̃ni,0 n which regulates local energy prices in country i is:

###### ∑

n

∂Vn (.) ∂En

θn Wn

πn

∂Y (.) ∂P ̃

∂Y (.) ∂C

∂C ∂P ̃

+

- ∂Y (.)

- ∂Z


∂Z ∂P ̃

+

∂Vi (.)

θi Wi

∂P ̃ − ∑

+

n

θn Wn

δn

∂Z ∂P ̃

1 = 0

Trivially, ∂Vi (.) /∂P ̃ = 0 since energy prices do not directly enter the consumer's indirect utility function.63 Moreover, following the logic of Lemma 2, we have

∂Y (.) ∂P ̃

= 0, ∀P ̃ ∈ [τi,k]k , P ̃ni,0 n

The proof of ∂∂τY(.)

= 0 follows trivially from that of Lemma 2. For pre-carbon-tax energy prices, the equality can be shown by invoking Shephard's lemma. In particular, cost minimization implies

i,k

- – ∂∂lnlnP ̃Pi ̃,0(.)

ni,0

= λni,0

- – ∂∂lnPlninP ̃,k(.)


= αi,k where P ̃i,0k P ̃i,0, τi,k = P ̃i,0 + τi,k.

i,0k

Using these properties, it is straightforward to show that:

∂ lnP ̃i,0k (.) ∂ ln P ̃i,0

∂ lnP ̃i,0 (.) ∂ ln P ̃ni,0

∂ lnPni,k (.) ∂ ln P ̃i,0k

Pni,k P ̃ni,0

∂Y (.) ∂P ̃ni,0

= Cni,0 − ∑

Cni,k ×

k̸=0

P ̃i,0

1 P ̃ni,0

1 P ̃ni,0

P ̃i,0k ∑

###### = 0

= Cni,0 −

[αi,kPii,kQi,k]

= Cin,0 − Ei,0λin,0

λni,0

k

∑k P ̃i,0kZi,k

Setting ∂Vi (.) /∂P ̃ = ∂Yi (.) /∂P ̃ = 0 in the first-order condition, and noting the intermediate properties,

- – δ ̃i ≡ ∂V∂Ei(i.)

−1

× δi

- – ∂Y∂C(.) = P ̃ − P and ∂Y∂Z(.) = [τi,k]i,k ,


we can further simplify the first-order condition with respect to P ̃ ∈ [τi,k]k , P ̃ni,0 n as

∂Vn (.) ∂En

∂C ∂P ̃

θn Wn

P ̃ − P ⊺

###### ∑

πn

n

∂Zj,k ∂P ̃

∂Vn (.) ∂En

∂Vn (.) ∂En

θn Wn

θn Wn

δ ̃n

###### +∑

###### ∑

###### τj,k −∑

= 0. (C.3)

πn

n

n

j

Optimal Policy Formulas. The system of equations specified by (C.2) and (C.3) reduce the optimal policy problem into three independent sub-problems:



P ̃ − P ⊺ = 0



∂Vi(.)

∂Vn(.)

∂En − Wθii

∑n πnWθn

∂Ei = 0

n



∂Vn(.)

∂En τj,k − ∑n Wθnn ∂V∂Enn(.)δ ̃n = 0

∑n πnWθn

n

- 63 As in the non-cooperative case, we could allow for direct energy consumption. In that case, the first-order condition would include an additional term


###### ∑

n

∂Vn (.) ∂En −

θn Wn

θi Wi

πn

∂Vi (.) ∂Ei

Cni(H,0),

which automatically equals zero at the optimum. So, allowing for household energy consumption is inconsequential for the optimal policy formulas presented later.

The solution to the first sub-problem also requires zero good-specific taxes—i.e., P ̃ji,k = Pji,k for all ji, k. That is, from a global standpoint, optimal production and border taxes are all zero. Without loss of generality, and for a clearer exposition, we solve the second and third sub-problems supposing preferences are homothetic, i.e., ∂∂lnVlnEn(.)

= 1. Under this assumption, and noting that πn = En/ ∑l El, we can write the second sub-problem as

n

∂ lnVi (.) ∂ ln Ei

Vi Ei

θi Wi

###### = ∑

n

∂ lnVn (.) ∂ ln En ⇒ πi =

θiVi/Wi ∑n (θnVn/Wn)

Vn En

θn Wn

πn

from which we recover the optimal income shares, πi . Based on the third sub-problem the optimal carbon τi tax is a Pigouvian tax (from a global standpoint) that internalizes the global externality of carbon emissions. Namely:

θi WVi

δ ̃i. (C.4)

###### , τi = ∑

i

πi =

∑n θnWVn

n

n

Alternative Objective Function Specification. In the above, we chose the commonly-used weighted

sum of logs as a social welfare function. We emphasize that a different welfare aggregation used by the planner may alter the globally optimal policy choice. Suppose the planner maximizes the following welfare function,

Vn Ei,P ̃n /θn θn − δZ(global);

∏

max

P ̃

n

subject to equilibrium constraints, and the availability of lump-sum international transfers, whereby Ei = πiY. In this specification, δ = ∆ (δ1,..., δN) aggregates over the country-specific climate damage parameters, with a simple sum, δ = ∑n δn, constituting a special case. Under this welfare function, the same derivation steps, as outlined before, deliver the following optimal policy formula:

Ei Y

P ̃nθn δ (C.5)

= θi, τn = ∏

πi ∼

n

and, as before, the optimal border taxes are zero. Note the two subtle differences compared to Equa-

- tion (C.4). First, the optimal carbon tax, as before, internalizes the global carbon externality, but it employs a different CPI deflator. Second, a country's income share becomes precisely equal to the weight assigned in the planner's objective function.


###### D Numerical Checks on Optimal Policy Formulas

This section evaluates the numerical accuracy and speed efficiency of our quantitative approach in solving optimal policy outcomes. In doing so, we particularly evaluate Assumption A1 which we have invoked to derive our optimal policy formulas.

Specifically, we run a number of quantitative exercises in which we solve the unilaterally optimal policy using a numerical search algorithm and compare its outcome to the one that we obtain from our own method. Specifically, for each country i we solve the unilaterally optimal taxes using the Matlab's optimization toolbox.

Define a function that takes the set of new taxes as input and delivers the change to general equilibrium variables as output. We refer to this function as RV RT;B where RT = Ii′,I′−i is the set

of new taxes in home (i) and foreign countries (−i), and B denoting the required set of data and parameters. This function is the solution of the system of equations listed in the Appendix Section G.1, which we numerically compute using the method of exact hat algebra. The numerical search algorithm maximizes country i's welfare by searching over country i's new taxes, Ii′ = tij′ ,k, xij′ ,k, τi′,k

, taking as given other countries' taxes I′−i = I−i at their status quo values.

j,k

In comparison, our own algorithm, which we refer to as the FL method, takes advantage of an additional mapping, namely RT RV;B , which takes equilibrium variables RV and required data and parameters B as input and delivers the new taxes as output. When considering the unilaterally optimal policy of country i, RT does not alter foreign taxes, I′−i = I−i, and computes home's taxes,

- Ii′ = tij′ ,k, xij′ ,k, τi′,k j,k


according to Proposition 2. Below, we compare the outcome between the numerical search algorithm and the FL method.

###### D.1 Welfare Comparisons

As a starting point, let the EU, the largest region in our sample, serve as the home country. When the EU adopts its unilaterally optimal policy, its welfare increases by 0.33% under the numerical search algorithm and by 0.32% using the FL method. This difference amounts to just 0.01 percentage points, equivalent to a 4% change in relative terms. Panel (a) of Figure A.1 illustrates these welfare outcomes across individual countries, reflecting percentage changes from the status quo to the equilibrium under the EU's unilaterally optimal policy. Furthermore, global emissions decrease by 2.18% based on numerical optimization, compared to a 2.13% reduction using the FL method. While both approaches deliver comparable levels of accuracy, our method significantly outperforms numerical optimization in terms of computational speed—a critical advantage for solving the outcomes of the climate club game. This point is detailed in the following subsection.

###### Figure A.1: Comparison: Welfare and Emission Effects Implied by Numerical Optimization vs. FL

(a) EU (b) All

Moreover, the optimal tax rates exhibit a strong correlation between the two methods. Consistent

with Lerner symmetry, trade taxes are determined up to a uniform shift. As a result, we compare trade taxes between the two methods by dividing import tariffs by export subsidies. The correlation between these composite trade taxes across the two methods is 96.4%. Additionally, the optimal local carbon taxes produced by the two methods are nearly identical: $53.61/tCO2 based on our methodology and $53.56/tCO2 using the numerical algorithm.

Furthermore, our numerical exercises reveal that when the home country is smaller, the gap in welfare predictions between the numerical optimization and the FL method tends to narrow. As in the previous exercise, we conducted 18 additional simulations, each featuring a different country as the home country adopting its unilaterally optimal policy. On average, across all 19 exercises, the numerical search algorithm yields a home welfare level that is only 2% higher than that found by the FL method. The correlation between trade taxes in these exercises is 92.7%, while the correlation between carbon taxes is an impressive 99.98%. Panel (b) of Figure A.1 is similar to Panel (a), but it consolidates the welfare outcomes from all exercises into a single overlay graph.

###### D.2 Speed Efficiency

Unilateral Policy Outcomes. On average across the 19 exercises, it takes 108 minutes for the numerical optimization to converge to an optimal vector of tax rates, with the minimum of 63 minutes and maximum of 176 minutes. In comparison, it only takes 3.5 seconds for the FL's algorithm to converge, ranging between 2.8 to 4.5 seconds. That is, the FL's algorithm is 1800 times faster than the numerical search algorithm.

Climate Clubs. The gains in computational speed for solving equilibrium under a country's deviation toward non-cooperative policy are vital when solving the climate club game.

With N = 19 countries in our sample and one core member, we need to solve approximately 4.7 million GE outcomes. To see this, note that each partitioning of non-core countries, (N(member),N(non-member)), corresponds to a different GE outcome, resulting in 218 cases. Furthermore, for each of such partitioning, determining if any of the eighteen non-core countries has an incentive to deviate unilaterally requires evaluating a new GE outcome. Thus, we must check 18 × 218 ≈ 4.7 million GE outcomes in total. This amounts to 4.7 × 108 (min) ≈ 500 million minutes, which equals more than 950 years. That number can be reduced to ~54 years assuming one can exploit parallel processing over 18 cores when checking deviations by non-core countries.

In contrast, by leveraging our optimal policy formulas and pruning the outcome space using our iterative procedure, we solve the climate club game under 4 minutes. (see Table A.1).

To further clarify the importance of our quantitative improvements, consider that the numbers mentioned above report the results for a given Carbon Tax Target. Our objective, however, is to determine the maximum Carbon Tax Target. To achieve this, we start by increasing the Carbon Tax Target from a sufficiently low value in increments of $5 per ton of CO2. Once we identify the maximum Carbon Tax Target at this level of precision, we refine our search by using this value as a starting point and then increase the target in increments of $1 per ton of CO2. On average, for each scenario of core members, we evaluate the climate club game under 10 different Carbon Tax Targets to determine the maximum target. Under this metric, the numbers in Table A.1 under column "Climate Club" need to be multiplied by 10.

Table A.1: Comparison of Speed Efficiency: Numerical Optimization vs. FL

| |Unilateral Policy|Climate Club|
|---|---|---|


|numerical optimization|108 minutes<br><br>|>50 years|
|---|---|---|
|optimal policy formulas<br><br>|3.5 seconds|Under 4 minutes|


###### D.3 Foreign Wage and Income Effects

The above comparisons between the numerical search algorithm and our method indicates minor differences in maximized welfare outcomes, supporting Assumption 1. Additionally, it is useful to examine Assumption A1 by looking at changes in wages and wage-to-income ratios in foreign countries. Recall that A1 indicates that policy-induced changes to relative wages and wage-to-income ratios among foreign countries have no first-order effect (in the vicinity of the optimum) on home's welfare. This doesn't imply these changes are zero, though zero changes would suffice for Assumption A1 to hold. With this in mind, we run a number of simulations in which we alter trade taxes near the EU's optimal policy outcome which we already have found using the numerical search algorithm.

To fix the idea, consider a 5 percentage point increase in EU's import tariffs starting from their optimal rates. Simulating the outcome under this policy change and comparing it with the outcome under the EU's optimal policy results in the following observations about non-EU wage rates and income levels:

- – Wage rates among non-EU countries fall by 2.25% relative to the EU's wage rate; whereas the wage rates of individual foreign countries relative to their average change very modestly, with a maximum absolute value of 0.15%. Overall, the maximum deviation of foreign wages from their mean is 15 times smaller than the change in the relative foreign-to-home wage rate.
- – The wage-to-income ratio across foreign countries changes negligibly, with a maximum absolute value of 0.015%.


We now run this exercise more systemically as follows. Consider 100 simulations, each of them corresponding to random percentage point increases in EU's import tariffs starting from their optimal rates. Specifically, the increase in tariff for each industry-exporter pair relative to its optimal rate is drawn independently from a uniform distribution between 0 and 0.1. On average across the 100 simulations:

- – Wage rates among non-EU countries fall by 2.1% relative to the EU's wage rate; whereas the wage rates of individual foreign countries relative to their average change with a maximum absolute value of 0.3%. Overall, the the maximum deviation of foreign wages is 7.8 times larger than the relative change in foreign-to-home wage rate.
- – The wage-to-income ratio across foreign countries alters negligibly, with a maximum absolute value of 0.03%.


###### E Alternative Optimal Policy Designs

This section examines optimal policy under alternative objective functions and policy constraints. First, we derive the globally optimal border taxes that maximize global welfare under second-best conditions where carbon taxes are unavailable. Second, we characterize the unilateral policy frontier

by maximizing a weighted combination of domestic and foreign welfare using unilateral policy tools. Third, we generalize our optimal policy formulas to explicitly include energy extraction taxes.

###### E.1 Second-Best: Globally Optimal Border Taxes

Consider a second-best cooperative scenario in which carbon taxation (or production and energy taxation) is not politically feasible. The optimal policy, in this case, is obtained as the solution to a planning problem where the global planner selects border taxes and lump-sum transfers to maximize, W ≡ ∑n θnWn. The policy set T ̃ = {t, π} includes the global vector of trade taxes t = tnl,k n̸=l and each country's share from global income π = {πi} that determines lump-sum international transfers.

We reformulate the optimal policy problem as a problem where the central planner chooses prices and income shares rather than tariffs and transfers. Since the central planner can set border taxes but not domestic taxes/subsidies, she has control over the consumer prices of goods crossing international borders—denoted by P ̃(border) ≡ P ̃ni,k n̸=i. The optimal policy problem is

N

θiWi, where Wi = Vi Ei, P ̃ i − δiZ(global)

###### ∑

max

π,P ̃(border)

i=1

The solution to this problem determines the globally optimal border tax on a generic good ji, k as 1 + t⋆ji,k = P ̃ji⋆,k/Pji,k. The first-order condition with respect to P ̃ ∈ P ̃(border) is

###### ∑

n

∂Vn (.) ∂En

θn

πn

∂Y (.) ∂P ̃

∂Y (.) ∂w

∂Y (.) ∂P0

∂Y (.) ∂C

- ∂Y (.)

- ∂Z


∂w ∂P ̃

∂P0 ∂P ̃

∂C ∂P ̃

∂Z ∂P ̃

+

+

+

+

∂Y/∂P ̃

∂Vn (.)

∂Z ∂P ̃

###### +∑

∂P ̃ − ∑

1 = 0

[θnδn]

θn

n

n

where global income Y = Y(.) consists of factor payments plus tax revenues. Namely,

Y P ̃(border),w,P0,C,Z = ∑

P ̃ni,g − Pni,g Cni,g +∑

(wiLi +Πi)+∑

###### ∑

τ ̄nZn

n

g,i

i

n̸=i

The last term represents carbon tax revenues based on pre-determined national tax rate τ ̄n, not chosen by the central planner. The logic for including this term is to accommodate settings where carbon taxes can be exogenously in place, but governments cannot elevate them to the globally optimal rate, τ . As explained in Appendix A.7, global income is invariant to factor prices, as changes in these prices constitute pure transfers from one set of agents to another in the global economy. In particular,

∂Y (.) ∂w

∂w ∂P ̃

∂Y (.) ∂P0

∂P0 ∂P ̃

###### = 0.

=

Applying the above result and rearranging the first-order condition yields:

∂W ∂P ̃

###### =∑

n

∂Vn (.) ∂En

θn

πn

∂Y (.) ∂C

∂C ∂P ̃

+

- ∂Y (.)

- ∂Z


###### ∂Z

∂P ̃ −∑

n

∂Vn (.) ∂En −

∂Vn (.)

∂Z ∂P ̃

∂P ̃ − ∑

1 = 0. (E.1)

[θnδn]

θn πn

n

Following Appendix A.7, the optimal transfers, πi = ∑θiVi

n θnVn, equate the second term to zero:

###### ∑

θn πn

n

∂Vn (.) ∂P ̃

∂Vn (.) ∂En −

###### = 0

Hence, the first-order condition simplifies further to:

∂W ∂P ̃

###### = ∑

n

∂Vn (.) ∂En

πn

θn

∂Y (.) ∂C

∂C ∂P ̃

- ∂Y (.)

- ∂Z


∂Z ∂P ̃

###### ∂Z

∂P ̃ − ∑

+

[θnδn]

n

1 = 0. (E.2)

The terms consisting of income effects in the above equation can be unpacked by noting that ∂Y∂C(.) =

P ̃ − P and ∂Y∂Z(.) = τ. In particular,

∂Cni,g ∂P ̃

- ∂Y (.)

- ∂Z


∂Y (.) ∂C

∂Zn ∂P ̃

∂C ∂P ̃

∂Z ∂P ̃

P ̃ni,g − Pni,g

###### = ∑

###### ∑

###### +∑

τ ̄n

###### = 0.

+

n

g,i

n̸=i

Given pre-determined energy prices and carbon taxes, changes in global emissions are driven purely by scale effect. More specifically,

∂Zn ∂P ̃

###### = ∑

g

###### = ∑

g,i

∂Qn,g (.) ∂Cni,g

∂Cni,g ∂P ̃

∂Qn,g ∂P ̃

###### = ∑

zn,g

zn,g

g,i

∂Cni,g ∂P ̃

∂Cni,g ∂P ̃

Zn,g Qn,g

Zn,g Yn,g

###### = ∑

dni,g

Pni,g

g,i

###### = ∑

g,i

∂Cni,g ∂P ̃

vn,gPni,g

,

where vn,g = Zn,g/Yn,g where Yn,g = Pnn,gQn,g. Plugging the above expressions back onto Equation (E.2) and considering that, we obtain the following necessary first-order condition for optimality:

∂Cni,g

∂Cii,g ∂P ̃

P ̃ni,g − 1 + τ − τ ̄n vn,g Pni,g

###### ∑

###### ∑

∂P ̃ −∑

τ − τ ̄ι νii,gPii,g

###### = 0,

g,i

g,i

n̸=ι

where τ = ∑n δ ̃n represents the globally optimal carbon tax under the first-best allocation. In our previous derivations we did not have to characterize the general equilibrium demand elasticities, because we did not have a missing policy problem. Here, however, we must characterize the noted elasticities, and to make progress we assume that demand for non-energy goods is income inelastic. Under this assumption, the general equilibrium elasticities reduce to Mashallian elasticities, i.e.,

∂P ̃ji,k = ∂∂DP ̃(.)

∂C

. Using our compact notation for Marshallian demand elasticities, we get

ji,k

 

ε(niji,,gk) P ̃ = P ̃ji,k ∈ P ̃ i 0 P ̃ ∈/ P ̃ i

∂ ln Cni,g ∂ ln P ̃

=



indicating that price instrument P ̃ influences demand locally. That is, if P ̃ ∈ P ̃ i then the instrument affect demand in country i but not other markets. This assumption simplifies the first-order condition

- as follows after dividing all the terms by Ei and noting that eni,g = P ̃ni,gCni,g/Ei


###### ∑

###### ∑

g

n̸=i

1 − 1 + τ − τ ̄n vn,g

Pni,g P ̃ni,g

eni,gε(niji,,gk) − τ −τ ̄i ∑

g

vi,geii,gε(iiji,g,k) = 0.

To simplify the above equation further, we appeal to a corollary of the Slutsky equation, eni,gε(niji,,gk) =

eji,kε(jini,k,g) and note that demand is homogeneous of degree zero, whereby ∑n̸=i ∑g ε(jini,k,g) = − ∑g ε(jiii,k,g). Invoking these properties of demand simplifies the first-order condition as:

  1 + τ − τ ̄n vn,g



1 1 + tni,g

ε(jini,k,g)

1 + τ − τ ̄i vi,g ε(jiii,k,g) = 0. (E.3)

###### ∑

###### ∑

###### −∑

g

g

n̸=i

The first-order condition described by Equation (E.3) represents a system of equations that can be condensed using matrix notation. In particular, invert the following matrix-equivalent system to obtain

the N(K − 1) × 1 vector of optimal import tariffs T−ii = 1

1+tji,g

per destination i,

j,k

T−ii = E ̃(−−iiii)

−1 E ̃(−iiii) 1K,

where1 is a K × 1 column vector of ones; and E ̃(−−iiii) and E ̃(−iiii) are respectively (N − 1)K × N(K − 1) and N(K − 1) × K matrixes of untaxed-carbon-adjusted demand elasticities:

; E ̃(−iiii) ≡ 1 + τ − τ ̄i vi,g ε(jiii,k,g)

E ̃(−−iiii) ≡ 1 + τ − τ ̄n vn,g ε(jini,k,g)

.

jk,g

jk,ng

CES Preferences with Additive Separability Across Industries. We can derive simple formulas for the globally optimal carbon border taxes in the special case where preferences are additively separable across industries and CES within industries. In that case, Marshallian demand elasticities are given by:

εniji,,kg = 0 if g ̸= k; ε(jini,k,k) = (σk − 1)λni,k if n ̸= j; ε(jiji,k,k) = −1 − (σk − 1)(1 − λji,k).

Plugging these elasticity values back into Equation (E.3) delivers the following first-order condition w.r.t. the price of good ji, k:

######   1

  = 1 + τ − τ ̄i νi,k (σk − 1) λii,k

###### ∑

1 + τ − τ ̄n νn,k (σk − 1) λni,k − n=jσk

1 + tni,k

n̸=i

The symmetry in the above equation asserts that that Tni,k ≡ 1 + τ − τ ̄n νn,k / 1 + tni,k must be independent of origin subscripts n and uniform across all export partners—i.e., Tni,k = Ti,k . Invoking this observation, it is straightforward to solve for Tni,k, which yields:

1 + (σk − 1) λii,k 1 + 1 + τ − τ ̄i vi,k (σk − 1) λii,k

1 + τ − τ ̄n vn,k .

1 + tni,k =

To provide intuition, the second term (on the right-hand side) is a border carbon tax based on the difference between the applied carbon tax and globally optimal rate in origin n. The first term is adjustment to mitigate substitutability between the taxable traded varieties and the non-traded variety

- ii, k. This term collapses to zero when when there is no substitutability (i.e., σk = 1) or when the non-traded variety is already taxed at the optimal rate (i.e., τ ̄i = τ ).


###### E.2 Country i's Unilateral Policy Frontier

This section characterizes an alternative unilateral policy design in which the home government maximizes its national welfare augmented by a weighted average of foreign welfare values. This characterization, by varying the weights assigned to foreign countries, traces out country i's unilateral policy frontier, representing the spectrum of welfare outcomes achievable through the unilateral policy instruments, Pi. Each point on country i's unilateral policy frontier is the solution to the following planning problem:

Vi Ei,P ̃i −δiZ(global) + ∑

θni Vn (.) − δnZ(global) ,

max

Pi

n̸=i

subject to equilibrium constraints. Here, θni is the weight that country i assigns to country n's welfare relative to its own welfare. For a given set of weights θi ≡ {θni}n̸=i, we denote the solution by Pi (θi). It is important to note that the unilateral policy frontier does not include the globally first-best outcome due to the fact that country i does not have access to policy instruments of other countries. However, it encompasses the following canonical policy scenarios:

- 1. If θni = 0 for all n ̸= i. Then, the solution Pi corresponds with the unilaterally optimal policy, Pi∗, which we derived earlier.
- 2. If θni < 0 for a subset of countries n ∈ N ̃ ⊂ N/{i}, the solution Pi imposes a sanction on countries in C ̃ . In that case, country i manipulates its terms-of-trade vis-a-vis countries in C ̃ to impose extra penalty (relative to the above case) on them, as in Becko (2024).
- 3. The weigh assignment {θni}n̸=i is such that the foreign welfare, W−i = ∑n̸=i θni Vn (.) − δnZ(global)


is preserved. In that case, the solution Pi aligns with the externality-free unilaterally-optimal policy, as studied in Kortum and Weisbach (2021).

Methodologically, we take the same steps as in our earlier derivation of unilaterally optimal policy. Here, the only difference is that we should trace out the policy effects on foreign welfare through its inclusion in the objective function. For simplicity, we focus on the case of Cobb-Douglas-CES preferences for a small open economy, for which we obtain Pi for any set of welfare weights, θni, as follows:



τi = δ ̃i + ∑n̸=i θ ̃niδ ̃n [carbon tax] 1 + tni,k = (1 + t ̄i) + τi vi,k, tni,0 = t ̄i [import tax] 1 + xin,k = σkσ−1



θ ̃ni + σkσ−1

###### (1 + t ̄i) + σ1

τi ∑j̸=i vj,kλnj,k [export subsidy (final good)] 1 + xin,0 = σ0σ−1

k

k

k



θ ̃ni + ζσn

τi P ̃n,0 [export subsidy (energy)]

###### (1 + t ̄i) + σ1

0

0

0

where θ ̃ni is defined as: θ ̃ni = θni PP ̃ ̃i

, reflecting the fact that a nominal income transfer between two countries translates to a welfare transfer up to their relative consumer price indexes. (Recall that the consumer price index is given by P ̃n ≡ [∂Vn/∂En]−1, and δ ̃n ≡ P ̃nδn). In a special case with quasilinear demand and a large enough freely-traded sector, it is implied that P ̃i = P ̃n, and so, θ ̃ni = θni.

n

Compared to the unilaterally optimal policy, which we have derived in details and extensively discussed earlier, the above policy outline is generically different in two ways: (i) The carbon tax, τi , equals the domestic externality, δ ̃i, plus a weighted sum of foreign externalities, ∑n θ ̃niδ ̃n. (ii)

The terms-of-trade components of border taxes are adjusted according to the welfare weights. For example, for final-good export subsidies, the optimal border policy formula is:

1 + xni,k =

1 σk

σk − 1 σk

θ ̃ni

(1 + t ̄i) +

terms of trade

+

σk − 1 σk

###### τi ∑

vj,kλnj,k

j̸=i

carbon border adjustment

θ ̃ni is now part of the terms of trade manipulation, and the carbon border adjustment is itself regulated by the welfare weights implicit in τi = δ ̃i + ∑n̸=i θ ̃niδ ̃n.

where σ1

k

Consider a point on the frontier that corresponds to the case where the weights assigned to foreign countries adjusted for the consumer price indices are one, wherein θ ̃ni = 1 for all n ̸= i. In that case, the home country taxes carbon at the globally optimal rate, τi = ∑n δ ̃n, and exerts no terms of trade externality on foreign countries. However, as emphasized in the main text, governments acting in their own self interest often veer away from this ideal policy point. This tendency mirrors the ongoing issue of free riding in climate action, which has been our main motivation for brining in trade policy to the issue of international climate agreements.

Lastly, we use Figure A.6 to illustrate the policy frontier when country i is the EU. To construct the figure, we have used our calibrated model, running simulations by varying the weight that the EU assigns to non-EU countries. For simplicity, a common weight is assigned to all non-EU countries. The peak point, where the EU's welfare is maximized, corresponds to zero weights assigned to nonEU countries. When the weight that the EU assigns to non-EU countries becomes positive, the EU exerts a lower level of terms-of-trade transfers from non-EU countries. Therefore, relative to the peak point, the EU's welfare falls and the welfare of non-EU countries rises. In contrast, when the weight is negative, the EU's border policy becomes more punitive against non-EU countries, but that comes at a welfare cost to the EU (relative to its welfare under the optimal unilateral policy, and not necessarily relative to the status quo). The two points labelled as "Externality-Free" and "Maximal Sanction" on the figure highlight these two alternatives.

In addition, Figure A.7 shows the effects of EU's unilateral policy on welfare and carbon emissions along the weight that the EU assigns to non-EU countries. A higher weight raises the non-EU's welfare

- at the cost of the EU's welfare. Also note that, a higher weight leads to a larger emission reduction


- at the global level, which comes from the emission reduction in the EU, partially offset by the carbon leakage via the increase in emissions in non-EU regions.


###### E.3 Optimal Policy Formulas with Energy Extraction Taxes

Our optimal policy framework accommodates extraction subsidies or taxes as the wedge between the producer and consumer price of energy (as the good that the energy extraction industry produces), with the corresponding subsidy rate denoted by (1 + si,0) = Pii,0/P ̃ii,0. Our derivations in Appendix

- B yielded si∗,0 = 0, indicating that extraction tax-cum-subsidies are unnecessary for obtaining the unilaterally or globally optimal outcomes. Nonetheless, we are able to reformulate our optimal policy formulas to explicitly include extraction taxes. Below, we present these formulas and explain the logic for why extraction taxes are redundant.


Unilaterally Optimal Policy with Extraction Taxes. To present the unilaterally optimal policy formulas with extraction taxes, we introduce Ti,0 to directly denote the ad valorem extraction tax rate.

More formally,

P ̃ii,0 Pii,0

P ̃in,0 Pin,0

1 1 + si,0

###### = (1 + xin,0)

.

1 + Ti,0 ≡

###### =

Proposition 2 implicitly shows that the optimal extraction tax rate can be set to zero (si∗,0 = Ti,0∗ =

- 0). That is, when demand-side carbon taxes and energy border taxes are available, extraction taxes become redundant. We first demonstrate this redundancy and then use it to obtain optimal policy formulas allowing for an arbitrary extraction tax. Suppose the government seeks to implement an


extraction tax Ti,0 > 0, yielding the following domestic and foreign energy prices (without other taxes):

P ̃i(,0a) = P ̃i,0 ((1 + Ti,0) Pii,0, P−ii,0) , P ̃n(,0a) = P ̃n,0 ((1 + Ti,0) Pin,0, P−in,0) (for n ̸= i)

These prices can alternatively be reproduced without extraction taxes using the following mix of energy border taxes and demand-side carbon taxes:

1 1 + Ti,0

1 1 + Ti,0

, τi = Ti,0P ̃i,0.

1 + tni,0 =

, 1 + xni,0 =

To show this, we need to prove that the above tax combination yields the same after-tax energy prices as the extraction tax. For the domestic energy price, the equivalence can be shown as follows:

1 1 + Ti,0

P ̃i(,0b) =P ̃i,0 (Pii,0, (1 + ti,0)⊺ P−ii,0) + τi = P ̃i,0 Pii,0,

P−ii,0 + Ti,0P ̃i(,0b)

1 1 + Ti,0

P−ii,0 = P ̃i,0 ((1 + Ti,0) Pii,0, P−ii,0) = P ̃i(,0a),

= (1 + Ti,0) P ̃i,0 Pii,0,

where ti,0 collects the energy import taxes and the second line uses the fact that the price aggregator, P ̃i,0 (.), is a homogeneous of degree one function. The first term, above, is the price under the energy import and demand-side carbon tax mix, P ̃i(,0b). The last line shows that this price equals the price under the extraction tax, P ̃i(,0a). Next, consider the foreign energy price. Under country i's energy export subsidy, the foreign price is:

P ̃n(b,0) = P ̃n,0

1 1 + xin,0

Pin,0, P−in,0 = P ̃n,0 ((1 + Ti,0) Pin,0, P−in,0) = P ̃n(,0a),

which, by construction, equals the foreign energy price under the extraction tax. These equalities reveal that any energy price vector can be obtained without extraction taxes and by using demand-side carbon taxes and energy border taxes/subsidies alone. In other words, extraction taxes are redundant when these other instruments are available. Leveraging the noted redundancy, the unilaterally optimal policy schedule could be more generally represented to include an extraction tax. We demonstrate this for the small open economy case under CES preferences. For an arbitrary choice of extraction tax, Ti,0∗, the unilaterally optimal policy can be alternatively represented as



τi∗ = δ ̃i − Ti,0∗P ̃i,0, [carbon tax] t∗ni,k = t ̄i + τi∗vn,k 1 + t∗ni,0 = (1 + t ̄i) 1 + Ti,0∗ [import tax] 1 + xin∗ ,k = (1 + t ̄i) σkσ−1



+ τi∗ ∑j̸=i λjn,kvj,k σkσ−1

[export subsidy (non-energy)] 1 + xin∗ ,0 = (1 + t ̄i) σ0σ−1

k

k



+ τi∗ σ1

ζn

P ̃n,0 1 + Ti,0∗ [export subsidy (energy)]

0

0

Our baseline representation sets Ti,0∗ = 0, but we could have alternatively set τi∗ = 0 and load the carbon tax entirely on extraction via Ti,0∗ = δ ̃i/P ̃i,0.

Globally Optimal Policy. Our baseline model shows that the globally optimal outcome requires setting a Pigouvian wedge, represented by ∑n δ ̃n, between the producer and consumer price of energy worldwide. This wedge and the optimal allocation can be achieved with demand-side carbon taxes (τi ) plus lump-sum transfers or through extraction taxes (Ti,0 ) plus lump-sum transfers. The optimal tax rate in each case is given by

δ ̃n, or Ti,0 = ∑

###### τi = ∑

n

n

δ ̃n /P ̃i,0.

Both of the the above policies deliver the optimal Pigouvian wedge as demonstrated below:

price under extraction tax

∑n δ ̃n P ̃i,0

P ̃i,0 (P1i,0,..., PNi,0)

P ̃i,0 1 + s1,0 P1i,0,..., 1 + sN,0 PNi,0 = 1 +

δ ̃n = P ̃i,0 (P1i,0,..., PNi,0) + τi

= P ̃i,0(P1i,0,...,PNi,0)+∑

.

n

price under input-side carbon tax

More generally, any mix of demand-side carbon taxes and extraction taxes that satisfy τi +Ti,0 P ̃i,0 = ∑n δ ̃n, along with lump-sum transfers, could implement the globally optimal outcome. Importantly, without transfers, τi and Ti,0 , do not deliver identical welfare outcomes at the national level. Hence, the lump-sum transfers that supplement each tax choice are different. The reason is that carbon tax revenues accrue primarily to major energy consumers under demand-side energy taxes and to major producers under extraction taxes. So, the optimal transfers should be adjusted based on revenue streams. However, the choice of transfers does not affect the overall effectiveness of global carbon taxes, which is our main focus.

###### F Complementary Material on Calibration and Estimation

###### F.1 Carbon Accounting

We obtain information on CO2 emissions from the GTAP database. In our analysis, CO2 emissions are exclusively associated with the use of fossil fuels. Therefore, we exclude emissions from (i) non-CO2 greenhouse gas emissions such as methane, (ii) CO2 emissions that are associated with the production process such as those in the cement industry. We count CO2 emissions at the location of energy use by end-users (i.e., non-energy industries and households). We combine all energy types into a single composite energy industry, labeled as industry "0," and calculate the CO2 emissions associated with both direct and indirect energy use. We track the indirect emissions associated with energy purchases, and do not account for the energy embedded in other intermediate inputs. For example, consider the steel industry. It directly generates emissions, e.g., from burning coal at the location of steel production. Moreover, steel production indirectly generates emissions by using electricity, the production of which involves burning coal. We observe direct emissions in the data and calculate the indirect emissions, as elaborated below.

Initially, consider a closed economy, denoting energy types by e ∈ {1,..., E}. Specifically, the data

differentiates between the following energy types: coal, crude oil, natural gas, refined oil products and electricity & gas manufacture. Let Ze(direct) denote the direct CO2 emissions from production of energy type e and Ye as its gross output. By accounting, Ye comprises total usage for both energy generation and non-energy production, with Xee′ representing the amount of type e energy used for type e' energy generation and Ce representing energy usage for non-energy production. To generate one dollar of type e′ energy, aee′ dollars of type e energy inputs are required, leading to Xee′ = aee′Ye′. Input-Output accounting entails that Y(E×1) = A(E×E)Y(E×1) + C(E×1), from which we derive Y = (I − A)−1 C, where (I − A)−1 ≡ B is the Leontief inverse describing energy input-output flows. The effective carbon intensity for each energy type (i.e., emissions per dollar of output) is then given by v ̃e′ = ∑eE=1 bee′ Ze(direct)/Ye , where bee′ is the entry (e, e′) of the Leontief inverse.

The emissions per dollar of output in non-energy sectors (k = 1,..., K) encompass direct emissions, denoted by Zk(direct), arising from combustion of fossil fuels during production, as well as indirect emissions tied to energy generation. The latter can be computed as Zk(indirect) = ∑e v ̃eXek, where v ̃e was defined above, and Xek denotes the value from type e energy inputs used by industry k. The total emissions for industry k are thus represented by Zk = Zk(direct) + Zk(indirect).

The above procedure can be extrapolated to open economies as follows. Let vector Y(NE×1) = [Yne] represent gross energy output by type for each country n; let A = [ane,ie′](NE×NE) denote the global energy input-output matrix; and let C = [Cne](NE×1) represent total energy sales to non-energy sectors by type and country. The accounting equation for energy flows can be expressed as Y = AY + C, implying an NE× NE global Leontief Inverse matrix B = (I − A)−1 = [bne,ie′]. The effective emission per dollar of output generated by energy type e′ in country i equals v ̃i,e′ = ∑n,e bne,ie′ (Zn,e/Yn,e) and the indirect emissions associated with country i−industry k are represented by Zi(,indirectk ) = ∑n,e′ v ̃n,e′Xne′,ik. The total emissions per industry is the sum of direct and indirect emissions, Zi,k = Zi(,directk ) + Zi(,indirectk ). A similar procedure yields the total emissions associated with household consumption, Zi,hhd.

The above procedure can be thought of as "carbon accounting" because it ensures the global balance of carbon flows:

###### ∑

i

K

###### ∑

[Zi,k] = ∑

Zi,hhd +

i

k=1

K

Zi(,hhddirect) +

###### ∑

k=1

E

Zi(,directk ) +

###### ∑

e=1

Zi(,directe ) .

###### F.2 Cost Shares

Energy Input Cost Shares (αn,k). We construct energy input cost shares using data on sales and energy input expenditures. Our assumption that energy is freely traded in the baseline equilibrium implies a uniform (pre-carbon-tax) energy price across countries, denoted as PZ. For the year 2014, our data sets PZ at $122 per tonne of CO2, a figure that closely aligns with independent data on production quantities and primary energy prices for that year.64 The energy input cost share can be calculated as αn,k = PZZn,k / (Pnn,kQn,k), where Zn,k and Pnn,kQn,k represent total CO2 emissions and gross output in country n−industry k. Global average values of αn,k for each industry are reported in Table

- 1.


Cost Share of Carbon Reserves (φi). The GTAP database reports the value added associated with each factor of production, including natural resources. We set the cost share of carbon reserves in the

- 64 Specifically, dividing the global sales of primary energy—consisting of coal, crude oil, and natural gas—by the global output quantity of primary energy which maps to the global CO2 emission, delivers the pre-tax global carbon price.


energy extraction industry, φi, based on the value added share of natural resources in each country's primary energy sector, which consists of coal, crude oil and natural gas. The calibrated values of φi range between 0.31 and 0.49 across countries, with an average value of 0.37.

###### F.3 Baseline Taxes

We acquire data on applied tariffs from the GTAP database via the Market Access Map of International Trade Centre that reports tariffs at the level of 6-digit HS products in 2014. For each origin–destination– non-energy industry triplet, tij,k

, we use the simple average of the tariffs across HS products, except when the tax-imposing country is a member of the European Union (EU). In such cases, we assign applied tariffs based on the fact that intra-EU trade is subject to no tariffs and EU members apply a common tariff on non-members. We set import tariffs on energy to zero in the baseline equilibrium. Also, in accordance with the World Trade Organization rules, we assume that applied export subsidies are negligible, and set xij,k = 0 in the baseline equilibrium.

k>0

We infer carbon taxes in 2014 from the the World Bank's Carbon Pricing Dashboard. To attain a harmonized measure of carbon taxes across countries, we calculate the ratio of taxes raised from climate policies to the aggregate CO2 emissions within each country, which we designate as the national carbon tax for each respective country. In 2014, carbon taxes were zero in most countries and substantially lower than their unilaterally-optimal levels everywhere.

Notice that consolidating the impact of climate policies into a single carbon tax metric is difficult, especially with limited data on sectoral variations. This consideration, however, remains inconsequential for our 2014 baseline because: (i) most countries lacked climate policies, and (ii) carbon taxes, whether directly applied or indirectly implied, were still very low, even in the EU.

###### F.4 Estimation of Trade Elasticities

We estimate the industry-level trade elasticities, (σk − 1), using an identification strategy in the style of Caliendo and Parro (2015). Under Cobb-Douglas-CES demand, the free-on-board value correspond-

ing to origin i–destination j–industry k, denoted by Xij(fob,k ) ≡ Pij,kCij,k, is given by

Xij(fob,k ) = 1 + tij,k

−σk

dij,kPii,k

1−σk

Pjσ,kk−1βj,kEj,

where (1 + tij,k) is the ad valorem tariff rate, Pii,k is the producer price in the origin country, and P ̃j,k and βj,kEj are the industry-level consumer price index and expenditure in the importing country. We specify the bilateral trade cost in industry k as dij,k = di,k × dj,k × di↔j,k × exp εij,k , dissecting it into origin and destination fixed effects alongside a symmetric dyad fixed effect, encapsulating the effect of gravity-related variables such as distance, common currency, or common border. From the above relationships we obtain the following estimating equation:

ln Xij(fob,k ) = −σk ln 1 + tij,k + Di,k + Dj,k + Di↔j,k + εij,k, (F.1) where Di↔j,k = (1 − σk) ln di↔j,k is a symmetric dyad fixed effect, while Di,k = (1 − σk) ln di,kPii,k and Dj,k = ln Pj,k/dj,k

σk−1

βj,kEj represent importer and exporter fixed effects. Utilizing data on trade values and applied tariffs, we estimate σk under the identifying assumption that applied tariffs are uncorrelated with idiosyncratic variations in bilateral trade costs, εij,k.

Before reporting the results, two points warrant mention. First, lacking information on service trade tariffs, we set the trade elasticity of services to the average from non-service industries. Second, the energy trade elasticity is estimated at (σ0 − 1) = 10.16, derived from pooling observations on energy flows with Other Mining.

Detailed estimation results are reported in Appendix Table A.3, with point estimates also replicated in Table 1 of the paper.

###### G Simulating Quantitative Policy Outcomes

Overview. Equilibrium under optimal policy can be characterized as the joint solution to two mappings:

– Mapping (a), denoted by RV = g RT;B , that produces the equilibrium allocation given

taxes, RT, and the required set of data and parameters B.

– Mapping (b), denoted by RT = f RV;B , that produces the optimal taxes given a set of non-

policy equilibrium variables, RV, and the required set of data and parameters B.

For completeness, we reproduce B, RV and RT from Section 4 of the paper. In what follows, z′ denotes the value of a generic variable z in the counterfactual equilibrium, with z ≡ z′/z denoting the corresponding change using the exact hat-algebra notation.

- – B ≡ BV,BT,BΘ where BV consist of expenditure shares λji,k, βi,k , employment shares li,k , CO2 emissions, energy input cost shares, and CO2 intensity values, Zi,k, αi,k, vi,k , pre-

carbon-tax price of energy P ̃i,0 , and national accounting of income {wiL ̄i,riR ̄i,Yi}; BT ≡ xij,k, tji,k, τi,k consist of the applied policy variables (in the observed equilibrium); and BΘ = δ ̃i, φi, ς, σk denote the set of structural parameters of the model.

- – RV = λˆ ji,k, lˆi,k, Zˆi,k, αˆi,k, vˆi,k, Pˆ ̃i,0, Pˆ ̃i, wˆi,rˆi,Yˆi consists of changes to non-policy variables.
- – RT = xij′ ,k, t′ji,k, τ′i,k consists of taxes and subsidy rates in the counterfactual (post-policy) equilibrium.


Section G.1 presents the equations that describe mapping (a). The equations that characterize mapping (b) is already presented under Proposition 2 in the paper. Section G.2 describes our numerical algorithm to jointly solve for mappings (a) and (b).

###### G.1 Equilibrium in Changes

To describes mapping (a), RV = g RT;B , this section outlines the equations describing the change in non-policy variables as a function of the required data and parameters B and policy variables, RT = xij′ ,k, t′ji,k, τi′,k .

The change to variety-specific producer prices and CES and Cobb-Douglas consumer price in-

dices, for energy (k = 0) and final goods (k = 1,..., K), are given by



1 1−ς

1−ς j,0k

Pji,k = Pjj,k = 1 − αj,k w1j−ς + αj,kP ̃

a) producer price (ij, k ≥ 1)

Pji,0 = Pjj,0 = w1j−φjrφj j b) producer price (ij, k = 0) P ̃ji,k = 1 + tji,k 1 + xji,k

−1

Pji,k c) consumer price (ij, k ≥ 0)



1

1−σk ji,k

1−σk d) consumer price index (i, k > 0)

P ̃i,k = ∑Nj=1 λji,kP ̃

1

1−σ0 ji,0

1−σ0 e) distribution-level energy price (i, k = 0)

P ̃i,0 = ∑Nj=1 λji,0P ̃

(G.1)

P ̃i,0k = P ̃i,0P ̃i,0 + τi′,k f) after-carbon-tax energy price (i, k = 0) P ̃i = ∏k P ̃

βi,k i,k g) final consumer price (i)



Note that the change to the producer price of each final good, Pji,k, is governed by the change to the

- wage rate, wj, and final price of energy inputs, P ̃j,0k, which itself depends on the change to international producer prices, {Pjj,0}j, baseline energy expenditures shares, {λji,0}j, and optimal policy choices. The change in industry-level labor and energy input cost shares, carbon emissions, carbon intensities, and output quantities are given by




1−ς

1−ς

, αi,k = P ̃i,0k/Pii,k

1 − αi,k = wi/Pii,k

a) labor and energy cost share (i, k ≥ 1) Qi,k = li,k × 1 − αi,k

ς

1−ς b) final good output quantity (i, k ≥ 1) Qi,0 = ri/Pii,0 c) energy output quantity (i, k = 0) Zi,k = α



ς ς−1

i,k × Qi,k d) industry-level carbon emission (i, k ≥ 1) vi,k = α

ς ς−1

i,k /Pii,k e) industry-level carbon intensity (i, k ≥ 1) Zi = ∑kK=1 (Zi,k/Zi) × Zi,k f) national carbon emission from country (i) Z(global) = ∑iN=1 Zi/Z(global) × Zi g) global carbon emission



(G.2) The noted changes in prices and quantities determine the change in international trade shares and flows (X ̃ij,k ≡ P ̃ij,kCij,k and Xij,k ≡ Pij,kCij,k). In particular,



1−σk

λji,k = P ̃ji,k P ̃i,k

a) international expenditure shares (ji, k ≥ 0) X ̃′ij,k ≡ P ̃ij′,kCij′ ,k = λij,kλij,kβj,kYjYj b) after-tax trade flows of final goods (ij, k ≥ 1) Xij′ ,k ≡ Pij′,kCij′ ,k = 1 + tij′ ,k



−1

1 + xij′ ,k X ̃′ij,k c) before-tax trade flows of final goods (ij, k ≥ 1) X ̃′ij,0 = λˆ ij,0λij,0 ∑kK=1 αˆ1j+,kτα ̃j′j,,kk

∑nN=1 Xij′ ,k d) after-tax trade flows of energy (ij,0) Xij′ ,0 = 1 + tij′ ,0

−1



1 + xij′ ,0 X ̃′ij,0 d) before-tax trade flows of energy (ij,0)

(G.3)

where τ ̃j′,k = τj′,k/P ̃j′,0 denotes the ad valorem equivalent carbon tax in the counterfactual equilibrium. The change in wages and industry-level labor shares are governed by the labor market clearing (LMC)

conditions in the counterfactual equilibrium:

 

li,0 = ri/wi a) LMC (i, k = 0) li,kli,kwiwiL ̄i = ∑Nj=1(1 − αi,kαi,k)Xij′ ,k b) LMC (i, k ≥ 1) lˆi,0li,0 + ∑kK=1 lˆi,kli,k = 1 c) National LMC (i)

(G.4)



The first two conditions ensure that the industry-level wage bill equals payments to workers in the energy and final good industries. The third line ensures that labor markets clear at the national level. The change in the rental rate of carbon reserves is, accordingly, governed by the energy market clearing condition that connects the global energy demand to energy extraction in each country:

rˆiriR ̄i =φi ∑

j

Xij′ ,0 (G.5)

The change to tax revenues equals the net change to revenues from import tariffs (the first term on the right-hand side of the following equation), export subsidies (second term), and carbon taxes (third term),

t′ni,k 1 + t′ni,k

K

X ̃ ′

###### ∑

###### ∑

ni,k (G.6)

TiTi =

n̸=i

k=0

 

 

1 − 1 + xin′ ,k 1 + tin′ ,k

K

N

X ̃ ′

###### ∑

###### ∑

+

in,k

n=1

k=0

 

  .

1 + xin′ ,k 1 + tin′ ,k

τ ̃i′,k 1 + τ ̃i′,k

K

N

X ̃ ′

###### ∑

###### ∑

+

αi,kαi,k

in,k

n=1

k=1

Finally, the change in national income, Yi, is governed by the representative consumer's budget constraint:

YiYi = wiwiL ̄i + ririR ̄i + TiTi. (G.7) Solving Equations (G.1)-(G.7) in conjunction with the optimal policy equations in each policy scenario determines counterfactual equilibrium outcomes, R ≡ RT,RV , which in turn determine the change to real consumption and welfare as

Yi P ̃i

, Wi =

Vi =

Yi Yi − δ ̃iZ(global)

Vi

Indirect Utility

−

δ ̃iZ(global) Yi − δ ̃iZ(global)

Z(global)

. (G.8)

Climate Damage Disutility

We solve the general equilibrium system using a nested fixed point approach with two tiers. In the inner tier, given a preliminary guess of taxes, all non-tax variables are solved to satisfy the equilibrium conditions stipulated by Equations (G.1)-(G.7). The outer tier solves for optimal taxes conditional on the fixed point achieved in the inner tier.

###### G.2 Numerical Algorithms

This section begins by describing the numerical algorithm used to compute mapping (a), followed by the algorithm for computing mapping (b), and finally, the algorithm for computing the two mappings jointly.

###### G.2.1 Numerical Algorithm to Compute Mapping (a)

This section describes the numerical algorithm which we employ to compute the general equilibrium values of non-policy variables RV given a change in policy variables, RT (and required set of data and parameters, B). We refer to this mapping as mapping (a) or RV = g RT;B . The algorithm is as follows:

- 1. Start with a guess of changes to wages, rental rates of energy reserves, and income wi,ri,Yi .
- 2. Normalize wi,ri,Yi relative to a numeraire, which we choose to be the wage rate in the EU.
- 3. Given the current guess of wi,ri,Yi , solve for other endogenous non-policy variables:

- (a) Start with a guess of changes to employment shares, lˆi,k for k = 0 and k > 0.
- (b) Calculate changes to prices of energy along the supply chain: producer prices Pji,0 according to Eq G.1-(b), consumer (pre-carbon-tax) prices P ̃ji,0 according to Eq G.1-(c) at

k = 0, distribution-level and after-carbon-tax price indices P ̃i,0, Pi,0k according to Eq G.1-(e) and (f).

- (c) Calculate changes to producer prices of final good varieties, Pij,k k>0

according to Eq G.1-(a).

- (d) Calculate changes to cost share of energy and labor in final good industries according to

Eq G.2-(a), and production quantities of final good industries Qi,k k>0 and energy {Qi,0} according to Eq G.2-(b) and (c).

- (e) Compute changes to consumer prices of final good industries P ̃ji,k, P ̃i,k according to Eq G.1-(c) and (d) at k > 0.
- (f) Compute changes to trade shares according to Eq G.3-(a), and counterfactual values of

trade flows of energy and final-good industries X ̃ ji′ ,k, Xji′ ,k for k = 0 and k > 0, according to Eqs G.3-(b), (c), (d), (e).

- (g) Update guesses of changes to labor shares in the energy and final-good industries li,k for k = 0 and k > 0 according to Eq G.4-(a) and (b):


li(,0new) = ri/wi for k = 0; li(,newk ) =

1 li,kwiwiL ̄i

N

∑

j=1

(1 − αi,kαi,k)X′

ij,k for k > 0;

If |li(,newk ) − li,k| < 10−12 for all i, k then stop and go to Step 4. Otherwise, update li,k = li(,newk )for k = 0 and k > 0 according to the above formula and go to Step 3.b.

- 4. Calculate the counterfactual value of tax revenues, TˆiTi , according to Eq G.6.
- 5. Update guesses of wages, rents, and income levels, wi,ri,Yi . Specifically, using national labor market clearing condition, Equation G.4-(c), energy extraction market clearing, Equation G.5, and the balance of budget condition, Equation G.7, the updating formulas are:


1 wiL ̄i

wi(new) =

(1−φi)∑

j

N

###### Xij′,0 + ∑

###### ∑

j=1

k>0

(1 − αi,kαi,k)X′

ij,k

φi

rˆi(new) =

riR ̄i ∑

j

Xij′ ,0

1 Yi

Yi(new) =

wiwiL ̄i + ririR ̄i + TiTi

If |wi(new) − wi| < 10−9, |ri(new) − ri| < 10−9, and |Yi(new) − Yi| < 10−9 for all i, then stop as convergence has achieved. Otherwise, update the guesses wi = wi(new), ri = ri(new), and Yi = Yi(new) according to the above formulas and go to Step 2.

As is typical in this type of algorithm, our updating rules in Steps 3.(g) and (5) incorporate dampening. That is, for a generic variable z, and a dampening parameter δ ∈ (0,1), the updating is: z = δz(new) + (1 − δ)z. Upon convergence of the above algorithm, we also calculate Qˆi,k, vˆi,k, Zˆi,k, Zˆi, Zˆi(global)

according to Eqs G.2-(b) , (c), (d), (e), (f), and (g). Finally, for any generic variable z, we compute its counterfactual equilibrium value, z′ = zˆ × z based on the computed hat variable zˆ.

###### G.2.2 Numerical Algorithm to Compute Mapping (b)

This section describes our numerical algorithm to calculate optimal policy variables RT given nonpolicy variables, RV (and required set of data and parameters, B) as presented by the formulas under Proposition 2 in the paper. We refer to the resulting mapping as mapping (b) or RT = g RV;B . As before, we use x′ to denote the value of each generic variable x in the counterfactual (post-policy) equilibrium. The algorithm sets the uniform shifter at zero, t ̄i = 0, and simply plugs the value of non-policy variables into the optimal tax formulas.

- 1. Calculate the optimal local carbon taxes,

τi′,k = τi∗ = δ ̃iPˆ ̃i where Pˆ ̃i is the change to the final consumer price index and δ ̃i ∈ B.

- 2. Calculate the optimal import tariffs on final-good industries (k > 0),

t′

ji,k = t∗

ji,k = τi∗v′

j,k

where τi∗ is already calculated in Step 1 and v′j,k = vˆj,kvj,k is the counterfactual carbon per dollar of production in origin country j−industry k.

- 3. Calculate the optimal export subsidies on final-good industries (k > 0),


1 + ε′in,k

ε′in,k ∑

x′

ji,k = x∗

in,k =

j̸=i

1 + t∗

ji,k

λ′jn,k

1 − λin′ ,k − 1

where t∗ji,k is already calculated in Step 2, λij′ ,k = λij,kλij,k is counterfactual trade share, and the counterfactual values of foreign demand elasticities under CD-CES preferences are:

(Note that ε′in,k < 0).

ε′in,k = − 1 + (σk − 1) 1 − λin′ ,k

- 4. Calculate the optimal import tariffs in the energy industry (k = 0),

t′ni,0 = t∗ni,0 = ωni′ ,0 +τi∗ ∑

l̸=i

∑

j̸=i

ψ ̃′(i,0)

jn ρ′jl,0

ζl′ P ̃l′,0

where τi∗ is already calculated in Step 1, and the remaining variables in the equation are calculated as follows:

- (a) counterfactual values of the inverse export supply elasticity of energy, ωni′ ,0 = ∑j̸=i ψ ̃′(i,0)

jn ρ′ji,0, where ψ ̃′(i,0)

jn and ρ′ji,0 are described below;

- (b) counterfactual international energy sales shares, ρ′ji,0 = P

ni′ ,0Cni′ ,0 Yn′,0

- (c) counterfactual values of ψ ̃′(i,0) jn ≡ 1−φjφj ψ′(jni,0) Y

j′,0

Yn′,0 where ψ′(jni,0) is the entry (j, n) of matrix Ψ′(i,0) ≡ inv IN − j̸=i ∑l̸=i 1−φnφn ρ′jl,0ε′(jln,0l,0)

j,n

, measuring the exposure of country j's energy output to demand for country n's energy;

- (d) counterfactual values of own- and cross-price demand elasticities ε′(jln,0l,0)

ε′(jln,0l,0) =

 



− 1 + (σk − 1) 1 − λ′nl,0 j = n (σk − 1) λ′nl,0 j ̸= n

- (e) counterfactual values of elasticities of demand for the composite energy input (equiva-

lently, CO2 emissions) with respect to the energy input price ζl′ = − ∑k̸=0 ς Z

n′ ,k

Zn′ 1 − α′n,k ;

- (f) counterfactual values of distribution-level prices of energy, P ̃l′,0 = P ̃l,0P ̃l,0.


- 5. Optimal export subsidies in the energy industry (k = 0),


using:

1 + ε′in,0

xin′ ,0 = xin∗ ,0 =

ε′in,0 ∑

j̸=i

1 + t∗ji,0

λ′jn,0

ζn′ P ̃n′,0

1 − λin′ ,0 − Λin′ ,0 + τi∗

1 ε′in,0

,

- (a) counterfactual values of ε′in,0 ≡ ε′in(in,0,0), λ′jn,0,ζn′ , P ̃n′,0, as already calculated in Step 4, τi∗ and t∗ji,0 as already calculated in Steps 1 and 4;
- (b) Λin′ ,0 = ∑k α


′n,kYn′,kρ′ni,k

∑k α′n,kYn′,k as the fraction of energy exports re-imported via the carbon supply chain in the counterfactual equilibrium.

###### G.2.3 Numerical Algorithm to jointly Solve Mappings (a) and (b)

This section describes the algorithm that jointly solves mappings (a) and (b). The algorithm starts with an initial guess of policy variables RT and iterates between RV = g RT;B and RT = f RV;B as follows:

- 1. Start with a guess of optimal policy variables, RT = t′ji,k, xij′ ,k, τi′,k . (For example, let them be all zero.)
- 2. Given the current guess of RT, update the non-policy variables RV based on the numerical algorithm outlined in subsection G.2.1.


- 3. Using the current guess of non-policy variables RV, update the optimal policy variables RT following the computations outlined in subsection G.2.2. Denote these updated policy variables with the superscript "new" to distinguish them from their previous guess. If |τ′i(,newk ) − τi′,k| < 10−9, |t′(ninew,k ) − t′ni,k| < 10−9, |x′(ninew,k ) − xni′ ,k| < 10−9, then stop—convergence has achieved.


Otherwise, update their guesses: τi′,k = τ′i(,newk ); t′ni,k = t′(ninew,k ); and xni′ ,k = x′(ninew,k ); and, go to Step 2.

Notice that the convergence of the optimal policy variables in Step 3, combined with the convergence of non-policy variables for a given set of taxes in Step 2, ensures the convergence of all policy and non-policy variables.

###### H Extensions

###### H.1 Increasing Returns to Scale Industries à la Krugman

In this section, we derive the unilaterally optimal policy in an extension where production technologies of final goods feature increasing-returns-to-scale. For this purpose, we incorporate firm-level product differentiation and love-for-variety à la Krugman into our baseline model. Scale economies, and the inefficiency they introduce to the market outcome, occur in this setting because firms fail to fully internalize the social gains from new varieties when making entry decisions. Despite this microfoundation, this setting is also isomorphic to one in which there are external economies of scale, as we explain below. In any case, the resulting scale economies present an additional rationale for policy intervention, influencing the optimal design of carbon border taxes. We employ the optimal policy formulas derived here to assess the sensitivity of our baseline quantitative findings (pertaining to the effectiveness of Proposals 1 and 2) to the inclusion of increasing returns to scale industries.

###### H.1.1 The Economic Setting

The representative consumer maximizes a non-parametric utility aggregator Ui Cni,k n,k , where each composite consumption bundle Cni,k (corresponding to origin n–destination i–industry k) aggregates over firm-level quantities, qni,k (ω). Specifically,

γk γk−1

γk−1

,

qni,k (ω)

Cni,k =

γk dω

ω∈Ωn,k

where γk > 1 denotes the elasticity of substitution between firm varieties from the same origin country and industry. We assume that γ0 → ∞, which, as will become evident shortly, retains no love of variety for energy products that originate from energy producers within an exporter country. Firm ω operating in country n–industry k is characterized by productivity φn,k (ω). As in our baseline model, a prototypical firm combines labor and energy inputs using a CES aggregator with elasticity ς, which yields the following marginal cost based on cost minimization:

d ̄ni,k

φn,k (ω) × cn,k; cn,k = (1 − κ ̄n,k)ς w1n−ς + κ ̄nς,kP ̃n1,0−kς

cni,k (ω) =

1/(1−ς)

The cost share of carbon input is, accordingly, given by αn,k = κ ̄nς,k P ̃n,0k/cn,k 1−ς. Firms compete under monopolistic competition and charge a constant markup over marginal cost, i.e., pni,k (ω) =

γk γk−1cni,k (ω). The CES producer price index associated with output bundle Cni,k can be, accordingly, expressed as

1 1−γk

1 γk−1

dni,k φn,k

γk γk − 1

φn,k (ω)1−γk dω

cn,k, where φn,k ≡

Pni,k = M

n,k

ω∈Ωn,k

The mass of entrants is governed by the free entry condition. Each firm incurs a sunk entry cost cn,k fn(,ek), upon which its productivity is realized. The mass of entrants, Mn,k, ensures that the ex-ante profit per firm γ1

Pnn,kQn,k/Mn,k equals the entry cost, cn,k fn(,ek), in each location and industry. Namely,

k

Pnn,kQn,k γkcn,k fn(,ek)

d ̄ni,kCni,k

, where Qn,k = ∑

Mn,k =

n

Plugging Mn,k from the above equation back into our earlier expression for Pni,k determines the mass of entrants in terms of total output, Qn,k. Plugging the implied expression for Mn,k back into the CES producer price index and noting that cn,k ∝ wn (1 − αn,k)

1

ς−1, delivers

−γ1

1

Pni,k = dni,kpnn,kwn (1 − αn,k)

ς−1 Q

k

n,k

−γ1

where pnn,k collects all the constant price shifters apart from the iceberg trade cost, with the term Q

k

n,k

accounting for economies scale driven by love for variety. As before, the producer price of energy in country i is given by:

φi 1−φi

Pin,0 = Pii,0 = p ̄ii,0wi Q

i,0 ,

consistent with the implicit assumption that γ0 → ∞. The carbon emissions associated with final production can be measured as Zn,k = αn,kPnn,kQn,k/P ̃n,0k, per cost minimization. Noting that Pnn,k ∝ cn,kQ

−γ1

1 ς−1

n,k and P ̃n,0k ∝ cn,kα

n , we then obtain

k

1−γ1

ς ς−1

Zi,k = z ̄i,k × α

i,k ,

i,k × Q

k

where zi,k encompasses constant emissions shifters. From the above equation we can produce the following function that maps policy, input prices, and output scale to emission per unit of output quantity. In the case of local emissions,

 

######  

ς ς−1

κ ̄i,kP ̃i1,0−kς κ ̄i,kP ̃i1,0−kς + (1 − κ ̄i,k) wi1−ς

−γ1

i,k , where P ̃i,0k = P ̃i,0 P ̃ i,0 + τi,k.

zi,k (Pi, wi, Qi,k) = z ̄i,k

Q

k

where P ̃i,0 P ̃ i,0 is the energy price aggregator, which aggregates over the after-tax price of internationallysourced energy prices, P ̃ i,0 ∈ Pi. Energy intensity in foreign country n ̸= i, meanwhile, depends on the price of the energy variety sourced from home, P ̃in,k ∈ Pi, as well as energy prices from various foreign locations, P−i,0, and the carbon tax in that country, which is set to zero without loss of generality. Namely,

zn,k P ̃in,0, P−i,0, wi, Qi = z ̄n,k

 

######  

ς ς−1

κ ̄n,kP ̃n1,0−kς κ ̄n,kP ̃n1,0−kς + (1 − κ ̄n,k) w1n−ς

−γ1

n,k , where P ̃n,0k = P ̃n,0 P ̃in,k, P−i,0 +τ ̄n,0

Q

k

Isomorphism with External Economies of Scale. Consider an alternative formulation in which production technologies of final goods (k = 1,..., K) feature external economies of scale that are operative at the industry level. Specifically, there is a measure one of symmetric firms in each countryindustry (n, k), each with total factor productivity that equals φn,k = φ ̄n,k Qμn,kk with μk ≥ 0 denoting the scale elasticity. An individual firm does not internalize the impact of its production on the aggregate total factor productivity, and so, the producer price is given by Pnn,k = φc ̄n,k

Qn−,kμk. Per cost minimization as before,

n,k

cn,k = (1 − κ ̄n,k) w1n−ς + κ ̄n,kP ̃n1,0−kς

1/(1−ς)

1

∝ wn (1 − αn,k)

ς−1 ,

indicating that the cost share of energy input equals αn,k = κ ̄n,k P ̃n,0k/cn,k 1−ς, and the carbon emission equals Zn,k = αn,kPnn,kQn,k/P ̃n,0k. Taking note of these points, Pni,k = dni,kp(nnext,k)wn (1 − αn,k)

1

ς−1 Q−n,kμk, and Zn,k = z ̄(next,k ) × α

ς ς−1

n,k × Q1n−,kμk. This setting, therefore, is isomorphic to the above Krugman-type extension provided that p(nnext,k) = pnn,k, z ̄(next,k ) = z ̄n,k, and μk = 1/γk.

###### H.1.2 Unilaterally Optimal Policy Problem

As in our baseline model, we determine country i's unilaterally optimal policy as follow: The government in country i selects Pi = P ̃ij,k, P ̃ji,k, αi,k

to maximize the climate-adjusted national welfare, Vi Ei,P ̃i − δiZ(global), subject to equilibrium constraints.

j,k

We retrieve the unilaterally optimal taxes from the optimal policy solution, Pi∗, similar to our baseline but with an added policy instrument, sn,k, denoting production subsidies. With the added instrument, the wedges between consumer and producer prices are given by:

(1 + tni,k) (1 + sn,k) (1 + xni,k) × Pni,k, P ̃i,0k = P ̃i,0 + τi,k,

P ̃ni,k =

where tii,k = xii,k = 0, by definition. The optimal tax rates can be, therefore, determined as

P ̃ji∗,k Pji,k

, 1 + x∗

###### 1 + t∗

ji,k =

ij,k

P ̃ij∗,k/Pij,k Pii∗,k/Pii,k

−1

, 1 + s∗

=

i,k

P ̃ii∗,k Pii,k

−1

=

αi∗,kYi,k

Zi,k − P ̃i,0.

τi∗,k =

Our derivation here deals with the small open economy case, whereby producer prices in the rest of world (and aggregate variables, w−i, and E−i, ) are invariant to Pi. It is straightforward to verify that our domestic wage-neutrality result continues to hold in this setting. Hence, we can derive the first-order conditions while disregarding general equilibrium wage effects, as they are welfare neutral in the reformulated problem. With this background in mind, we derive the F.O.C.s w.r.t. each element of Pi.

###### H.1.3 First-Order Conditions

To guide the derivations, we produce the balance of budget, which requires total expenditure (Ei) to be equal to total income (Yi), as the sum of factor income and tax revenues:

Yi = Yi (Pi, wi, Pi,0,C, Zi, Qi) =wiLi + Πi (Pi,0, wi) + τi⊤Zi

+ P ̃ i,0 − Pi,0 ⊤ Ci,0 + P ̃ −i,0 − P−i,0 ⊤ C−i,0

+ P ̃ i − Pi (Pi, wi, Qi) ⊤ Ci + P ̃ −i − P−i ⊤ C−i;

where the function differs from the baseline constant-returns to scale case in that local producer prices Pi (.) depend on the local output scale, reflecting scale economies.

∂Pi,0 ∂P ̃

∂Vi (.) ∂Ei

∂Yi (.) ∂P ̃

∂Yi (.) ∂wi

∂Yi (.) ∂Pi,0

∂Yi (.) ∂C

∂Yi (.) ∂Zi

∂Yi (.) ∂Qi

∂w ∂P ̃

∂C ∂P ̃

∂Zi ∂P ̃

∂Qi ∂P ̃

+

+

+

+

+

∂Ei/∂P ̃

∂Q−i ∂P ̃

∂Q−i ∂P ̃

∂Vi (.) ∂P ̃ − δi

∂zn (.) ∂P ̃

∂z−i (.) ∂Q−i

∂Zi ∂P ̃

###### = 0

+ z−i

Qn + Q−i

###### 1

+

+

∂Z(global)/∂P ̃

Given the small open economy assumption and Lemma 1, we have:

∂Yi (.) ∂wi

∂Pi,0 ∂P ̃

∂Yi (.) ∂Pi,0

###### = 0

=

- (i) Optimal Local Prices. Consider a local price instrument P ̃ ∈ P ̃ i,τi . Extrapolating from Lemma 2 in Appendix B, the local price instruments satisfy:


∂Vi (.) ∂Ei

∂Yi (.) ∂P ̃

∂Vi (.) ∂P ̃

###### = 0

+

Also local price instruments cannot influence carbon prices abroad, indicating that ∂z∂nP ̃(.) = 0. Hence, the first-order condition with respect to t P ̃ ∈ P ̃ i, τi reduces to

∂Q−i ∂P ̃

∂Yi (.) ∂C

∂Yi (.) ∂Zi

∂Yi (.) ∂Qi

∂C ∂P ̃

∂Zi ∂P ̃

###### ∂Qi

∂Zi ∂P ̃

∂P ̃ − δ ̃i

1 = 0

+ z−i

+

+

We can simplify the above equation by differentiating the functions Yi (.) and zn (.) with respect to specific arguments, which implies:

- – ∂Y∂iC(.) ∂∂CP ̃ = ∂Y∂Ci(.)

i

∂Ci ∂P ̃ = P ̃ i − Pi ∂∂CP ̃i

- – ∂Y∂Zi(.)

i

∂Zi ∂P ̃ = ∑ τi,k ∂∂ZPi ̃,k

- – ∂∂YQi(.)

i

∂Qi ∂P ̃ = − ∑n ∑g Cin,g ∂P∂inQ,g(.)

i,g

∂Qi,g

∂P ̃ = ∑n ∑g ρin,gPii,g ∂lnP∂lninQ,g(.)

i,g

∂Qi,g ∂P ̃

- – δ ̃i ∂∂ZP ̃i + z−i ∂Q−i


∂P ̃ 1 = δ ̃i ∑k ∂∂ZPi ̃,k + ∑n̸=i ∑g 1 + ∂∂lnzlnQn,g(.)

zn,g ∂Q∂Pn ̃,g

∂Q−i

∂P ̃ + Q−i ∂z−i(.)

∂Q−i

n,g

where ρin,g = PinY,gCin,g

denotes the sales share. The the GE derivative of output with respect to policy in the above expressions can be specified in terms of demand derivatives, by noting the function

i,g

Qn,g = Qn,g Cnι,g ι,g = ∑ι dnι,gCnι,g. In particular,

∂Qn,g ∂P ̃

∂Qn,g (.) ∂Cni,g

∂Cni,g ∂P ̃

∂Cni,g ∂P ̃

.

= dni,g

=

= ∂lnP∂lninQ,g(.)

Plugging these expressions back into first-order condition, and noting that ∂∂lnzlnQn,g(.)

###### = −γ1

n,g

i,g

for all n and g, yields

g

∂Cni,g

∂Cii,g ∂P ̃

zn,g Pii,g

1 γg

ρin,g γg

+∑ τi,k −δ ̃i

P ̃ni,g − 1 + 1 −

P ̃ii,g − 1−∑

###### ∑

###### ∑

∂P ̃ −∑

Pni,g

Pii,g

g

g

n

n̸=i

Note that ∑n ρin,g = 1 and zn,0 = 0 by construction. Also, zn,g = vn,gPnn,g where νn,g = Zn,g/Yn,g is emissions per dollar value. Hence, our final expression for the first-order condition with respect to local prices can be stated as:

∂Zi,k ∂P ̃

###### = 0

###### ∑

###### ∑

g

n̸=i

###### +∑

g

γg − 1 γg

δ ̃ivi,g Pni,g

P ̃ni,g − 1 +

∂Cii,g ∂P ̃

γg − 1 γg

P ̃ii,g −

###### +∑

Pii,g

g

∂Cni,g ∂P ̃

###### + ∑

n̸=i

∂Zi,k ∂P ̃

τi,k − δ ̃i

P ̃ni,0 − Pni,0

∂Cni,0 ∂P ̃

= 0. (H.1)

- (ii) Final good export prices. Consider the export price instrument P ̃ ∈ P ̃in,k k, which regulates export levels to market n ̸= i. The export price instrument P ̃ does not directly enter the indirect utility


function of the home country, i.e., ∂V∂iP ̃(.) = 0. However, a change in P ̃ affects revenues and emissions both through direct effects on demand Cn in market n and through its general equilibrium effect on the domestic demand, Ci. The F.O.C. representing these effects is

∂Yi (.) ∂Cn

∂Yi (.) ∂Ci

∂Yi (.) ∂Zi

∂Yi (.) ∂Qi

∂Yi (.) ∂P ̃

∂Dn (.) ∂P ̃

∂Ci ∂P ̃

∂Zi ∂P ̃

###### ∂Qi

+

+

+

+

∂P ̃ −δ ̃i 1

∂Q−i ∂P ̃

∂Q−i ∂P ̃

∂z−i (.) ∂Q−i

∂Zi ∂P ̃

###### = 0

+ z−i

+ Q−i

which after reorganizing the terms and noting that ∂∂QP ̃ = ∂Q∂C(.) ∂∂CP ̃ , delivers:

∂Yi (.) ∂P ̃

∂Yi (.) ∂Cn

∂Yi (.) ∂Qi

∂Dn (.) ∂P ̃

+

+

∂Yi (.) ∂Ci −

+

∂Q−i (.) ∂Cn

∂Qi (.) ∂Cn

∂Dn (.) ∂P ̃ − δ ̃i z−i

∂Q−i (.) ∂Ci

∂Yi (.) ∂Qi

∂Qi (.) ∂Ci − δ ̃iz−i

∂Q−i (.) ∂Cn

∂z−i (.) ∂Q−i

+ Q−i

∂Yi (.) ∂Zi − δ ̃i1

∂Ci ∂P ̃

∂Zi ∂P ̃

+

∂Dn (.) ∂P ̃

= 0 (H.2)

The second line is zero, given the optimality of local prices (akin to Lemma 4 in Appendix B). The terms in the first line can be unpacked and simplified as follows by focusing on a specific instrument P ̃ = P ̃in,k:

- – ∂∂YP ̃i(.)

in,k

= Cin,k

- – ∂∂YCi(.)

n

∂Dn(.)

∂P ̃in,k = ∑g P ̃in,g − Pin,g ∂D∂Pin ̃,g(.)

in,k

- – ∂∂YQi(.)

i

∂Qi(.) ∂Cn

∂Dn(.)

∂P ̃in,k = ∑g Cin,g ∂P∂inQ,g(.)

i,g

∂Qi,g(.) ∂Cin,g

∂Din,g(.)

∂P ̃in,k = − ∑g γ1g Pin,g ∂D∂Pin ̃,g(.)

in,k

- – z−i ∂Q−i(.)


∂P ̃in,k = ∑l̸=i ∑g zl,gdln,g ∂D∂lP ̃n,g(.)

= ∑l̸=i ∑g νl,gPln,g ∂D∂lP ̃n,g(.)

∂Dn(.)

∂Cn

in,k

in,k

∂Ql,g(.) ∂Cln,g

∂Dln,g(.)

g ∑l̸=i ∑g νl,gPln,g ∂D∂lP ̃n,g(.)

∂P ̃in,k = ∑l̸=i ∑g Ql,g ∂∂zQl,g(.)

∂Q−i(.) ∂Cn

- – Q−i ∂z−i(.)


∂Dn(.)

∂P ̃in,k = −γ1

∂Q−i

l,g

in,k

Plugging these expression into Equation H.2 and recalling that the terms in the second line are zero at the optimum, yields

Cin,k +∑

g

γg − 1 γg

P ̃in,g −

Pin,g

∂Din,g (.)

∂P ̃in,k −δ ̃i ∑

###### ∑

g

l̸=i

∂Dln,g (.) ∂P ̃in,k

γg − 1 γg

###### = 0

νl,gPln,g

Using our compact notation for ∂lnD∂lnPin ̃,g(.)

∼ ε(inin,g,k) for demand elasticities and diving both sides of the expression by En yields

in,k

P ̃in,g P ̃in,g

γg − 1 γg

γg − 1 γg

ein,gε(inin,g,k) −δ ̃i ∑

vn,geln,gε(linn,,gk) = 0

ein,k +∑

###### ∑

1 −

g

g

n̸=i

where ein,k = P ̃in,kCin,k/En denotes the expenditure share. With additively separable preferences, we can simplify the above condition further by noting that ε(linn,,gk) = −1−λinλin,k,k 1 + ε(inin,k,k) , delivering:

Pin,k P ̃in,k

1

γk − 1

γk − 1 γk

εin,k − δ ̃i

###### γk ∑

1 +

[νl,kλln,k] (1 + εin,k) = 0 (H.3)

εin,k −

l̸=i

As before, εin,k ∼ ε(inin,k,k) represents the own-price elasticity of demand to condense the notation.

- (iii) Energy export prices . Consider the price P ̃in,0 of energy exported to foreign market n ̸= i. In addition to the welfare effects exerted by final good export prices, energy export prices influences the


price of the composite energy bundle, P ̃n,0, and, thus, the energy intensity zn = zn (.). Accounting for these additional effects, the F.O.C.s becomes:

∂Yi (.) ∂P ̃

∂Yi (.) ∂Cn

∂Yi (.) ∂Ci

∂Yi (.) ∂Zi

∂Yi (.) ∂Qi

∂Dn (.) ∂P ̃

∂Ci ∂P ̃

∂Zi ∂P ̃

###### ∂Qi

+

+

+

+

∂P ̃ −δ ̃i 1

∂Q−i ∂P ̃

∂Q−i ∂P ̃

∂z−i (.) ∂Q−i

∂zn (.) ∂P ̃

∂Zi ∂P ̃

###### = 0

+ z−i

+ Q−i

+ Qn

Considering that energy prices only influence the demand for energy goods, we can simply and rearrange the above equations as

+

∂Yi (.) ∂P ̃

+

∂Yi (.) ∂Ci −

∂Qi,0 (.) ∂Cn,0

∂Dn,0 (.) ∂P ̃

∂Dn,0 (.) ∂P ̃ − δ ̃iQn

∂Yi (.) ∂Cn,0

∂Yi (.) ∂Qi,0

∂zn (.) ∂P ̃

+

∂Q−i (.) ∂Ci

∂Yi (.) ∂Qi

∂Qi (.) ∂Ci − δ ̃iz−i

∂Yi (.) ∂Zi − δ ̃i1

∂Ci ∂P ̃

∂Zi ∂P ̃

+

= 0 (H.4)

The second line is zero, given the optimality of local prices (akin to Lemma 4 in Appendix B). The terms in the first line can be unpacked and simplified as follows by focusing on a specific instrument P ̃ = P ̃in,k:

- – ∂∂YP ̃i(.)

in,0

= (1 − Λin,0) Cin,0 following Lemma 6 in Appendix B, with Λin,0 ≈ 0 for small open economy.

- – ∂∂YCi(.)

n,0

∂Dn,0(.)

∂P ̃in,0 = P ̃in,0 − Pin,0 ∂D∂Pin ̃,0(.)

in,0

- – ∂∂YQi(.)

i,0

∂Qi,0(.) ∂Cn,0

∂Dn,0(.)

∂P ̃in,0 = −γ1

0

Pin,0 ∂D∂Pin ̃,0(.)

in,0

- – δ ̃iQn ∂z∂nP ̃(.) = δ ̃i ∑g Qn,g ∂z∂nP ̃,g(.)


∂P ̃n,0 ∂P ̃in,0 = δ ̃i ∑g znP, ̃gQn,g

∂ ln P ̃n,0 ∂lnP ̃in,0 = δ ̃i P ̃Zn

∂ lnzn,g(.) ∂ ln P ̃n,0

ζnλin,0 = −δ ̃i P ̃ζn

Cin,0

n,0

n,0

in,0

in,0

Plugging these expression into Equation H.4 and recalling that the terms in the second line are zero at the optimum, yields

ζj P ̃n,0

Cin,0 1 − δ ̃i

γ0 − 1 γ0

+ P ̃in,0 −

Pin,0

∂Din,0 (.) ∂P ̃in,0

###### = 0

Since we have assumed that there is no love-of-variety for energy, i.e., γ0 → ∞, we can set γ0γ−1

= 1. Considering this and using our compact notation for ∂∂lnDlnPin ̃,0(.)

0

∼ εin,0 for demand elasticities we can further simplify the F.O.C. with respect to energy export prices as

in,0

ζj P ̃j,0

1 − δ ̃i

Pij,0 P ̃in,0

+ 1 −

εin,0 = 0. (H.5)

###### H.1.4 Jointly Solving the system of First-Order Conditions

Solving the system of F.O.C.s with respect to all elements of Pi (Equations H.1, H.3, and H.5) and following the same steps as in our baseline derivation (Appendix B) yields the following characterization of the unilaterally optimal policy with increasing-returns-to-scale final-good industries:



τi∗ = δ ̃i ∼ δiP ̃i, si∗,k = γ 1

k−1 [carbon tax & domestic subsidy] t∗ni,k = t ̄i + γkγ−1



τi∗vn,k t∗ni,0 = t ̄i [import tax (energy and non-energy)] 1 + xin∗ ,k = (1 + t ̄i) σkσ−1

k

+ γkγ−1

τi∗ ∑j̸=i λjn,kvj,k σkσ−1

[export subsidy (non-energy)] 1 + xin∗ ,0 = (1 + t ̄i) σ0σ−1

k

k

k



+ τi∗ σ1

ζn

P ̃n,0 [export subsidy (energy)]

0

0

In the above representation, t ̄i is an arbitrary tax shifter, which accounts for the multiplicity of optimal policy schedules, according to Lerner symmetry. This tax shifter scales up all nominal variables associated with country i by a factor of (1 + t ̄i). Less visible in the expressions, the shifter also scales the carbon tax and associated carbon border adjustments through its effect on the consumer price index P ̃i.

The above formulas differ from the baseline constant-returns-to-scale version of our model in two aspects. First, they incorporate domestic subsidies addressing the distortions that arise from different degrees of scale economies across industries. However, these subsidies are carbon-blind, since carbon is already optimally priced through τi∗. Second, the carbon border adjustment includes a scale adjustment, γkγ−1

∈ (0,1). The rationale is that carbon border taxes curb emissions by reducing the scale of output. Under increasing-returns-to-scale industries, the carbon intensity (Z/Q) increases with a reduction in output (Q), according to: QZi,k

k

−γ1

ς ς−1

= z ̄i,k × α

i,k . Thus, the optimal carbon border tax must strike a balance between a lower output and a higher unit carbon content. This tradeoff applies the adjustment, γkγ−1

i,k × Q

k

i,k

, to carbon border taxes.

k

###### H.2 Melitz Model with Firm Selection

This appendix extends the Krugman-type model presented in Appendix H.2 to accommodate firm selection into export markets à la Melitz (2003). We show that the Melitz-type model is isomorphic to the Krugman-type model under a set of standard assumptions. Our derivation closely follows Kucheryavyy et al. (2023). The setting is akin to that described in Appendix H.1, but with two alterations: (i) A pool of potential firms can pay an entry cost ci,k fi(,ke) to draw their total factor productivity from

a Pareto distribution, Gi,k(φ) = 1 − φ−θk. (ii) After realizing their total factor productivity, firms must pay a fixed export cost yn f ̄in(x,)k to serve market n, which is paid in terms of the income per worker, yn, in the destination market.

As before, Mi,k denotes the mass of firms that pay the fixed entry cost to operate from (i, k). Given the fixed export cost, only firms with a productivity above φin∗ ,k serve market n. The CES price index of the national-level composite (in, k) is, thus, Pin,k = Mi,k φ∞∗

1

1−γk

1−γk , which can be written in terms of the productivity cutoff, φin∗ ,k, if θk > γk − 1. Specifically,

1 φγ ̄kd ̄in,kci,k

dGi,k (φ)

in,k

γk−θk−1

θk θk − γk + 1

Mi,k γ ̄kd ̄in,kci,k 1−γk φin∗ ,k

Pin1−,kγk =

(H.6)

To determine the mass of operating firms, note that the profits of a firm with productivity φ collected from sales in market n are given by πin,k(φ) = γ1

pin,k (φ) qin,k (φ) − yn f ̄in(x,)k. The CES demand function facing the firm is qin,k (φ) = pin,k (φ)−γk Pinγk,k−1Xin,k, where we use Xin,k ≡ Pin,kCin,k to compactly denote aggregate sales.65 The productivity cutoff, φin∗ ,k, is determined by the zero cut-off profit condition, πin,k φij∗,k = 0, and can be written as a function of the price index, Pin,k,

k

######  

######  

1 1−γk

d ̄in,kci,k Pin,k

γk γk−1

Xin,k γkyn f ̄in(x,)k

φin∗ ,k =

. (H.7)

It follows from combining Equations (H.6) and (H.7) that (Aggregate Marketing Costs)in,k = θk−θγk+1

kγk × Xin,k. Therefore, the gross ex-ante profits of a firm operating from (i, k) are ∑n γ1k − θk−θγk+1

kγk Xin,k =

γk−1 θkγk Pii,kQi,k. The free entry condition, which equates the gross ex-ante profits to the entry costs, there-

Pii,kQi,k ci,k f ̄i(,ke)

fore, yields Mi,k = γθk−1

. Consolidating these points with Equations (H.6) and (H.7) and noting that yi ≡ Yi/L ̄i, the aggregate price index of national-level varieties can be obtained as:

kγk

−11−−γσkk

(γk−θk−1)ρk

Pin1−,kσk = Γ ̄in,k × d ̄in,kci,k −(1+θk)ρk × Qiρ,kk × P

n,k (H.8)

−1

where Γ ̄in,k is a constant and ρk ≡ 1 + σθk+1

.66 To establish that the present model is isomorphic to the Krugman-type model examined in Section H.1, we define the following composite elasticities:

k−1 − γθk

k−1

σk(Melitz) ≡ 1 + (1 + θk) ρk, γk(Melitz) ≡ (1 + θk) (H.9) Noting that (1 − σk) + 11−−γσk

(γk − θk − 1) ρk = − (1 + θk) ρk, we define the following variety-level auxiliary price index,

k

1/ 1−σk(Melitz) in,k × d ̄in,k × ci,k × Q−1/γ

(Melitz) k

Pin,k = Γ ̄

i,k (H.10)

- 65More specifically, demand is determined by after-tax consumer prices as qin,k (φ) = p ̃in,k (φ)−γk P ̃inγk,k−1X ̃in,k, but since all varieties associated with triplet (ni, k) are subjected to the same tax, we can write demand alternatively in terms of pre-tax prices.
- 66 Specifically, Γ ̄in,k has the following representation:


######  

 

  1

######  

ρk γk1−−θγk−1

ρk

βn,kL ̄n γk f ̄in(x,)k

[γk/ (γk − 1)]−(1+θk) f ̄i(,ke)

− γk1−−θγkk−1

k

Γ ̄in,k =

×

γ

k

θk − γk + 1

The auxiliary price index, described by Equation (H.10), is closely related to the true price index, Pij,k, according to:

1−σk(Melitz)

1−σk

Pin,k Pn,k

Pin,k Pn,k

= λin,k

=

1 1−σ

(Melitz) k

(Melitz) k .

Using the above expressions and noting that Pn1,−kσk = ∑i Pin1−,kσk, we obtain Pn,k = ∑i P1−σ

in,k

Next, we introduce taxes under the standard assumption that they are applied prior to the markup, acting as a cost-shifter. Taking similar steps as in the above derivations, we get the following formulation for consumer prices indexes and trade shares:

(Aggregate Price Index- Melitz) P ̃n,k = ∑

i

(Melitz) k

P ̃1−σ

in,k

1 1−σ

(Melitz) k

(Melitz) k

P ̃1−σ

in,k

(Aggregate Demand Function - Melitz) Din,k Ei,P ̃ i =

βi,kEi,

(Melitz) k

∑j P ̃1−σ

ij,k

where P ̃in,k is the consumer price index which is determined by the producer price index and taxes

- as below.


1/ 1−σk(Melitz) in,k

(1 + tin,k) (1 + xin,k) (1 + si,k)

P ̃in,k =

Pin,k, Pin,k = Γ ̄

(Melitz) k

d ̄in,kci,k Q−1/γ

i,k

Lastly, the balance-of-budget condition entails that Ei = Yi, where total income is given by following

(Balance of Budget - Melitz) Yi = ρi [wiL ̄i + riR ̄i + Ti]

−1

with ρn ≡ 1 − ∑k θk−θkγγkk+1βn,k

denoting a correction that accounts for income from fixed cost payments. The wage and rental rates are determined by factor market clearing conditions as in earlier models, and so are the tax revenues. Letting P ̃i = ∏k P ̃iβ,ki,k denote the consumer price index, the unilaterally optimal policy maximizes welfare, Wi = ρi (wiL ̄i + riR ̄i + Ti) /P ̃i − δiZ(global) subject to the equilibrium conditions specified above. Considering the exact correspondence between the equilibrium conditions in the Melitz-Pareto model and the Krugman model studied in Appendix H.2, we can deduce that the unilaterally optimal policy for a small open economy are described by:



τi∗ = δ ̃i(Melitz) ∼ ρδi

P ̃i, si∗,k = 1

[carbon tax & domestic subsidy]

γk(Melitz)−1

i

(Melitz) k −1

t∗ni,k = t ̄i + γ

τi∗vn,k t∗ni,0 = t ̄i [import tax (energy & non-energy)] 1 + xin∗ ,k = (1 + t ̄i) σ



γk(Melitz)

(Melitz) k −1

(Melitz) k −1

(Melitz) k −1

+ γ

τi∗ ∑j̸=i λjn,kvj,k σ

[export subsidy (non-energy)]

σk(Melitz)

γk(Melitz)

σk(Melitz)



1 + xin∗ ,0 = (1 + t ̄i) σ0σ−1

+ τi∗ σ1

ζn

P ̃n,0 [export subsidy (energy)]

0

0

###### I Additional Figures and Tables

Figure A.2: Industry-level Share of Global Emissions vs Trade-to-GDP Ratio

Notes: This figure shows the scatter plot of CO2 emission for each industry as a share of total emissions against industry-level trade-to-GDP ratios.

Figure A.3: Unilaterally Optimal Carbon Import Taxes of the EU

Notes: This figure shows for every industry the carbon import taxes adopted optimally and unilaterally by the EU. Holding an industry fixed, the unilaterally optimal import taxes differ across exporting countries since the carbon intensity of imported goods (carbon content per dollar of sales) varies across exporting countries. For each industry, the figure shows the 10th percentile, median, and 90th percentile of these carbon border tax rates across countries. These numbers are produced using the carbon disutility cost, equivalent to 53.2 $/tCO2, for the EU. In the absence of general equilibrium effects, adopting a higher carbon disutility cost for the EU proportionately scales up each point in the figure.

Figure A.4: Welfare Gains of Staying vs Leaving the Club-of-all-nations

(a) Core: EU (b) Core: EU+US

(c) Core: EU+US+China Notes: This figure shows the percentage change to welfare of staying relative to withdrawing unilaterally for each noncore country in different scenarios of the climate club: In Panel (a), the EU is the sole core member and the carbon tax target is 36 ($/tCO2). In Panel (b), the EU and US are the core members and the carbon tax target is 53 ($/tCO2). In Panel (c), the EU, US, and China are the core members and the carbon tax target is 89 ($/tCO2). In all three cases, the carbon tax target is the maximal target under which the club-of-all-nations emerges as the unique Nash equilibrium. In Panel (a) and (b), if we raised the tax target, the cub-of-all-nations would be still an equilibrium but not the unique equilibrium. But in Panel (c), if we raised the tax target, the club-of-all-nations would not be an equilibrium anymore. As shown in Panel (c), India is a marginal country that would withdraw if we raised the tax target. In addition, we evaluate the gains for core countries by comparing their welfare in the final outcome of the club relative to the status quo (not relative to the case where they unilaterally withdraw). Relative to the status quo: in case (a), the EU's welfare increases by 0.68%; in case (b), the welfare of the EU and US, respectively, increases by 0.85% and 0.10%; and in case

- (c), the welfare of the EU, US, and China increases, respectively, by 1.06%, 0.01%, and 0.39%.


Figure A.5: Carbon Disutility Costs: Baseline vs Alternative Specification

Notes: This figure shows the carbon disutility cost, δ ̃i, for each country in our main specification versus an alternative specification, as discussed in Section 6.1. In both specifications, the sum, ∑i δ ̃i, equals the social cost of carbon at 156 ($/tCO2). In our main specification, the relative value of δ ̃i is larger for more populated countries, and controlling for population size, it is proportional to countries' environmentally-related taxes per unit of GDP. In the alternative specification, the relative value of δ ̃i is set based on the estimates of country-level social cost of carbon taken from Ricke et al. (2018).

Figure A.6: The Unilateral Policy Frontier of the EU

Notes: This figure shows the frontier of the EU's unilateral policy (EU as "Home") obtained from varying the weights that the EU assigns to the welfare of non-EU countries. The frontier illustrates the percentage change in the EU's welfare on y-axis against the percentage change in the ROW's welfare on x-axis (as an aggregation over the welfare of all non-EU countries). Each point on the frontier corresponds to a common weight that the EU assigns to nonEU countries. The maximum possible change in the EU's welfare corresponds to the point labelled as "Unilaterally Optimal" which is obtained when the EU assigns a zero weight to the ROW. By increasing ROW's weight from zero to positive values, we move along the frontier toward the right-hand side of the Unilaterally Optimal point. The point labelled as "Externality-Free" corresponds to the case where the EU's unilateral policy preserves the ROW's welfare relative to the status quo. By decreasing ROW's weight from zero to negative values, we move along the frontier to the left-hand side of the Unilaterally Optimal point. The point labelled as "Maximal Sanction" corresponds the case where the EU's policy maximally hurts the ROW without reducing its own welfare. See Appendix E.2 for details including the policy formulas.

- Figure A.7: The EU Unilateral Policy's Impact on Welfare and Emissions Along the Frontier


Notes: These figures show welfare and carbon emission changes in response to EU's unilateral policy (EU as "Home") obtained from varying the weight that the EU assigns to the welfare of non-EU countries. The x-axis shows the common weight that the EU assigns to non-EU countries. The y-axis shows the percentage change in welfare (three top figures) and carbon emissions (bottom three figures) in the EU, ROW as aggregate of non-EU countries, and the world. See Appendix E.2 for details including the policy formulas.

- Figure A.8: Model Predictions vs Actual Emissions Response to Observed Carbon Tax Changes


(a) (b) Notes: Panel (a) displays the model-predicted changes in CO2 emissions (∆Z(model)) for each country in response to the observed changes in average carbon taxes from 2014 to 2022 (∆τ(data)). The predictions are based on our model calibrated to 2014 data as the baseline year; and, the year 2022 is the most recent year with available carbon tax and emissions data. The average carbon tax is calculated as the total carbon tax revenue in a country divided by the country's total CO2 emissions, using data from the World Bank Carbon Pricing Dashboard. This differs from implied carbon prices of specific policies—for example, the EU Emissions Trading System (EU-ETS) permit price, since EU countries have other climate policies and the EU-ETS covers only part of EU emissions. Panel (b) shows the difference between the predicted and actual CO2 emission changes over this period (∆Z(model) − ∆Z(data)). This difference is visually illustrated using the red double arrows for the USA, EU, and India. The difference between observed and predicted changes can help validate our model in the spirit of the IV-based test proposed by Adao et al. (2024). Crucially, note that our exercise remains suggestive due to data limitations. With that caveat, if the correlation between ∆Z(model) − ∆Z(data)

and ∆τ(data) is indistinguishable from zero, we cannot reject the null that our model is misspecified. The correlation between the noted variables is 0.17 with a p-value of 0.49, which is statistically indistinguishable from zero.

- Figure A.9: CO2 Emission Reduction in Response to Globally Optimal Carbon Tax at Different Values of the SC-CO2


Notes: This figure compares our model's predicted global emission reductions to projections from other leading studies. The solid black line shows the percent reduction in global CO2 emissions under the globally optimal carbon tax in our model, evaluated at different social costs of CO2. The star indicates our model's predicted reduction under a social cost of $156/tCO2, which is our preferred value. The other dots represent reductions predicted by other studies: (1) DICE-2023 represents the predicted emissions reduction in 2050 relative to a baseline without counterfactually elevated carbon prices (Barrage and Nordhaus 2023). (2) CGE-1 to CGE-4 are average projected reductions across 10 computable general equilibrium (CGE) models, each projecting global emission reduction in 2030 relative to baselineSee Table 1 in Böhringer et al. (2021) for the list of models and Makarov et al. (2021) and Chepeliev et al. (2021) for further illustrations. (3) IMF-ENV represents projected emissions reduction under the International Monetary Fund's recursive dynamic neoclassical model for 2030 relative to baseline (Chateau et al. 2022). (4) Kohlscheen et al represents empirical estimate of emission reductions from various climate policies' implied carbon pricing across 121 countries (Kohlscheen et al. 2021).

Figure A.10: Emission Changes in Proposal 1: CRS vs IRS

Notes: This figure shows CO2 emission changes from carbon border taxes under Proposal 1 for each country and at the level of the world, for the main model with constant-returns-to-scale (CRS) final-goods technologies and in the extended model with increasing-returns-to-scale (IRS) final-goods technologies.

Table A.2: Accounting of CO2 Emissions

Direct Emission Total Emission MtCO2 Share MtCO2 Share Energy Types

Coal 155 0.5% 0 0.0% Crude Oil 282 0.9% 0 0.0% Natural Gas 188 0.6% 0 0.0% Refined Oil 1033 3.4% 0 0.0% Electricity and Gas Manuf. 12920 42.6% 0 0.0% Aggregate 14578 48.1% 0 0.0%

###### Downstream Industries

- 1 Agriculture 512 1.7% 945 3.1%
- 2 RO of Mining 158 0.5% 411 1.4%
- 3 Food 333 1.1% 731 2.4%
- 4 Textiles 101 0.3% 415 1.4%
- 5 Wood 33 0.1% 116 0.4%
- 6 Paper 174 0.6% 469 1.5%
- 7 Chemicals 890 2.9% 2106 6.9%
- 8 Plastics 130 0.4% 390 1.3%
- 9 Mineral 1369 4.5% 1895 6.2%
- 10 Metals 1392 4.6% 3260 10.7%
- 11 Machinery and Electronics 149 0.5% 660 2.2%
- 12 Transport Equipment 60 0.2% 266 0.9%
- 13 Manuf, Nec 57 0.2% 125 0.4%
- 14 Construction 175 0.6% 329 1.1%
- 15 Retail and Wholesale 163 0.5% 807 2.7%
- 16 Transportation 5089 16.8% 6082 20.1%
- 17 Other Services 908 3.0% 3256 10.7% Aggregate 11693 38.6% 22261 73.4%


Households 4056 13.4% 8066 26.6% Global 30327 100.0% 30327 100.0%

Notes: This table shows CO2 emissions by industries and households, based on direct and total emissions, with "total emissions" including direct and indirect CO2 emissions associated with purchases of energy. The carbon accounting shown in this table requires us to exclude non-CO2 greenhouse gas emissions and CO2 emissions associated with manufacturing process that do not arise from using fossil fuel energy. See Section 4.2 for a detailed description, and note that our procedure ensures the accounting of carbon flows.

Table A.3: Estimates of Trade Elasticity Parameters

Industry Industry Code (σk) Obs. Agriculture 1 4.80 28,228

- ( 0.41)

Other Mining 2 11.16 49,255

- ( 1.17)


Food 3 4.80 28,228

( 0.41)

Textiles 4 5.25 13,418

- ( 0.79)

Wood 5 7.50 7,424

- ( 1.94)

Paper 6 7.55 8,728

- ( 2.00)


Chemicals 7 9.60 25,464

( 0.93)

Plastic 8 9.60 25,464

- ( 0.93)

Minerals 9 6.27 9,482

- ( 1.60)

Metals 10 6.99 12,548

- ( 2.17)


Electronics & Machinery 11 4.98 13,148

( 1.69)

Motor Vehicles 12 5.88 12,742

( 1.36)

Other Mfg 13 5.80 12,498

( 1.05)

Energy 101-105 11.16 49,255

( 1.17)

Notes: This table reports our estimated trade elasticity parameters based on the specification described in Section 4.2.

Table A.4: Estimation: Energy Demand Elasticity

(1) (2) (3) Estimate -0.93 -0.63 -0.65 S.E. (0.14) (0.14) (0.17) Industry FE Y Y Y Country FE N N Y Additional Controls N Y N R-squared 0.46 0.52 0.63 Observations 2040 2006 2040

Notes: This table reports OLS estimates of the energy demand elasticity (−ς), based on Equation (27). Standard errors are clustered

- at the country level. Each observation is a pair of country-industry across 120 countries and 17 non-energy industries. Energy use for each industry aggregates purchases of refined oil products, electricity and manufactured gas in oil equivalent units. Total cost for each industry equals payments to factors of production and intermediate inputs. All columns include an industry FE and Column


(3) additionally includes a country FE. Column (2) controls for country-level effects using variables that approximate country-wide unobserved production costs and energy demand, consisting of industrial expenditure per worker, national energy reserves, and domestic expenditure share in the energy sector.

- Table A.5: Climate Club Game with the EU as Core at Maximum Carbon Tax Target ($/tCO2) Core EU

- Round 1 Brazil, Korea, Turkiye, RO Eurasia
- Round 2 China
- Round 3 Australia, Indonesia, India, Japan, Russia, United States, Africa, RO Asia and Oceania, RO Middle East
- Round 4 Canada, Mexico, Saudi Arabia, RO Americas


Notes: This table shows the convergence of our solution method via successive rounds to a club of all nations, for the case in which the EU is the sole core member and the carbon tax target is at its maximal value of 36 $/tCO2. A country unilaterally evaluates to join or leave at each round given the club configuration at its previous round.

- Table A.6: Climate Club Game with the EU, US & China as Core at Maximum Carbon Tax Target ($/tCO2)


Core EU, China, United States

- Round 1 Australia, Brazil, Canada, Japan, Korea, Mexico, Turkiye, Africa, RO Americas, RO Eurasia
- Round 2 Indonesia, Russia, Saudi Arabia, RO Asia and Oceania, RO Middle East
- Round 3 India


Notes: This table shows the convergence of our solution method via successive rounds to a club of all nations, for the case in which the EU, US, and China are core members and the carbon tax target is at its maximal value of 89 $/tCO2. A country unilaterally evaluates to join or leave at each round given the club configuration at its previous round.

Table A.7: Noncooperative Outcomes under Alternative Specifications

Non-Cooperative Globally Carbon+Border Tax Carbon Tax Border Tax First Best

Main Specification -6.6% -5.4% -1.2% -41.0% Alt SCC -4.4% -3.3% -1.2% -28.6% Alt Carbon Disutility -4.6% -3.5% -1.1% -41.4% Alt Trade Elast -6.6% -5.4% -1.2% -40.9% Alt Energy Demand Elast -8.0% -6.6% -1.5% -48.9% Alt Energy Supply Elast -4.1% -3.3% -0.9% -33.8%

- Notes: This table shows outcomes under Proposal 1 (carbon border taxes) for five alternative specifications regarding the social cost of carbon, disutility parameters from carbon emissions, trade elasticity parameters, energy input demand elasticity and energy supply elasticity. See Section 6.1 for details of of these alternative parameterizations. The table shows the percentage change in global carbon emission under noncooperative carbon & border taxes (first column) and under only carbon taxes (second column). The implied difference between these two outcomes corresponds to the column under "Border Tax." As a benchmark for comparison, the emission reduction under the globally first best is reported in the last column.

Table A.8: Climate Club Outcomes under Alternative Specifications

Specification Core Members Max Tax ∆ CO2 ∆ CO2 Col 2 divided

($/tCO2) Climate Club First Best by Col 3 (1) (2) (3) (4)

Alt SCC EU 25 -9.7% -28.6% 0.34 EU+US 52 -18.3% -28.6% 0.64 EU+US+CHN 89 -28.0% -28.6% 0.98

Alt Carbon Disutility EU 33 -12.4% -41.4% 0.30 EU+US 68 -22.8% -41.4% 0.55 EU+US+CHN 94 -29.1% -41.4% 0.70

Alt Trade Elasticity EU 36 -13.3% -40.9% 0.33 EU+US 66 -22.2% -40.9% 0.54 EU+US+CHN 89 -27.9% -40.9% 0.68

Alt Energy Demand Elasticity EU 34 -15.3% -48.9% 0.31 EU+US 50 -21.4% -48.9% 0.44 EU+US+CHN 80 -31.1% -48.9% 0.64

Alt Energy Supply Elasticity EU 21 -5.1% -33.8% 0.15 EU+US 52 -12.4% -33.8% 0.37 EU+US+CHN 82 -19.1% -33.8% 0.57

- Notes: This table shows outcomes under Proposal 2 (Climate Club), for three scenarios of core countries (EU, EU+USA, EU+USA+China), and for five alternative specifications regarding the social cost of carbon, disutility parameters from carbon emissions, trade elasticity parameters, energy input demand elasticity and energy supply elasticity. See Section 6.1 for details of these alternative parameterizations. The table shows the maximal carbon tax target that supports the club-of-all-nation, percentage change in global carbon emission, the percentage change emission reduction achieved under globally first best, and the fraction of the first-best emission reduction that the club replicates.


Table A.9: Non-Cooperative and Cooperative Policy Outcomes under Increasing Returns to Scale

Non-Cooperative Globally Cooperative Carbon + Border Tax Carbon Tax

Country ∆CO2 ∆V ∆W ∆CO2 ∆V ∆W ∆CO2 ∆V ∆W

Australia -1.8% -0.7% -0.6% 1.7% -0.0% 0.1% -36.1% -1.8% -1.1% EU -19.0% -0.3% -0.1% -19.4% -0.0% 0.2% -34.7% -0.5% 1.4% Brazil -2.4% -0.1% 0.3% -0.8% 0.0% 0.3% -35.8% 0.7% 2.8% Canada 4.1% -2.0% -2.0% 3.8% -0.0% 0.0% -40.0% -1.6% -1.1% China -8.2% -0.2% -0.0% -7.5% 0.0% 0.1% -36.0% -1.4% -0.4% Indonesia 0.1% -0.3% -0.2% 2.1% -0.0% 0.1% -40.6% -2.9% -2.5% India -4.8% -0.5% 0.3% -5.0% 0.0% 0.7% -43.4% 6.6% 12.6% Japan -1.7% -0.3% -0.2% -0.5% 0.0% 0.1% -35.7% -1.9% -1.1% Korea 0.6% 0.1% 0.3% 0.9% 0.0% 0.2% -36.5% 1.5% 2.9% Mexico 3.8% -1.7% -1.7% 2.9% -0.0% 0.0% -38.9% -1.1% -0.9% Russia 6.1% -1.5% -1.5% 3.6% -0.2% -0.2% -41.8% 0.2% 0.2% Saudi Arabia 8.7% -4.0% -4.0% 5.9% -0.6% -0.6% -39.8% -6.7% -6.6% Turkey -3.7% -0.7% -0.0% -0.0% 0.1% 0.7% -36.4% 3.0% 8.3% USA -3.7% -0.4% -0.3% -1.6% 0.0% 0.0% -39.6% -2.0% -1.7% Africa -12.8% -1.5% -0.3% -9.2% -0.1% 1.1% -39.8% 10.7% 22.1% RO Americas -5.5% -0.7% -0.3% -2.8% -0.0% 0.4% -38.6% 2.9% 6.3% RO Asia -5.0% -1.3% -1.2% -0.4% 0.0% 0.2% -37.9% -0.0% 1.2% RO Eurasia 0.4% -1.3% -1.3% 3.8% -0.1% -0.1% -43.4% -0.9% -0.7% RO Middle East 2.7% -2.8% -2.8% 4.3% -0.3% -0.3% -40.9% -1.2% -1.0%

Global -5.9% -0.6% -0.3% -4.8% -0.0% 0.2% -38.1% -0.5% 1.0%

Notes: For the extended version of our model a la Krugman that features increasing returns to scale in final good industries, this table shows for every country the change to CO2 emission, real consumption, and welfare under noncooperative and cooperative policy equilibrium. Here, the baseline corresponds to an equilibrium in which each country's import tariffs and domestic carbon taxes are set at their applied rates in 2014, export subsidies are zero, and production subsidies correct for markup misallocation. The Krugman-type extension of our model and the optimal policy formulas in that setting are presented briefly in Section 6.3, with all the details provided in Section H.1 of the appendix.

Table A.10: Climate Club Outcomes under Increasing Returns to Scale

Max Carbon Reduction in Core Price Target ($/tCO2) World CO2

EU 34 14.8% EU+USA 46 18.6% EU+USA+CHN 86 29.3%

Notes: For the extended version of our model a la Krugman that features increasing returns to scale in final good industries, this table shows the climate club outcomes of the maximal carbon price target and the corresponding reduction in global CO2 emissions for three scenario of the core countries (EU, EU+USA, EU+USA+China). The Krugman-type extension of our model and the optimal policy formulas in that setting are presented briefly in Section 6.3, with all the details provided in Section H.1 of the appendix.

###### Appendix References

###### References

Adao, Rodrigo et al. (2024). "Putting Quantitative Models to the Test: An Application to Trump's Trade War". In: Forthcoming at Quarterly Journal of Economics. Barrage, Lint and William D Nordhaus (2023). Policies, Projections, and the Social Cost of Carbon: Results from the DICE-2023 Model. Tech. rep. National Bureau of Economic Research. Becko, John Sturm (2024). "A theory of economic sanctions as terms-of-trade manipulation". In: Journal of International Economics 150, p. 103898.

Böhringer, Christoph et al. (2021). "Climate policies after paris: Pledge, trade and recycle: Insights from the 36th energy modeling forum study (emf36)". In: Energy Economics 103, p. 105471. Caliendo, Lorenzo and Fernando Parro (2015). "Estimates of the Trade and Welfare Effects of

NAFTA". In: The Review of Economic Studies 82.1, pp. 1–44. Chateau, Jean et al. (2022). Economic and environmental benefits from international cooperation on climate policies. International Monetary Fund. Chepeliev, Maksym et al. (2021). "Distributional impacts of carbon pricing policies under the Paris Agreement: Inter and intra-regional perspectives". In: Energy Economics 102, p. 105530. Costinot, Arnaud et al. (2015). "Comparative advantage and optimal trade policy". In: The Quar-

terly Journal of Economics 130.2, pp. 659–702. Horn, Roger A and Charles R Johnson (2012). Matrix analysis. Cambridge university press. Kohlscheen, Emanuel et al. (2021). "Effects of Carbon Pricing and Other Climate Policies on CO 2

Emissions". In. Kortum, Samuel S and David A Weisbach (2021). "Optimal unilateral carbon policy". In. Kucheryavyy, Konstantin et al. (2023). "Grounded by gravity: A well-behaved trade model with

industry-level economies of scale". In: American Economic Journal: Macroeconomics 15.2, pp. 372– 412.

Lashkaripour, Ahmad and Volodymyr Lugovskyy (2023). "Profits, scale economies, and the gains

from trade and industrial policy". In: American Economic Review 113.10, pp. 2759–2808. Makarov, Igor et al. (2021). "Russia and global green transition: risks and opportunities". In. Melitz, Marc J (2003). "The impact of trade on intra-industry reallocations and aggregate industry

productivity". In: econometrica 71.6, pp. 1695–1725. Ossa, Ralph (2011). "A "new trade" theory of GATT/WTO negotiations". In: Journal of Political Economy 119.1, pp. 122–152. Ricke, Katharine et al. (2018). "Country-level social cost of carbon". In: Nature Climate Change 8.10, pp. 895–900.

65
