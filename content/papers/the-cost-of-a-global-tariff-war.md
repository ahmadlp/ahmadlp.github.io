---
title: 'The Cost of a Global Tariff War: A Sufficient Statistics Approach'
slug: the-cost-of-a-global-tariff-war
status: published
date: '2021-07-01'
display_date: July 2021
venue: Journal of International Economics
authors:
- Ahmad Lashkaripour
coauthors: []
abstract: Tariff wars have reemerged as a serious threat to the global economy. Yet
  measuring the prospective cost of a global tariff war remains computationally prohibitive,
  unless we restrict attention to a small set of countries and industries. This paper
  develops a new methodology that measures the cost of a global tariff war in one
  simple step as a function of observable shares, industry-level trade elasticities,
  and markup wedges. Applying this methodology to data on 44 countries and 56 industries,
  I find that (i) the prospective cost of a global tariff war has more-than-doubled
  over the past fifteen years, with small downstream economies being the most vulnerable.
  (ii) Meanwhile, due to the rise of global markup distortions, the potential gains
  from cooperative tariff policies have also elevated to unprecedented levels.
summary: This paper develops a tractable way to estimate the cost of a global tariff
  war using observable shares, trade elasticities, and markup wedges. It shows that
  tariff-war losses and the gains from cooperation both rose sharply over time.
keywords:
- tariff war
- sufficient statistics
- trade policy
- markups
- retaliation
topics:
- trade-policy
- tariffs-and-retaliation
- markups-scale-economies-and-trade
body_source: latex
latex_dir: latex-src/the-cost-of-a-global-tariff-war
latex_main: Trade_War_R2.tex
latex_engine: pdflatex
pdf_url: Tariff_War_Lashkaripour.pdf
markdown_url: sources/the-cost-of-a-global-tariff-war.md
canonical_url: https://alashkar.pages.iu.edu/papers/the-cost-of-a-global-tariff-war.html
updated_at: '2026-04-02'
sort_order: 7
published_url: https://www.sciencedirect.com/science/article/abs/pii/S0022199620301343
slides_url: null
working_paper_url: null
online_appendix_url: Tariff_War_Lashkaripour_Online_Appendix.pdf
dashboard_url: jie-dash/index.html
replication_slug: global-tariff-war-replication
raw_replication_url: Replication_Page_Tariff_War.html
---

## Machine-readable full text

This section was extracted with OpenDataLoader PDF from the hosted PDF so the full text is accessible in HTML and Markdown.

## Abstract

Tariff wars have reemerged as a serious threat to the global economy. Yet measuring the prospective cost of a global tariff war remains computationally prohibitive, unless we restrict attention to a small set of countries and industries. This paper develops a new methodology that measures the cost of a global tariff war in one simple step as a function of observable shares, industry-level trade elasticities, and markup wedges. Applying this methodology to data on 44 countries and 56 industries, I find that (i) the prospective cost of a global tariff war has more-than-doubled over the past fifteen years, with small downstream economies being the most vulnerable. (ii) Meanwhile, due to the rise of global markup distortions, the potential gains from cooperative tariff policies have also elevated to unprecedented levels.

## 1 Introduction

The global economy is entering a new era of tariffs, with many economic leaders warning against the eminent threat of a global tariff war. Just recently, Christine Lagarde, head of the International Monetary Fund, labeled the escalating US-China tariff war as "the biggest risk to global economic growth."1

Concurrent with these real-world developments, there has been a growing academic interest in measuring the cost of tariff wars. One natural approach

1Source: https://www.bloomberg.com/news/articles/2019-06-09/ lagarde-says-u-s-china-trade-war-looms-large-over-global-growth

is the "ex-post" approach adopted by Amiti et al. (2019) and Fajgelbaum et al. (2019). This approach, uses data on observed tariff hikes; employs economic theory to estimate the passthrough of tariffs onto consumer prices; and measures the welfare cost of these already-applied tariffs.

The evidence put forward by the "ex-post" approach is revealing, but it does not speak to an outstanding policy question: what is the prospective cost of a fullfledged global tariff war? To answer such "what if" questions, we first need to determine the non-cooperative Nash tariff levels that will prevail under a global tariff war. The "ex-ante" approach undertaken by Perroni and Whalley (2000) and Ossa (2014) accomplishes this exact task.2 They use economic theory to estimate the Nash tariff levels that will prevail and the welfare cost that will result from a hypothetical (but now imminent) global tariff war.

The "ex-ante" approach has been quite influential and recent methodological advances by Ossa (2014) have made it more accessible to researchers. Yet existing techniques are plagued with the curse of dimensionality when applied to many countries and industries. The current state-of-the-art technique computes the Nash tariffs using an iterative process where each iteration performs a country-by-country numerical optimization based on the output of the previous iterations.3 As the number of countries or industries grows, the computational burden underlying this approach can raise exponentially. This is perhaps why the current implementations of the "ex-ante" approach are limited to a small set of countries and abstract from salient but complex features of the global economy like input trade.

In this paper, I develop a simple sufficient statistics methodology to measure the prospective cost of a global tariff war.4 My optimization-free methodology circumvents some of the main computational challenges facing existing "ex-ante" techniques. This feature allows me to uncovers the cost of a global tariff war across many years and countries, including a long list of previouslyneglected small, emerging economies. I find that the cost of a global tariff war has risen dramatically over the past two decades, with small downstream

- 2See Balistreri and Hillberry (2018) for a recent application of the ex-ante approach to the

current US-China tariff war.

- 3See Ossa (2016) for a comprehensive review of the iterative global optimization technique.


Advances that have made this technique more efficient include (i) reformulating the problem using the exact hat-algebra technique; (ii) parallelizing the country-by-country optimizations; and (iii) providing analytical derivatives for the optimization algorithm.

4The sufficient statistics methodology developed here is akin to the Arkolakis et al. (2012) methodology, and exhibits key differences with the sufficient statistics approach popularized by Chetty (2009) in the public finance literature. See Chapter 7 in Costinot and Rodríguez-Clare (2014) for more discussion on these differences.

economies being –by far– the most vulnerable.

The new methodology relies on the analytical characterization of Nash tariffs in a state-of-the-art quantitative trade model featuring multiple industries, markup distortions, intermediate input trade, and political economy pressures. Nash tariffs correspond to tariff levels that will prevail in the event of a global tariff war. Prior characterizations of Nash tariffs are impractical for my analysis, as they are limited to partial equilibrium or single industry-two country models.5 I, therefore, derive new analytic formulas for Nash tariffs that are compatible with my general equilibrium, multi-country and multi-industry analysis.6 These formulas are especially advantageous as they describe Nash tariffs as a function of observable shares and structural parameters.

Using my analytic tariff formulas and the exact hat-algebra methodology, popularized by Dekle et al. (2007), I can compute the Nash tariffs and their welfare effects in one simple (optimization-free) step. Moreover, this entire procedure can be performed with information on only (i) observable shares, (ii) industry-level trade elasticities, and (iii) constant industry-level markup wedges. The same logic can be employed to compute the gains from cooperative tariffs.7 These are internationally coordinated tariffs that correct global markup distortions, and are notoriously difficult to compute (Ossa (2016)).

The new methodology is remarkably fast: It computes the cost of a global tariff war and the gains from future trade talks in a matter of seconds. In comparison, optimization-based techniques may take hours or even days, depending on the number of countries and industries being analyzed. This improvement in speed is partly due to bypassing the need for iterative numerical optimization. But it is also due to a reduction in dimensionality, since analytic formulas indicate that Nash tariffs are uniform along certain dimensions.

I apply the new methodology to the World Input-Output Database (WIOD, Timmer et al. (2012)) from 2000 to 2014, covering 43 major countries and 56 industries. For each country in the sample, I compute the prospective cost of

- a global tariff war in each year during the 2000-2014 period. I first perform


- 5See e.g., Johnson (1953), Gros (1987), and Felbermayr et al. (2013) for a prior characterization of Nash tariffs in two-country and single industry setups.
- 6My characterization of Nash tariffs shares similarities with Beshkar and Lashkaripour (2019) and Lashkaripour and Lugovskyy (2020). The aforementioned studies analyze unilaterally optimal trade taxes in two-country general equilibrium trade models. This paper analyzes many non-cooperative countries that strategically impose tariffs against each other.
- 7Specifically, I first derive an analytic formula for cooperative tariffs. I then calibrate these formulas to data using the exact hat-algebra technique. This procedure can be carried with knowledge of only observable shares, trade elasticities, and markup wedges.


my analysis using a baseline multi-industry Eaton and Kortum (2002) model. I subsequently introduce markup distortions, political pressures, and input trade into the baseline model to determine how these additional factors contribute to the cost of a tariff war. May analysis delivers four basic insights:

- i. A global tariff war can shrink the average country's real GDP by 2.8%. This figure is aggravated by the increased dependence of countries on intermediate input trade and the exacerbation of pre-existing markup distortions. To give some perspective, the expected cost of a global tariff war was $1.7 trillion in 2014, when added up across all countries. Such a cost is the equivalent of erasing South Korea from the global economy.
- ii. The prospective cost of a global tariff war has more-than-doubled from 2000 to 2014. The rising cost is driven by two distinct forces. First, the rise of global markup distortions, which prompts countries to impose moretargeted (i.e., more-distortionary) Nash tariffs in the event of a tariff war. Second, the increasing dependence of emerging economies on intermediate input trade since 2000.
- iii. Small downstream economies are the main casualties of a global tariff war. Take Estonia, for example, where imported inputs account for 30% of the national output inclusive of services. Due to its strong dependence on imported inputs, 10% of Estonia's real GDP will be wiped out by a global tariff war. Similar losses will be incurred by other small, downstream economies like Bulgaria, Latvia, and Luxembourg.
- iv. Due to the global rise of markup distortions, the gains from cooperative tariffs have also multiplied from 2000 to 2014. Stated otherwise, the unexplored gains from deeper trade negotiations have risen on par with the prospective cost of a global trade war. To present some numbers, cooperative tariffs could have added up to $347 billion to global GDP in 2014, up from a mere $184 billion in 2000.


Aside from the already-discussed methodological contribution, this paper makes three conceptual contributions to the literature. First, my analytic formulas for Nash tariffs highlight a previously overlooked contributor to the cost of tariff wars. I show that Nash tariffs (in all countries) are targeted at highmarkup industries. As a result, they shrink global output in high-markup industries below their already sub-optimal level. These developments exacerbate

pre-existing market distortions and inflict an efficiency loss that is distinct from the standard trade-loss emphasized in the prior literature (e.g., Gros (1987)).

Second, this paper sheds new light on the winners and losers of global tariff wars. Since Johnson (1953), an immense body of literature has emphasized that country size dictates the winners (Kennan and Riezman (2013)). My analysis shows that a country's dependence on imported input is an equallydetermining factor. For instance, Norway that is a net exporter in upstream industries (due its commodity exports) can gain from a global tariff war despite being small. These gains obviously come at the expense of small downstream economies incurring significant losses. These findings, though, assume that governments apply tariffs-subject-to-duty-drawbacks, which are input-output blind by design. Beshkar and Lashkaripour (2020) look beyond this simple case and present a more comprehensive view of how global value chains amplify the cost of a global trade war.

Third, my approach highlights the pitfalls of data aggregation, which is common-place in the tariff war literature. To elaborate, existing analyses of tariff wars often restrict attention to a small set of countries and aggregate the "rest of the world" into one taxing authority. Such aggregation schemes allow researchers to handle the computational complexities inherent to tariff war analysis. Capitalizing on the computational efficiency of my sufficient statistics approach, I can measure the cost of a tariff war with and without such aggregation schemes. Comparing the outcomes indicates that standard aggregation schemes overstate the loss from a tariff war quite considerably. Simply, because they artificially assign significant market power to "the rest of the world."

Finally, at a broader level, the approach developed here can be viewed as a sufficient statistics methodology to quantify the gains from trade agreements. In that regard, it contributes to Arkolakis et al. (2012), Costinot and Rodríguez-Clare (2014), and Arkolakis et al. (2015) who propose sufficient statistics methodologies that quantify the gains from trade relative to autarky in an important class of trade models. Like the aforementioned studies, my proposed methodology quantifies the gains from trade, but it does so relative to a world without trade agreements as opposed to autarky.

This paper is organized as follows. Section 2 presents the theoretical model, based on which a sufficient statistics approach is developed to measure the cost of a global tariff war in Section 3. Section 4 extends the methodology to compute cooperative tariffs. Section 5 presents a quantitative implementation of the methodology. Section 6 concludes.

## 2 Theoretical Framework

The present methodology applies to a wide range of quantitative trade models. In the interest of exposition, I begin my analysis with a baseline multi-industry, multi-country Ricardian model that nests the Eaton and Kortum (2002) and Armington models as a special case. I subsequently extend the baseline model to account for (a) political economy pressures and profit-shifting effects à la Ossa (2014), and (b) intermediate input trade under duty drawbacks.

Throughout my analysis, I consider a global economy consisting of i =

- 1,..., N countries and k = 1,.., K industries, with C and K respectively denoting the set of countries and industries. Labor is the only primary factor of produc-

tion. Each country i is populated with L ̄i workers, each of whom supplies one unit of labor inelastically. Workers are perfectly mobile across industries but immobile across countries.

- 2.1 Demand


In the baseline Ricardian model, all varieties in industry k are differentiated by country of origin, with the triplet ji, k denoting a variety corresponding to origin j–destination i–industry k. Under the Eaton and Kortum (2002) interpretation of the model, national product differentiation of this kind can be attributed to Ricardian specialization within industries. The representative consumer in Country i maximizes a general utility function, which yields an indirect utility function as follows

Vi(Yi,P ̃i) = max

Qi

U(Qi) s.t. P ̃i · Qi = Yi. (1)

In the above problem, Yi denotes total income; Qi = {Qji,k} denotes the vector of composite consumption quantities, P ̃i = {P ̃ji,k} denotes the corresponding vector of "consumer" price indexes, and "·" is the inner product operator (i.e., a·

- b = ∑i aibi). To avoid any confusion, I emphasize that tilde on the price variable is used to distinguish between (after-tax) consumer and (pre-tax) producer prices. The representative consumer's problem yields a Marshallian demand function,


Qji,k = Qji,k Yi,P ̃i , (2)

which describes optimal consumption in country i as function of income, Yi, and consumer prices, P ̃i. When analyzing optimal tariff policy in each coun-

try, several demand-side variables play a key role. First, expenditure shares which represent the importance of each good in the consumption basket. Second, demand elasticities, which summarize the demand function specified under Equation 2. Below, I formally define these set of variables.

- Definition 1. [Expenditure Shares] The share of country i's expenditure on industry k goods is denoted by ei,k, and the within-industry share of expenditure on variety ji, k (origin j–destination i–industry k) is denoted by λji,k:

ei,k ≡

P ̃i,k · Qi,k P ̃i · Qi

=

∑Nj=1 P ̃ji,kQji,k Yi

; λji,k ≡

P ̃ji,kQji,k P ̃i,k · Qi,k

=

P ̃ji,kQji,k ei,kYi

.

Building on the above definitions, the unconditional expenditure share on variety ji, k (eji,k) and the overall share of expenditure on goods from origin j (λji) is defined as

eji,k ≡ λji,kei,k; λji ≡

K

∑

k=1

λji,kei,k.

Note the distinction between eji,k, and λji,k. The former concerns the share of variety ji, k in total expenditure. The latter concerns the share of expenditure on variety ji, k conditional on buying industry k goods. As we will shortly, λji,k governs the Marshallian demand elasticities under CES preferences. These elasticities are defined as follows for the general (not-necessarily CES) case.

- Definition 2. [Demand Elasticities] The elasticity of demand for good ji, k with respect to the price of good ni, g is denoted by


ε(jini,k,g) ≡ ∂ ln Qji,k(Yi,P ̃i)/∂ ln P ̃ni,g. (3)

Correspondingly, the matrix of "nominal" and "expenditure-adjusted" demand elasticities are denoted by

  

   ; E ̃(jini) ≡

  

   ,

ε(jini,1,1) ... ε(jini,1,K)

eji,1ε(jini,1,1) ... eji,1ε(jini,1,K)

... .

... .

E(jini) ≡

.

.

ε(jini,K,1) · · · ε(jini,K,K)

eji,Kε(jini,K,1) · · · eji,Kε(jini,K,K)

with Eji ∼ E(jiji) denoting the matrix of own-price elasticities of demand. I assume that consumer preferences are well-behaved in that ε(jiji,k,k) < −1.8

8The income elasticity of demand plays a less prominent role in my analysis, so I relegate its

We can appeal to two properties of the Marshallian demand function, namely, (i) Cournot aggregation, and (ii) homogeneity of degree zero, to prove that the elasticity matrixes, Eji, and E ̃ ji are invertible.

Lemma 1. The matrixes Eji ∼ E(jiji) and E ̃ji ∼ E ̃(jiji) are non-singular.

The above lemma is formally proven in Appendix A. As we will see shortly, the ability to invert the elasticity matrixes is essential for deriving sufficient statistics formulas for optimal tariffs in each country.

###### 2.2 Production

In the baseline Ricardian model, labor is the sole factor of production and the unit labor cost of production and transportation is invariant to policy. Correspondingly, the "producer" price of composite variety ji, k can be expressed as a function of the labor wage rate in country j, wj, multiplied by the constant unit labor cost of production, a ̄j,k, and the iceberg trade cost, τ ̄ji,k (with τ ̄ii,k = 1):

Pji,k = τ ̄ji,ka ̄j,kwj. (4)

The bar notation indicates that a ̄j,k and τ ̄ji,k are invariant to policy. The "consumer" price, by definition, equals the "producer" price times the tariff applied

by country i on variety ji, k, namely, tji,k:

P ̃ji,k = (1 + tji,k)Pji,k. (5)

The invariance of a ̄j,k to policy change derives from constant returns to scale technologies. It amounts to a flat export supply curve, which entails that the passthrough of taxes on to consumer prices is complete after we net out general equilibrium wage effects. This assumption is consistent with ex-post studies of the recent US-China tariff war, like Amiti et al. (2019) and Fajgelbaum et al. (2019).

###### 2.3 General Equilibrium

Given the vector of tariffs in each country i, ti = {tji,k}, equilibrium consists of a vector of wages, w = {wj}, a vector of "producer" and "consumer" price indexes, Pi = {Pji,k} and P ̃i = {P ̃ji,k} (as described by Equations 4 and 5), and

definition to the appendix.

consumption quantities, Qi, given by the Marshallian demand function 2, such that wage income in each country equals sales net of taxes,9

N

K

wiL ̄i =

### ∑

### ∑

j=1

k=1

N

K

### ∑

### ∑

Pij,kQij,k =

j=1

k=1

1 1 + tij,k

λij,kej,kYj (6)

and total income equals the wage bill plus tariff revenue:

K

Yi = wiL ̄i +∑

### ∑

j i

k=1

K

tji,kPji,kQji,k = wiL ̄i +∑

### ∑

j i

k=1

tji,k 1 + tji,k

λji,kei,kYi . (7)

For the reader's convenience, Table 1 reports a summary of the key variables and parameters of the model.

Social Welfare. Provided that equilibrium is unique, all equilibrium variables can be uniquely characterized as a function of global tariff rates, t, and wages, w, with the latter implicitly depending on tariffs, i.e., w = w(t)—see Appendix A for details. Social welfare in Country i can, accordingly, be expressed as follows given the indirect utility function:

Wi(ti,t−i;w) ≡ Vi(Yi(ti,t−i;w),P ̃i(ti,t−i;w)).

Treating tariffs in the rest of world as given (i.e., t−i =  ̄t−i), country i's marginal welfare gain from imposing tji,k can be calculated as

dWi(ti, ̄t−i;w) dln(1 + tji,k)

∂Wi(ti, ̄t−i;w) ∂ ln(1 + tji,k)

=

+

∂Wi(ti, ̄t−i;w) ∂ lnw t ·

dlnw dln(1 + tji,k)

. (8)

The first term in the above equation accounts for the direct effect of tariffs on consumer prices and tariff revenues, holding w fixed. The second term accounts for the welfare effects that are mediated through general equilibrium wage adjustments. dlnw/dln(1 + tji,k) can be calculated by applying the Implicit Function Theorem to the system of national labor market clearing conditions (Equation 6). Let rni ≡ Pni · Qni/wnLn denote the share of origin n's wage revenue from sales to destination i. It is straightforward to cross-check from actual trade data that rni/rii ≈ 0 if n i. Stated verbally, each individual foreign destination accounts for a negligible fraction of country i's national in-

9The above equation along with the representative consumer's budget constraint, ensure that trade is balanced between countries

come.10 This observation should come at little surprise since a substantial fraction of national output in each country is generated in the non-traded sector. Furthermore, the tradeable fraction of national output is sold to many foreign destinations. Based on this observation and assigning wj as the numeraire, the change in country i's welfare can be approximated as (see Appendix B):11

∂Wi(ti, ̄t−i;w) ∂ ln(1 + tji,k)

dWi(ti, ̄t−i;w) dln(1 + tji,k) ≈

+

∂Wi(ti, ̄t−i;w)

∂ ln wi t,w−

i

dln wi dln(1 + tji,k)

. (9)

The above approximation posits that tji,k can affect Wi by raising wi relative to wages in the rest of world, w−i. But treating wj as the numeraire, the welfare effects of tji,k that occur through a change in wn/wj are zero to a first-order approximation iff n i and j. To be clear, the above approximation is strictly weaker than the small open economy assumption. It also does not rule out general equilibrium wage effect altogether, which is a common limitation of the classic trade policy literature (Maggi (2014)).

In what follows, I use the above approximation to derive sufficient statistics formulas for Nash tariffs. Appendix D derives sufficient statistics formulas for Nash tariffs without the above approximation. Computing Nash tariffs using the approximation-free formulas will be computationally more involved, but the computed tariff levels will be indistinguishable from the baseline levels.

## 3 Measuring the Cost of a Tariff War

This section presents my sufficient statistics technique for measuring the cost of a global tariff war. In the event of a global tariff war, each country i sets their vector of unilaterally optimal tariffs ti∗, given applied tariffs in the rest of the world, t−i. The unilaterally optimal tariff, ti∗ = ti∗(t−i), which describes

- 10In a sample of 44 major countries in 2014, the median country had an avgn i (rni/rii) = 0.001—see Section 5 for a full description of the data behind this statistic. Also, rni/rii ≈ 0 is consistent with the complete passthrough estimated by Amiti et al. (2019) and Fajgelbaum et al. (2019), since the tariff passthrough (minus one) is proportional to rni for each exporter n i.
- 11More specifically, wage effects in Equation 8 can be characterized as


r ̄−ii rii

Ψi Ψ ̄ −i

dlnw dln(1 + tji,k)

∂Wi(.) ∂ ln wi

dln wi dln(1 + tji,k)

∂Wi(ti,t−i;w) ∂ lnw ·

1 +

=

[λnirniΨ−n1]

where Ψi ≡ ∑k [1 + rii,k k(1 − λii,k)], Ψ−−1i ≡ ∑n i

∑n i λnirni and r ̄−ii = avgn i (rni) = ∑n∑i(λnirni)

n i λni . It is immediate from actual trade data that r ̄−ii/rii ≈ 0, yielding Equation 9.

###### Table 1: Summary of Key Variables

|Variable<br><br>|Description|
|---|---|


|P ̃ji,k<br><br>|Consumer price index of variety ji, k (origin j–destination i–industry k)|
|---|---|
|Pji,k|Producer price index of variety ji, k (origin j–destination i–industry k)|
|Qji,k|Consumption quantity/Output of variety ji, k|
|χji,k<br><br>|Share of variety ji, k in origin j's total exports (j i)|
|Yi|Total income in country i|
|wiL ̄i<br><br>|Wage income in country i (wage×population size)|
|t∗ji,k|Nash/Optimal tariff imposed by country i on variety ji, k|
|t ̄ji,k<br><br>|Applied (status-quo) tariff on variety ji, k|
|ei,k|Country i's expenditure share on industry k|
|λji,k<br><br>|Expenditure share on variety ji, k: λji,k = P ̃ji,kQji,k/ei,kYi|
|rji,k<br><br>|Revenue share from variety ji, k: rji,k = Pji,kQji,k/μiwiLi<br><br>|
|ε(jini,k,g)<br><br>|Price elasticity of demand: ε(jini,k,g) = ∂ ln Qji,k/∂ ln P ̃ni,g|
|k<br><br>|Constant trade elasticity under CES preferences|
|μk|Constant industry-level markup|
|μi|Output-weighted average markup in country i|
|γ ̃nj,k|Share of country n's labor in origin j–industry k's gross final good output|


country i's best non-cooperative response to t−i, solves the following problem:

ti∗(t−i) = argmax

Wi (ti;t−i;w) , (P1)

ti

where recall that the wage vector, w = w(ti;t−i), is itself an implicit function of applied tariffs all over the world.12 Considering the above problem, we can define the non-cooperative Nash equilibrium that transpires in the event of global tariff war as follows.

Definition 3. [The Non-Cooperative Nash Equilibrium] A global tariff war corresponds to a non-cooperative Nash equilibrium in which all countries simultaneously set their vector of optimal tariffs, taking applied tariffs by the rest of the world as given.

12Implicit in my analysis is the assumption that governments are disinclined to directly tax exports. This aversion may be driven by either political economy or institutional resistance to export taxation. As such, export taxes are not formally introduced in the government's optimal policy problem (P1).

The Nash tariffs, therefore, solve the following system

 

t1 = t1∗(t2,...,tN)

,

. tN = t∗N(t1,...,tN−1)



where ti∗(t−i) is the unilaterally optimal tariff response implied by Problem (P1).

Below, I derive an analytical characterization for ti∗(t−i) to calculate the vector of Nash tariffs, t∗. Before that, let me briefly outline why calculating Nash tariffs with brute force is plagued by the curse of dimensionality. The curse is driven by two factors: First, the above system involves N(N −1)K tariff ratesa number than can grow exponentially as we increase the number of countries. Second, to solve the above system numerically, one has to solve ti∗ = ti∗(t−i) iteratively for all N countries. In this process optimal tariffs are first computed for each country by conducting N constrained global optimization problems, given applied (status-quo) tariffs in the rest of the world. Then, the optimal tariffs are updated by performing another N constrained global optimizations that condition on the optimal tariff levels obtained in the first step. This procedure is repeated iteratively until we converge to the solution where the applied and optimal tariff levels coincide in every country.13

We can circumvent these issues, by obtaining an analytical characterization for ti∗(.). The following proposition accomplishes this exact goal.

- Proposition 1. Country i's optimal non-cooperative import tariff is uniform and characterized by the following formula


###### ti∗(t−i) = −1 ∑j i Xij∗ · IK + Eij∗ + 1+ttj

,

jλ∗jjE ̃(jjij)∗ 1K

as a function demand elasticities, E, and export shares, X, in the counterfactual noncooperative equilibrium (denoted by ∗). The elements of the K × 1 vector of export

shares, Xij ≡ χij,k k, are defined as χij,k ≡ ∑nPiji,PkQinij·Q,k in.

13Ossa (2016) points to an alternative approach, wherein the constrained global optimization is converted to a set of first-order and complementary slackness conditions. Under this approach, one can compute the Nash tariffs by solving a system of 2N + N(N − 1)K equations. This approach bypasses the need for iterations as described above, but it leaves us with a problem that has significantly more free-moving variables. So, not surprisingly, this second approach is even less efficient than the iterative approach (see Ossa (2016)).

A formal proof for the above proposition is provided in Appendix A. The proof is involved, and invokes envelope conditions and the core properties of the Marshallian demand function. There is, however, a simple intuition behind the optimal tariff formula presented above. Since the unit labor cost is constant, the only channel for country i to improve its terms-of-trade (ToT) is to raise wi relative w−i. The unilaterally optimal way to achieve this ToT improvement is through a uniform tariff that distorts domestic consumption as little as possible.14 Also, note that (by the Lerner symmetry) a uniform tariff is akin to a uniform export tax, which is itself akin to a markup on wi in foreign (non-i) markets.15 Accordingly, the optimal tariff formula resembles the optimal monopoly markup on wi across all foreign destination markets.

###### Computing Nash Tariffs using Proposition 1

We can employ Proposition 1 to measure the prospective cost of a global tariff war without performing the iterative optimization procedure highlighted earlier. But to get there, we first need to impose additional structure on the utility function, Ui(.). One commonly-used specification in the quantitative trade literature is the Cobb-Douglas-CES specification. Namely,

Ui(Qi) = ∏

k

### ∑

ς ̄ji,kQρjik,k

i

ei,k/ρk

, (10)

where ς ̄ji,k is a structural demand shifter. Adopting the above parametrization, the within-industry expenditure shares assume the following formulation:

ς ̄ji,kP ̃ji−,kk ∑nN=1 ςni,kP ̃ni−,kk

, (11)

λji,k =

where k ≡ ρk/(ρk − 1) denotes the industry-level trade elasticity. Under this specification, the cross-price elasticities of demand between varieties from dif-

- 14The uniformity of unilaterally optimal tariffs in a two-country Ricardian model was first

established by Opp (2010) and subsequently extended by Costinot et al. (2015). Beshkar and Lashkaripour (2020) show that the uniformity results hold under input-output linkages as far as export taxes are available to the government.

- 15The equivalence between uniform import and export taxes is a manifestation of the Lerner


symmetry. The aforementioned symmetry is often articulated in the context of a two-country model. But the same arguments apply to a multi-country setup subject to the welfare approximation in 9. Relatedly, we can re-formulate the optimal tariff specified by Proposition 1, so that is corresponds to the optimal mark-down of a multi-product monopsonist. Such a reformulation simply involves using the wage in country i as the numeraire.

ferent industries collapse to zero, while the remaining elasticities are fully characterized by λji,k's and k's:

ε(ijij,k,k) = −1 − k 1 − λij,k ; ε(njij,,kk) = kλij,k; ε(ijij,k,g) = 0. (12)

Plugging the above equations into the optimal tariff formula (characterized by Proposition 1) yields

1

###### ti∗(t−i) =

, (13)

∑k ∑j i χij∗,k k 1 − (1 − δj∗,k)λij∗,k

where δj,k ≡ t1jλ+jjt,jkλejjj,k accounts for the general equilibrium effect of country i's tariff on country j's tariff revenue. To compute the Nash equilibrium, we can

employ the hat-algebra notation, whereby xˆ ≡ x∗/x denotes the change in variable x when tariffs are elevated from their applied rate to the Nash rate. Observing that by definition λ∗ji,k = λˆ ji,kλji,k, the Nash tariff rate implied by Equation 13 can be expressed as

1

###### ti∗ =

, (14)

∑k ∑j i χij∗,k k 1 − (1 − δ∗j,k)λˆ ij,kλij,k

where δj∗,k and χij∗,k are respectively given by

λˆ ij,kλij,kej,kYjYˆj ∑ i ∑g 1+1t∗

1 1+t∗j

t∗j λˆ jj,kλjj,kej,k 1 + t∗j λˆ jjλjj

###### δj∗,k ≡

, χij∗,k =

.

λˆ i,kλi,ke,kYYˆ

Capitalizing on the multiplicatively-separable structure of the CES demand system, λˆ ji,k can be itself expressed as follows:

###### − k

− k

###### 1+ti∗

1+t ̄ji,k wˆj

(1 + tji,k)wˆj

λˆ ji,k =

###### − k ,

###### − k =

i∗

∑nN=1 λni,k 1+t

∑nN=1 λni,k (1 + tni,k)wˆn

1+t ̄ni,k wˆn

where t ̄ji,k denotes the applied (status-quo) tariff on good ji, k. Using the same logic, we can express the equilibrium conditions specified by Equations 6 and 7 in hat-algebra notation. Solving the optimal tariff formula (Equation 14) alongside these equilibrium conditions, determines the Nash tariffs and their welfare effects in one simple step. The following proposition outlines this claim.

- Proposition 2. If preferences are described by functional form 10, the Nash tariffs,


{ti∗}, and their effect on wages, {wˆi}, and total income, {Yˆi}, can be solved as a solution to the following system:



###### ti∗ = 1

[optimal tariff]

∑j i ∑k χij∗,k k 1−(1−δj∗,k)λˆ ij,kλij,k

λˆ ij,kλij,kej,kYjYˆj ∑ i ∑g 1+1t∗

1 1+t∗j

λˆ jj,kλjj,kej,k

∗j

λˆi,kλi,ke,kYYˆ; δj∗,k ≡ t

χij∗,k =

1+t∗j λˆjjλjj [export shares and δ] λˆ ji,k =





[(1+tji,k)wˆj]− k

.

i∗

; 1 + tji,k = 1+t

1+t ̄ji,k [expenditure shares]

∑nN=1 λni,k[(1+tni,k)wˆn]− k

λˆ ij,kλij,kej,kYˆjYj [wage bill = sales net of taxes] YiYˆi = wˆiwiL ̄i + ∑k ∑j i t

wˆiwiL ̄i = ∑k ∑j 1+1t∗j



i∗ 1+ti∗

λˆ ji,kλji,kei,kYˆiYi [income = wage bill + tax rev.]

Importantly, solving the above system requires information on only (i) industry-level trade elasticities, k; (ii) applied tariffs, t ̄ji,k, (iii) observable shares, λji,k and ei,k; and (iii) national income, Yi.16

Proposition 2 is significant from a computational standpoint. The system specified by the above proposition involves 3N independent equations and unknowns—namely, N Nash tariff rates, {ti∗}, N wage changes, {wˆi}, and N income changes, {Yˆi}. Solving this system requires information on a set of observable or estimable sufficient statistics. Namely, observable applied tariffs (t ̄ji,k), expenditure shares (λji,k and ei,k), and national income data, which are typically reported in standard datasets, as well as estimated values for industrylevel trade elasticities ( k) that are attainable with standard techniques.

Before moving forward, let us compare the procedure outlined by Proposition 2 to the standard approach that computes Nash tariffs using iterative numerical optimization. Each iteration in the standard approach performs N numerical optimizations over 2N + (N − 1)K free-moving variables. Proposition 2 not only shrinks the number of tariff variables to be computed, it also lets us bypass numerical optimization altogether. As such, it is remarkably faster than the standard optimization-based procedure— a point I will elaborate more on in Section 5.

The solution to the system specified by Proposition 2 immediately pins

16Wage income can be inferred from t ̄ji,k, λji,k, ei,k, and Yi as wiL ̄i = Yi 1 − ∑k,j λ1+ji,kt ̄ei,k

ji,k

.

down the prospective cost of a global tariff war for each country i as

K

%∆Real GDPi = Yˆi/

### ∏

k=1

Pˆ ̃ie,ik,k ,

− k −1/ k

where Pˆ ̃i,k = ∑nN=1 λni,k (1 + tni,k)wˆn

denotes the CES price index. In the following sections, I discuss how the above methodology extends to richer frameworks that accommodate political pressures, profit-shifting effects, and intermediate input trade. Later, in Section 5, I use Proposition 2 and the subsequent propositions to quantify the cost of a global tariff war.

###### 3.1 Accounting for Markup Distortions and Political Pressures

In the Ricardian model, the market equilibrium is efficient and Nash tariffs only internalize the terms-of-trade gains from trade restriction. Ideally, we should also account for pre-existing markup distortions, which give rise to profit-shifting motives behind tariff imposition. After accounting for profits, we can also introduce political economy pressures into the model.

To introduce these two channels, I consider a generalized multi-industry Krugman (1980) model with restricted entry that nests Ossa (2014) as a special case. In this extension, firms enjoy market power and collect profits. As such, tariffs can induce a profit-shifting externality that was absent in the baseline model. Moreover, as in Grossman and Helpman (1994), governments can assign different weights to profits collected in different industries in response to political pressures. For the sake of exposition, I start with the case where governments assign the same political weight to all industries. I subsequently discuss how introducing political pressures modifies the baseline results.

The generalized Krugman model extends the Ricardian model in two dimensions. First, on the demand side, each composite country-level variety aggregates over differentiated firm-level varieties indexed by ω,

Qji,k =

σk

σk−1dω

qji,k(ω)

ω∈Ωj,k

σk−1 σk

,

where σk > 1 and Ωj,k denotes the set of firms serving industry k from origin j. Noting the above specification, the Ricardian model can be viewed as a special

case of the generalized Krugman model where σk → ∞.

The second difference concerns the supply side. Each industry k in country j

hosts a fixed number of firms, M ̄ j,k, that compete under monopolistic competition and charge a constant optimal markup over marginal cost. This distinction

aside, each firm employs labor as the sole factor of production, with τ ̄ji,ka ̄j,k(ω) denoting the constant unit labor cost of production and transportation facing firm ω (in origin j–industry k). Since firms incur no fixed marketing costs, the heterogeneity in a ̄j,k(ω)'s is inconsequential to my optimal tariff analysis.17

Combining these features, the producer price index of composite variety ji, k can be expressed as a function the labor wage rate in country j, wj, the average unit labor cost of production and transportation, a ̄j,k =

1/(1−σk)

, the number of firms located in country j, M ̄ j,k, and the constant markup wedge, μk = σk/(σk − 1). In particular,

ω∈Ωj,k a ̄j,k(ω)1−σkdω

Pji,k = μkτ ̄ji,ka ̄i,kM ̄ −j,kμkwj.

Correspondingly, the consumer price index is given by P ̃ji,k = (1 + tji,k)Pji,k. Equilibrium in the generalized Krugman model has a similar definition as the Ricardian model, except that total income in each country equals the sum of the wage bill plus profits, μ ̄iwiLi, and tariff revenues:

Yi = μ ̄iwiL ̄i +∑

### ∑

j i

k

tji,kPji,kQji,k = μiwiL ̄i +∑

### ∑

j i

k

tji,k 1 + tji,k

λji,kei,kYi, (15)

where μi denotes the output-weighted average markup in country i:

∑kK=1 ∑Nj=1 Pij,kQij,k ∑kK=1 ∑Nj=1 μ1k Pij,kQij,k

.

μi =

In the above setup, country i's tariffs can deliver two types of welfare gains. First, as in the Ricardian model, tariffs can inflate country i's wage relative to the rest of the world. Second, tariffs can correct allocative inefficiency in country i, which is crudely measured by the output-weighted variance of markups across industries.18 Specifically, if Vark(μk − μi) > 0 there is suboptimal out-

17As I will discuss later in Section 3.4, the present framework is isomorphic to one where

aj,k(ω)s have a Pareto distribution and the fixed marketing costs is paid in terms of labor in the destination country.

18Note that if markups are positive but uniform across industries, the market allocation is efficient. So, inefficiency in the generalized Krugman model is purely driven by markup heterogeneity across industries. See Hsieh and Klenow (2009) for a detailed discussion on how to calculate the economy's distance from the efficiency frontier.

put in high-μ industries, which can be partially corrected by restricting imports in high-markup (high-μ) industries. Such restrictions, though, inflict a negative profit-shifting externality on the rest of the world. Despite this added complexity introduced by markup distortions, the optimal tariff response of each country can be analytically characterized in terms of reduced-form demand elasticities and observable shares. This claim is outlined by the following proposition.19

- Proposition 3. Under the generalized Krugman model, country i's optimal import tariff is characterized by the following formula:


μk μi k

−ii E−(iiii)∗ 1 −

###### 1 + ti∗(t−i) = (1 + ti∗)1(N−1)K 1 + E∗−1

,

as a function of demand elasticities, E, constant markup wedges, μ, and export shares, X, in the counterfactual equilibrium (denoted by ∗); with the uniform component of

tariff given by ti∗ = 1/ ∑j i Xij∗ · IK + Eij∗ + 1+ttj

jλ∗jjE ̃(jjij)∗ 1K .

As in the baseline model, the above proposition can be used to measure the cost of a global tariff war provided that we impose additional structure on preferences. Specifically, assume that preferences have a Cobb-Douglas-CES parameterization as in Equation 10. Proposition 3 implies that country i's Nash tariff is uniform across exporters and given by

 

 1 +

1 + kλii∗,k 1 + μμi

1

1 + t∗

, (16)

###### i,k =

k kλii∗,k

∑g ∑j i χij∗,g g 1 − (1 − δj∗,g)λij∗,g

∗jj,gej,g

where δj∗,g ≡ tj,gλ

1+∑g tj,gλ∗jj,gej,g. To provide a brief intuition, the uniform tariff component in bracket corresponds to the optimal markup on wi (or markdown on w−i), which is applied uniformly to all exported (or imported) goods. The intuition behind this component is similar to that provided in the baseline case. The second component, which is industry-specific, accounts for country i's incentive to restore allocative efficiency in the local economy. Correspondingly, the non-uniform tariff component restricts imports in industries that exhibit an above-average markup (i.e., μk > μi), but subsidizes imports in industries that

19The vector operator denotes element-wise division: a b = [ai/bi]i. As before, the optimal non-cooperative tariff response maximizes welfare given applied tariffs in the rest of the world, as specified by Problem (P1). Also, note that the formula specified by Proposition 3 assumes a unitary income elasticity of demand. See Online Appendix A for a formal proof.

exhibit a below average markup (i.e., μk < μi).20 As such, the non-uniform tariff component imposes an additional profit-shifting externality on the rest of the world that was absent in the baseline Ricardian model.

Proposition 3 uncovers a crucial point: When all countries simultaneously protect their high-μ industries, global output in these industries shrinks below its already sub-optimal level. As a result, a full-fledged tariff war exacerbates misallocation in the global economy in a way that was absent in the competitive baseline model. Later, when I map the model to data, it will become apparent that the cost of exacerbated misallocation is comparable to pure of cost of trade reduction in the event of a full-fledged tariff war.

Moving forward, we can appeal to Equation 16 in order to compute the Nash tariffs and the welfare cost associated with them in one simple step as a function of only observable shares and structural elasticities. The following proposition formally outlines this point.

- Proposition 4. If preferences are described by functional form 10, the Nash tariffs,


{ti∗,k}, and their effect on wages, {wˆi}, and total income, {Yˆi}, can be solved as a solution to the following system:



1+ kλˆ ii,kλii,k 1+μ

###### 1 + ti∗,k = 1 + 1

[optimal tariff]

i∗ μk

∑j i ∑k χij∗,k k 1−(1−δj∗,k)λˆ ij,kλij,k

kλˆ ii,kλii,k

λˆ ij,kλij,kej,kYjYˆj ∑ i ∑g 1+1t∗

1 1+t∗j

λˆ jj,kλjj,kej,k

∗

λˆi,kλi,ke,kYYˆ; δj∗,k ≡ t

j,k

χij∗,k =

1+∑k t∗j,kλˆjj,kλjj,kej,k [export shares and δ] λˆ ji,k =





[(1+tji,k)wˆj]− k

∗

; 1 + tji,k = 1+t

i,k

1+t ̄ji,k [expenditure shares] wˆiwiL ̄i = ∑k ∑j μ 1

∑nN=1 λni,k[(1+tni,k)wˆn]− k

λˆ ij,kλij,kej,kYˆjYj [wage bill = sales net of taxes]

k(1+t∗j,k)

λˆ ij,kλij,kej,kYˆjYj /wˆiwiL ̄i [average markup] YˆiYi = μi∗wˆiwiL ̄i + ∑k ∑j i t

μi∗ = ∑k ∑j (1+1t∗

j,k)

∗



λˆ ji,kλji,kei,kYˆiYi [income = wage bill + tax rev.]

i,k 1+ti∗,k

Importantly, solving the above system requires information on only (i) industry-level trade elasticities and markup wedges, k and μk; (ii) applied tariffs, t ̄ji,k, (iii) observable shares, λji,k and ei,k; and (iii) national income, Yi.21

Compared to the baseline Ricardian model, the above system involves

- 20The industry-specific term is an artifact of governments not having access to first-best domestic subsidies. Faced by this restriction on their policy space, they resort to tariffs as a secondbest policy for correcting allocative efficiency (see Lashkaripour and Lugovskyy (2020)).
- 21Wage income can be inferred from t ̄ji,k, λji,k, ei,k, and Yi, as wiL ̄i = ∑k ∑n μλin,ken,kYn


k(1+t ̄in,k).

N(K + 2) unknowns, namely, NK Nash tariff rates, {ti,k}; N wage changes, {wˆi}; and N income changes, {Yˆi}. Also, in addition to data on t ̄ji,k, λji,k, ei,k, and Yi; and estimates for k, we need estimates for industry-level markup wedge, μk, in order to solve the above system. Once the system is solved, the solution immediately pins down the prospective cost of a tariff war for each country as

K

Pˆ ̃ie,ik,k ,

%∆Real GDPi = Yˆi/

### ∏

k=1

− k −1/ k

where Pˆ ̃i,k = ∑nN=1 λni,k (1 + tni,k)wˆn

denotes the change in destination i–industry k's CES price index.

Introducing Political Pressures. To introduce political pressures, I follow Ossa's (2014) adaptation of Grossman and Helpman (1994). His approach builds on the fact that under the Cobb-Douglas-CES utility, social welfare in Country i can be expressed as Wi ≡ Vi(.) = Yi/P ̃i, where P ̃i = ∏k ∑j P ̃ji−,kk

−ei,k/ k

is the aggregate consumer price index. Instead of the government in country i maximizing the social welfare, it maximizes a politicallyadjusted welfare function:

Yi P ̃i

### +∑

Wi =

k,j

μkwiLi,k P ̃i

(θi,k − 1)

### = ∑

k

θi,kμkwiLi,k P ̃i

### +∑

j,k

tji,kPji,kQji,k P ̃i

,

which assigns a political weight θi,k ∈ R+ to industry k, with the sum of weights normalized to one: ∑

K k=1 θi,k

K =1. As shown in Appendix C, Propositions 3 and 4 characterize the Nash tariffs and their effects in the political setup with no further qualification other than μk and μi,k being replaced in all the formulas with politically-adjusted counterparts. Namely,

∑kK=1 ∑Nj=1 Pij,kQij,k ∑kK=1 ∑Nj=1 θi,k1μk Pij,kQij,k

μiP,k = θi,kμk, μiP =

.

So, to calibrate the model to data under political pressures, it suffices to estimate θi,k, update the markup values, and perform the procedure under Proposition 4 with the new politically-adjusted markup values.

Before moving forward, it is useful to discuss how political pressures moderate or magnify the cost of a tariff war. If political pressures favor high-μ industries, then Nash tariffs will be targeted even more intensively towards high-

μ industries. As such, politically-motivated Nash tariffs will drag the global economy further away from its efficiency frontier compared to non-political (baseline) Nash tariffs. Conversely, if political pressures favor low-μ industries, politically-motivated Nash tariffs will be less distortionary than the nonpolitical Nash tariffs—see Appendix C for further discussion.

###### 3.2 Intermediate Input Trade with Duty Drawbacks

This section introduces input trade into the baseline Ricardian model with the assumption that tariffs are subject to "duty drawbacks." The drawback condition corresponds to tariffs being applied on imported goods net of their reexported content. As detailed in Online Appendix F, duty drawbacks are offered by governments in most major economies.22 In the US, for instance, duty drawbacks have been an integral part of the tariff scheme since 1789. So, it is reasonable to assume that non-cooperative governments will maintain their voluntarily-adopted duty drawbacks in the event of a tariff war.23

Duty drawbacks are also necessary to make the present extension compatible with the baseline model. They afford governments the ability to impose tariffs without taxing exports in a subset of industries. To be more specific, recall my baseline assumption that governments are averse to taxing exports on an industry-specific basis. Based on this assumption, the baseline non-cooperative optimal policy problem (P1) excluded export taxes. Duty drawbacks in the present extension of Problem (P1), maintain the government's ability to apply tariffs without taxing (a subset of) exports. Absent duty drawbacks, a tariff on intermediate inputs will, by construction, tax exporters that use tariffed inputs—see Beshkar and Lashkaripour (2020).24 As detailed in Online Appendix C, the optimal tariff formula derived under duty drawbacks can be alternatively derived from a revised version of problem (P1) where governments are

- 22Among the countries included in my quantitative analysis in Section 5, all with the excep-

tion of Russia offer duty drawbacks. Michalopoulos (1999) documents that all the major developing countries aside from Singapore, Honk Kong, Benin, Ivory Coast, and the Dominican Republic offer duty drawbacks. Though, under somewhat different implementation schemes.

- 23As noted in Online Appendix F, claims about the prevalence of duty drawbacks are subject


to two caveats: First, in some countries the duty drawback scheme requires that firms formally apply for a tariff rebate, which leads to a significant fraction of the duty drawback value going unclaimed. Second, some countries offer a fixed drawback scheme, wherein all exporters receive a tariff rebate irrespective of how much tariffed inputs they use. The fixed drawback scheme, by design, taxes a subset of exporters and subsidizes the others—see Online Appendix F.

24This issue is strictly different from the Lerner symmetry, wherein a uniform import tariff acts as a uniform (across-the-board) tax on all exports.

afforded the liberty to tax exports but they assign an infinitely-negative weight to export tax revenues.

With the above background, let me proceed to the presentation of the extended model, which I call the IO model hereafter. To present the IO model, let us temporarily abstract from tariffs. Production in each country combines labor and intermediate input varieties sourced from various international suppliers using a Cobb-Douglas aggregator. Assuming that the final and intermediate version of a given good are priced similarly, the price index of composite variety ji, k can be expressed as

Pji,k = τ ̄ji,ka ̄j,kwγj j,k ∏

P

,g

α ̄j,,kg

j,g, (17)

where γj,k = 1 − ∑ ,g α ̄j,,kg, with α ̄j,,kg denoting the constant share of origin – industry g inputs in the production of origin j–industry k output. It is straight-

forward to verify that (from a welfare standpoint) the IO model is isomorphic to a reformulated model where (i) instead of intermediate inputs crossing the borders, the production of final goods employs labor from various locations,

- and (ii) only final consumption goods (denoted by C) are traded internationally. In this reformulated IO model, the price index of a final good variety ji, k can be expressed as


N

wγ ̃ j,k, (18)

### ∏

ji,k = τ ̄ji,ka ̃ ̄j,k

PC

=1

where a ̃ ̄j,k is a weighted geometric average of constant unit labor costs (a ̄j,ks), while γ ̃ j,k denotes the share country 's labor in the production of origin j– industry k's final good. The NK × K matrix of labor shares, γ ̃ = [γ ̃ j,k]j×k, , can be derived in terms of the input-output (IO) shares as follows,25

γ ̃ = (INK − A)−1 γ, (19)

where A ≡ [α ̄j,,kg]j×k, ×g is the NK × NK global IO matrix; and γ is a NK × K matrix composed of origin×industry-specific nominal labor shares:

  

  

######   

   ; γi ≡

###### γ1 0 0

γi,1 . γi,K

... .

γ ≡ diag (γi) =

.

0 0 γN

25Equation 19 can be obtained by applying the Implicit Function Theorem to Equation 17.

Let me provide a brief intuition behind the price formulation specified by Equation 18. There are two equivalent ways to interpret variety ji, k's production process. One where production employs intermediate inputs produced with labor from various countries, indexed by . Another, where final good production directly employs labor from various origins indexed by . Equation 18 corresponds to this latter interpretation. It is also straightforward to check that ∑N=1 γ ̃ j,k = 1 for all j and k.

Now, let us switch to the case where tariffs are applied with duty drawbacks. The drawback scheme ensures that tariffs do not propagate through input-output network. Or, put differently, tariffs with drawbacks are akin to a tariff applied on the traded final goods in the reformulated IO model. Accordingly, from the lens of the reformulated IO model, the consumer price index of the traded final goods can be expressed as

P ̃C

ji,k = (1 + tji,k)τ ̄ji,ka ̃ ̄j,k

N

wγ ̃ j,k. (20)

### ∏

=1

Equilibrium in the reformulated IO model assumes a definition that is analogous to that of the baseline Ricardian model. Specifically, given the vector of national tariffs, ti, equilibrium consists of a vector of wages, w; a vector of producer and consumer price indexes for final goods, PiC = {PjiC,k} and P ̃iC = {P ̃jiC,k} (Equations 18 and 20); and consumption quantities, QiC, given by the demand function QCji,k = Qji,k(Yi,P ̃iC), which derives from utility-maximization (1) subject to total income equaling wage income plus tariff revenue:

Yi = wiL ̄i +∑

### ∑

j i

k

### ji,k = wiL ̄i +∑

### ∑

tji,kPC

ji,kQC

j i

k

tji,k 1 + tji,k

λCji,keC

i,kYi. (21)

Equilibrium also requires that labor markets clear in that total wage income in country i is equal to the sum country's labor compensation from global sales:

wiL ̄i = ∑

k

### ∑

ni,k = ∑

### ∑

γ ̃in,kPC

ni,kQC

n

n

k

γ ̃in,k 1 + tin,k

λinC ,keC

n,kYn. (22)

Before moving forward, let me summarize the reformulated IO model one last time. Production in each economy employs labor from various locations to produce traded final goods, indexed by C. Trade in final goods is subject to regular tariffs. In terms of welfare implications, the reformulated IO model is isomorphic to our original IO model where production employs local labor

plus intermediate inputs, but with tariffs applied subject to duty drawbacks. Note that if tariffs were not subjected to drawbacks, they will multiply through input-output linkages and break the isomorphism between the original and reformulated IO models.

In the above setup, we can first show that the optimal tariff is uniform. Though, the optimal rate takes into account the input-output structure. A uniform tariff that inflates wi (relative to w−i) can now affect the entire schedule of producer prices in all origin countries. To keep track of these linkages, define the NK × K matrix Γ ̃i as

  

######   

- γ ̃i1,1

- γ ̃ii,1


γ ̃in,g γ ̃ii,g

###### Γ ̃i ≡ 11×K ⊗

###### = 11×K ⊗

.

γ ̃iN,K γ ̃ii,K

n×g

where 11×K is a row vector of ones and ⊗ denotes the Kronecker product. Noting the above definitions, we can once again characterize the optimal tariff in each country as a function of observable shares and reduced-form demand elasticities. The following proposition outlines this claim.

- Proposition 5. Country i's optimal tariff (with duty drawbacks) is uniform and can be characterized in terms of reduced-form demand elasticities and value-added export shares as


ti∗(t−i) = −1 ∑j i Φij∗ · IK + Eij∗Γ ̃i + 1+t ̄t ̄j

.

E ̃∗jjΓ ̃i 1K

jejj

The K × 1 vector Φij = φij,k k is composed of value added export shares, which are defined as φij,k ≡ γ ̃ii,kP

C ij,kQijC,k

∑j i ∑g γ ̃ii,gPijC,kQijC,k.

The intuition behind uniformity is that duty drawbacks prevent tariffs from propagating through the input-output network. So, to a first-order approximation, country i's tariffs can improve its terms-of-trade only by inflating wi relative to w−i.26 Unlike the baseline Ricardian model, though, Nash tariff levels internalize country i's dependence on imported intermediate inputs. A strong dependence on imported inputs, which amounts to having a low γ ̃ii,k, leads to less export market power and lower optimal/Nash tariffs. I will elaborate more on this issue in Section 5 when the model is calibrated to data.

26Without duty drawbacks, tariffs can propagate through the input-output network and indirectly tax exports. So, when export banned are but countries posses export market power, optimal tariffs will be non-uniform as they attempt to mimic export taxes—see Beshkar and Lashkaripour (2020).

Under Cobb-Douglas-CES preference, Proposition 5 indicates that country i's Nash tariffs are given by the following formula:

1

###### ti∗ =

∑j i ∑k φij∗,k k 1 − 1 − δj∗,k ∑n γγ ̃ ̃inii,,kkλC∗nj,k

(23)

∗j λC∗jj,kej,k

where δj∗,k ≡ t

1+t∗j λC∗jj . Using the above formula, we can once again invoke the multiplicatively-separable nature of the CES demand system and the hatalgebra notation (xˆ = x∗/x) to compute the Nash tariffs under input trade. This procedure requires that we solve the above tariff formula in combination with the equilibrium conditions specified under Equations 21 and 22. Doing so computes the cost of a global tariff war in one step with data on trade elasticities and observable shares. The following proposition presents this result.

- Proposition 6. If preferences are described by functional form 10, the Nash tariffs,


{ti∗}, and their effect on wages, {wˆi}, and total income, {Yˆi}, can be solved as a solution to the following system:



###### ti∗ = 1

[optimal tariff]

γ ̃in,k γ ̃ii,k

λˆ Cnj,kλCnj,k

∑j i ∑k φij∗,k k 1− 1−δj∗,k ∑n

γ ̃ii,k 1+t∗j

λˆ ijC,kλijC,kej,kYˆjYj ∑n i ∑k

λˆ Cjj,kλCjj,kej,k

∗j

, δj∗,k ≡ t

φij∗,k =

1+t∗j λˆCjjλCjj [value-added shares and δ]

γ ̃ii,k 1+t∗n

λˆ inC ,kλinC ,ken,kYˆnYn



γ ̃ j,k − k

(1+tji,k) ∏ wˆ

∗

, 1 + tji,k = 1+t

λˆ Cji,k =

i,k

1+t ̄ji,k [expenditure shares]

γ ̃ n,k − k

∑nN=1 λCni,k (1+tni,k) ∏ wˆ

λˆ ijC,kλijC,kej,kYˆjYj [wage bill = sales net of taxes] YˆiYi = wˆiwiL ̄i + ∑k ∑j i t

wˆiwiL ̄i = ∑k ∑j 1+1t∗j



i∗ 1+ti∗

λˆ Cji,kλCji,kei,kYˆiYi [income = wage bill + tax rev.]

Importantly, solving the above system requires information on only (i) industry-level trade elasticities, k; (ii) applied tariffs, t ̄ji,k, (iii) observable shares, λCji,k, ei,k, and α ̄nj,,kg;

- and (iii) net national income, Yi. The system specified by Proposition 6 involves the same set of unknowns as


the baseline Ricardian model. However, solving it requires international data on "final" good expenditure to determine λCji,k eiC,k, and Yi. It also requires data on the global input-output table, A, to determine the domestic value-added shares, γ ̃ii,k's, through Equation 19.27 Once we solve the above system, the

27Yi in this setup has a slightly different interpretation than national expenditure. More

ei,k

cost of a global tariff war can be calculated as %∆Real GDPi = Yˆi/ ∏k Pˆ ̃iC,k

,

− k −1/ k

where Pˆ ̃iC,k = ∑nN=1 λni,k (1 + tni,k) ∏ wˆγ ̃ n,k

denotes the change in the CES price index of final goods in the reformulated IO model.

###### 3.3 Integrated Model

As a final extension, I combine markup distortions and intermediate input trade into one integrated model. As before, the integrated model can be converted into a model where the production of final goods employs labor from multiple origins, paying a compounded markup on the wage rate. The producer prices can, correspondingly, be formulated as follows:

N

wγ ̃ j,k,

### ∏

ji,k = μ ̃iC,kτ ̄ji,ka ̃ ̄j,k

PC

=1

where μ ̃iC,k is the compounded markup associated with origin j–industry k final goods and γ ̃ij,k is given by Equation 19.28 Final goods are, then, traded subject to import tariffs, such that P ̃jiC,k = (1 + tji,k)PjiC,k. Under this reformulation of the model, total income in each country is Yi = μiwiL ̄i + ∑k ∑j i tji,kPjiC,kQCji,k , where μi denotes the average markup that accrues to economy i from the sales of final goods:29

∑k ∑j ∑n γ ̃ij,kPjnC,kQCjn,k

.

μi =

∑k ∑j ∑n γμ ̃ ̃ijC,k

PjnC,kQCjn,k

j,k

The optimal tariffs, in the integrated model, internalize both markup distortions and input trade. Under Cobb-Douglas-CES preferences and duty drawbacks, the optimal tariff on good ji, k can be characterized as follows (see Online

specifically, it denotes total spending on only final goods, which is still a readily observable variable. Moreover, solving the system specified by Proposition 6 requires information on total wage income, wiLi, which can be uniquely inferred from λFji,k, βFi,k, Yi, and γ ̃i,k(i).

28State formally, the vector μ ̃ ≡ [μ ̃i,k]i×k can be calculated as

μ ̃ = (INK − A)−1 (1N ⊗ μ) , (24) where μ ≡ [μk]k is a K × 1 vector of industry-level markups.

29The implicit assumption here is that profits are collected by a global fund à la Chaney

(2008), and distributed among countries in accordance to their value-added share in output.

Appendix D):

  

   1 + t ̄i∗ − [1 −

1 + kλiiC∗,k 1 + 1 − γ ̃ii,k 1 − μ ̄

μ ̄i∗ μ ̃Cj,k

###### 1 + t∗

]γ ̃ij,k , (25)

ji,k =

i∗

μ ̃iC,k kλiiC∗,k

where the uniform tariff component t ̄i∗ is described by Equation.30 To offer some intuition, a tariff on good ji, k pursues two objectives in the integrated model: First, improving country i's terms-of-trade, primarily through inflating wi relative to w−i. Second, restoring allocative efficiency in the local economy as a second-best policy measure. Both of these effects were also present in the generalized Krugman model. Unlike that model, however, a tariff on good ji, k now internalizes country i's claims to profits in the rest of the world. Restoring allocative efficiency through profit shifting is, thus, less effective under input trade. I will elaborate on this point later in Section 5 when the model is mapped to data.

###### 3.4 Discussion: Cost Channels and Extensions

To take stock, I presented a new methodology to compute the cost of a global tariff war in one optimization-free step as function of (i) observable shares, (ii) applied tariffs, (iii) industry-level trade elasticities, and (iv) and industry-level markup wedges. Moreover, my theory identified two distinct avenues through which a tariff war inflicts a cost on the global economy:

- i. pure trade reduction, the importance of which depends on a country's dependence on imported inputs, and
- ii. the exacerbation of pre-existing markup distortions as a result of noncooperative profit-shifting incentives.


Granted, some readers may share Krugman's (1997) skepticism that governments do not necessarily set Nash tariffs with the objective to non-cooperatively maximize national welfare. This type of skepticism, however, does not pose a problem for the present methodology. Instead, the methodology is flexible enough to accommodate arbitrary preferences towards protection. For instance, if we believe that governments arbitrarily assign a higher weight to the agricultural sector, the present methodology can easily account for that.

30To be specific: t ̄i∗ = 1/ ∑j i,k φij∗,k k 1 − 1 − δj∗,k ∑n γγ ̃ ̃inii,,kk λ∗nj,k .

That being said, let me discuss a few possible concerns with the above methodology. Some of these concerns are easy to address, but some others are more consequential and actually apply to the broader literature on this topic.

A first concern is my assumption on restricted entry. This assumption was adopted in line with Ossa (2014), with the justification that it makes the model amenable to the introduction of political pressures. But what happens if we replace the restricted entry assumption with free entry? It is easy to verify that the optimal tariff formulas will remain intact. But the predicted losses from a tariff war can be quite different, and presumably larger under free entry–see Lashkaripour and Lugovskyy (2020) for a similar discussion but in the context of unilateral trade taxes.

A second concern is my abstraction from firm-selection effects. This concern is misplaced if we believe that the firm-level productivity distribution is Pareto and that the fixed marketing cost is paid in terms of labor in the destination country. In this particular but standard case, the heterogeneous firm model with selection effects becomes isomorphic to the generalized Krugman model introduced in Section 3.1.31 Beyond this particular case, the concern is not easy to address. Mostly, because producing analytic formulas for Nash tariffs becomes increasingly difficult under arbitrary selection effects.32

A third and perhaps more serious concern, is that my analysis overlooks dynamic adjustment costs. This concern applies to a broader literature that employs static trade models when analyzing tariff wars. For instance, by imposing balanced trade, my analysis inevitably overlooks the dynamic losses or gains from trade rebalancing. Recently, several papers in the international macroeconomics literature, including Balistreri et al. (2018), Barattieri et al. (2018), and Bellora and Fontagné (2019), have used dynamic models to quantify these adjustments costs. The general consensus arising from these studies is that dynamic adjustment costs are non-trivial.

## 4 Cooperative Tariffs

Until now, I have focused on a global tariff war characterized by noncooperative Nash tariffs. In this section I switch attention to cooperative tar-

- 31Kucheryavyy et al. (2016) establish this isomorphism under free entry. But the same isomorphism argument applies readily to the case of restricted entry.
- 32Costinot et al. (2016) have made significant headway in this direction. They characterize the optimal firm-level trade policy under general firm-selection effects.


iffs that maximize global rather than national welfare. Such tariffs can be supported as the outcome of a Nash bargaining game with lump-sum transfers between counties. As such, cooperative tariffs inform us of the potential gains from further trade talks. Stated formally, the vector of cooperative tariffs, t , is determined by the following problem:33

t = argmax

t

N

### ∑

Wi (t;w) (P2),

i=1

As noted by Ossa (2016), computing cooperative tariffs is even more burdensome than Nash tariffs, because "all countries' tariffs have to be chosen at the same time." However, following the same logic presented earlier, this computational burden can be bypassed with the aid of analytic formulas for cooperative tariffs.

Based on the first welfare theorem, the Ricardian model with or without input trade yields an efficient market equilibrium. So, it follows trivially that t = 0 in the aforementioned models. In the generalized Krugman model, however, the market equilibrium is inefficient and cooperative tariffs can help restore efficiency to some degree. As proven in Online Appendix E, the cooperative tariff on goods imported by country i in industry k can be formulated as

λii,k + 1 kλii,k + μμk

1 + tji,k = 1 + ti,k = k

, (26)

where μ = ∑n (μnwnL ̄n) / ∑n (wnLn) denotes the output-weighted average global markup. The above formula indicates that cooperative tariffs subsidize

high-markup imports. More so in low- kλii,k markets where imported goods are less substitutable with domestic varieties. The derivation of the above formula invokes two intermediate results: First, an envelope result whereby ∂ ∑iN=1 (Wi (t;w)) /∂w = 0. Second, a well-known result that global profits are a constant share of global revenue under Cobb-Douglas-CES preferences.

To gain further intuition, note that the first-best cooperative policy in the generalized Krugman model consists of domestic subsidies (equal to 1/μk) that restore marginal-cost-pricing (Lashkaripour and Lugovskyy (2020)). If firstbest domestic subsidies are inapplicable due to political and institutional barriers, it is optimal to use import tariffs to mimic them. The cooperative tariffs characterized by Equation 26 achieve this objective. Accordingly, in the

33The above formulation of the cooperative tariff problem is akin to Ossa (2019), since the global gains from cooperation are assumed to redistributable with international transfers.

limit where kλii,k → 0 and foreign varieties do not compete with domestic alternatives, the cooperative tariff formula collapses to the inverse markup rate:

1 + ti,k = 1/μk.

The fact that cooperative tariffs are non-zero suggests that there are potentially large gains from future trade talks. As such, the true cost of noncooperative behavior exceeds the pure cost of a global tariff (which was implied by Proposition 4). Recalling that t∗ denotes the vector of non-cooperative Nash tariffs, the true cost of non-cooperation can be calculated as follows

True Cost of Non-Cooperation =

=

N

N

∑

∑

(Wi (t∗;w∗)) ,

(Wi (t ;w )) −

i=1

i=1

N

N

(Wi (t ;w ) − W ̄ i)

(W ̄ i − Wi (t∗;w∗))

∑

∑

,

+

i=1

i=1

gains from future trade talks

cost of a global tariff war

where W ̄ i denotes country i's welfare under the status quo. Following the same logic presented earlier, we can combine the cooperative tariff formula specified under Equation 26 with equilibrium conditions to compute the "true cost of non-cooperation" in one optimization-free step (see Online Appendix E for details). The next section performs these calculations using actual trade and production data from many countries and over many years.

## 5 Quantitative Implementation

In this section, I employ Propositions 2, 4, and 6 to compute the prospective cost of a tariff war for 43 major economies and to study how this cost has evolved over time. To solve the system specified by Propositions 2 and 4, I need data on the full matrix of industry-level bilateral trade values, Xji,k ≡ Pji,kQji,k and applied tariffs, t ̄ji,k. Knowing these values, I can determine total expenditure, Yi = ∑j ∑k Xji,k; wage revenue, wiL ̄i = ∑j ∑k Xij,k/(1 + t ̄ij,k); as well as expenditure shares, ei,k = ∑j Xji,k /Yi , and λji,k = Xji,k/ei,kYi.34 To solve the system specified by Proposition 6, I also need data on "final" good trade and the global IO matrix, A. Below, I describe how the required data is collected from different sources.

34In the case of Proposition 4 we need information on non-tariff revenue, which can be similarly calculated as μ ̄iwiLi = ∑j ∑k Xij,k/(1 + t ̄ij,k).

Data on Trade Values and IO Shares. Data on bilateral trade values are taken from the 2016 release of the World Input-Output Database (WIOD, see Timmer et al. (2012)). The dataset spans years 2000 to 2014, covering 43 countries (plus an aggregate of the rest of the world) and 56 industries. The 43 countries featured in the WIOD are listed in the first column of Table 2. Following Costinot and Rodríguez-Clare (2014), I group the industries into 16 industrial categories, assuming that industries belonging to the same category are governed by the same trade elasticity parameter—the details of this categorization and the list of industries is provided in Table 4 of the appendix.

Solving the system specified by Propositions 6 requires two additional data points. First, I need the full matrix of final good trade values, {XjiC,k}, which is readily reported in each version of the WIOD. Second, I need data on international IO shares in order to construct the labor share matrix, γ ̃, based on Equation 19. For each country, the WIOD reports IO shares at the industrylevel. With this information, I can construct the variety-level IO shares, α ̄nj,,kg, as the variety-level expenditure share, λji,k, times the reported industry-level input share. Country i's wage revenue and total final good expenditure can be respectively calculated as wiL ̄i = ∑j ∑n ∑k γ ̃ij,kXjnC ,k and Yi = ∑i ∑k XjiC,k. With information on Yi, I can immediately calculate the final good expenditure shares as eiC,k = ∑j(XjiC,k)/Yi and λCji,k = XjiC,k/eiC,kYi.

Importantly, to make the WIOD data compatible with theory, I need to purge it from trade imbalances. This adjustment is necessary, because Propositions 2, 4, and 6 implicitly assume that trade is balanced. Applying these propositions to imbalanced data would, therefore, identify the sum of the (i) tariff war cost, and (ii) trade balancing cost. Hence, to recover the pure cost of a global tariff war, I follow the methodology in Dekle et al. (2007) to purge the data from underlying trade imbalances.

Data on Applied Tariffs. To evaluate Propositions 2, 4, and 6, I also need information on applied tariffs for each of the countries and industries in the WIOD sample. For this purpose, I use data on applied tariffs from the United Nations Statistical Division, Trade Analysis and Information System (UNCTAD-TRAINS). The UNCTAD-TRAINS for 2014 covers 31 two-digit (in ISIC rev.3) sectors, 185 importers, and 243 export partners. In line with Caliendo et al. (2015), I assign the simple tariff line average of the effectively applied tariff (AHS) to t ̄ji,k. When tariff data are missing in a given year, I use tariff data for the nearest available year, giving priority to earlier years. To aggregate the

UNCTAD-TRAINS data into individual WIOD industries, I closely follow the methodology outlined in Kucheryavyy et al. (2016). Finally, I have to deal with the fact that individual European Union (EU) member countries are not represented in the UNCTAD-TRAINS data during the 2000-2014 period. To deal with this issue, I rely on the fact that the EU itself is featured as a reporter; and the fact that intra-EU trade is subject to zero tariffs while all EU members impose a common external tariff on non-members.

Industry-Level Trade Elasticities. I estimate the industry-level trade elasticities, { k}, with data on aggregate trade flows, {Xji,k}, and applied tariff rates, t ̄ji,k. To this end, I choose 2014 as the baseline year and employ the tripledifference methodology developed by Caliendo and Parro (2015) to estimate a trade elasticity for each of the WIOD industry categories in my analysis. Further details regarding the estimation procedure are provided in Online Appendix G. The estimated trade elasticities are also reported in Table 4 of the appendix.35

In the case of the generalized Krugman model, I need mutually-consistent estimates for the constant industry-level markup wedges and the trade elasticities. Attaining such estimates requires micro-level data, and is not possible with the macro-level data reported by the WIOD. Considering this, I borrow the estimated μk and k's from Lashkaripour and Lugovskyy (2020) for each of the WIOD industries in my analysis. These adopted values are reported in Table 3 of the online appendix. To maintain transparency, I also assume equal political economy weights for all industries, which is motivated by Ossa's (2016) point that "average optimal tariffs and their average welfare effects are quite similar with and without political economy pressures." The reason behind this apparent insignificance is that "political economy pressures are more about the intranational rather than the international redistribution of rents."36

###### 5.1 The Cost of a Global Tariff War for Different Nations

Table 2 reports (i) the computed Nash tariff levels, as well as (ii) the per-cent loss in real GDP as a result of the tariff war for various countries and under

- 35I normalize the trade elasticity for the service sector to 10, which is in between the two normalizations proposed by Costinot and Rodríguez-Clare (2014).
- 36As noted earlier, there are specific cases where political economy pressures magnify the efficiency loss resulting from a tariff war. One example is when governments assign higher political economy weights to high-profit (high-μ) industries, which leads to more distortionary Nash tariffs.


various modeling assumptions. Recall that in the baseline Ricardian model, tariffs are targeted solely at improving a country's wage relative to the rest of the world. The Nash tariffs are, as a result, uniform and stand around 40% for the average economy. The heterogeneity in Nash tariffs across countries is driven primarily by the average trade elasticity underlying a country's exports. For instance, the Nash tariffs are significantly lower for Australia, Norway, and Russia who predominantly export primary commodities that are subject to high trade elasticities.

From the perspective of the baseline Ricardian model, the average country loses 2.4% of its real GDP in the event of a tariff war. These losses are driven by pure trade reduction. Even though the losses are quite heterogeneous, all countries lose without exception, with smaller countries being the most affected due to their greater reliance on trade and limited market power.

Once we account for markup distortions, Nash tariffs are no longer uniform as they include two components: a terms-of-trade-driven component as well as a profit-shifting component. The profit-shifting component taxes imports in highmarkup industries but subsidies imports in low markup industries. The Nash tariffs average around 37% across all countries and industries. Even though the average Nash tariffs is lower than in the baseline case, the predicted losses from a global tariff war is on average higher, standing around 2.6% of the real GDP.

The magnification of cost under markup distortions relates the point raised in Section 3.4: A global tariff war inflicts two types of inefficiency in the presence of pre-existing markup distortions: (i) an efficiency loss that is driven purely by trade reduction, and (ii) an efficiency loss due to the exacerbation of pre-exiting markup distortions. To be specific: output in high-markup industries is already sub-optimal prior to the tariff war. In the event of the tariff war, countries impose tariffs that (on average) tax high-markup industries, thereby lowering global output in these industries and dragging the global economy further away from its efficiency frontier. While all countries lose from these developments, economies like Korea and Taiwan that are net exporters in highmarkup industries experience the greatest efficiency loss.37

Accounting for input trade magnifies the Nash tariffs and their corresponding cost to yet another level. It also reveals that some countries are significantly more exposed to the cost than in the baseline case. Somewhat surprisingly,

37It should be noted that using tariffs as a profit-shifting device is an artifact of first-best domestic taxes being unavailable to the governments—see Lashkaripour and Lugovskyy (2020) for a more detailed discussion.

###### Table 2: The welfare cost of a tariff war (year 2014)

Baseline Model Baseline + distortions Baseline + distortions + IO Country Nash Tariff %∆ Real GDP Nash Tariff %∆ Real GDP Nash Tariff %∆ Real GDP

- AUS 14.1% -1.38% 34.3% -1.15% 41.9% -0.68%
- AUT 45.7% -2.82% 45.3% -3.61% 45.1% -2.41% BEL 55.9% -3.27% 40.6% -4.23% 51.6% -3.58% BGR 37.1% -3.24% 31.3% -3.46% 32.1% -5.73% BRA 98.2% -0.50% 41.4% -0.85% 46.4% -0.57% CAN 21.0% -2.37% 29.8% -2.03% 26.4% -2.76% CHE 51.9% -1.97% 29.8% -2.35% 41.5% -0.74% CHN 40.7% -0.35% 39.3% -0.59% 78.5% -0.43% CYP 12.5% -3.48% 18.5% -2.39% 19.4% -5.79% CZE 49.3% -2.85% 49.4% -4.09% 59.2% -3.36% DEU 59.1% -0.96% 63.0% -1.94% 67.0% 0.16% DNK 59.3% -2.31% 30.8% -3.11% 44.4% -3.07% ESP 59.9% -1.45% 48.7% -1.71% 58.0% -1.27% EST 28.4% -4.18% 26.0% -4.85% 50.6% -5.15% FIN 31.4% -1.75% 65.8% -2.54% 57.5% -1.23% FRA 51.8% -1.73% 37.7% -1.89% 54.0% -1.61% GBR 27.9% -2.03% 31.1% -1.34% 28.0% -2.77% GRC 12.5% -2.81% 30.6% -2.14% 20.9% -4.77% HRV 38.3% -3.12% 29.6% -3.16% 36.6% -3.70% HUN 52.7% -4.23% 41.8% -5.56% 65.6% -3.74% IDN 54.1% -0.99% 43.1% -1.52% 59.0% -0.45% IND 49.6% -0.90% 41.4% -1.13% 55.3% -0.68% IRL 117.7% -1.42% 26.0% -5.17% 39.0% -4.47% ITA 49.8% -0.78% 62.1% -1.38% 50.6% -0.65% JPN 44.9% -0.53% 47.1% -0.87% 75.6% -0.23% KOR 43.6% -1.22% 42.5% -1.99% 89.3% 0.61% LTU 31.8% -4.00% 33.1% -4.44% 43.6% -3.74% LUX 12.0% -6.33% 17.6% -4.55% 12.9% -19.47% LVA 26.0% -3.16% 25.3% -2.89% 27.0% -6.79% MEX 39.7% -2.42% 39.9% -2.25% 68.8% -0.85% MLT 12.4% -5.45% 19.9% -3.95% 15.8% -14.09% NLD 37.1% -4.19% 30.0% -4.09% 50.7% -0.29% NOR 17.2% -2.05% 38.9% -2.07% 55.7% 1.15% POL 46.4% -2.67% 38.5% -2.70% 53.2% -3.29% PRT 27.3% -2.49% 28.7% -1.93% 47.5% -2.19% ROU 32.8% -2.56% 29.7% -2.03% 42.5% -2.84% RUS 12.2% -2.54% 33.7% -1.88% 55.4% 0.43% SVK 41.5% -4.48% 41.6% -4.36% 66.3% -4.06% SVN 46.3% -3.26% 40.1% -3.79% 46.3% -3.31% SWE 38.5% -1.95% 49.1% -2.37% 57.1% 0.10% TUR 45.6% -1.28% 48.9% -1.91% 46.3% -1.50% TWN 35.4% -2.35% 29.7% -3.05% 87.8% 1.52% USA 43.6% -0.76% 39.7% -0.56% 38.3% -1.10%


34

Average 40.5% -2.42% 37.5% -2.63% 48.9% -2.81%

countries like Brazil, Norway, and Indonesia even gain –though modestly– from a tariff war. These gains, however, come at a significant cost to other economies like Greece, Estonia, or Portugal. More surprisingly, these supposed winners are not the largest economies by any account. Instead, they are economies that are less dependent on imported inputs. On the flip side, the major losers are also small economies that rely heavily on imported intermediate inputs—a point I come back to in Subsection 5.3.

Aside from dependence on imported inputs, national exposure to a global tariff war is determined by two primary factors:

- i. Overall dependence on international trade, which is measured by the share of imports in gross national expenditure and the degree to which imported goods are substitutable with domestic alternatives; and
- ii. Tariff concessions given under existing agreements, i.e., the extent of tariff liberalization undertaken by a country relative to the Nash benchmark.


Figure 1 sheds light on the second factor from the lens of the integrated model that accounts for both markup distortions and input trade. The radial graph presented under Figure 1 plots the tariff revenues each country could have collected from its trading partners under the non-cooperative Nash equilibrium. These potential revenues, however, have been capitulated to maintain the cooperative equilibrium that currently prevails. Evidently, countries like Japan and Korea have given more tariff concession than they have received. As such, these countries are less exposed to the cost of a global tariff war than, say, Canada or Brazil who are net receivers of tariff concessions.

Before concluding this section, let me address a standard question often thrown at this type of analysis: How believable are these numbers? To get a "rough" answer, we can contrast the present numbers with those following the only documented full-fledged tariff war in history. Namely, the tariff war triggered by the Smoot-Hawley Tariff Act of 1930. The tariffs that were imposed during this documented tariff war averaged around 50%, a number strikingly close to the numbers reported in Table 2.38 Despite this stark resemblance, one should still keep in mind that the models considered here overlook many relevant cost channels. So, the present results should be ultimately interpreted with great caution.

38See Bagwell and Staiger (2004) for more details regarding the tariff war that followed the Smoot-Hawley Tariff Act.

###### Figure 1: Tariff concessions undertaken to avoid a global tariff war

A

U

S

0

500

0

400

100

A

S

300

U

200

E

U

200

C

300

o

u

n

t

100

r

i

400

e

s

0

500

N

W

600

T

0

700

R

- R

U

- S 0

- T
- U


0

B

0

R

A

0

C

100

A

R

N

- M

E

X

0

100

- N
- O


0

0

C

H

E

0

100

100

R

O

200

K

0

300

200

C

H

400 500

N

100

N

P

0

J

600

0

0

D

N

I

I

D

N

Note: The source of the data is the 2014 WIOD. The underlying model is the integrated model from Section 3.3. Each arrow in the radial graph depicts the millions of dollars forgone in tariff revenues on trading partners to maintain the current state of global cooperation.

###### 5.2 The Cost of a Global Tariff War Over Time

A key advantage of the present approach is its remarkable computational speed, which I detail later in this section. Building on this advantage, I employ my methodology to compute the cost of a global tariff war under different modeling specifications and across many years, so far as data availability permits—that would be from 2000 to 2014 in the case of the WIOD data.

Figure 2 displays the final results. For every year, the cost of a tariff war to the global economy is calculated as the change in real global GDP. To calculate this change, I use yearly data on constant real GDP from the Penn World Tables. I multiply and add the per-cent loss in real GDP for each country by its constant real GDP level in that year. I perform this task starting from the baseline Ricardian model and subsequently introduce pre-existing markup distortions and

###### Figure 2: The prospective cost of a tariff war over time

input trade into the analysis.

Based on Figure 2, the prospective cost of a tariff war has multiplied from 2000 to 2014. Especially so, if we account for input and the exacerbation of markup distortions by a tariff war. To provide numbers, if we account for the exacerbation of markup distortions, the prospective cost has nearly doubled from $676 billion in 2000 to around $1,448 billion in 2014.39 If we account for input trade, the prospective cost has more-than-doubled from $684 billion to $1,662 billion. This rise is driven by three separate developments:

- i. The increased openness of small economies to foreign trade. This development perhaps explains why the cost of a tariff war has multiplied over time even from the lens of the baseline Ricardian model.
- ii. The increased specialization of small, developing countries in high-profit (high-μ) industries. In light of this development, these countries are more inclined to erect tariffs for profit-shifting motives in the non-cooperative equilibrium. As such, Nash tariffs have become more distortionary. This


39In terms of percentages, the cost of a global tariff war has increase from 1.9% to 2.6% of real GDP for the average country.

###### Table 3: Computational Speed: New vs. Optimization-Based Approach

# countries # industries Nash tariffs Cooperative tariffs Ossa (2014) N = 7 K = 33 96 minutes 50 hours New approach N = 44 K = 56 4 seconds 15 seconds

Note: The computational times associated with Ossa (2014) are based on the figures reported in the article's replication file: https://doi.org/10.3886/E112717V1. The computational times reported for the new approach developed in this paper are based on a MAC machine with the following specifications: Intel Core i7 @2.8 GHz processor, with 4 physical cores, and 16 GB of RAM. Both approaches are implemented in MATLAB.

factor can explain the divergence between the losses predicted with and without accounting for markup distortions.

iii. The increased dependence of individual economies on the imported inputs. This factor, explains why the model with input trade predicts a more dramatic rise in the cost of a tariff war compared to the baseline model.

In any case, the present analysis indicates that given the current state of the global economy, the prospective cost of a global tariff war seems higher than ever. To give some perspective, the cost of a global tariff war was $1,696 billion in 2014 once we account for both input trade and markup distortions. Such a loss is the equivalent of erasing South Korea from the global economy.

Before concluding this section, let me uncover some details about the computational efficiency of the new methodology. To this end, Table 3 compares the computational speed of the new methodology to the standard optimizationbased methodology in Ossa (2014). While the new analysis includes more than 6-times as many countries, it calculates the non-cooperative Nash tariffs 1440times faster and the cooperative tariffs 12,000-times faster. As noted earlier, this remarkable improvement in efficiency is driven by (1) a reduction in the dimensionality of the optimal policy problem, and (2) bypassing numerical optimization altogether.

###### 5.3 Dependence on Imported Inputs

The present analysis provides a glimpse into how international supply chains have exposed some countries more than ever to a global tariff war. To make this point formally, let me fix ideas by using the baseline Ricardian model as a conceptual benchmark. In this baseline, a country's market power is driven by its monopoly over differentiated varieties produced with local labor. Now,

###### Figure 3: Cost of tariff war vs. Dependence on imported imputs

||MLT<br><br>LUX|
|---|
<br><br>0<br><br>5<br><br>10<br><br>15<br><br>20<br><br>25<br><br>% Loss in real GDP<br><br>.1 .2 .3 .4 .5 .6<br><br>Dependence on Imported Inputs|
|---|


% Loss in real GDP

introduce input trade into the mix. In that case, local labor will account for a smaller fraction of a country's differentiated output the more it specializes in downstream industries. Input trade, therefore, diminishes a downstream economy's market power vis-à-vis the rest of the world. That is, a downstream economy's tariffs have a relatively small effect on its terms-of-trade, as measured by its wage relative to the rest of the world. On the flip side, the relative market power of upstream economies will be multiplied (in relative terms) by input trade.

To demonstrate this point from the lens of the calibrated model, Figure 3 plots the national-level cost of a global tariff war against national-level dependence on imported inputs. The dependence index (assigned to the x-axis) is measured as one minus a trade-weighted average of γ ̃ii,k's. Roughly speaking, this index tells us what percentage of a country's output is comprised of foreign (non-local) labor content.

It is evident from Figure 3 that small downstream economies like Malta and Luxembourg, which depend more heavily on imported inputs, experience the greatest losses from a global tariff war. This outcome is aligned with my above assertion that input trade diminishes relative market power for downstream economies. By contrast, a country like Norway that exports predominantly in upstream industries (like crude oil) can even gain from a global tariff war due

to its upstream position in the global supply chain.

On a broader level, the above arguments qualify an old belief that large countries can win a tariff war, whereas small countries always lose (Johnson (1953)). My analysis indicates that a country's dependence on input trade is as important of a factor as its size. consider again the case of Norway, which gains around 1.3% in the event of a tariff war once we account for input trade. By every account, Norway is a small economy. However, it exports primarily in upstream industries like Oil. Based on Johnson's (1953) theory, Norway should lose from a tariff war, and the baseline Ricardian model that neglects input trade confirms this view. But this prediction is overturned, as soon as we account for the global input-output structure.

It should be noted once again that these results hinge on countries providing duty drawbacks in the event of a tariff war. As noted earlier, duty drawbacks are voluntarily adopted by many countries and reflect the government's aversion to export taxation. So, there is no reason to believe they will be disposed of if a tariff war escalates. Anyhow, without duty drawbacks, tariffs can mimic industry-level export taxes, providing governments with an additional avenue to manipulate their terms-of-trade. Accordingly, the welfare cost of a global tariff war may be higher in the absence of duty drawbacks. By accounting for these additional cost channels, Beshkar and Lashkaripour (2020) provide a more comprehensive view of tariff wars in the presence of global value chains.

###### 5.4 Data Aggregation Can Distort the Estimated Cost

As noted in the Introduction, existing analyses of tariff wars often restrict their attention to a limited sample of countries. This is done by aggregating smaller countries into a single taxing authority that is labeled the rest of the world (ROW). This aggregation scheme is often adopted to overcome the computational complexities inherent to tariff war analysis.40

Capitalizing on the computational efficiency of my sufficient statistics approach, I can test if such aggregation schemes pose a problem. To this end, I re-do my analysis with aggregated data, which is restricted to Brazil, China, Germany, Great Britain, France, Italy, India, Japan, and the United States. The remaining 34 countries (in the aggregated data) are lumped with the ROW and

40See Ossa (2016) for an overview of this literature. To give specific examples, Perroni and Whalley (2000) and Ossa (2014) aggregate the data into 6 economies and an aggregate of the ROW. Note, however, that they aggregate EU member countries into one taxing authority and the ROW only includes non-EU countries.

###### Figure 4: % Loss from a Tariff War: with and without aggregation

||BRA<br><br>CHN<br><br>DEU<br><br>FRA GBR<br><br>IND<br><br>ITA<br><br>JPN USA|
|---|
<br><br>−2.5<br><br>−1.5<br><br>−.5<br><br>Non−Aggregated Data (Baseline)<br><br>−2.5 −1.5 −.5<br><br>Data Aggregated to 9 Countries plus the ROW|
|---|


Non−Aggregated Data (Baseline)

treated as one taxing authority.

Figure 4 compares the welfare losses computed using the non-aggregated sample to those computed using the aggregated sample. Evidently, aggregating the data overstates the cost of a tariff war. There is a simple intuition behind this outcome. Aggregating many countries into the ROW, gives the ROW an artificially high degree of market power. As a result, the ROW imposes artificially high Nash tariffs that inflict a large welfare loss on other (non-aggregated) economies. By adopting the sufficient statistics approach developed here, researchers can avoid such data aggregation and the bias that accompanies it.

###### 5.5 The Gains from Cooperative Tariffs

The gains from cooperative tariffs can be calculated with the same data and logic used to measure the cost of a tariff war. This procedure capitalizes on the cooperative tariff formula specified by Equation 26. More details about implementation are provided in Online Appendix E. As reported in Table 3, this procedure is remarkably fast and (like the tariff war analysis) can be seamlessly performed on data from multiple years. Without this procedure, however, the cost of computing cooperative tariffs can be prohibitively high given the number of countries and industries in my analysis.

Following the discussion in Section 4, the gains from cooperative tariffs can be interpreted as the potential gains from further trade talks. Figure 5 plots

###### Figure 5: The gains from cooperative tariffs over time

360

340

320

300

280

260

240

220

200

180

160

2000 2002 2004 2006 2008 2010 2012 2014

these gains for the 2000-2014 period. The results indicate that the potential gains from further trade talks (measured in terms of constant real GDP) have multiplied, increasing from $184 billion in 2000 to $347 billion in 2014.41 This rise is indicative of two developments: First, markup distortions have worsened in the global economy. Second, due to the rise in international trade, trade policies have become a more effectives second-best policy at correcting markup distortions. This rise also suggests that the opportunity cost of non-cooperative tariff policies has elevated to unprecedented levels. By adopting a non-cooperative approach countries not only expose themselves to retaliation, but also miss out on the unexploited-but-sizable benefits of further cooperation.

## 6 Concluding Remarks

Building on recent advances in quantitative trade theory, I developed a simple, sufficient statistics methodology to compute the prospective cost of a fullfledged global tariff war. My proposed methodology has two basic advantages. First, it derives analytic formulas for Nash tariffs, delivering a more than 1000fold increase in computational speed relative to standard optimization-based approaches. Second, it can be easily extended to account for salient features of the global economy like input trade and pre-existing markup distortions.

I applied the new methodology to data spanning many countries, indus-

41In terms of percentages, the gains from cooperative tariffs have increase from 0.21% to 0.46% of real GDP for the average country.

tries, and years. This application uncovered patterns that are crucial to the ongoing discourse surrounding trade policy: (i) The prospective cost of a global tariff war has more-than-doubled over the past 15 years; (ii) a significant fraction of the cost associated with a full-fledged tariff war is due to the exacerbation of already-existing markup distortions; (iii) small downstream economies are the most vulnerable to a now-imminent global tariff war; and (iv) cooperative tariffs have become a more effective tool at correcting rising markup distortions in the global economy.

Moving forward, a natural next step is to apply the proposed methodology to an even broader set of countries and industries using richer, confidential data. Previously, such applications were partially impeded by computational burden; but practitioners can employ the present methodology to circumvent this particular obstacle. Another avenue for future research is to extend the methodology, itself, by incorporating multiple factors of production and other short-run adjustment costs.

## References

Amiti, M., S. J. Redding, and D. Weinstein (2019). The impact of the 2018 trade war on us prices and welfare. Technical report, National Bureau of Economic Research.

Arkolakis, C., A. Costinot, D. Donaldson, and A. Rodríguez-Clare (2015). The elusive pro-competitive effects of trade. Technical report, National Bureau of Economic Research.

Arkolakis, C., A. Costinot, and A. Rodriguez-Clare (2012). New trade models, same old gains? American Economic Review 102(1), 94–130.

Bagwell, K. and R. W. Staiger (2004). The economics of the world trading system. MIT press.

Balistreri, E. J., C. Böhringer, and T. Rutherford (2018). Quantifying disruptive

trade policies. Balistreri, E. J. and R. Hillberry (2018). 21st century trade wars. Barattieri, A., M. Cacciatore, and F. Ghironi (2018). Protectionism and the busi-

ness cycle. Technical report, National Bureau of Economic Research.

Bellora, C. and L. Fontagné (2019). Shooting oneself in the foot? trade war and global value chains.

- Beshkar, M. and A. Lashkaripour (2019). Interdependence of Trade Policies in General Equilibrium.
- Beshkar, M. and A. Lashkaripour (2020). The cost of dissolving the wto: The role of global value chains.


Caliendo, L., R. C. Feenstra, J. Romalis, and A. M. Taylor (2015). Tariff Reductions, Entry, and Welfare: Theory and Evidence for the Last Two Decades. Technical report, National Bureau of Economic Research.

Caliendo, L. and F. Parro (2015). Estimates of the Trade and Welfare Effects of NAFTA. Review of Economic Studies 82(1), 1–44.

Chaney, T. (2008). Distorted Gravity: The Intensive and Extensive Margins of International Trade. The American Economic Review 98(4), 1707–1721.

Chetty, R. (2009). Sufficient statistics for welfare analysis: A bridge between structural and reduced-form methods. Annu. Rev. Econ. 1(1), 451–488.

Costinot, A., D. Donaldson, J. Vogel, and I. Werning (2015). Comparative Advantage and Optimal Trade Policy. The Quarterly Journal of Economics 130(2), 659–702.

Costinot, A. and A. Rodríguez-Clare (2014). Trade Theory with Numbers: Quantifying the Consequences of Globalization. Handbook of International Economics 4, 197.

Costinot, A., A. Rodríguez-Clare, and I. Werning (2016). Micro to Macro: Optimal Trade Policy with Firm Heterogeneity. Technical report, National Bureau of Economic Research.

Dekle, R., J. Eaton, and S. Kortum (2007). Unbalanced Trade. Technical report, National Bureau of Economic Research.

Eaton, J. and S. Kortum (2002). Technology, Geography, and Trade. Econometrica 70(5), 1741–1779.

Fajgelbaum, P. D., P. K. Goldberg, P. J. Kennedy, and A. K. Khandelwal (2019). The return to protectionism. Technical report, National Bureau of Economic Research.

Felbermayr, G., B. Jung, and M. Larch (2013). Optimal tariffs, retaliation, and the welfare loss from tariff wars in the melitz model. Journal of International Economics 89(1), 13–25.

Gros, D. (1987). A note on the optimal tariff, retaliation and the welfare loss from tariff wars in a framework with intra-industry trade. Journal of International Economics 23(3-4), 357–367.

Grossman, G. M. and E. Helpman (1994). Protection for sale. The American Economic Review 84(4), 833.

Horn, R. A. and C. R. Johnson (2012). Matrix analysis. Cambridge university press.

Hsieh, C.-T. and P. J. Klenow (2009). Misallocation and Manufacturing TFP in China and India. The Quarterly Journal of Economics 124(4), 1403–1448.

Johnson, H. G. (1953). Optimum tariffs and retaliation. Review of Economic Studies 21(2), 142–153.

Kennan, J. and R. Riezman (2013). Do big countries win tariff wars? In International Trade Agreements and Political Economy, pp. 45–51. World Scientific.

Krugman, P. (1980). Scale economies, product differentiation, and the pattern of trade. The American Economic Review 70(5), 950–959.

Krugman, P. (1997). What should trade negotiators negotiate about? Journal of Economic Literature 35(1), 113–120.

Kucheryavyy, K., G. Lyn, and A. Rodríguez-Clare (2016). Grounded by Gravity: A Well-Behaved Trade Model with Industry-Level Economies of Scale. NBER Working Paper 22484.

Lashkaripour, A. and V. Lugovskyy (2020). Profits, scale economies, and the gains from trade and industrial policy. Working Paper.

Maggi, G. (2014). International trade agreements. In Handbook of international Economics, Volume 4, pp. 317–390. Elsevier.

Mas-Colell, A., M. D. Whinston, J. R. Green, et al. (1995). Microeconomic theory, Volume 1. Oxford university press New York.

Michalopoulos, C. (1999). Trade policy and market access issues for developing countries: implications for the Millennium Round. The World Bank.

Opp, M. M. (2010). Tariff wars in the ricardian model with a continuum of goods. Journal of International Economics 80(2), 212–225.

Ossa, R. (2014). Trade Wars and Trade Talks with Data. The American Economic Review 104(12), 4104–46.

Ossa, R. (2016). Quantitative Models of Commercial Policy. In Handbook of Commercial Policy, Volume 1, pp. 207–259. Elsevier.

Ossa, R. (2019). A quantitative analysis of subsidy competition in the us. NBER Working Papers (20975).

Perroni, C. and J. Whalley (2000). The new regionalism: trade liberalization or insurance? Canadian Journal of Economics/Revue canadienne d'économique 33(1), 1–24.

Timmer, M., A. A. Erumban, R. Gouma, B. Los, U. Temurshoev, G. J. de Vries, I.-a. Arto, V. A. A. Genty, F. Neuwahl, J. Francois, et al. (2012). The World Input-Output Database (WIOD): Contents, Sources and Methods. Technical report, Institute for International and Development Economics.

46

## A Proof of Proposition 1

###### Step #1: Express Equilibrium Variables as function of P ̃i, w, and t−i

The first step of the proof is to express equilibrium variables (e.g., Qji,k, Yi, etc.) as a function of (1) the vector of consumer prices in country i,

P ̃i ≡ P ̃ji,k j,k = {P1i,1,...PNi,1,...., P1i,K,...PNi,K} ; (27)

which recall i is the country we are characterizing the unilaterally optimal policy for;(2) the vector of national-level wage rates all over the world,

w = {w1,..., wN} ;

and (3) the vector of applied tariffs in the rest of world excluding country i,

t−i = {t1,...,ti−1,ti+1,...,tN} ,

where tj = t1j,1,...tNj,1,...., t1j,K,...tNj,K is the vector of tariff rates applied by country j i. Considering the above notation, we can immediately establish the following result.

- Lemma 2. All equilibrium outcomes (excluding P ̃ i and w) can be uniquely determined as a function of t−i, P ̃ i, and w.


Proof. The proof follows from solving all equilibrium conditions excluding the equilibrium expression for consumer prices, P ̃ji,k (which pins down P ̃i), and the country-specific balanced trade condition (which pins down w). Stated formally, we need to solve the following system treating t−i, P ̃i, and w as given:

Pj ,k = aj ,kwj; P ̃jι,k = (1 + tjι,k)Pjι,k ι i, [competitive pricing] Qj ,k = Dj ,k(Y , P ̃1 ,1,...P ̃N ,1,..., P ̃1 ,K,..., P ̃N ,K) [optimal consumption] Y =w L + ∑

P ̃j ,k − Pj ,k Qj ,k [income = wage bill + tax revenue]

##### ∑

j ,

k

Since there is a unique equilibrium, the above system is exactly identifies in that it uniquely determines Pj ,k, Qj ,k, and Y as a function of t−i, P ̃i, and w .

Following Lemma 2, we can express total income in country i, Yi, as well as the entire demand schedule in that country as follows:

Yi ≡ Yi(P ̃i,t−i;w); Qji,k ≡ Qji,k(P ̃i,t−i;w) = Qji,k Yi(P ̃i,t−i;w),P ̃i .

Recall that Qji,k(.) denotes the Marshallian demand function facing variety ji, k. Observing the above representation, my main objective is to reformulate country i's policy problem as one where the gov-

ernment chooses P ̃i (as opposed to directly choosing tariff rates) taking t−i as given. This reformulation, though, needs to take into account that w is an equilibrium outcome that implicitly depends on t−i and P ̃i. To track this constraint, define the (P ̃i,t−i;w) combinations that are feasible as follows.

Definition 4. A combination (P ̃i,t−i;w) is feasible iff given P ̃i and t−i, the vector of wages, w, satisfies the balanced trade condition in every country ∈ C. More specifically, observing that Pjn = τ ̄jn,ka ̄j,kwj:42

K

#### (P ̃i,t−i;w) ∈ F ⇐⇒ ∑

##### ∑

j n

k=1

τ ̄jn,ka ̄j,kwjQjn,k(P ̃i,t−i;w) − τ ̄nj,ka ̄n,kwnQnj,k(P ̃i,t−i;w) = 0.

Equipped with the above definition, we can now proceed with the reformulation of the optimal policy problem (P1).

###### Step #2: Reformulate the Optimal Tariff Problem

Recall the optimal tariff problem (P1) from Section 2. The next intermediate result shows that country i's optimal tariff problem can be cast as on where the government chooses the optimal vector of consumer prices in the local economy instead directly choosing the vector of tariffs.

- Lemma 3. Country i's vector of optimal tariffs, ti, can be determined by solving the following problem:


max

P ̃i

Wi(P ̃i,t−i;w) ≡ Vi(Yi(P ̃i,t−i;w),P ̃i) s.t. (P ̃i,t−i;w) ∈ F (P1)

Proof. The proof proceeds in two steps. First, I show that the policy space afforded to the government under the price vector, P ̃i, is identical to that afforded under the tariff vector, ti = {tji,k}j i,k. Second, I show that the optimal choice w.r.t. P ̃i implicitly and uniquely pins down the optimal choice w.r.t. ti.

Step (a) To set stage for the first step, note that ti is composed of (N − 1)K elements, whereas

- P ̃i = P ̃1i,...,P ̃ii,...,P ̃Ni is composed of NK elements: namely, (N − 1)K import prices, P ̃−ii, plus K domestic prices, P ̃ii. Below, I show that –because markets are competitive– the optimal policy should never tax good ii, k. This claim requires that I establish the following:

dWi(P ̃i,t−i;w) dlnP ̃ii

= 0 ⇐⇒ P ̃ii = Pii,

which entails that the optimal choice w.r.t. P ̃ii of is equal to the producer price. If that is true, adding

- P ̃ii to the government's policy choice set does not afford the government more policy space than if the government was directly setting tariffs, ti. To prove this above claim, we can invoke the chain rule to produce the following expression (recalling that P ̃−ii ≡ P ̃i − P ̃ii ):


∂Vi(Yi,P ̃i) ∂ lnP ̃ii

∂Vi(Yi,P ̃i) ∂Yi

∂Wi(.)

dw dlnP ̃ii t−

dWi(.) dlnP ̃ii

∂Yi ∂ lnP ̃ii w, t−

. (28)

= +

+

+

###### ∂w t

i, P ̃−ii

−i, P ̃i

i, P ̃−ii

42The bar notation indicates that τ ̄jn,k and a ̄j,k are constant structural variables.

By Roy's identity, the first term on the right-hand side can be formulated as

[Roy's identity]

∂Vi(Yi,P ̃i) ∂ lnP ̃ii

= −P ̃ii · Qii,

where the operator "·" corresponds to the inner product of two vectors. The second term on the righthand side in Equation 28 can be determined by taking a derivative w.r.t. P ̃ii from the balanced budget condition, Yi = wiLi + ∑Nj=1 P ̃ji − Pji · Qji, which yields43

∂Vi(Yi,P ̃i) ∂Yi

∂Yi ∂ lnP ̃ii w, t−

= P ̃ii · Qii + P ̃ii − Pii ·

i, P ̃−ii

∂Qii ∂ lnP ̃ii w, t−

.

i, P ̃−ii

The last term on the right-hand side of Equation 28 is also equal to zero: dlndwP ̃

= 0, since demand is homogenous of degree zero. Combining these expressions and plugging them back into Equation 28 establishes that

ii t−i, P ̃−ii

dWi(.) dlnP ̃ii

∂Qii ∂ lnP ̃ii w, t−

= P ̃ii − Pii ·

###### = 0 ⇐⇒ P ̃ii = Pii.

i, P ̃i−{P ̃ii}

Step (b) It is straightforward to verify that there is a one-to-one correspondence between the optimal choice w.r.t. P ̃−ii ≡ P ̃i − P ̃ii and ti. More specifically the optimal choice w.r.t. P ̃−ii implicitly pins down the entire vector of optimal tariffs as

1 + t1∗i,1,...,1 + t∗Ni,1,...,1 + t1∗i,K,...,1 + t∗Ni,K =

P ̃1∗i,1 P1i,1

P ̃Ni∗ ,1 PNi,1

P ̃1∗i,K P1i,K

P ̃Ni∗ ,K PNi,K

,...,

,...,

,...,

.

Put differently, there is always unique vector of tariffs that can implement the optimal import price vector, P ̃∗−ii. Together, Steps (i) and (ii) establish the equivalence between Problems (P1) and (P1).

###### Step #3: Solving the System of F.O.C.'s Associated with P1

This step derives and solves the system of F.O.C.s associated with Problem P1. I will adopt the dual approach in this process, which relies heavily on Marshallian demand elasticities. So, to fix ideas and avoid any confusion later on, I formally define these elasticities in the following.

- Notation A [Marshallian Demand Elasticities] Let Qji,k ≡ Qji,k(Yi,P ̃i) denote the Marshallian demand function facing variety ji, k. This demand function is characterized by the following reduced-form demand elasticities:


∂ ln Qji,k(Yi,P ̃i) ∂ ln P ̃ni,g

[price elasticity] ε(jini,k,g) ≡

∂ ln Qji,k(Yi,P ̃i) ∂ lnYi

,

[income elasticity] ηji,k ≡

43To be clear: ∑Nj=1 P ̃ji − Pji · Qji = ∑Nj=1 ∑kK=1 P ̃ji,k − Pji,k Qji,k by definition of the inner product operator, "·".

where P ̃i corresponds to the entire of vector of consumer prices in market i as specified by 27. Recall from the main text that V(Yi,P ̃i) denotes the indirect utility associated with the Marshallian demand function, Qji,k(Yi,P ̃i).

The general equilibrium problem we are analyzing has many free-moving components. So, when taking partial derivative it is important to specify the variables that are being held constant. At the same, I would like to maintain a compact notation. So, for future reference, the following clarifies my choice of notation w.r.t. partial derivatives.

- Notation B [Partial derivatives] Since the vector of tariffs in the rest of the world, t−i, is treated as given and the elements of P ̃i are treated as policy choices, the partial derivative of variable x ≡ x(P ̃i,t−i;w) w.r.t. P ̃ji,k ∈ P ̃i should be interpreted as a partial derivative holding t−i and P ̃i − P ̃ji,k fixed. Namely,


∂x(.) ∂ ln P ̃ji,k w ≡

∂x(.)

∂x

∂x ∂ ln P ̃ji,k P ̃

;

.

∂ ln P ̃ji,k ≡

∂ ln P ̃ji,k w, P ̃

i−{P ̃ji,k}, t−i

i−{P ̃ji,k}, t−i

Considering Lemma 3 and the notation outlined above, we can write the system of F.O.C.'s underlying Problem P1 as

Wi(P ̃i,t−i;w) = 0. Using the cain rule, the F.O.C. w.r.t. P ̃ji,k ∈ P ̃i, in particular, can be stated as follows:

###### ∇P ̃

i

dWi(.) dln P ̃ji,k

∂Vi(.) ∂ ln P ̃ji,k

=

∂Vi(.) ∂Yi

+

∂Vi ∂Yi

=

∂Vi(.) ∂ ln P ̃ji,k

∂Wi(.) ∂ lnw P ̃

dlnw dln P ̃ji,k

∂Yi ∂ ln P ̃ji,k w

·

+

i

−1

∂Wi(.) ∂ lnw P ̃

∂Vi ∂Yi

∂Yi ∂ ln P ̃ji,k w

·

+

+

i

dlnw dln P ̃ji,k

∂Vi ∂Yi

−1

= 0 (29)

To elaborate, the first two terms in Equation 29 correspond to the change in Wi holding w fixed. The last term accounts for general equilibrium wage effects. In particular, (∂Wi(.)/∂ lnw)P ̃

corresponds to the pure effect of wages, w, on welfare, Wi, holding all elements of P ̃i and t−i fixed. The term dlnw/dln P ̃ji,k corresponds to the change in w in response to a change in P ̃ji,k (holding t−i and P ̃i −

i

P ̃ji,k fixed). Following Lemma 3, dlnw/dln P ̃ji,k is pinned down by the balanced trade condition.

The first term in Equation 29, which reflects the direct effect of prices on welfare, can be characterized using Roy's identity. Specifically noting that Vi(.) ≡ Vi(Yi,P ̃i), the optimal consumption choice entails that

−1 ∂Vi(.)

∂Vi(.) ∂Yi

= −P ̃ji,kQji,k. (30)

[Roy's identity]

∂ ln P ̃ji,k

The second term in Equation 29, which encompasses income effects holding w fixed, can be determined by taking a partial derivative w.r.t. to the balanced budget condition, which can be expressed as follows given that tni,g = P ̃ni,g − Pni,g:

K

Yi = wiLi + ∑

##### ∑

g=1

n i,

P ̃ni,g − Pni,g Qni,g . (31)

Observe that P ̃in,g ∈ P ̃i for all ni, g and that Pni,g = τ ̄ni,ga ̄n,gwn. Taking the partial derivative of Equation 31 w.r.t. P ̃ji,k yields the following expression

∂Yi(P ̃i,t−i;w)

= P ̃ji,kQji,k +∑

##### ∑

∂ ln P ̃ji,k w

g

n i

P ̃ni,g − Pni,g Qni,g

∂ ln Qni,g(.)

∂ ln P ̃ji,k w

, (32)

where the optimality of final demand entails that adjustments to demand are regulated by the Marshallian demand elasticities:

∂ ln Qni,g(.)

=

∂ ln P ̃ji,,k w

∂ ln Qni,g(Yi,P ̃i) ∂ ln P ̃ji,k

∂ ln Qni,g(Yi,P ̃i) ∂ lnYi

+

∂Yi(.)

= ε(niji,,gk) + ηni,g

∂ ln P ̃ji,k w

∂Yi(.)

.

∂ ln P ̃ji,k w

Plug the above expression back into Equation 32 and use the inner product "·" and vector calculus to economize on the notation. We can, thus, express the direct income effects (featured in Equation 29) as follows

∂Yi(P ̃i,t−i;w)

= P ̃ji,kQji,k +∑

∂ ln P ̃ji,k w

n i

P ̃ni − Pni · Qni ε(niji,k) + ηni

∂Yi(.)

∂ ln P ̃ji,k w

,

where ε(niji,k) ≡ ε(niji,,gk)

is a K × 1 vector denoting the price elasticity of all imported varieties from

g

origin n w.r.t. P ̃ji,k, ηni ≡ ηni,g g is a K × 1 vector denoting the income elasticity of demand facing these varieties. The operator represents element-wise multiplication: a b = [aibi]i.

Assign wage in country j as the numeraire: wj = 1. The last term in Equation 29 can be decomposed as

dlnw dln P ̃ji,k

∂Wi(.) ∂ lnw

∂Vi ∂Yi

−1

=

∂Wi ∂ ln wi w

−i

dln wi dln P ̃ji,k

+

∂Wi ∂ lnw−i w

i

dlnw−i dln P ̃ji,k

·

∂Vi ∂Yi

−1

· dlndlnwP ̃−i

Following the discussion in Appendix B, after assigning wj as the numeriare, ∂ln∂Wwi

= 0 to a first-order approximation if rni,k/rii,k ≈ 0 for n i. So, by choice of numeraire, we can treat w ̄ −i as fixed hereafter—see Appendix D for a derivation of optimal tariffs without this approximation. Importantly, though, the choice of P ̃ji,k has a non-trivial effect on the ratio of wi relative to w−i. This effect, which is represented by dln wi/dln P ̃ji,k, can be evaluated by applying the Implicit Function Theorem to the balanced trade condition in country i,

−i wi

ji,k

Ti(P ̃i,t−i;wi,w−i) ≡∑

[Pni · Qni − Pin · Qin]

n i

τ ̄ni,ka ̄n,kwnQni,k(P ̃i,t−i;w) − τ ̄in,ka ̄i,kwiQin,k(P ̃i,t−i;w) = 0

##### =∑

##### ∑

n i

k

while treating w−i = w ̄ −i as given. This step yields the following equation

dln wi dln P ̃ji,k w ̄

−i

− ∂Ti(P ̃∂i,lnt−iP; ̃wi,w ̄ −i)

ji,k w ∂Ti(P ̃i,t−i;wi,w ̄ −i)

=

∂ ln wi w ̄ −i

− ∑n i Pni · ∂∂lnlnQP ̃ni(.)

ji,k w ∂Ti(P ̃i,t−i;wi,w ̄ −i)

. (33)

=

∂ ln wi w ̄ −i

The second line follows from the fact that ∂ln∂lnQinP ̃,g(.)

= 0 if n i. That is, if we fix the vector of wages, w, the choice of P ̃ji,k has no effect on the demand schedule in the rest of the world. The only way the effect of P ̃ji,k travels to foreign markets is through its effect on w. Define the importer-wide term,

ji,k w

∂Wi(.)/∂ ln wi ∂Vi(.)/∂Yi

τ ̄i ≡

,

(∂Ti(.)/∂ ln wi)w ̄

−i

and note that τ ̄i does not feature an industry-specific subscript. Using Equation 33 and the definition for τ ̄i, the last term in F.O.C. (Equation 29) becomes

∂Wi ∂ lnw P ̃

·

i

dlnw dln P ̃ji,k

∂Vi ∂Yi

−1

=

= −τ ̄i ∑

n i

Pij ·

dln wi dln P ̃ji,k

∂Wi ∂ ln wi

∂ lnQij(.)

∂ ln P ̃ji,k w

∂Vi ∂Yi

−1

= −τ ̄i

∂Ti(.)

∂ ln P ̃ji,k w

= −τ ̄i ∑

n i

Pni · Qni ε−(jiii,k) + η−ii

∂Yi(.)

∂ ln P ̃ji,k w

. (34)

Plugging Equations 32, 30, and 34 back into the F.O.C. specified by Equation 29), yields the following necessary condition for optimality:

##### ∑

n i

P ̃ni,g −(1+τ ̄i)Pni,g ·Qni ε(niji,k) +∑

n i

P ̃ni,g − (1 + τ ̄i)Pni,g · Qni ηni

∂Yi ∂ ln P ̃ji,k w

###### = 0

Given that demand is homogeneous of degree zero, it is immediate that the solution to the above system should satisfy

##### ∑

n i

P ̃ni,g − (1 + τ ̄i)Pni,g · Qni ε(niji,k) = 0 ∀ji, k ii, k. (35)

To solve the above system of equations, we can be stated in matrix form as follows (refer to Section 2 for the definition of eni,k)

  

e1i,1ε(11i,1i,1) · · · eNi,ε(Ni1i,1,1) · · · e1i,Kε(11i,iK,1) · · · eNi,Kε(Ni1i,1,K)

...

...

... .

.

e1i,1ε(1Nii,1,K) · · · eNi,ε(NiNi,1,K) · · · e1i,Kε(1Nii,K,K) · · · eNi,Kε(NiNi,K,K)

E ̃i



  

 

1 − (1 + τ ̄i) PP ̃1∗i,1

1i,k

###### . 1 − (1 + τ ̄i) PP ̃Ni∗ ,K

Ni,K



###### = 0.

 

The final step is to show that the unique solution to the above system is the trivial solution. The following lemma establishes this property.

- Lemma 4. Matrix Ei is non-singular, so that EiX(N−1)K×1 = 0 ⇐⇒ X(N−1)K×1 = 0. Proof. Following Proposition 2.E.2 in Mas-Colell et al. (1995) the Marshallian demand elasticities sat-


isfies the Cournot aggression. So, observing that ε(jiji,k,k) < −1 and ε(jini,k,g) > 0, we can deduce the following:

[Cournot aggregation] eji,k +∑

##### ∑

n

g

eni,gε(niji,,gk) = 0 =⇒ | eji,kε(jiji,k,k) |= eji,k +∑

##### ∑

g

n i

| eni,gε(niji,,gk) |

Since, by definition, there exists a ji, k for which eji,k > 0, the matrix Ei is strictly diagonally dominant, i.e.,

∃ jk : [Ei]jk,jk > ∑

[Ei]jk,ng

ng∈N×K−{jk}

The Lèvy-Desplanques Theorem (Horn and Johnson (2012)), therefore, ensures that Ei is non-singular. The non-singularity of Ei trivially implies that the unique solution to the system, EiX(N−1)K×1 = 0, is the trivial solution, X(N−1)K×1 = 0.

Following Lemma 4, the unique solution that satisfies the system of F.O.C.s associated with P1 is 1 − (1 + τ ̄i) PP ̃ji∗,1

= 0 for all j i and k. Noting from Lemma 3 that P ̃∗

ji,k/Pji,k = 1 + t∗

ji,k, the unique solution to the system of F.O.C.'s characterizing the optimal tariff problem (P1) is a uniform tariff equal to τ ̄i:

ji,k

t∗

ji,k = ti∗ = τ ̄i, ∀j i, k. (36)

- Step #4: Characterizing τ ̄i The final step in characterizing the optimal tariff is to determine, τ ̄i, which recall is defined as


(∂Wi(.)/∂ ln wi)w ̄ −i ∂Vi(.)/∂Yi

τ ̄i ≡

(∂Ti(.)/∂ ln wi)w ̄

−i

(∂Wi(.)/∂ ln wi)P ̃i,t−i,w ̄ −i ∂Vi(.)/∂Yi

. (37)

∼

(∂Ti(.)/∂ ln wi)P ̃

i,t−i,w ̄ −i

The numerator in Equation 37 can characterized along the following steps

(∂Wi(.)/∂ ln wi)P ̃

∂Vi(.)/∂Yi ∂Vi(.)/∂Yi

∂Yi ∂ ln wi P ̃

∂

i,t−i,w ̄ −i ∂Vi(.)/∂Yi

∂lnwi ∑

= wiLi −

=

i,t−i,w ̄ −i

n

∂Qji ∂ ln wi P ̃

P ̃ji − Pji ·

= wiLi −Pii ·Qii +∑

i,t−i,w ̄ −i

j i

P ̃ni − Pni · Qni

P ̃i,t−i,w ̄ −i

= wiLi − Pii · Qii + τ ̄iP−ii ·

∂Q−ii ∂ ln wi P ̃

,

i,t−i,w ̄ −i

where recall that "·" denotes the inner product, with Pji ≡ P ̃ji,k k and P−ii ≡ Pji j i. The last line in the above equation follows from the fact that the optimal tariff choice entails that P ̃−ii − P−ii = τ ̄iP−ii. Likewise, the denominator in Equation 38 can be specified as follows:

∂Ti(.) ∂ ln wi P ̃

=

i,t−i,w ̄ −i

∂

∂lnwi ∑

j i

###### P ̃ji · Qji − P ̃ij · Qij

= P−ii ·

P ̃i,t−i,w ̄ −i

∂Q−ii ∂ ln wi P ̃

##### −∑

i,t−i,w ̄ −i

j i

###### ∂Pij · Qij

∂ ln wi P ̃

i,t−i,w ̄ −i

.

Plugging the above expressions back into Equation 38 yields the following:

wiLi − Pii · Qii + τ ̄iP−ii · ∂∂Qln−wiii P ̃i,t−i P−ii ∂Q−ii

###### = −1

τ ̄i =

− ∑j i Pij Qij · ∂ln∂PlnijwiQij P ̃i,t−i,w ̄ −i

∑j i Xij · ∂ln∂PlnijwiQij P ̃i,t−i,w ̄ −i

∂ ln wi P ̃i,t−i

(38)

where Xij = χij,k j,k is a vector that denotes the importance of destination j i in country i's export. In particular,

Pij,kQij,k wiLi − Pii · Qii

Pij,kQij,k ∑ i Pi · Qi

Pij,kQij,k ∑ i ∑Kg=1 Pi,gQi,g

.

χij,k =

=

=

The final task that remains is to specify Xij · ∂ln∂PlnijwiQij P ̃i,t−i

, which can be done by appealing to the Marshallian demand elasticities (as defined earlier under Definition A). In particular, invoking the properties of the inner and element-wise vector products (· and ) implies that

K

∂ lnPij Qij ∂ ln wi P ̃

∂ ln Pij,kQij,k ∂ ln wi P ̃

##### ∑

Xij ·

=

χij,k

i,t−i,w ̄ −i

i,t−i,w ̄ −i

k=1

 χij,k

 

 

  + ηij,k

 

  .

∂ ln P ̃ij,g ∂ ln wi

K

K

∂ ln Pij,k ∂ ln wi

∂ lnYj ∂ ln wi P ̃

ε(ijij,k,g)

##### ∑

##### ∑

=

+

i,t−i,w ̄ −i

g=1

k=1

t−i

= ∂∂lnlnP ̃wij,k

where (in the second line) ∂∂lnlnPwij,k

= 1, given that P ̃ij,k = (1 + tij,k)Pij,k = (1 + tij,k)τ ̄ij,ka ̄i,kwi. The term ∂∂lnlnwYj

i

i t−i

can be characterized by applying the Implicit Function Theorem to, Yj = wjLj + ∑n j,k tnj,kPnj,kQnj,k , which yields

i P ̃i,t−i,w ̄ −i

∂ lnYj ∂ ln wi P ̃

i,t−i,w ̄ −i

∑n j ∑g tnj,gPnj,gQnj,g 1n=i + ∑k ε(njij,,gk) Yj − ∑k ∑n tnj,kPnj,kQnj,kηnj,k

=

1+tj ∑g ∑k Pjj,gQjj,gε(jjij,g,k) ∑k ∑n Pnj,kQnj,k

1

t ̄j

1+t ̄jejj ∑

##### ∑

= −

=

g

k

ejj,gε(jjij,g,k) . (39)

The second line of the above derivation follows from two observations: (1) country j's optimal tariff choice entails that tnj,g = tj, and (2) since the Marshallian demand is homogeneous of degree zero, the following two properties ought to hold:

##### ∑

##### ∑

g

n j

(1+tnj,g)Pnj,gQnj,g 1n,g=i,k +ε(njij,,gk) = −∑

Pjj,gQjj,gε(jjij,g,k) [Cournot aggregation]

g,k

##### ∑

##### ∑

(1 + tnj,g)Pnj,gQnj,gηnj,g = Yj [Pigou aggregation]

n

g

Plugging Expression 39 back into Equation 38 and assuming homothetic preferences (i.e., ηij,k = 1 for all ij, k), we can produce the following expression for τ ̄i:

ti∗ = τ ̄i = −1 ∑j i χij∗ · IK + Eij∗ + 1+t ̄t ̄j

, (40)

E ̃(jjij)∗ 1K

jejj

and E ̃(jjij) ≡ ejj,kε(jjij,k,g)

where Eij ∼ Eij(ij) ≡ ε(ijij,k,g)

are K × K matrixes of actual and expenditureadjusted demand elasticities (as defined in Section 2). The superscript "∗" indicates that a variable is evaluated in the (counterfactual) equilibrium in which ti∗ is applied.

k,g

k,g

###### A.1 The Cobb-Douglas-CES Case.

Suppose preferences have a Cobb-Douglas-CES parameterization:

K

∏

Ui(Q1i,...,QNi) =

k=1

N

∑

ς ̄ji,kQρjik,k

j=1

ei,k ρk

;

where ςji,k ∈ R+ is a constant taste shifter. Consistent with our earlier definition in Section 2, ei,k denotes the expenditure share on industry k. Also, let λ denote the within-industry expenditure share as defined in Section 2:

P ̃ji,kQji,k ∑nN=1 P ̃ni,kQni,k

P ̃ji,kQji,k ei,kYi

eji,k ei,k

.

=

λji,k =

=

The Cobb-Douglas-CES demand structure implies that

εij,k = −1 − k(1 − λij,k); ε(njij,,kk) = kλij,k; ε(ijnj,k,g) = 0.

where k ≡ 1−ρkρk. Plugging these elasticity values into Equation 40, yields the following equation for ti∗ = τ ̄i:

1

ti∗ =

∗

∑k ∑j i χij∗,k k (1 − λij∗,k) + tjλ

jj,kej,k

1+tjλ∗jj λij∗,k

1

,

=

∗

∑k ∑j i χij∗,k k 1 − 1 − tjλ

jj,kej,k

1+tjλ∗jj λij∗,k

where λjj = ∑k λjj,kej,k denotes destination j's overall expenditure share on domestic varieties.

## B Welfare Approximation

Formulate all equilibrium variables as a function of P ̃i and w, as described in Appendix A. The feasible vector of wages, w, solves the following system of labor market clearing conditions:

 

F1(P ̃i,t−i;w) ≡ w1L ̄1 − ∑N=1 P1 (w1) · Q1 (P ̃i,t−i;w) = 0

(41)

. FN(P ̃i,t−i;w) ≡ wNL ̄ N − ∑N=1 PN (wN) · QN (P ̃i,t−i;w) = 0



Also, note that by Walras' law one equation is redundant so we can assign one element of w as the numeraire:

N

Fn(P ̃i,t−i;w) = 0. [Walras' Law]

∑

n=1

To characterize the term dw/dP ̃ji,k in the F.O.C., we can apply the Implicit Function Theorem to the above system as follows (P ̃−ji,k ≡ P ̃i − P ̃ji,k ):

dlnw dln P ̃ji,k

= −

∂F ∂ lnw

−1

P ̃i,t−i

∂F ∂ ln P ̃ji,k P ̃

.

−ji,k,t−i,w

Taking partial derivatives from System 41 w.r.t. w holding P ̃i fixed, yields







1 − ∑k,g r11,k η11,k + ε(11,11,kg) · · · − ∑k,g r1N,k η1N,k + ε(1NNN,k,g) 1 − ∑k,g r21,k η21,k + ε(21,11,kg) · · · − ∑k,g r2N,k η2N,k + ε(2NNN,k,g)

- ∂F1

∂ ln w1

∂F1

∂lnw2 · · · ∂ln∂Fw1N

- ∂F2


∂lnw2 · · · ∂ln∂Fw2N

∂F2

∂F ∂ lnw P ̃

∂ ln w1

=

=

...

... .

... .

 

 

.

 

.

i,t−i

∂lnw2 · · · ∂ln∂FwNN

∂FN

∂FN ∂ ln w1

1 − ∑k,g rN1,k ηN1,k + ε(N11,1,kg) · · · − ∑k,g rNN,k ηNN,k + ε(NNNN,k,g)

Define Ψni ≡ ∑k [rni,k (1 + k(λii,k − 1n=i))]. Under Cobb-Douglas-CES preferences, the above matrix assumes the following parameterization:



.

 



∂F ∂ lnw P ̃

= I −

 

i,t−i

Ψ11 Ψ12 · · · Ψ1N Ψ21 Ψ22 · · · Ψ2N

...

... .

.

ΨN1 ΨN2 · · · ΨNN



  

= I −

 

∑k [r11,k (1 + k[λ11,k − 1])] · · · ∑k [r1N,k (1 + kλNN,k)]

... .

.

∑k [rN1,k (1 + kλ11,k)] · · · ∑k [rNN,k k(1 + k[λNN,k − 1])]

Λ

  

Noting that rij,k k(1 − λjj,k) 1 if j i, we can produce the following approximation:44

∂F ∂ lnw

−1

= (I − Λ)−1 = I + Λ + Λ2 + · · · ≈

P ̃i,t−i

∞

= diag [1 − Ψnn]−1

##### ∑

diag Ψnnβ

I +

n

β=1

.

n

The above equation indicates that ∂ln∂Fw  ̃

is nearly diagonal with smaller-than-unity diagonal elements. Henceforth, assign wj as the numeraire. The derivative of F−j (i.e., F excluding row j) w.r.t. P ̃ji,k holding w and P ̃−ji,k ≡ P ̃i − P ̃ji,k fixed is given by:

Pi,t−i





r1i .









- ∂F1(.)

∂ ln P ̃ji,k

- ∂F2(.)


- ∑g r1i,gε(1jii,,gk)
- ∑g r2i,gε(2jii,,gk)


∂F−j ∂ ln P ̃ji,k P ̃

rj−1i rj+1i . rNi

∂ ln P ̃ji,k

Cobb-Douglas-CES

=

=

=

λji,k k

 

 

−−−−−−−−−−−−−→

. ∑g rNi,gε(Niji,,kg)

 

 

.

−ji,k,t−i,w

 

 

∂FN(.) ∂ ln P ̃ji,k

44The last line follows from the fact that for a ∈ R+, ∑∞β=1 (−a)β = −1+aa. Similarly, for a ∈ (0,1), ∑∞β=1 aβ = a

1+a .

Given that (i) λji,krni ≈ 0 if n and j i, and (ii) ∂ln∂Fw  ̃

is nearly diagonal with smaller-than-unity diagonal elements, it immediately follows that

Pi,t−i





r1i 1−Ψ11

.

rj−1i 1−Ψj−1j−1 rj+1i 1−Ψj+1j+1

−1

∂F−j ∂ lnw−i

∂F−j ∂ ln P ̃ji,k P ̃

dlnw−i dln P ̃ji,k

λji,k k,

≈

=

P ̃i,t−i

−ji,k,t−i,w

 

 

.

rNi 1−ΨNN

where w−i denotes the wage vector w excluding element i (and also element j which is assigned as the numeraire). Next, we can show that ∂ln∂Wwi

· dlnlnP ̃w−i

dln wi lnP ̃ji,k =

and ∂∂lnWwi

= ∑n i Pni · QnidlnlnP ̃wn

−i

i

ji,k

ji,k

∑n i P ̃ni · QnidlnlnP ̃wi

(refer to Appendix A for details on the latter). Hence, assuming a uniform tariff, tni,k = t ̄i, per optimality conditions, we can conclude that

ji,k

∂lnw−i · dlnlnP ̃w−i

∂Wi

ji,k ∂Wi ∂ ln wi

dln wi dln P ̃ji,k

∑n i ∑k λ1+ni,tkei,k

rni 1−Ψnn

ni,k

≈

(1 − λii)rii/(1 − Ψii)

r ̄−ii rii

1 − Ψii 1 − Ψ−ii

=

1 1 + t ̄i

.

rni r ̄−ii

1 1−Ψnn

where 1 − Ψ−ii ≡ ∑n i λni

1−λii and r ̄−ii = ∑n i (λnirni) /(1 − λii), with the latter denoting the average contribution of market i to a foreign country's total revenue noting that ∑1n−iλλni,

= 1. It is straightforward to verify that 1+1t ̄

ii

r ̄−ii

rii ≈ 0 based on actual data. For the median country in the 2014 WIOD sample, r ̄−ii/rii ≈ 0.001.

i

## C Accounting for Political Economy Weights

In this appendix, I demonstrate how the methodology developed in this paper can accommodate political economy pressures. To this end, consider a variation of the multi-industry Krugman model from Section 3.1, in which preferences have a Cobb-Douglas-CES parametrization as in Equation 10. Following Ossa (2014), suppose that policy makers maximize a politically-weighted welfare function that internalizes political economy pressures or lobbying efforts by industries (à la Grossman and Helpman (1994)). In particular, the government in country i maximizes

Wi = Wi =

μkwiLi,k P ̃i

Yi P ̃i

##### +∑

##### = ∑

(θi,k − 1)

k,j

k

tji,kPji,kQji,k P ̃i

μkwiLi,k P ̃i

##### +∑

θi,k

j

.

The weight θi,k corresponds to the political economy weight assigned to industry k and P ̃i is the CobbDouglas-CES consumer price index, P ̃i = ∏k ∑j P ̃ji−,kk

−ei,k/ k

. Also, suppose that θi,k's are normalized such that ∑k (θi,k) /K =1. It is immediate from the proof presented in Online Appendix A, that country

i's unilaterally optimal tariff schedule is given by

 1 +

 

1 + kλii∗,k 1 + μ ̄

1

1 + t∗

,

###### i,k =

iP

∑g ∑j i χij∗,g g 1 − (1 − δj,g)λij,g

μiP,k kλii∗,k

where μiP,k and μ ̄iP are political economy-weighted industry-level and average markups:

∑kK=1 ∑Nj=1 θi,kμkPij,kQij,k ∑kK=1 ∑Nj=1 Pij,kQij,k

μiP,k = θi,kμk, μ ̄iP =

. (42)

Without political economy considerations (i.e., θi,k = 1) we are back to the basic Krugman model, since μiP,k = μk. To evaluate the politically-adjusted optimal tariff formula, we need to estimate the political economy weights using data on non-cooperative tariffs à la Ossa (2014). After estimating the θi,k's, we can simply compute the political economy-adjusted Nash tariffs and the welfare losses associated with them, using the following variation of Proposition 4. Aside from markups requiring adjustment to account for political pressures, the following system is identical to that specified under Proposition 4. It involves NK + 2N independent equations and unknowns.

Proposition 7. If preferences are described by functional form 10 and {θi,k} describes the political economy weights in each country, then the Nash tariffs, {t∗

i,k}, and their effect on wages, {wˆi}, and total income, {Yˆi}, can be solved as a solution to the following system:



1+ kλˆ ii,kλii,k 1+ μ ̄

###### i,k = 1 + 1

1 + t∗

[optimal tariff]

###### iP

∑j i ∑k χij∗,k k 1−(1−δj∗,k)λˆ ij,kλij,k

kλˆ ii,kλii,k

θi,kμk

λˆ ij,kλij,kej,kYjYˆj ∑ i ∑g 1+1t∗

1 1+t∗j

λˆ jj,kλjj,kej,k

∗

λˆi,kλi,ke,kYYˆ; δj∗,k ≡ t

j,k

χij∗,k =

1+∑k t∗j,kλˆjj,kλjj,kej,k [export shares and δ] λˆ ji,k =





[(1+tji,k)wˆj]− k

∗

; 1 + tji,k = 1+t

1+t ̄ji,k [expenditure shares] wˆiwiLi = ∑k ∑j μ 1

i,k

,

∑nN=1 λni,k[(1+tni,k)wˆn]− k

λˆ ij,kλij,kej,kYˆjYj [wage income]

k(1+t∗j,k)

λˆ ij,kλij,kej,kYˆjYj /wˆiwiLi [average markup] YˆiYi = μˆ ̄iμ ̄iwˆiwiLi + ∑k ∑j i t

μ ̄iP = ∑k ∑j (1+θi,tk∗

j,k)



∗

λˆ ji,kλji,kei,kYˆiYi [income = sales + tax revenue]

i,k 1+ti∗,k

Moreover, solving the above system requires information on only (i) observable shares, λji,k and ei,k, (ii) national output, Yi = wiLi; (iii) industry-level trade elasticity and markup levels, k, and μk; and (iii) political economy weights, θi,k.

Capitalizing on the above results, let me discuss how political economy considerations may alter the estimated cost of a tariff war. Recall that in the absence of political economy considerations, Nash tariffs will restrict trade relatively more in high-μ industries. As such, Nash tariffs shrink output in high-μ industries below their already sub-optimal level, dragging the global economy further away from its efficiency frontier. Now, suppose countries assign a greater political economy weight to high-

μ industries, which amounts to

∂θi,k/∂μk > 0.

In that case, political economy considerations will restrict trade and output in high-μ industries in excess of what is implied by the non-political baseline. Politically-adjusted Nash tariffs will be, therefore, more distortionary than the non-political Nash tariffs. The cost of a global tariff war would be also greater, as a result. To the contrary, suppose countries assign a lower political economy weight to high-μ industries, which amounts to

∂θi,k/∂μk < 0.

In this case, political economy considerations countervail the profit-shifting incentives that motivate trade restriction in high-μ industries. As a result, politically-adjusted Nash tariffs will detrimental to allocative efficiency than non-political Nash tariffs. Accordingly, the cost of a global tariff war would be smaller under political economy pressures. Presumably, in practice, high-profit-margin industries are better positioned to lobby for protection. So, it is highly possible that we are dealing with the former case. If so, my main analysis provides a lower bound for the cost of a full-fledged global tariff war.

## D Computing Nash Tariffs without Approximation

This appendix derives sufficient statistics formulas for Nash tariffs without the approximation specified by Equation 9. First, I appeal to the result established by Beshkar and Lashkaripour (2020), which states that the country i's optimal (or Nash) tariff is uniform across industries, i.e., t∗

ji,k = t∗ji,g for all j, k, and g. This result reduces the task of solving the Nash tariffs from a problem involving N(N −1)K tariffs rates to one that involves only (N − 1)N tariff rates. As before, we can formulate the optimal tariff problem as one where the government in country i chooses an N × 1 vector of (origin-specific) prices in the local economy, P ̃i = {P ̃ji}, to maximize welfare given t−i and subject to feasibility constraints:

max

P ̃i

Wi(P ̃i,t−i;w) ≡ Vi(Yi(P ̃i,t−i;w),P ̃i) s.t. (P ̃i,t−i;w) ∈ F (P1 )

Analogous to our previous definition, the feasible set F encompasses any triplet (P ̃i,t−i;w) such that given P ̃i and t−i, the wage vector w satisfies the labor market clearing condition in every country:

 

F1(P ̃i,t−i;w) ≡ w1L ̄1 − ∑N=1 P1 (w1) · Q1 (P ̃i,t−i;w) = 0

(LMC)

. FN(P ̃i,t−i;w) ≡ wNL ̄ N − ∑N=1 PN (wN) · QN (P ̃i,t−i;w) = 0



When adopting the above formulation, one may be concerned that producer prices, Pji,k's, are industry-specific. So, under a uniform (origin-specific) optimal price choice, the ratio P ̃ji/Pji.k will not be uniform and neither will the implied optimal tariff. But this not an issue if we invoke the

isomorphism between quality and productivity. Specifically, we can make Pji,k = Pji uniform across industries by adjusting the ji-specific demand shifter (i.e., quality) in the utility function in a way that preserves the equilibrium. Keeping this technical trick in mind, we can proceed to solving Problem (P1'). Capitalizing on the calculations proceeding Equation 35 in Appendix A, we can show that Problem (P1') is governed by the following F.O.C. w.r.t. P ̃ji:

##### ∑

n i

P ̃ni − Pni Qni · ε(niji,k) +

∂Wi ∂ lnw P ̃

i

dlnw dln P ̃ji,k

###### = 0.

·

The "·" and " " operators, as before, denote the inner and element-wise product of equally-sized vectors: a · b = ∑i aibi and a b = [aibi]i. The implicit assumption in the above formulation is that cross-industry demand effects are zero due to the Cobb-Douglas assumption. By Walras' we can normalize on element of w to one. Designating wi as the normalize wage rate (i.e., wi = 1) and noting that P ̃ji/Pji = 1 + tji, the above equation reduces to

##### ∑

n i

1 1 + tni

1 −

P ̃ni Qni · ε(niji,k) +

∂Wi ∂ lnw−i P ̃

i

dlnw−i dln P ̃ji

###### = 0.

·

= −P ̃ni · Qni. Plugging this value into the above equation and rearranging yields the following optimality condition:

Based on the problem's setup, it is immediate that ∂∂lnWwi

n P ̃i

 P ̃ni,kQni,k

 

 1 −

 1 +

 

  ε(niji,,kk)

 

  = 0

1 1 + tni

1 ε(niji,,kk)

dln wn dln P ̃ji

##### ∑

##### ∑

n i

k

To economize on the notation, let ∆ijn ≡ dln wn/dln P ̃ji reflect the extent to which a tariff on origin j's goods affects origin n's wage wn. Capitalizing on this choice of notation, the first-order condition with respect to tji (or P ̃ji) can be expressed as

######  

  ε(niji,,kk)

 

  = 0.

 1 +

 eni,k

 

 1 −

∆ijn ε(niji,,kk)

1 1 + tni

##### ∑

##### ∑

n i

k

Writing the above system in matrix algebra and inverting the resulting system yields the following formula for unilaterally optimal response tariffs:

1 1 + t∗ni

= ∆ijn∗ + εni(ji)∗ · e∗ni

−1 n i,j i

εni(ji)∗ · e∗ni

1N−1. (43)

n i,j i

The invertibility of ∆ijn + ε(niji) · eni

can be proven in manner akin to that presented under Lemma 4 in Appendix A. To elaborate on the above formula, Equation 43 characterizes a vector of optimal response tariffs or each country i as a function of observable expenditure shares, reducedform demand elasticities, and ∆ijn's. Next, I show that the matrix [∆ijn]n i,j i can be also calculated as a function of only observables and reduced-form demand elasticities. To this end, apply the Implicit Function Theorem to the system of national labor market clearing conditions (LMC). Doing so as

n i,j i

explained in Appendix B, delivers the following expression ∆i ≡ ∆ijn

n i,j i

∆i = −

∂F ∂ lnw−i

−1

P ̃i,t−i

∂F ∂ lnP ̃−ii t−

i,w

###### = − (I − Λi)−1 rni · εni(ji)

, (44)

n i,j i

where Λi has the following formulation under Cobb-Douglas-CES preferences (see Appendix B):

  

   .

∑k [r11,k (1 + k[λ11,k − 1])] · · · ∑k [r1N,k (1 + kλNN,k)]

... .

Λi =

.

∑k [rN1,k (1 + kλ11,k)] · · · ∑k [rNN,k k(1 + k[λNN,k − 1])]

Imposing the Cobb-Douglas-CES preferences characterized by Equation 10, the reduced-form demand elasticities in Equations 43 and 44 are given by ε(niji,,kk) = − {j = n} ( k + 1) + kλji,k. Hence, Equations 43 and 44, together, provide a sufficient statistics characterization of Nash tariffs as a function of reduced-form demand elasticities; observable expenditure shares; and observable revenue shares. So, as in the baseline case, we can use the exact hat-algebra notation to jointly solve (a) the Nash tariffs specified by Equation 43 and (b) the equilibrium conditions. Doing so involves solving the following system features N(N − 1) + 2N independent equation and N(N − 1) + 2N independent unknowns, namely, t∗ ≡ {t∗ji} , wˆ ≡ {wˆi}, and Yˆ ≡ {Yˆi}:



−1 n i,j i

εni(ji)∗ · e∗ni

1+t∗ni = ∆ijn∗ + ε(niji)∗ · e∗ni

1

1N−1

n i,j i

###### ε(niji)∗ = − {j = n} ( + 1) + λˆ ji λji, r∗ni = (1+t∗YˆiYi

λˆni λni ei, e∗ni = λˆni λni ei ∆i∗ = (I − Λi)−1 r∗ni · ε(niji)

ni)wˆnwnLn



###### ; Λi ≡ r∗nj · 1 + λˆ jj λjj − 1(n=j)

.

n i,j i

n i,j i λˆ ji,k =

[(1+tji,k)wˆj]− k

∗ji

; 1 + tji,k = 1+t

1+t ̄ji,k

∑nN=1 λni,k[(1+tni,k)wˆn]− k

λˆ ij,kλij,kej,kYˆjYj YˆiYi = wˆiwiLi + ∑k ∑j i t

wˆiwiLi = ∑k ∑j 1+1tij∗

∗ji 1+t∗ji

λˆ ji,kλji,kei,kYˆiYi



To clarify the notation, λni = [λni,k]k, ei = [ei,k]k, and = [ k]k are K × 1 column vectors. Computing the Nash tariffs using the above system is more efficient than the standard iterative optimization procedure, but more computationally involved than the baseline approach presented in Section 2. My objective here is to compare my baseline results to the approximation-free results obtained from solving the above system of equations. Given this objective, I aggregate the 2014 WIOD sample into the 10 largest countries plus an aggregate of the rest of the world. By doing so, I am essentially focusing on the set of countries for which my welfare approximation is most suspect.

The computed Nash tariffs under the approximation-free approach are displayed in Figure 6. When interpreting this graph, note that in the Ricardian model, Nash tariffs are always uniform across industries but may vary across exporters if a country trades excessively with another partner. If my assumption that rji,k/rii,k ≈ 0 for j i is credible, then the Nash tariffs should be approximately uniform

###### Figure 6: Nash tariffs computed using the approximation-free formulas.

|0<br><br>25<br><br>50<br><br>75<br><br>100<br><br>125<br><br>Nash Tariff (%)<br><br>| |
|---|
<br><br>GBR<br><br>CHN<br><br>USA<br><br>JPN<br><br>ITA<br><br>FRA<br><br>DEU<br><br>IND<br><br>BRA|
|---|


Nash Tariff (%)

ITA

IND

JPN

DEU

USA

CHN

FRA

GBR

BRA

Note: Each dot corresponds to the Nash tariff applied on an individual export partner. The tariff-imposing countries reported on the x-axis are the largest countries in the 2014 WIOD sample, excluding EU members.

across the board. Based on Figure 6 this is indeed the case.

Next, I compare the welfare losses implied by the baseline approach to those implied by the approximation-free approach. The comparison is displayed in Figure 7. Once again it is clear that the two approaches deliver indistinguishable predictions. Albeit, with different degrees of computational efficiency: on my personal computer, for instance, the baseline approach produced output more than 100-times faster than the approximation-free approach, which itself converged more than 15-times faster than standard optimization-based approach.

Before concluding this appendix, let me reflect more on the computational speed of the sufficient statistics methodology relative to the standard iterative method. On the same computing device, my proposed methodology reduces computation time from multiple hours or even days to a few seconds. Moreover, based on my experience, when smaller countries are included in the analysis, the standard methodology (based on the FMINCON solver in MATLAB) becomes increasingly sensitive to the choice of initial values. My purposed methodology, however, is not susceptible to this problem as it does not involve a numerical optimization and also imposes theory-driven uniformity constraints on Nash tariffs. Finally, another word caution is that when I implemented the standard methodology using the FMINCON solver in MATLAB, I obtained output that did not actually correspond to a global optimum in some instances. I noticed this by cross-checking the output from FMINCON with that implied by my analytic formulas and comparing the objective function's values. This is not a criticism of the standard iterative methodology per-se, but more so a word caution regarding the use of the FMINCON solver.

###### Figure 7: % Loss in real GDP from a tariff war

||BRA<br><br>DEU<br><br>FRA GBR<br><br>IND<br><br>ITA<br><br>JPN<br><br>USA ROW|
|---|
<br><br>CHN<br><br>−2.5<br><br>−1.5<br><br>−.5<br><br>Approximation−Free Approach<br><br>−2.5 −1.5 −.5<br><br>Baseline Approach|
|---|


Approximation−Free Approach

## E List of Industries in Quantitative Analysis

Table 4 reports the list of industries in the quantitative analysis performed in Section 5. To elaborate on this list, the WIOD reports trade and production data across 56 industries, of which 34 are service-related. To estimate the industry-level trade elasticities, I group the WIOD industries into 16 industrial categories. For each industrial category, the trade elasticity is estimated using the Caliendo and Parro (2015) methodology, with specific details provided in Online Appendix G. Unfortunately, for the "Mining" and "Metal" industries, my adoption of Caliendo and Parro (2015) does not render meaningful estimates for the trade elasticity. Presumably, this is due to the main exporters in these two industries being WTO members in 2014, which leads to a lack of sufficient variation in discriminatory tariffs. As such, I assign Caliendo and Parro's (2015) estimated value to these two industries. I normalize the trade elasticity in service-related industries to = 4, following the convention in Costinot and Rodríguez-Clare (2014). My quantitative results are, however, not sensitive to this normalization choice, as there is little-to-no foreign trade in service-related industries.

###### Table 4: List of industries and estimated trade elasticities.

|Number<br><br>|Description|trade elasticity<br><br>k<br><br>|std. err.|N|
|---|---|---|---|---|


|1<br><br>|Crop and animal production, hunting Forestry and logging Fishing and aquaculture|0.69<br><br>|0.12<br><br>|11,440|
|---|---|---|---|---|
|2<br><br>|Mining and Quarrying|13.53|3.67<br><br>|...|
|3|Food, Beverages and Tobacco|0.47|0.13<br><br>|11,440|
|4<br><br>|Textiles, Wearing Apparel and Leather|3.33<br><br>|0.53|11,480|
|5|Wood and Products of Wood and Cork<br><br>|5.73<br><br>|0.93|11,326|
|6<br><br>|Paper and Paper Products Printing and Reproduction of Recorded Media|8.50<br><br>|1.52|11,440|
|7<br><br>|Coke, Refined Petroleum and Nuclear Fuel|14.94<br><br>|2.05|8,798|
|8|Chemicals and Chemical Products Basic Pharmaceutical Products<br><br>|0.92|0.96|11,440|
|9<br><br>|Rubber and Plastics|1.69<br><br>|0.78|11,480|
|10|Other Non-Metallic Mineral<br><br>|1.47<br><br>|0.89|11,440|
|11<br><br>|Basic Metals Fabricated Metal Products|3.28|1.23|...|
|12|Computer, Electronic and Optical Products Electrical Equipment<br><br>|3.44<br><br>|1.07|11,480|
|13|Machinery and Equipment n.e.c<br><br>|3.64<br><br>|1.45|11,480|
|14<br><br>|Motor Vehicles, Trailers and Semi-Trailers Other Transport Equipment|1.38|0.46<br><br>|11,480|
|15<br><br>|Furniture; other Manufacturing<br><br>|1.64|0.60<br><br>|11,480|
|16<br><br>|All Service-Related Industries (WIOD Industry No. 23-56)|4<br><br>|...|...|
