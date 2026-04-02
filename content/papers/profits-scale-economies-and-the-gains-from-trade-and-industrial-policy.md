---
title: Profits, Scale Economies, and the Gains from Trade and Industrial Policy
slug: profits-scale-economies-and-the-gains-from-trade-and-industrial-policy
status: published
date: '2023-10-01'
display_date: October 2023
venue: American Economic Review
authors:
- Ahmad Lashkaripour
- Volodymyr Lugovskyy
coauthors:
- Volodymyr Lugovskyy
abstract: This paper examines the efficacy of second-best trade restrictions at correcting
  sectoral misallocation due to scale economies or profit-generating markups. To this
  end, we characterize optimal trade and industrial policies in an important class
  of quantitative trade models with scale effects and profits, estimating the structural
  parameters that govern policy outcomes. Our estimates reveal that standalone trade
  policy measures are remarkably ineffective at correcting misallocation, even when
  designed optimally. Unilateral adoption of corrective industrial policies is also
  ineffective due to immiserizing growth effects. But industrial policies coordinated
  internationally via a deep agreement are more transformative than any unilateral
  policy alternative.
summary: This paper explains why unilateral trade policy is a weak tool for fixing
  distortions created by profits and scale economies. It argues that coordinated industrial
  policy inside deep agreements can be much more effective.
keywords:
- profits
- scale economies
- gains from trade
- industrial policy
- trade agreements
topics:
- markups-scale-economies-and-trade
- industrial-policy
- wto-and-trade-agreements
body_source: latex
latex_dir: latex-src/profits-scale-economies-and-the-gains-from-trade-and-industrial-policy
latex_main: Main_paper.tex
latex_engine: pdflatex
pdf_url: Lashkaripour_Lugovskyy_AER_2023.pdf
markdown_url: sources/profits-scale-economies-and-the-gains-from-trade-and-industrial-policy.md
canonical_url: https://alashkar.pages.iu.edu/papers/profits-scale-economies-and-the-gains-from-trade-and-industrial-policy.html
updated_at: '2026-04-01'
sort_order: 5
published_url: https://www.aeaweb.org/articles?id=10.1257/aer.20210419
slides_url: LL2023_AER_slides.pdf
working_paper_url: null
online_appendix_url: Online_Appendix_LL2023.pdf
dashboard_url: null
replication_slug: null
raw_replication_url: null
---

## Machine-readable full text

This section was extracted with OpenDataLoader PDF from the hosted PDF so the full text is accessible in HTML and Markdown.

American Economic Review 2023, 113(10): 2759–2808 https://doi.org/10.1257/aer.20210419

## Profits, Scale Economies, and the Gains from Trade and Industrial Policy†

By Ahmad Lashkaripour and Volodymyr Lugovskyy*

This paper examines the efficacy of second-best trade restrictions at correcting sectoral misallocation due to scale economies or profit-generating markups. To this end, we characterize optimal trade and industrial policies in an important class of quantitative trade models with scale effects and profits, estimating the structural parameters that govern policy outcomes. Our estimates reveal that standalone trade policy measures are remarkably ineffective at correcting misallocation, even when designed optimally. Unilateral adoption of corrective industrial policies is also ineffective due to immiserizing growth effects. But industrial policies coordinated internationally via a deep agreement are more transformative than any unilateral policy alternative. (JEL F12, F13,14. L52, O19, O25)

The United States will likely adopt an explicit industrial policy in the coming decade. Similar developments are well underway in other countries (Aiginger and Rodrik 2020). And with industrial policy back on the scene, we are witnessing a revival of old but questionable trade policy practices. Governments are often turning to protectionist trade policy measures to pursue their industrial policy objectives—as manifested by the United States National Trade Council's mission or the Chinese Made in China 2025 initiative.1

These developments have sparked new interest in old but open questions regarding trade and industrial policy. For instance: (i) is trade policy an effective tool for correcting misallocation in the domestic economy? (ii) if not, should governments

*Lashkaripour: Indiana University (email: ahmadlp@gmail.com); Lugovskyy: Indiana University (email: vlugovsk@indiana.edu). Emi Nakamura was the coeditor for this article. We are grateful to James Anderson, Adina Ardelean, Dominick Bartelme, Kerem Cosar, Farid Farrokhi, Harald Fadinger, Fabio Ghironi, David Hummels, Kala Krishna, Konstantin Kucheryavyy, Danial Lashkari, Nuno Limao, Gary Lyn, Ralph Ossa, James Rauch, Andrés Rodríguez-Clare, Kadee Russ, Peter Schott, Alexandre Skiba, Anson Soderbery, Robert Staiger, Jonathan Vogel, and conference participants at the Midwest Trade Meetings, Chicago Fed, UECE Lisbon Meetings, 2017 NBER ITI Summer Institute, 2019 WCTW, Indiana University, Purdue University, SIU, IBA, Boston College, University of Mannheim, and University of Michigan for helpful comments and suggestions. We thank Nicolas de Roux and Santiago Tabares for providing us with data on the Colombian HS10 product code changes over time. We are grateful to Fabio Gomez for research assistance. Lugovskyy thanks Indiana University SSRC for financial support. All errors are our own.

†Go to https://doi.org/10.1257/aer.20210419 to visit the article page for additional materials and author disclosure statements.

1See Bhagwati (1988) and Irwin (2017) for a historical account of trade restrictions being used by governments to promote their preferred industries. A prominent example dates back to 1791, when Alexander Hamilton approached Congress with "the Report on the Subject of Manufactures," encouraging the implementation of protective tariffs and industrial subsidies. These policies were intended to help the US economy catch up with Britain.

2759

undertake unilateral domestic policy interventions to correct misallocation? or (iii) Should they coordinate their industrial policies via a deep trade agreement?

To answer these questions, we characterize optimal trade and industrial policies in an important class of multi-industry, multicountry quantitative trade models where misallocation occurs due to scale economies or profit-generating markups. Guided by theory, we estimate the key parameters that govern the welfare consequences of trade and industrial policy in open economies. We then combine our estimated parameters with optimal policy formulas to quantify the ex ante gains from trade and industrial policy among 43 major countries.

Our estimation reveals that trade policy is remarkably ineffective at correcting misallocation, reflecting a deep tension between allocative efficiency and terms of trade. Unilateral adoption of corrective industrial policies can also backfire, as it often triggers immiserizing growth. These considerations, we argue, may have spurred a global race to the bottom, wherein governments either avoid corrective industrial policies or pair them with hidden trade barriers. A deep agreement can remedy this problem and deliver welfare gains that are more transformative than any unilateral policy intervention.

Section I presents our theoretical framework. Our baseline model is a generalized multi-industry Krugman (1980) model that features a nonparametric utility aggregator across industries and a nested CES utility aggregator within industries. This specification has an appealing property wherein the degrees of firm-level and country-level love for variety can diverge. We analyze both the restricted and free entry cases of the model to distinguish between the short-run and long-run consequences of policy. With a reinterpretation of parameters, our baseline framework also nests the multi-industry Melitz (2003)-Pareto model and the multi-industry Eaton and Kortum (2002) model with industry-level Marshallian externalities. We later extend our baseline model to accommodate nonparametric input-output linkages.

Section II derives sufficient statistics formulas for first-best and second-best trade and industrial policies. Unilaterally optimal policies in our framework pursue two objectives: first, they seek to improve the home country's terms of trade (ToT) vis-à-vis the rest of the world. Second, they seek to restore allocative efficiency in the domestic economy by reallocating resources toward high returns-to-scale or high-profit industries.

The first-best optimal policy consists of misallocation-blind import tariffs and export subsidies that purely maximize ToT gains. Allocative efficiency under the first-best is restored via domestic Pigouvian subsidies.2 While these insights resonate with the targeting principle, our optimal policy formulas have other implications worth highlighting. First, even though first-best trade policies are blind to misallocation (the dispersion in scale elasticities), they depend on the overall strength of scale economies (the level of scale elasticities). Second, the optimal tariff formula is input-output-blind provided that export subsidies are assigned optimally.3

2The optimal subsidy rate in each industry equals the inverse of the industry-level scale elasticity or markup. 3Specifically, optimal import tariffs are equal to the inverse export supply elasticity regardless of input-output relationships. Consequently, in the absence of profits and scale economies, optimal tariffs become uniform when export subsidies are set optimally—revealing that the uniformity result in Costinot et al. (2015) extends to environments with input-output linkages.

Our second-best trade policy formulas apply to scenarios where governments are reluctant to use industrial subsidies for correcting misallocation—the root of which could be political pressures or institutional barriers.4 Second-best trade tax-cum-subsidies are composed of two elements: a neoclassical ToT-improving component and a misallocation-correcting component. The former aims to restrict relative exports in nationally differentiated industries. The latter seeks to restrict imports and promote exports in high returns-to-scale industries, mimicking the first-best Pigouvian subsidies.

- Section III, guided by our optimal policy framework, puts forth two conjectures


concerning the efficacy of trade and industrial policy: first, if industry-level trade and scale elasticities exhibit a strong negative correlation, stand-alone trade policy measures deliver limited welfare gains even when set optimally—reflecting their inability to strike a balance between ToT-improving and misallocation-correcting objectives.5 Second, in these conditions, unilateral scale (or markup) correction via industrial policy can cause immiserizing growth due to adverse ToT effects. Consequently, shallow trade agreements may be insufficient for reaching global efficiency. Once governments agree to abandon inefficient trade restrictions under a shallow agreement, they become tangled in a coordination game involving corrective industrial policies. The outcome of this game is a race to the bottom wherein governments are reluctant to implement corrective industrial policies without violating their commitments to free trade. A deep agreement can remedy this problem.

To test these conjectures, Section V estimates the structural parameters necessary for ex ante policy evaluation. Our optimal policy formulas reveal that the sufficient statistics for measuring policy outcomes include observables and two sets of parameters: (i) industry-level scale elasticities that govern the extent of misallocation and (ii) industry-level trade elasticities that control the scope for ToT manipulation. In our generalized Krugman (1980) model, scale elasticities reflect the degree of love for variety whose social benefits are not internalized by firms' entry decisions; and trade elasticities represent the degree of national product differentiation. We recover both elasticities from firm-level demand parameters, which are estimated by fitting a structural demand function to the universe of Colombian import transactions covering over 225,000 firms from 251 countries. Our identification strategy leverages high-frequency data on import transactions and exchange rates to construct a shift-share instrument that measures exposure to aggregate exchange rate fluctuations at the firm-product-year level.6 This estimation strategy is well suited for our end goal of policy evaluation, as it separately identifies the scale elasticities from trade elasticities, accurately pinpointing their covariance.

- 4Trade policy has been regularly used—in place of domestic industrial policy—to promote critical industries (Bhagwati 1988; Harrison and Rodríguez-Clare 2010; Irwin 2017). Relatedly, see Lane (2020) for a historical account of various industrial policy practices around the world.
- 5In some canonical cases, optimal second-best trade policies are even industry-blind—unable to beneficially correct interindustry misallocation or manipulate the ToT on an industry-by-industry basis.
- 6We develop this identification strategy to overcome challenges that are difficult to resolve with standard demand estimation techniques. Firm-level demand estimation techniques from the Industrial Organization literature leverage information on observed product characteristics, which are unavailable at the scale at which we conduct our estimation. Also, unlike traditional country-level import demand estimations, we cannot rely on tariff data for identification, as tariff rates do not vary sufficiently among firms from the same country.


Section VI combines our estimated scale and trade elasticity parameters, our optimal policy formulas, and macro-level data from the 2014 World Input-Output Database to quantify the (maximal) ex ante gains from policy among 43 major economies. Our analysis delivers three main findings.

First, we find that trade policy is remarkably ineffective at correcting misallocation in the domestic economy—even without factoring in the cost of retaliation by trading partners. Under free entry, second-best export subsidies and import taxes can raise the average country's real GDP by only 1.19 percent, which amounts to less than 4/10 of the gains attainable under the unilaterally first-best policy. Third-best import taxes are even less effective as a stand-alone policy, raising real GDP by a mere 0.63 percent. These findings corroborate the argument that trade policy has difficulty striking a balance between ToT and misallocation-correcting objectives.

Second, the unilateral adoption of corrective industrial policies triggers severe immiserizing growth in most countries. The average country's real GDP declines by 2.7 percent if they implement scale-correcting subsidies without reciprocity by trading partners. Aversion to these consequences, we argue, may have spurred a global race to the bottom in industrial policy implementation. To escape immiserizing growth, governments either avoid corrective policies or pair them with hidden trade barriers that breach shallow trade cooperation.7

Third, deep agreements can remedy the race to the bottom and deliver welfare gains that are more transformative than any unilateral intervention. To offer some perspective, corrective industrial policies coordinated via a deep agreement can elevate the average country's real GDP by 3.2 percent. These welfare gains rival the already-realized gains from shallow agreements for most countries. They, moreover, exceed any welfare gains achievable through unilateral trade or industrial policy interventions—even not considering that unilateralism often backfires in the form of retaliation by trading partners.

Related Literature.—Our theory relates to an emerging literature on optimal policy in distorted open economies. In a concurrent paper, Bartelme et al. (2019) characterize the first-best optimal policy for a small open economy in a multisector Ricardian model with Marshallian externalities. Relatedly, Haaland and Venables

- (2016) characterize optimal policy for a small open economy intwo-by-two Krugman and Melitz models.8 Beyond optimal policy, Campolmi, Fadinger, and Forlati

(2018) employ a two-sector Melitz-Pareto model to elucidate the trade-offs facing countries that join shallow and deep trade agreements.9 Our analysis of second-best trade policies speaks to an older literature emphasizing the firm-delocation rationale

- 7The Chinese government, for instance, pairs its domestic subsidies with hidden export taxes. These hidden barriers are applied via partial value-added tax rebates and are designed to restore China's ToT (Garred 2018).
- 8Demidova and Rodriguez-Clare (2009) and Felbermayr, Jung, and Larch (2013) characterize optimal tariffs in a single-industry Melitz-Pareto model. The single-industry assumption ensures that markets are efficient (Dhingra and Morrow 2019) and import and export taxes are equivalent (the Lerner symmetry). So, the unilaterally first-best can be reached with import tariffs alone. Costinot, Rodríguez-Clare, and Werning (2016) examine optimal policy in the single-industry Melitz-Pareto model from a different lens, characterizing optimal firm-level taxes.
- 9Other papers have also used new or quantitative trade models to analyze piecemeal policy reforms in distorted economies or optimal policy in nondistorted economies—e.g., Costinot and Rodríguez-Clare (2014); Campolmi, Fadinger, and Forlati (2014); Costinot et al. (2015); Bagwell and Lee (2018); Caliendo et al. (2015); Demidova


- (2017); Beshkar and Lashkaripour (2019, 2020).


for trade restrictions (e.g., Venables 1987; Ossa 2011) and supplements Bagwell and Staiger's (2001,2004) result about the role of trade agreements in distorted economies. We also build on Kucheryavyy, Lyn, and Rodríguez-Clare (2023a) to establish isomorphism between our baseline model and other workhorse models in the literature. Our quantitative examination of trade and industrial policy connects to two strands of literature. First, a mature line of research measuring the ex post consequences of tariff cuts (Costinot and Rodríguez-Clare 2014; Caliendo and Parro 2015; Ossa 2014, 2016; Spearot 2016). Second, a growing literature examining the ex ante consequences of optimal policy. Ossa (2014), most notably, quantifies the consequences of cooperative and noncooperative import tariffs in a multi-industry Krugman model with restricted entry. Lastly, our work relates to a vibrant literature examining the impacts of exogenous trade shocks in distorted economies (e.g., De Blas and Russ 2015; Edmond, Midrigan, and Xu 2015; Baqaee and Farhi 2019).

We contribute to the calculus of optimal policy in open economies by developing a new dual technique for optimal policy derivation in general equilibrium quantitative trade models with many countries, increasing returns-to-scale production technologies, and input-output linkages. Our approach has applications beyond those considered in this paper. Lashkaripour (2021), for instance, adopts a special case of this technique to characterize Nash tariffs in a monopolistic competition model with restricted entry.10 Farrokhi and Lashkaripour (2021) extend this technique to analyze optimal carbon pricing under international climate externalities.

Lastly, our paper supplements the broader quantitative trade literature by developing an estimation technique that separately identifies the scale elasticity from the trade elasticity in certain environments. Our indirect approach to scale elasticity estimation complements the direct method concurrently proposed by Bartelme et al. (2019). The main limitation of our indirect approach is that it cannot detect scale externalities unrelated to love for variety, as it does not directly leverage scale-related moments. Despite this limitation, our approach has two useful properties for policy evaluation. First, it separately identifies the trade elasticity from the scale elasticity, provided that scale economies arise from love for variety, which is valuable since the covariance between these elasticities regulates policy outcomes. Second, our approach is robust to the presence of quasi-fixed production inputs, enabling us to isolate scale effects that impair allocative efficiency from fixed-input-driven diseconomies of scale.

##### I. Theoretical Framework

Our baseline model is a generalized multi-industry, multicountry Krugman model with semiparametric preferences. In Section IV we show that our theory readily applies to alternative models featuring firm selection a la Melitz–Chaney and external economies of scale a la Kucheryavyy, Lyn, and Rodríguez-Clare (2023a). We also extend our theory later to accommodate arbitrary input-output networks and political economy pressures.

10Lashkaripour (2021) examines the cost of noncooperative import restrictions when governments simultaneously apply their third-best optimal import tariffs. To expedite the computational process, Lashkaripour (2021) uses analytic formulas for Nash tariffs, which correspond to a special of our Theorem 3.

We consider a world economy consisting of multiple countries and industries. Countries are indexed by i,j,n ∈ C. Industries are indexed by g,k ∈ 핂. Industries can differ in fundamentals such as the degree of scale economies or trade elasticity. Each country i ∈ C is populated by Li individuals who supply one unit of labor inelasticity. Labor is the sole primary factor of production in each economy. Workers cannot relocate between countries but are perfectly mobile across industries within a country and are paid a countrywide wage, wi.

A. Preferences

Each good in our model is indexed by a triplet, which signifies its location of production (origin), its location of final consumption (destination), and the industry under which the good is classified. To give an example, good "ji,k" denotes a good corresponding to origin country j–destination country i–industry k.

Cross-Industry Demand.—The representative consumer in country i ∈ C faces a vector of industry-level consumer price indexes P̃i = {P̃i,k}, where index P̃i,k ≡ P̃i,k(P̃1i,k, ...,P̃Ni,k) aggregates over industry k goods sourced from various origins. The consumer chooses their demand for industry-level bundles Qi ≡ {Qi,k} to maximize a nonparametric utility function subject to a budget constraint. This choice yields an indirect utility, which is a function of the consumer's income, Yi, and the vector of industry-level "consumer" price indexes in market i, P̃i:

- (1) Vi(Yi,P̃i) = max


Ui(Qi)

Qi

subject to

### ∑

P̃i,kQi,k = Yi.

k∈핂

Throughout this paper, the tilde notation on price is used to distinguish between "consumer" and "producer" prices. The former includes taxes, whereas the latter does not. Problem (1) yields an industry-level Marshallian demand function, which we denote by Qi,k = i,k(Yi,P̃i). This function tracks how (given prices and total income) consumers allocate their expenditure across industries. A special case of our general cross-industry demand function is the Cobb-Douglas case, wherein Ui(Qi) = ∏k∈핂 Qei,k

, implying that Qi,k = ei,kYi/P̃i,k.

i,k

Within-Industry Demand.—Each industry-level bundle aggregates over various origin-specific composite varieties:Qi,k ≡ Qi,k(Q1i,k, ...,QNi,k). Eachorigin-specific composite variety, itself, aggregates over multiple firm-level varieties: Qji,k ≡ Qji,k(qji,k), where qji,k = {qji,k(ω)}ω∈Ωj,k is a vector with each element qji,k(ω) denoting the quantity consumed of firm ω's output.11 We assume that the

11Ωj,k denotes the set of all firms operating in origin j–industry k. In our baseline model, firms do not incur a fixed exporting cost, so each firm in Ωj,k serves market i. We relax this assumption in Section IV.

within-industry utility aggregator has a nested-CES structure, which enables us to abstract from variable markups and direct our attention to the scale-driven and profit-shifting effects of policy.

ASSUMPTION (A1): The within-industry utility aggregator is nested-CES. In particular,

Qi,k = (∑

_σk−1 σk

Qji,k

j∈C

_σk σk−1

_γk γk−1

)

, where Qji,k = [∫

γk dω]

_γk−1

ω∈Ωj,kφji,k(ω)

γkqji,k(ω)

_1

,

with γk ≥ σk > 1 and φji,k(ω) > 0 corresponding to a constant variety-specific taste shifter.

Based on (A1), the demand for the composite national-level variety ji,k (origin country j–destination country i–industry k) is given by

- (2) Qji,k = (P̃ji,k/P̃i,k)

−σk

Qi,k,

where P̃ji,k and P̃i,k respectively denote the origin-specific and industry-level CES price indexes.12 Recall that Qi,k denotes industry-level demand, which is given by Qi,k = i,k(Yi,P̃i). The demand facing individual firms from country j is, accordingly, given by

- (3) qji,k(ω) = φji,k(ω)[


−σk

−γk

P̃ji,k

_p̃ji,k(ω) P̃ji,k ]

(

P̃i,k)

i,k(Yi,P̃i).

_

Importantly, the above parameterization of demand allows for the firm-level and national-level degrees of market power to diverge. γk governs the degree of firm-level market power and love for variety, while σk governs the degree of national-level market power in industry k.

Elasticity of Demand Facing National-Level Varieties.—Following equation (2),

the demand for aggregate variety ji,k is a function of total income in market i, Yi, and the entire vector of origin × industry-specific consumer price indexes in that market: namely, Qji,k = ji,k(Yi,P̃i). To keep track of changes in demand, we define the elasticity of demand for national-level variety ji,k with respect to the price of variety ni,g as follows:

∂___________lnji,k(Yi,P̃i) ∂lnP̃ni,g

ε(jini,k,g) ≡

∼ price elasticity of demand.

Under Cobb-Douglas preferences (i.e., zero cross-substitutability between industries), the national-level demand elasticities are fully determined by the upper-tier

12Namely, P̃ji,k = [∑ω∈Ωji,kφji,k(ω)p̃ji,k(ω)1−γ

k]

1/(1−γk) and P̃i,k = (∑j∈C P̃1ji−,kσ

k)

1/(1−σk)

.

CES parameter σk and national-level expenditure shares. Specifically, εjiȷi,,kg = 0 if g ≠ k, while

εji,k ∼ εji(ji,k,k) = −1 − (σk − 1)(1 − λji,k); εji(ȷ,ki,k) = (σk − 1)λȷi,k (ȷ≠ j),

where λji,k ≡ P̃ji,kQji,k/∑ȷPȷ̃ i,kQȷi,k denotes the (within-industry) share of expenditure on ji,k. In the presence of cross-substitutability between industries, the demand elasticity will feature an additional term that accounts for cross-industry demand effects.

In our setup, optimal policy internalizes the entire matrix of own- andcross-demand elasticities. To present our optimal policy formulas concisely, we use the following matrix notation to track the elasticity of demand with respect to goods sourced from various origins and industries.

DEFINITION (D1): Let K = |핂| denote the number of industries. The K × K matrix Eji(ni) describes the elasticity of demand for origin j ∈ C goods with respect to the price of origin n ∈ C goods in market i:

⎢

⎥

⎡

⎤

ε(jini,1,1) ... ε(jini,1,K) ⋮ ⋱ ⋮

Eji(ni) ≡

.

εji(ni,K,1) ⋯ εji(ni,K,K)

⎣

⎦

To simplify the notation, we useEji ∼ Eji(ji) to denote the elasticity of originjgoods with respect to originj prices and use theK × (N − 1)K matrix,Eji(−ii) = [Eji(ni)]n≠i, to summarize the elasticity of demand for origin j goods with respect to price of all import varieties in market i (i.e., all varieties source from any origin n ≠ i). Important for our analysis, Eji is an invertible matrix—the proof of which is provided in online Appendix E using the primitive properties of Marshallian demand.

B. Production and Firms

Each economy i ∈ C is populated with a mass Mi,k = |Ωi,k| of single-product firms in industry k ∈ 핂 that compete under monopolistic competition. Labor is the only factor of production. Firm entry into industry k is either free or restricted. Under restricted entry, Mi,k = M–i,k is invariant to policy. Under free entry, a pool of ex ante identical firms can pay an entry cost wi f ke to serve industry k from origin i. After paying the entry cost, each firm ω ∈ Ωi,k draws a productivity z(ω) ≥ 1 from distribution Gi,k(z) and faces a marginal cost τij,kwi/z(ω) for producing and delivering goods to destination j ∈ C, where τij,k denotes a flat iceberg transport cost. Collecting these assumptions, the "producer" price index of composite good ij,k (which aggregates over firm-level varieties associated with origin i–destination j–industry k) is

_γk γk − 1τij,ka–i,kwiMi,k

−_γ 1

- (4) Pij,k =


k−1,

1/(1−γk) denotes the average unit labor cost in origin i.13 Following Kucheryavyy, Lyn, and Rodríguez-Clare (2023a), we refer to 1/(γk − 1) = −(∂lnPij,k/∂lnMi,k) as the industry-level scale elasticity:

where a–i,k ≡ [∫1∞zγk−1dGi,k(z)]

μk ≡ _1 γk − 1 ∼ scale elasticity ∼ markup.

Considering equation (4), μk represents both the constant firm-level markup in industry k (i.e., 1 + μk = γk/(γk − 1)), and the elasticity by which (variety-adjusted) TFP increases with industry-level employment Li,k (noting that Li,k ∝ Mi,k).14 The equivalence between markup and scale elasticity is not a universal property but a specific feature of our baseline Krugman model. We take advantage of this equivalence to simplify notation, but it is not essential for the theoretical results that follow. As shown in Section IV, our analytical formulas for optimal policy extend to alternative models where the scale elasticity and markup levels diverge.

Expressing Producer Prices in Terms of Profit-Adjusted Wages.—Our optimal policy framework reveals a tight connection between the restricted and free entry cases—even though misallocation stems from markup distortions in the former and scale distortions in the latter. To illustrate this connection and integrate optimal policy results for the two cases, we specify producer prices as a function of profit-adjusted wage rates. The idea is that net profits (if any) are rebated back to workers. The profit-adjusted wage rate in country i is defined as

w`i ≡ (1 + μ–i)wi ∼ profit-adjusted wage,

where μ–i denotes economy i's average profit margin across all industries. Namely,

- (5) μ–i =

⎧

⎪

⎨

⎪

⎩

0, if entry is free;

∑k∈핂 ∑j∈C _1 +μkμ

k

Pij,kQij,k

_______________

∑k∈핂 ∑j∈C _1 +1 μ

k

Pij,kQij,k

, if entry is restricted.

Under free entry, profits are drawn to zero, resulting in μ–i = 0. Under restricted entry, the average profit margin is positive and depends on the industrial composi-

tion of country i's output—with a higher μ–i reflecting more sales in high-markup (high-μ) industries. Appealing to our definitions for w`i and μk, we can reformulate equation (4) to express producer prices as a function of profit-adjusted wages:

- (6) Pij,k =


⎧

_μk 1 + μkw`i, if entry is free;

−

ρij,k[∑j∈Cτij,kQij,k]

⎪

⎨

ρ′ij,k____11 ++ μμ–k

⎪

w`i, if entry is restricted.

⎩

i

- 13Notice that a–i,k is constant in our baseline model. This is no longer true in the Melitz (2003) extension of our model explored in Section IV, in which firms incur a fixed cost to serve individual markets.
- 14With free entry and constant markups, it follows immediately that Li,k = c–i,kMi,k, where c–i,k is a constant.


In the above formulation, ρij,k ≡ (1 + μk)τij,ka–i1,k/(1+μ

k)(μk/fke)−μ

k/(1+μk) and ρ′ij,k ≡ τij,ka–i,kM–i,−kμ

are constant price shifters, and ∑j∈C(τij,kQij,k) denotes origin i–industry k's gross output.15 As we explain shortly, the above formulation of producer prices is useful for tracking the terms of trade gains from policy in open economies. These gains require a contraction of producer prices in the rest of the world, which can occur through alterations to production scale, ∑j∈C(τij,kQij,k), under free entry or average profit margins, μ–i, under restricted entry.

k

C. The Instruments of Policy

The government in country i is afforded a complete set of revenue-raising trade and domestic policy instruments, namely,

- (i) import tax, tji,k, applied to all goods imported from origin j ≠ i in industry k;
- (ii) export subsidy, xij,k, applied to all goods sold to market j ≠ i in industry k;
- (iii) industrial subsidy, si,k, applied to industry k's output irrespective of where it is sold.


Our specification of policy is quite flexible, as it accommodates import subsidies or export taxes (−1 ≤ t < 0 or −1 ≤ x < 0) as well as production taxes (−1 ≤ s < 0). We disregard consumption taxes, as they are redundant given the availability of the other tax instruments (see online Appendix A). There is a simple intuition behind this redundancy: country i ∈ C has access to 2(N − 1) + 2 different tax instruments in each industry (where N ≡ |C| denotes the number of countries). These 2(N − 1) + 2 tax instruments can directly manipulate 2(N − 1) + 1 consumer price indexes: N − 1 export prices, N − 1 import prices, and one price associated with the domestically produced and consumed variety (namely, P̃ii,k). So, by construction, one of the 2(N − 1) + 2 tax instruments in each industry is redundant. Here, we treat the industry-level consumption tax as a redundant instrument.16

The above tax instruments create a wedge between consumer price indexes, {P̃ji,k}, and producer price indexes, {Pji,k}, as follows:

_____________1 + tji,k (1 + xji,k)(1 + sj,k)Pji,k, ∀j,i ∈ C, k ∈ 핂.

- (7) P̃ji,k =


15Under free entry, the total cost of entry must equal gross profits across all markets. In particular,

_μk 1 + μk

j∈C(

Pij,kQij,k) (Free Entry Condition).

wi fkeMi,k = ∑

_μk fke ∑j(a–ij,kQij,k)]1/(1+μ

k). Equation (6), then, follows from plugging the expression for Mi,k back into equation (4).

Replacing Pij,k in the above equation with 4 yields Mi,k = [

16With more than two countries (N > 2), country i has access to 2(N − 1) + 2 instruments per industry. These instruments can manipulate 2(N − 1) + 1 price variables, which implies the same redundancy.

These tax instruments also generate/exhaust revenue for the tax-imposing country. The combination of all taxes imposed by country i ∈ C produces a tax revenue equal to

industrial subsidies



k∈핂[(

_1 1 + si,k − 1)Pii,kQii,k]

∑

- (8)i =


j≠i{

_____________1 (1 + xij,k)(1 + si,k) − 1]Pij,kQij,k}

_____________tji,k (1 + xji,k)(1 + sj,k)Pji,kQji,k + [

#### + ∑

∑

.

k∈핂



import taxes + export subsidies

Tax revenues are rebated to the consumers in a lump-sum fashion. After we account for tax revenues, total income in country i equals the sum of profit-adjusted wage payments, w`iLi = (1 + μ–i)wiLi, and tax revenues. Namely, Yi = w`iLi + i, where i can be positive or negative depending on whether country i's policy consists of net taxes or subsidies.

D. General Equilibrium

For convenience, we refer to profit-adjusted wages as just wages going forward, using w ≡ {w`i} to denote the global vector of wages. We also assume throughout the paper that the underlying parameters of the model are such that the necessary and sufficient conditions for the uniqueness of equilibrium are satisfied.17 To present our theory, we express all equilibrium outcomes (except wages) as an explicit function of global taxes (x, t, and s) and wages w, with the understanding that w is itself an equilibrium outcome. As detailed in online Appendix E, this formulation derives from solving a system that imposes all equilibrium conditions aside from the labor market clearing conditions. For future reference, we outline this formulation of equilibrium variables below and provide a summary of key variables in Table 1.

NOTATION: For a given vector of taxes and wages T = (t,x,s;w), equilibrium outcomes Yi(T), Pji,k(T), P̃ji,k(T), Qji,k(T) are determined such that (i) producer prices are characterized by equation (6); (ii) consumer prices are given by equation (7); (iii) industry-level consumption choices are a solution to Problem (1) with demand for national-level varieties, Qji,k, given by equation (2); and (iv) total income (which dictates total expenditure by country i) equals profit-adjusted wage payments plus tax revenues:

Yi(T) = w`iLi + i(T), where tax revenues i(T) are described by equation (8).

17Following Kucheryavyy, Lyn, and Rodríguez-Clare (2023a), this assumption holds in the two-country case if γk ≥ σk and holds otherwise if trade costs are sufficiently small.

Table 1—Summary of Key Variables

Variable Description P̃ji,k Consumer price index (origin j–destination i–industry k) Pji,k Producer price index (origin j–destination i–industry k) Yi Total income in country i i Total tax revenue in country i (equation (8)) wi and w`i pure and profit-adjusted wage rates in country i: w`i = (1 + μ–i)wi xji,k Export subsidy applied to good ji,k (if j ≠ i) tji,k Import tax applied on good ji,k (if j ≠ i) si,k Industrial subsidy applied to all goods from origin i–industry k λji,k Within-industry expenditure share (good ji,k): P̃ji,kQji,k/∑ȷ P̃ȷi,kQȷi,k rji,k Within-industry sales share (good ji,k): Pji,kQji,k/∑ι Pjι,kQjι,k ei,k Industry-level expenditure share (destination i–industry k) ρi,k Industry-level sales share (origin i–industry k) μk industry-level markup ~ industry-level scale elasticity μ–i Average profit margin in origin i (equation (5)) σk Cross-national CES parameter ~ (1 + trade elasticity) ε(jini,k,g) Elasticity of demand for good ji,k w.r.t. the price of ni,g ωji,k Inverse of good ji,k's supply elasticity (online Appendix equation E.11)

Considering the above formulation of equilibrium variables, welfare, too, can be expressed as an explicit function of taxes and wages, T = (t,x,s;w). Namely,

Wi(T) ≡ Vi(Yi(T),P̃i(T)).

Since w is itself an equilibrium outcome, vector T = (t,x,s;w) is feasible if and only if w is the equilibrium wage consistent with t, x, and s. Accordingly, our objective in this paper is to study problems where the government in i chooses T = (t,x,s;w) to maximize Wi(T) subject to the noted feasibility constraint, which is formally defined below.

DEFINITION (D2): The set of feasible policy–wage vectors, 픽, consists of any vector T = (t,x,s;w) where w satisfies the labor market clearing condition in every country, given t, x, and s:

픽 = {T = (t,x,s;w) ∣w`iLi = ∑

k∈핂

[Pij,k(T)Qij,k(T)]; ∀i ∈ C}.

### ∑

j∈C

There is a basic reason for why we formulate equilibrium outcomes as a function of T = (t,x,s;w) instead of just (t,x,s). This choice of formulation allows us to articulate an important intermediate result regarding tax neutrality. This result, which is stated below, simplifies our theoretical derivation of optimal policy to a great degree.

LEMMA 1 (Tax Neutrality): For any a and ã ∈ 핉+, (i) if T = (1 + ti,t−i, 1 + xi,x−i,1 + si,s−i;w`i,w−i) ∈ 픽, then T′ = (a(1 + ti),t−i,a(1 + xi),x−i, (1/ã)(1 + si),s−i;(a/ã)w`i,w−i) ∈ 픽. Moreover, (ii) welfare is preserved under T and T′: Wn(T) = Wn(T′) for all n ∈ C.

The above lemma is proven in online Appendix B and connects two fundamental tax neutrality principles: the Lerner symmetry (Lerner 1936; Costinot and Werning 2019) and the welfare-neutrality of uniform subsidies or markups (Lerner 1934; Samuelson 1948). Importantly, Lemma 1 implies that there are multiple optimal tax combinations for each country i—a result that simplifies our forthcoming task of characterizing optimal policy. To give some detail, the contribution of general equilibrium wage and income effects to the optimal tax schedule is often summarized by aggregate tax shifters that are industry-blind. The neutrality established by Lemma 1 simplifies the task of handling these aggregate terms.

II. Sufficient Statistics Formulas for Optimal Policy

This section derives sufficient statistics formulas for optimal trade and industrial policies. These formulas are later employed to quantify the ex ante gains from policy among many countries. Before proceeding to the derivation, let us review the two rationales for policy intervention in our setup. A noncooperative, welfare-maximizing government seeks to (i) restrict trade and reap unexploited terms of trade (ToT) gains vis-à-vis the rest of the world and (ii) correct misallocation in the domestic economy. Misallocation, notice, stems from the cross-industry heterogeneity in markups or scale elasticities, leading to inefficiently low output in high-profit or high returns-to-scale (high-μ) industries. A crucial difference between these policy objectives is that ToT manipulation is inefficient from a global standpoint, as it distorts international prices to transfer surplus from the rest of the world to the tax-imposing country.

A. Efficient Policy from a Global Standpoint

As a useful benchmark, we first characterize the efficient policy from a global standpoint. Efficient policies, by definition, are the solution to a central planner's problem that maximizes global welfare via taxes and lump-sum international transfers. Let δi denote the Pareto weight assigned to country i in the planner's objective function. The globally efficient policy solves the following planning problem subject to the availability of lump-sum transfers:

max

(t,x,s;w)∈픽

### ∑

δilogWi(t,x,s;w).

i∈C

Keep in mind that the above problem affords the planner enough instruments to obtain their first-best. Good-specific taxes allow the planner to restore allocative efficiency, while lump-sum transfers allow her to redistribute internationally based on the Pareto weights, δi. This point is expanded on in online Appendix F, where it is

shown that the efficient tax policy involves zero trade taxes and Pigouvian subsidies that restore marginal-cost-pricing globally:18

- (9) t⋆ji,k = x⋆ji,k = 0, ∀ji,k; 1 + si⋆,k = 1 + μk, ∀i,k.


The above characterization applies to both the free and restricted entry cases—with the understanding that μk assumes different interpretations in each case. Appealing to this result, online Appendix E establishes a basic point about international cooperation. Welfare-maximizing governments will settle on the efficient policy only if they are unable to influence consumer/producer prices in the rest of the world. Otherwise, they will defect to take advantage of terms of trade gains. This result indicates that the pursuit of ToT gains is the sole reason welfare-maximizing governments deviate from efficient policy choices—at least when they are afforded sufficient policy instruments.19 This result echoes the argument in Bagwell and Staiger (2001,2004), generalizing it to settings with many countries and differentiated industries.

In the next section, we characterize the unilaterally optimal policy of noncooperative governments. This exercise elucidates two issues. First, it determines how governments deviate from the cooperative policy choice when ToT considerations are taken into account. Second, it clarifies how governments approach industrial policy when they view first-best Pigouvian subsidies as politically infeasible. Once we settle these two issues, we argue that the implementation of globally efficient policies requires both a "shallow agreement" to discipline trade policy choices and a "deep agreement" to coordinate industrial policy implementation.

B. Unilaterally Optimal Policy Choices

First-Best: Unilaterally Optimal Trade and Domestic Policies.—We now characterize a noncooperative country's unilaterally optimal policy. We consider cases where a noncooperative country i ∈ C selects taxes, ti ≡ {tji,k}, xi ≡ {xij,k}, and si ≡ {si,k}, taking policy choices elsewhere as given. Countries in the rest of the world are passive in their use of taxes but actively maintain internal cooperation.20 We begin with the unilaterally first-best case where the government in i is afforded

- 18To be specific, the implementation of the efficient allocation involves the above taxes plus lump-sum international transfers based on Pareto weights. The logic is that the planner maximizes global output by restoring marginal-cost pricing and redistributes the corresponding income gains between countries via efficient transfers. Absent transfers, implementing {t⋆,x⋆,s⋆} would deliver a Kaldor-Hicks improvement (Kaldor 1939; Hicks 1939) but not necessarily a Pareto improvement relative to laissez-faire—see online Appendix F for more details.
- 19This need not be true if governments are prohibited from using domestic taxes and afforded only import tax instruments. Following Venables (1987) and Ossa (2011), welfare-maximizing governments will erect tariffs in that case, even if they perceive world prices as invariant to their policy choice. By doing so, they improve allocative efficiency in the domestic economy but impose a negative firm-delocation externality on the rest of the world.
- 20One aspect of internal cooperation requires further clarification: country i's policy could, in principle, disrupt the balance of market access concessions in the rest of the world, leading to a deterioration of one cooperative country's ToT relative to another. Cooperation within the rest of the world entails that these extraterritorial ToT effects be neutralized via buffers that preserve wn/wj for all n,j ≠ i—see online Appendix G for further details.


all possible tax instruments. The first-best unilaterally optimal policy solves the following problem:21

Wi(ti,xi,si;w) subject to

max

(ti,xi,si;w)

- (P1) (ti,xi,si;w) ∈ 픽.


We analytically solve Problem (P1) under both the restricted and free entry cases. We perceive the restricted entry case to be a more appropriate benchmark if governments are concerned with short-run gains from policy. The free entry case, on the other hand, is more relevant if governments are concerned with long-run gains. These two cases exhibit an important difference: producer prices respond differently to contractions in export supply under restricted and free entry—as we elaborate next.

Conditional Export Supply Elasticity: The terms of trade gains from policy, in our framework, channel through changes in the price of imported and exported goods. The government in i ∈ C cannot directly dictate the producer price of say, good ji,k that is imported from origin j ≠ i. Instead, it can deflate its producer price (Pji,k) indirectly by contracting or expanding its export supply (Qji,k). The contraction in Qji,k also affects the producer price of goods supplied by other locations through general equilibrium linkages. Our theory indicates that, for optimal policy analysis, the conditional inverse export supply elasticity is sufficient to track these effects. To present this elasticity, let P̃i contain the consumer price of all goods either produced by or consumed in country i. These are prices that country i's government can fully control via taxes. We define the conditional inverse export supply elasticity of good ji,k as

g∈핂[

_∂lnPii,g ∂lnQji,k)w,Y,P̃

ρi,g(

_w`iLi w`jLj

rji,kρj,k ∑

ωji,k ≡ _1

i

],

_∂lnPni,g ∂lnQji,k)w,Y,P̃

rni,gρn,g(

_w`nLn w`jLj

### + ∑

n≠i

i

whererni,g ≡ (Pni,gQni,g)/(∑ιPnι,gQnι,g) andρn,g ≡ (∑ιPnι,gQι,g)/(∑ι,sPnι,sQι,s) respectively denote the good-specific and industry-wide sales shares associated with

origin n. Notice, ωji,k is a conditional elasticity that describes how the producer prices linked to economy i respond to a change in Qji,k, holding P̃i and the entire vector of wage and income levels constant. This elasticity encapsulates different economic forces under free and restricted entry, as we detail next.

Under restricted entry, producer prices from origin j ∈ C are fully determined by the (profit-adjusted) wage rate, w`j, and the aggregate profit margin, μ–j

21Given that the rest of the world is passive in their use of taxes (i.e., t−i = x−i = s−i = 0), we condense the notation by specifying equilibrium variables as a function of only (ti,xi,si,w).

(see equation (6)). Policy, thus, has two distinct effects on producer prices under restricted entry: one effect that channels through wages, w, and another that channels through aggregate profit margins. To explain the latter, hold w constant: contracting the export supply of good ji,k with taxes will alter all producer prices associated with origin j through a change in origin j's aggregate profit margin, μ–j. The change in μ–j derives from the fact that industries have differential markup margins and that taxing good ji,k alters the industrial composition of output in origin j ∈ C.

Under free entry, producer prices from origin j ∈ C are determined by the wage rate, w`j, and the origin j–industry k-specific scale of production. So, aside from wage-related effects, policy has a second effect on producer prices that channels through industry-level scale economies. To elaborate, consider an import tax on good ji,k (origin j–destination i–industry k). Such a tax contracts the supply of ji,k and the scale of production in origin j–industry k. Given equation (6), this contraction in scale increases the entire vector of producer price indexes associated with origin j–industry k—all through additional firm entry.

In both cases, ωji,k describes how expanding or contracting good ji,k's export supply impacts country i's terms of trade via either profit-shifting or industry-level scale economies. Importantly, ωji,k can be characterized (to a first-order approximation) as a simple function of sales shares, scale elasticities, and Marshallian demand elasticities (see online Appendix E):22

⎧

# ⎪

−_1 +μkμ

∑ι≠irjι,kεjι,k[1 − _1 +μkμ

_ρi,krin,k ρj,krji,kεin(jn,k,k)], if entry is free;

rji,k

_wiLi wjLj∑

_____________

k

1 − _1 +μkμ

n≠i

k

⎨

# ⎪

- (10) ωji,k ≈


k

(1 − 1 + μ

____j 1 + μk)∑grji,gρj,g

–

_________________________

, if entry is restricted.

1 + ∑g∑ι≠i[1 + (1 −

____1 + μ–j 1 + μg)rjι,gρj,gεjι,g]

⎩

The above formulation for ωji,k is quite intuitive. Under restricted entry, ωji,k governs the relationship between export supply and the average markup paid on imports.

Accordingly, ωji,k is nonzero only when industries exhibit differential markup levels. Otherwise, ωji,k collapses to zero, as the average markup (or profit margin) paid on imports is constant and invariant to changes in export supply, i.e., μ–j = μk = μ ⇒ ωji,k = 0. Under free entry, ωji,k regulates the terms of trade gains from policy that channel through scale economies. Accordingly, in the limit where industries operate based on constant returns-to-scale, ωji,k once again collapses to zero—namely, limμ

k→0ωji,k = 0.

Three-Step Dual Approach to Characterizing Optimal Policy: Our characterization of optimal policy employs the dual approach and is presented in online Appendix E. Below, we provide a verbal summary of our approach, which involves three main steps.

First, we simplify Problem (P1) by reformulating it into a problem where country i's government chooses the vector of prices P̃i = {P̃ii,P̃ji,P̃ij} associated with its

22The above approximation derives from Wu et al.'s (2013) first-order approximated inverse of a diagonally dominant matrix. Figure E.1 in online Appendix E illustrates the precision of this approximation. Online Appendix E also presents an exact (approximation-free) formulation for ωji,k.

own economy. Country i's optimal tax/subsidy schedule 핋i∗ ≡ (t∗i,xi∗,s∗i) is then recovered as the wedge between the optimal price vector P̃ i∗ and producer prices.

Second, we derive the first-order conditions (F.O.C.) associated with country i's reformulated optimal policy problem. We use two technical tricks to overcome the complications related to general equilibrium analysis. First, we use the envelope conditions associated with optimal demand choices to net out redundant behavioral responses. Second, we identify additional welfare neutrality conditions specific to Problem (P1). Most importantly, we observe that terms in the F.O.C.s that account for general equilibrium wage and income effects are redundant in the neighborhood of the optimum. That is, we could specify the F.O.C.s associated with (P1) as if wages were constant and Marshallian demand functions were income-inelastic.23

Third, we combine the F.O.C.s and solve them as part of one system. In this process, we appeal to the tax neutrality result specified by Lemma 1 to eliminate redundant tax shifters, which are difficult to characterize. We then appeal to well-known properties of Marshallian demand functions (e.g., Cournot aggregation and homogeneity of degree zero) to establish that our system of F.O.C.s admits a unique solution.24 Together, these steps lead us to simple sufficient statistics formulas for unilaterally optimal policies, as summarized by the following theorem.25

- THEOREM 1: Country i's unilaterally optimal policy is unique up to two uniform tax shifters 1 + s–i and 1 + t–i ∈ 핉+ and is implicitly given by


[domestic subsidy] 1 + si∗,k = (1 + μk)(1 + s–i),

[import tax] 1 + t∗ji,k = (1 + ωji,k)(1 + t–i),

[export subsidy] 1 + xij∗ = −Eij−1Eij(−ij)(1 + ti∗),

where ωji,k denotes the good ji,k's inverse export supply elasticity as given by equation (10), while Eij ∼ Eij(ij) and Eij(−ij) denote matrixes of Marshallian demand elasticities as defined under (D1).26

The uniform tax shifters, s–i and t–i account for the multiplicity of optimal policy equilibria (as indicated by Lemma 1). These shifters can be assigned any arbitrary value,

provided that 1 + s–i and 1 + t–i ∈ R+. For instance, if we assign a sufficiently high value to t–i and s–i, the optimal policy will involve import tariffs, export subsidies, and industrial subsidies. Conversely, if we assign a sufficiently low value to t–i and s–i, the

- 23Farrokhi and Lashkaripour (2021) streamline the dual approach developed in this paper, extending our result about the welfare neutrality of wages and income effects to settings with arbitrary international externalities.
- 24To be clear, it is possible that our model admits multiple optimal policy equilibria. Yet the optimal policy formulas are uniquely specified by Theorem 1 in each case.
- 25We later combine the formulas specified by Theorem 1 with micro-estimated parameter values to quantify the ex ante gains from policy. In online Appendix H, we test the accuracy and speed of our formulas by performing 150 numerical simulations in which the underlying model parameters are repeatedly sampled from a uniform distribution. The theoretical policy predictions are then compared to those obtained from numerical optimization.
- 26Eij(−ij) = [Eij(nj)]n≠i is a K × (N − 1)K matrix, and 1 ≡ 1(N−1)K×1 is a column vector of ones. Also, in the general case with asymmetric income elasticities of demand, Eij should be replaced with Ẽ ij ≡ [


_eij,g eij,k εij(ij,g,k)]g,k.

εij(ij,g,k) = εij(ij,k,g), which implies that Eij = Ẽ ij.

Otherwise, the symmetry of the Slutsky matrix implies that _eeij,g

ij,k

optimal policy will involve import subsidies, export taxes, and industrial production taxes.

Intuition behind Optimal Tax Formulas: Theorem 1 states that country i's unilaterally optimal policy consists of (i) Pigouvian subsidies that restore marginal cost pricing in economy i; (ii) import taxes/subsidies that exploit country i's collective import market power, delivering an optimal markdown on the producer price of imported goods Pji,k; and (iii) export taxes/subsidies that exploit country i's collective export market power, charging the optimal national-level markup on the consumer price of exported goods P̃ij,k.27

- Theorem 1 has two additional implications worth highlighting. The first is that


first-best optimal tariffs and export subsidies are misallocation-blind but not necessarily blind to the overall magnitude of scale economies. In particular, tji∗ and xij∗ are misallocation-blind in that allocative efficiency is restored exclusively via industrial subsidies under the first-best. At the same time, tji∗ and xij∗ are sensitive to scale economies because raising the average scale elasticity modifies tji∗ and xij∗ regardless of the underlying degree of misallocation.28

The optimal export tax-cum-subsidy, furthermore, depends on the entire matrix of own- and cross-price demand elasticities, echoing our previous assertion that xij∗,k (in Theorem 1) corresponds to the optimal markup of a multiproduct monopolist. To better understand this point, assign t–i = 0, in which case x∗ij,k represents a tax on good ij,k (rather than a subsidy). The optimal tax rate on ij,k is equal to the optimal markup on that good if country i's government was pricing its exports as a multiproduct monopolist rather than an individual single-product firm. The government's optimal pricing decision, accordingly, internalizes the effect of raising P̃ij,k on its sales of other products in destination j.

Lastly, Theorem 1 can be useful for quantitative applications. It specifies optimal policy as a function of Marshallian demand elasticities and inverse export supply elasticities, both of which are fully determined by observable shares (rij,k and λij,k) and industry-level trade and scale elasticities (σk and μk). In other words, Theorem 1 characterizes optimal policy in terms of a set of observable or estimable sufficient statistics. We capitalize on this feature to simplify our quantitative analysis of optimal policy in Section VI.

Optimal Tariffs Are Uniform, Absent Scale Economies or Profits: A canonical special case of Theorem 1 is the multi-industry Armington case, in which μk = 0 for all k ∈ 핂. In that case, ωji,k = 0 for all ji,k, implying that optimal import tariffs

- 27Theorem 1 reveals that once scale/markup distortions are corrected via domestic subsidies, optimal trade taxes resemble those derived by Dixit and Norman (1980) in perfectly competitive, constant returns-to-scale environments (see also Matsuyama 2008). The main difference between our formula and Dixit and Norman (1980) is that our Theorem 1 equates the optimal tariff to a conditional elasticity, ωji,k, free of general equilibrium wage-and-income effects. These difficult-to-characterize general equilibrium effects, we prove, are redundant in the neighborhood of the optimum policy and can be disregarded. This specific feature of our optimal policy formulas makes them useful for quantitative analysis—as we demonstrate later in Section VI.
- 28By the degree of misallocation, we mean the log welfare distance to the efficient frontier, i. In a closed economy with Cobb-Douglas-CES preferences, i = Eρ


[μ] denotes to the sales-weighted average scale elasticity. Note that scale economies do not necessarily lead to misallocation. If the scale elasticity is strictly positive but uniform across industries, then i = 0.

[μlogμ] − Eρ

[μ]logEρ

[μ], where Eρ

i

i

i

i

are uniform; i.e., tji∗,k = t–i for all ji,k. Intuitively, in the absence of scale economies or profits, import tariffs cannot influence the producer price of imports on a good-by-good basis. At best, they can elicit a uniform reduction in import prices by deflating w−i relative to wi, which is best achieved via a uniform import tax rate.

- Section IV shows that in the absence of scale economies and markups, first-best optimal tariffs remain uniform even with input-output linkages.29


Special Case with Cobb-Douglas Preferences across Industries: To gain deeper intuition about Theorem 1, consider a special case where preferences areCobb-Douglas across industries. In that case, the formulas specified by Theorem 1 reduce to30

[domestic subsidy] 1 + s∗i,k = (1 + μk)(1 + s–i),

[import tax] 1 + t∗ji,k = (1 + ωji,k)(1 + t–i),

- (11) [export subsidy] 1 + x∗ij,k =

______________________(σk − 1)∑n≠i[(1 + ωni,k)λnj,k] 1 + (σk − 1)(1 − λij,k)

(1 + t–i).

Awell-known special case of the above formula is thesingle-industry × two-country formula in Gros (1987). To demonstrate this, drop the industry subscript k and reduce the global economy into two countries, i.e., C = {i,j}. Noting that 1 − λij = λjj in the two-country case, we can deduce from the above formulas that

_1 + tji∗ 1 + xij∗

= 1 + _1 (σ − 1)λjj

.

By the Lerner symmetry, export and import taxes are equivalent in thesingle-industry model.31 Hence, without loss of generality, we can set x∗ij = 0 and arrive at the familiar-looking optimal tariff formula in Gros (1987), i.e., tji∗ = 1/(σ − 1)λjj.

The Cobb-Douglas case of Theorem 1 is also a strict generalization of the formula derived concurrently by Bartelme et al. (2019) for a small open economy with multiple sectors. Specifically, enforcing the small open economy assumption—i.e., setting ωji,k ≈ λij,k ≈ 0; λjj,k ≈ 1—our optimal policy formulas in the Cobb-Douglas case reduce to

- (12) 1 + si∗,k = 1 + μk; t∗ji,k = 0; 1 + xij∗,k =


_σk − 1 σk .

- 29To be clear, these results hinge on the restriction that country i's policy does not influence aggregate relative wages in the rest of the world. This restriction holds trivially in the two-country case but requires internal cooperation in the rest of the world otherwise (see online Appendix G).
- 30In the Cobb-Douglas case, εnj(ij,,kk) = −σk1n=j + (σk − 1)λij,k and εnj(ij,,gk) = 0 if g ≠ k, which when plugged into the restricted entry case of equation (6), delivers


(1 − μ

__j μk)∑g rji,gρj,g

–

_________________________________________

ωji,k ≈

.

1 + ∑g∑ι≠i{1 − (1 − μ

μg)rjι,gρj,g[1 + (σg − 1)(1 − λjι,g)]}

–

__j

The parameterization of ωji,k under free entry can be derived similarly.

31The Lerner symmetry is a special case of the equivalence result presented under Lemma 1. Also, note that the decentralized equilibrium is efficient in the single industry Krugman model studied by Gros (1987). As such, the optimal industrial subsidy can also be normalized to zero, i.e., si∗ = 0.

Second-Best: Unilaterally Optimal Import Tariffs and Export Subsidies.Suppose the government in i ∈ C cannot use domestic subsidies due to say institutional barriers or political pressures. It is optimal, in that case, to use trade taxes as a second-best policy to restore allocative efficiency in the domestic economy. In this section, we derive analytic formulas for second-best optimal trade taxes in such circumstances. Country i's optimal policy problem, in this case, includes an added constraint that si = 0:

Wi(ti,xi,si;w) subject to {(ti,xi,si;w) ∈ 픽;

- (P2) max


si = 0.

(ti,xi,si;w)

Using the dual approach discussed earlier, we analytically solve Problem (P2) and derive sufficient statistics formulas for second-best optimal trade taxes. The following theorem presents these formulas, with a formal proof provided in online Appendix I.

- THEOREM 2: Suppose the government is unable (or unwilling) to apply domestic industrial subsidies. In that case, the second-best optimal import tariffs and export subsidies are unique up to a uniform tax shifter t–i ∈ 핉+ and are implicitly given by


_____1 + μk 1 + μ–i)k],

[import tariff] 1 + tji∗∗ = (1 + t–i)(1 + Ωji) ⊘ [1 + E−ii1E−(iiii)(1 −

_____1 + μk 1 + μ–i)k,

[export subsidy] 1 + xij∗∗ = −(1 + t–i)[Eij−1Eij(−ij)(1 + Ω−ii)] ⊙ (

where Ωji = [ωji,k]k is a vector of inverse export supply elasticities (equation (10)); μ–i denotes the output-weighted average markup in economy i (equation (5)); and

E−ii, E(−iiii), Eij, and Eij(−ij) are matrixes of Marshallian demand elasticities as defined under Definition (D1).32

- Theorem 2 asserts that, when governments cannot use industrial subsidies, the optimal export subsidy is adjusted to promote exports in high returns-to-scale (highμ) industries and the optimal import tax is adjusted to restrict import competition in high returns-to-scale (high-μ) industries. Intuitively, the government's objective when solving (P2) is to mimic Pigouvian industrial subsidies with trade taxes/subsidies. To reach this objective, import taxes and export subsidies should increase in high returns-to-scale industries relative to the first-best benchmark. While these adjustments elevate domestic production in high-μ industries, they are insufficient for obtaining the unilaterally first-best allocation.


32Letting N and K denote the number of countries and industries, e−ii ∼ E(−−iiii) = [Eni(ȷi)]n≠i,ȷ≠i is a square (N − 1)K × (N − 1)K matrix, where Eni(ȷi) ≡ [εni(ȷ,ik,g)]k,g as defined under Definition (D1). Likewise, Eij(−ij) = [Eij(nj)]n≠i and E−(iiii) = [Eni(ii)]n≠i are respectively, K × (N − 1)K and (N − 1)K × K matrixes. In all the equations, 1 ≡ 1(N−1)K×1 is a columns vector of ones. Meanwhile, Ω−ii = [ωni,k]n≠i,k is a (N − 1)K × 1 vector, and the operators ⊙ and ⊘ denote element-wise multiplication and division.

Special Case with Cobb-Douglas Preferences across Industries: We can invoke the Cobb-Douglas assumption to further elucidate the second-best tax formulas under Theorem 2. Under this assumption, there are zero cross-demand effects between industries, and the optimal policy formulas specified by Theorem 2 can be simplified as follows:

________________1 + (σk − 1)λii,k 1 + 1 + μ

(1 + tji∗,k),

[import tariff] 1 + t∗∗ji,k =

____i 1 + μk(σk − 1)λii,k

–

_____1 + μk 1 + μ–i (1 + x∗ij,k),

[export subsidy] 1 + x∗∗ij,k =

where 1 + t∗ji,k = (1 + ωji,k)(1 + t–i) and 1 + x∗ji,k = _________________(σk − 1)∑n≠i[(1 + ωni,k)λnj,k]

1 + (σk − 1)( − λij,k) (1 + t–i) denote the first-best optimal rate (equation (11)). For a small open economy, the formulas further reduce to

________________1 + (σk − 1)λii,k 1 + 1 + μ

(1 + t–i);

1 + t∗∗ji,k =

____i 1 + μk(σk − 1)λii,k

–

_____1 + μk 1 + μ–i (_σk − 1

σk )(1 + t–i).

1 + x∗∗ij,k =

In summary, the above formulas indicate that second-best import taxes are higher in industries with a greater-than-average markup and industries in which country i has a comparative advantage (i.e., high-(σk − 1)λii,k industries). These two properties allow second-best import taxes to mimic Pigouvian subsidies to the best extent possible. Likewise, second-best export subsidies feature a misallocation-correcting component that favors industries with a higher-than-average scale elasticity or markup.

Importantly, if the markup or scale elasticity is uniform across industries (i.e., μk = μ = μ–i), the above formulas yield the first-best or purely ToT-improving tax rate—i.e., tji∗∗,k = t∗ji,k and x∗∗ij,k = xij∗,k. The intuition is that the Krugman model without cross-industry markup heterogeneity is efficient, leaving no room for policy interventions to restore allocative efficiency.

Third-Best: Unilaterally Optimal Import Tariffs.—Now suppose that, in addition to restrictions on industrial subsidies, the use of export subsidies is also restricted. The government's optimal policy problem in this case features two additional constraints, si = xi = 0:

Wi(ti,xi,si;w) subject to {(ti,xi,si;w) ∈ 픽;

- (P3) max


si = xi = 0.

(ti,xi,si;w)

Some variation of the above problem has been studied by an expansive literature on optimal tariffs. However, nearly all existing studies are limited to partial equilibrium two-by-two models. Here, we use the same dual approach described earlier

to analytically solve Problem (P3) within our multicountry, multi-industry general equilibrium framework. Our derivation, as before, yields simple sufficient statistics formulas for optimal third-best import taxes. The following theorem presents these formulas, with a formal proof provided in online Appendix J.33

- THEOREM 3: Suppose the government is unable to apply domestic industrial subsidies or export subsidies. In that case, third-best optimal import tariffs are uniquely given by


_____1 + μk 1 + μ–i]k),

1 + tji∗∗∗ = (1 + τ–∗i)(1 + Ωji) ⊘ (1 + E−ii1E−(iiii)[1 −

−1

where τ–i∗ = [−∑g,s ∑j≠i χij,g(1 + ε(ijij,g,s))]

is a uniform tariff shifter that represents the elasticity of international demand for country i's labor (with χij,g ≡ Pij,gQij,g/∑n≠i Pin ⋅ Qin denoting export shares). μ–i denotes the output-weighted average markup in economy i as described by equation (5), and E−ii and E(−iiii) are matrixes of Marshallian demand elasticities as defined under Definition (D1).

Unlike Theorems 1 and 2, the third-best optimal tariff schedule identified by

- Theorem 3 is unique. That is because the multiplicity implied by Lemma 1 no longer applies when both export and industrial subsidies are restricted to zero. Nevertheless, the third-best tariff specified by Theorem 3 differs from the second-best tariffs (in Theorem 2) by only a uniform tariff shifter, 1 + τ–i∗. So, barring the uniform com-


ponent, 1 + τ–i∗, we can understand the above formula based on the same intuition provided under Theorem 2.

The uniform tariff component,1 + τ–i∗, compensates for the unavailability of export tax-cum-subsidies to the government. By the Lerner symmetry, which is implicit in Lemma 1, import taxes can perfectly mimic a uniform export tax. This ability was previously redundant (under Theorems 1 and 2) because export taxes/subsidies were directly applicable, and there was no point in using other instruments to mimic them. But since export taxes are restricted under Problem (P3), it is optimal to uniformly raise all tariffs by a factor 1 + τ–i∗, using them as a second-best substitute for optimal export taxes/subsidies.

III. Discussion: The Efficacy of Trade and Industrial Policy

This section, guided by Theorems 1–3, discusses the efficacy of trade and industrial policy in distorted open economies. We conjecture that stand-alone trade policy measures can be ineffective even when chosen optimally. Unilateral scale correction via industrial policy can also backfire, underscoring the importance of international coordination. We later test these conjectures by estimating model parameters and utilizing our optimal policy formulas.

33In the special case where entry is restricted and countries are sufficiently small, the optimal tariff formula presented under Theorem 4 reduces to the formula used by Lashkaripour (2021) to examine global tariff wars.

Tension between Allocative Efficiency and ToT: Theorems 2 and 3 reveal that second-best trade policies seek to strike a balance between (a) improving the terms of trade, which requires contracting exports in nationally differentiated (low-σ) industries, and (b) correcting misallocation, which requires expanding output in high returns-to-scale (high-μ) industries. Obtaining this balance becomes difficult if not impossible when cov(σk,μk) < 0—which is the empirically relevant case based on our forthcoming estimation. To navigate this tension, a welfare-maximizing government must tailor its (second-best) trade policy in a way that curtails the ToT gains without necessarily correcting misallocation. This balancing act erodes the gains from second-best trade policies and can even render them industry-blind—unable to beneficially correct interindustry misallocation or manipulate industry-specific export market power.34

The tension between allocative efficiency and ToT can be theoretically demonstrated for a local change in policy (see online Appendix L). But how this tension precisely modifies the ex ante gains from trade policy is an empirical matter. Our conjecture is that if industry-level trade and scale elasticities exhibit a strong negative correlation, the welfare gains from trade policy are limited—a claim we evaluate quantitatively in Section VI.

- CONJECTURE 1: If industry-level trade and scale elasticities exhibit a strong neg-


ative correlation (cov(σk,μk) ≪ 0), stand-alone trade policy measures deliver limited welfare gains even when set optimally.

A formal evaluation of this conjecture requires estimating model parameters, as performed in Sections V and VI. Nevertheless, we can numerically illustrate this point using artificial parameter values, as presented in Figure 1. The left panel demonstrates that the gains from second-best trade policies diminish rapidly as cov(σk,μk) is artificially lowered from positive to negative values. In each case, the trade elasticities are held constant, meaning that the scope for ToT gains remains the same. The only thing that changes is the tension between ToT and corrective gains from policy, which amplifies as cov(σk,μk) becomes more negative.35

Unilateral Scale Correction Can Cause Immiserizing Growth: The flip side of the noted tension is that if cov(σk,μk) < 0, unilateral implementation of scale-correcting Pigouvian subsidies worsens the ToT, resulting in possibly adverse welfare consequences. These arguments echo the immiserizing growth paradox in

34In the canonical Krugman (1980) model where μk = 1/(σk − 1), optimal (second-best) import tariffs and export subsidies are industry-blind for a small open economy. In particular, applying Theorem 2 to this special case yields

i)(1 − __1

i),

i; 1 + xij∗∗,k = (1 + t–

1 + t∗∗ji,k = 1 + t–

σ–

where t–i ∈ R is an arbitrary tax shifter and σ–i = (∑kρi,k/σk)−1 is the sales-weighted average trade elasticity facing country i. The optimal trade tax in each industry is evidently blind to misallocation (μk) or industry-specific export market power (σk)—reflecting the difficulty to reconcile these two policy considerations. All this policy choice can achieve is to improve country i's aggregate ToT by inflating its wage relative to the rest of the world.

35This tension is distinct from the targeting principle (Bhagwati and Ramaswami 1963), which applies irrespective of the sign of cov(σk,μk). Indeed, second-best trade taxes become more potent despite the targeting principle if cov(σk,μk) > 0; but we focus on the case where cov(σk,μk) < 0, as it aligns with our forthcoming estimation.

Gains from second-best trade policies

Consequences of unilateral scale/markup correction

| | | | | | | |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |


2.8

4

|Free entry<br><br>Restricted entry|
|---|


∆Percentwelfare

2

2.4

0

−2

2

−4

−0.6 −0.3 0 0.3 0.6

−0.6 −0.3 0 0.3 0.6

cov(σk, k) cov(σk, k)

Figure 1. Tension between ToT and Allocative Efficiency, When cov(σk,μk) < 0, Can Yield Dire Policy Outcomes

Notes: This figure corresponds to a two-country and two-industry model with symmetric countries and Cobb-Douglas preferences across industries. The left panel reports the gains from second-best trade taxes, specified by Theorem 2. The trade elasticities in industries 1 and 2 are assigned values σ1 = 1.5 and σ2 = 3, and scale elasticities are adjusted to vary cov(σk,μk). The right panel reports the welfare consequences of unilateral scale or markup correction. Industry-level scale elasticities are assigned values μ1 = 0.5 and μ2 = 0.2, and trade elasticities are adjusted to vary cov(σk,μk).

Bhagwati (1958) and follow a simple logic. If cov(σk,μk) < 0, scale-correcting Pigouvian subsidies expand domestic output in high-σ industries, which are nationally differentiated industries in which countries hold significant export market power. Elevating output and, thus, exports in these industries could worsen the ToT to the point of triggering immiserizing welfare effects.

Online Appendix L demonstrates theoretically that if cov(σk,μk) < 0, unilateral scale/markup correction worsens the ToT. But whether these adverse ToT effects outweigh the allocative efficiency gains from scale/markup correction is an empirical matter. We conjecture that if industry-level trade and scale elasticities exhibit a strong negative correlation, the adverse ToT effects from scale correction are large enough to cause immiserizing growth.

- CONJECTURE 2: If industry-level trade and scale elasticities exhibit a strong


negative correlation (cov(σk,μk) ≪ 0), unilateral scale (or markup) correction via industrial policy will likely worsen national welfare, echoing the immiserizing growth paradox.

We evaluate this conjecture with micro-estimated parameters in Section VI, but a numerical illustration with artificial parameter values is also provided in Figure 1(right panel). This figure is produced by fixing the degree of interindustry misallocation and artificially adjusting trade elasticities to vary cov(σk,μk) from positive to negative values. In regions where cov(σk,μk) < 0, a unilateral adoption of scale-correcting subsidies compromises welfare, causing immiserizing growth. These immiserizing consequences, as we discuss next, can be an obstacle for industrial policy implementation for countries committed to efficient trade policies under shallow agreements.

Table 2—The Industrial Policy Implementation Game Facing Cooperative Governments When cov(σk,μk) < 0

Country j (%ΔWj) sj = 0 sj = μ

|Country i (%ΔWi)<br><br>si = 0 si = μ|(0%,0%)|(3.7%, −1.2%)| |
|---|---|---|---|
| |(−1.2%,3.7%)|(2.7%,2.7%)| |


Notes: This table corresponds to a two-country and two-industry model with symmetric countries and CES preferences across industries with substitution elasticity 1.2. Industry-level trade elasticities are σ1 = 1.5 and σ2 = 3, and scale elasticities are μ1 = 0.2 and μ2 = 0.5, implying cov(σk,μk) ≈ −0.225. The unique Nash equilibrium is a race to the bottom, wherein si = sj = 0.

Industrial Policy Coordination via Deep Agreements: Immiserizing growth can be a major obstacle to industrial policy implementation in open economies. To convey this point, we adopt the common view that international negotiations involve two stages.36 In the first-stage, governments negotiate over policy space to ensure each party restricts itself to the globally efficient policy choice (equation (9)). In the second stage, governments negotiate a deeper agreement to ensure the implementation of efficient (misallocation-correcting) policies, with each country having the choice to either implement efficient policies or withhold implementation.

Table 2 illustrates the second-stage implementation game facing cooperative countries. The game involves two cooperative countries (i and j) that can take two actions: (i) implement scale-correcting Pigouvian subsidies, i.e., si = μ, or (ii) withhold implementation and stick to business as usual, i.e., si = 0. The efficient outcome is the implementation of Pigouvian subsidies in both countries, which will boost welfare by 2.7 percent across the board. But this outcome is not sustainable without formal coordination because each country has an incentive to free ride on the other country's implementation. The outcome of this game is a race to the bottom, wherein no party is willing to correct misallocation in domestic industries without violating its commitments to shallow cooperation (i.e., zero trade taxes).37 A deep agreement that ensures reciprocity in industrial policy implementation can remedy this problem.

In principle, the first-mover country can renegotiate their tariffs to nullify the adverse ToT effects of unilateral scale correction—for example, under Article XXVIII of the GATT. But these negotiations are costly, suggesting that governments might prefer to refrain from implementation and opt for free riding. Alternatively, countries may pair their industrial policy with hidden trade restric-

- 36Modeling international cooperation as a two-stage game consisting of enactment and implementation stages is commonplace in the global governance literature (Shaffer and Pollack 2009). In the trade and environmental policy literature, many studies treat international negotiations as multistage games where initial stages restrict policy choices and latter stages ensure implementation (e.g., Murdoch, Sandler, and Vijverberg 2003; Drazen and Limão 2008; Kosfeld, Okada, and Riedl 2009).
- 37We must emphasize that a race to the bottom will not occur if cov(σk,μk) ≥ 0. In that case, a unilateral adoption of corrective subsidies improves rather than deteriorates the terms of trade, making unilateral implementation a dominant strategy. We nevertheless maintain our focus on the case where cov(σk,μk) < 0 because it aligns with our forthcoming estimation of scale and trade elasticities.


tions, enabling them to avoid adverse ToT effects without incurring the administrative cost of tariff renegotiation. The Chinese government, for instance, has coupled its proactive industrial policy measures with hidden export taxes, which are applied via partial value-added tax rebates and enhance China's terms of trade (Garred 2018).

IV. Extensions and Application to Other Canonical Models

In this section, we first show that our theoretical results readily apply to two other canonical trade models. We then extend our baseline theoretical results to richer environments featuring input-output linkages and political economy pressures.

A. Application to Other Canonical Trade Models The optimal policy formulas specified by Theorems 1–3 apply to two other

canonical trade models. However, parameters σk and μk in these formulas adopt different interpretations, which reflects the different micro-foundation underlying these frameworks.

The Eaton-Kortum Model with Marshallian Externalities.—Consider a multi-industry Eaton and Kortum (2002) model where industry-level production is subject to agglomeration economies. Let ψk denote the constant agglomeration elasticity in industry k and θk denote the Eaton-Kortum Fréchet shape parameter. Theorem 1 characterizes the optimal policy in this model under the following reinterpretation of parameters: μkEK = ψk and σkEK = 1 + θk. The tension between the ToT and allocative efficiency manifests itself in this model if cov(ψk,θk) < 0. The fact that our theory readily extends to the Eaton-Kortum model echoes the isomorphism established in Kucheryavyy, Lyn, and Rodríguez-Clare (2023a). Online Appendix C shows that this isomorphism is even more profound. The nested-CES import demand function implied by (A1), we demonstrate, may analogously arise from within-industry specialization a la Eaton and Kortum.

The Melitz-Pareto Model.—Consider a multi-industry Melitz (2003) model that features the same nested-CES demand function specified by (A1). Suppose the firm-level productivity distribution is Pareto in each industry with a shape parameter, θk. Online Appendix D establishes that the Melitz-Pareto model is isomorphic to our baseline Krugman model insofar as macro-level representation is concerned. Hence, Theorem 1 characterizes the optimal policy in the Melitz-Pareto model under the following reinterpretation of parameters: μMelitzk = _____________γkθk

(γk − 1)(θk + 1) − θk − 1 if entry is restricted and μkMelitz = 1/θk if entry is free; and σkMelitz = 1 + θk[1 + θk(

−1

k − 1)]

_1 σk − 1 − _γ 1

. This mapping indi-

cates that we need to estimate parameter θk, in addition to σk and γk, to quantify the gains from policy under firm-selection effects—a procedure we formally undertake and elaborate on in Section VI.

B. Extension 1: Accounting for Input-Output Networks

Suppose production employs both labor and intermediate inputs, which are distinguished from final goods by superscript . Cost minimization entails that the producer price of good ij,k (origin i–destination j–industry k) depends on the wage rate in origin i and the price of all intermediate inputs, P̃i ≡ {P̃nj,k}, available to firms in origin i. Namely,

−_1+μkμ

- (13) Pij,k = ρ–ij,kCi,k(wi,P̃ i)i,k


,

k

where Ci,k( ⋅) is a homogeneous of degree one function with respect to wi and P̃i.38 The dependence of Pij,k on gross industry-level output, i,k ≡ ∑j∈C(a–ij,kQij,k), reflects scale economies under free entry. The formal definition of general equilibrium under input-output (IO) linkages is presented in online Appendix K. The same Appendix characterizes optimal policy using an augmented version of our dual approach that leverages additional supply-side envelope conditions. Our characterization reveals that the formulas for optimal industrial subsidies and import tariffs are IO-blind—i.e., they are similar to Theorem 1. There is a simple intuition for this result: although a tariff on imported inputs can influence prices in the rest of the world through reexportation, any potential ToT gains from tariff reexportation are already internalized by the government's optimal choice vis-à-vis export tax-cum-subsidies. Consistent with this intuition, the optimal export subsidy formula features an explicit adjustment for export subsidy reimportation via the IO network. The following theorem formalizes these results.

- THEOREM 4: Under IO linkages, the unilaterally first-best import tariffs and domestic subsidies are IO-blind; but first-best export subsidies exhibit an upward-adjustment that account for reimportation via the IO network. More formally, the unilaterally first-best policy schedule is given by


−1,

[domestic subsidy] 1 + si∗,k = (1 + μk)(1 + s–i)

[import tax] 1 + tji∗,k = (1 + ωji,k)(1 + t–i)(1 + s–i),

[export subsidy] 1 + xij∗ = −E−ij1[Eij(−ij)(1 + ti∗) + Λij(1 + t–i)(1 + s–i)],

where elements of Λij ≡ [Λij,k]k correspond to the fraction of good ij,k that is reimported and s–i is an arbitrary tax shifter that assumes a positive value if the taxed item is a final good and zero otherwise.39

- 38Without loss of generality, we assume that good ji,k can be used as either an intermediate input or a final consumption good, with taxes being applied on a good irrespective of the intended final use, i.e., P̃ij,k = P̃ij,k. This assumption is innocuous because we can fragment every industry k into a final good version k′ and an intermediate good version k′′. Since we do not impose any restrictions on the number of industries, our theory extends to the case where differential taxes are imposed on fragments k′ and k′′.
- 39If country i is a small open economy, Λij,k ≈ 0. Correspondingly, optimal policy formulas for a small open economy under IO linkages perfectly overlap with the baseline formulas specified under equation (12).


The above theorem indicates that the tax equivalent of export subsidies is relatively lower on intermediate inputs to mitigate export tax-reimportation via the IO network.40 Moreover, there is a uniform wedge between final and intermediate input taxes as represented by the final good tax shifter, s–i.41 This detail aside, the ToT-improving motive for policy still requires export contraction in low-σ industries, while the misallocation-correcting objective asks for output expansion in high-μ industries. So, unless intermediate inputs exhibit a systemically lower σ, our conjecture about the inefficacy of stand-alone trade policy measures withstands.42

C. Extension 2: Accounting for Political Economy Pressures

Suppose optimal policy choices internalize political economy pressures a la Ossa's (2014) adaptation of Grossman and Helpman (1994). That is, the government maximizes a politically weighted welfare function, Wi ≡ Vi(wiLi + i + ∑kπi,kΠi,k,P̃i), where πi,k is the political economy weight assigned to industry k's profits (with ∑k πi,k/K = 1). It follows trivially from Theorem 1 that the first-best policy in the political setup consists of the same trade tax/subsidy formulas but a politically adjusted industrial subsidy rate. Namely,

1 + s∗i,k = (1 + μi,k)(1 + s–i),

where μi,k = μk/[πi,k − (1 − πi,k)μk] is the political economy-adjusted markup of industry k. Considering the above formulas: if cov(πi,k,μk) < 0, the optimal policy may tax high-μ industries to the detriment of social welfare. In that case, even if cov(σk,μk) > 0, the misallocation-correcting and ToT motives for trade taxation will clash. However, if cov(πi,k,μk) ≥ 0, our conjecture about the inefficacy of stand-alone trade policy measures withstands.

V. Estimating the Key Policy Parameters

Based on our theory, policy evaluation in open economies requires credible estimates for industry-level trade elasticities, σk, and industry-level scale elasticities, μk ∼ 1/(γk − 1). The former governs the degree of national-level market power, while the latter regulates the extent of love for variety. The trade literature has paid considerable attention to estimating σk but less to estimating μk. The existing policy literature typically normalizes μk in one of two ways: (i) μk = 1/(σk − 1) in

40In the absence of scale economies or profits, ωji,k = 0. So, Theorem 1 posits that optimal import tariffs are uniform by choice of s–i = 0 in the multi-industry Armington and Eaton-Kortum models (see online Appendix M).

- 41Theorem 4 indicates that uniform markup pricing is not a necessary condition for efficiency. Consider, for

instance, a vertical production economy where goods are used as either final goods or intermediate inputs but not both. The efficient policy, in this setup, must restore uniform markup pricing within input and final good segments but not across—see Antràs et al. (2022) for further exploration of this issue.

- 42Theorem 4 offers insight into the structure of second-best import tariffs and export subsidies under IO link-


ages. Several papers, including Blanchard, Bown, and Johnson (2016); Beshkar and Lashkaripour (2020); Caliendo et al. (2021); and Antràs et al. (2022), examine in more detail how IO linkages impact third-best import tariff choices. Beshkar and Lashkaripour (2020), moreover, adopt a special case of Theorem 4, with Cobb-Douglas production and no scale economies, to examine the cost of trade wars.

imperfectly competitive models, and (ii) μk = 0 in perfectly competitive models.43 Both normalizations impose artificial restrictions on cov(μk,σk), which following the discussion in Section III, can bias the estimated gains from policy.

Against this backdrop, we seek to estimate σk and μk in a way that ascertains mutual consistency, giving us a credible assessment of cov(μk,σk). To this end, we propose a new methodology that simultaneously estimates σk and μk from the same data.44 Our approach involves fitting the structural firm-level import demand function implied by (A1) to the universe of Colombian import transactions from 2007 to 2013. We outline this approach below, starting with a description of the data used in our estimation.

Data Description.—Our estimation uses data on import transactions from the Colombian Customs Office during 2007–2013.45 The data include detailed information about each transaction, such as the Harmonized System 10-digit product category (HS10), country of origin, importing and exporting firm IDs, quantity, f.o.b. (free on board), and c.i.f. (customs, insurance, and freight) transaction values, freight, insurance, and value-added tax in US dollars. As a unique feature, our data report the identities of all foreign firms exporting to Colombia. This feature allows us to define import varieties as firm-product combinations rather than country-product combinations, which is the standard approach. Table N.1 (in the online Appendix) reports a summary of basic trade statistics in our data. Working with firm-level data presents two challenges. First, exporters are not identified by unique standardized IDs. Instead, they are identified by a name, a number, and an address. We handle this problem by standardizing the spelling and lengths of firms' names and using the information on firms' phone numbers (see online Appendix N). Second, Colombia changed the HS10 classification for some products between 2007 and 2013. Fortunately, the Colombian Statistical Agency, DANE, keeps track of these changes. We utilize this information to concord the Colombian HS10 codes over time, using the guidelines in Pierce and Schott (2012). Overall, changes in HS10 codes between 2007 and 2013 affect less than 0.1 percent of our data points.

A. Estimating Equation

Since we are focusing on one importer, we hereafter drop the importer's subscript i and add a year subscript t to account for the time dimension of our data. With this switch in notation, the demand facing firm ω located in country j and supplying product k in year t is given by

−σk

−γk

P̃j,kt

_p̃j,kt(ω) P̃j,kt ]

(

P̃kt )

- (14) qj,kt(ω) = φj,kt(ω)[


_

Qkt.

43See Ossa (2016) and Costinot and Rodríguez-Clare (2014) for a synthesis of the previous literature. Under

restricted entry, μk denotes the firm-level markup, which can be alternatively estimated with firm-level production data (e.g., De Loecker and Warzynski 2012; De Loecker et al. 2016).

- 44In the presence of firm-selection effects, our estimated parameters are necessary but not sufficient to pin down the trade and scale elasticities—see online Appendixes D and Y for details.
- 45The data are obtained from Datamyne, a company that specializes in documenting import and export transactions in the Americas. For more detail, please see www.datamyne.com. Our estimation also employs data on monthly average exchange rates, which are taken from the Bank of Canada (2017). A detailed description of all the datasets used in this paper is provided in online Appendix N.


Subscript k, in our theoretical model, designated industries. In our estimation, k denotes an HS10 product—the most disaggregated product classification in our data. The quadruplet "ωjkt" accordingly denotes a unique variety corresponding to firm ω–country of origin j–HS10 product k–year t. Let x̃(ω) ≡ p̃(ω)q(ω) denote gross sales. Rearranging equation (14) yields the following log-linear import demand function facing individual varieties:

- (15) lnx̃j,kt(ω) = (1 − σk)lnp̃j,kt(ω) + (1 −

_σk − 1 γk − 1)lnλj,kt(ω)

+ Dkt + lnφj,kt(ω), where Dkt ≡ lnPktσ

k

Qkt can be treated as a product-year fixed effect and λj,kt(ω) denotes the share of expenditure on firm ω conditional on buying good k from country of origin j,

λj,kt(ω) ≡ φj,kt(ω)[

_p̃j,kt(ω) P̃j,kt ]

1−γk

=

___________x̃j,kt(ω) ∑ω′∈Ω

j,kt

x̃j,kt(ω).

We assume that φjkt(ω) = φ–j,k(ω) × φωjkt can be decomposed into a time-invariant firm-and-product-specific quality component, φ–j,k(ω), and a time-varying component φωjkt that encompasses idiosyncratic variations in consumer taste, measurement errors, and/or omitted variables that account for dynamic demand optimization. To eliminate φ–j,k(ω) from the estimating equation, we employ a first-difference estimator, which also drops observations pertaining to one-time exporters. We deem the first-difference estimator appropriate given the possibility that φωjkt's are sequentially correlated. As a robustness check, we also report estimation results based on a two-way fixed effects estimator in online Appendix Q.46 Stated in terms of first-differences, our estimating equation takes the following form:

- (16) Δlnx̃j,kt(ω) = (1 − σk)Δlnp̃j,kt(ω) + (1 −


_σk − 1 γk − 1)Δlnλj,kt(ω)

+ ΔDkt + Δlnφωjkt,

where Δlnφωjkt, roughly speaking, represents a variety-specific demand shock and ΔDkt is a product-year fixed effect.47 Of the remaining variables, Δlnp̃j,kt(ω) and Δlnx̃j,kt(ω) are directly observable for each import variety. The change in the within-national market share, Δlnλj,kt(ω), can be calculated using the universe of firm-level sales to Colombia.

- 46Following Boehm, Levchenko, and Pandalai-Nayar (2020), the first-difference estimation offers a partial remedy for omitted variable bias and reverse causality. Both issues pose a serious challenge to traditional log-level estimations of import demand. Depending on the application, though, the first-difference estimator may not necessarily identify the desired long-run elasticity. As detailed in online Appendix Q, this limitation is less severe in our firm-level estimation—as we explicitly control for the extensive margin of trade. We illustrate this point formally in online Appendix Q by reestimating equation (15) in levels and comparing the estimation results to the baseline values.
- 47To handle outliers, we trim our sample to exclude observations that report a price change, Δlnp̃j,kt(ω), above the ninety-ninth percentile or below the first percentile of the HS10 product code k in year t.


Recovering Scale and Trade Elasticities from Demand Parameters.—Equation (16)

allows us to estimate demand parameters, σk and γk, from which we can recover the scale and trade elasticities as follows (see Section I for the underlying theoretical foundation):

μk = _1 γk − 1 ∼ scale elasticity, σk ∼ trade elasticity.

The reason we can infer μk from demand parameters is that the scale elasticity in the generalized Krugman model reflects the extent of love for variety—the social benefits of which are not internalized by firms' entry decisions. In the Melitz-Pareto case, we also need estimates for the shape of the Pareto productivity distribution (in addition to γk and σk) to recover the scale elasticity—see online Appendix P. Our estimation is, of course, unable to detect scale externalities unrelated to love for variety. These externalities can be estimated using techniques that leverage scale-related moments but under stronger assumptions about the variability of production inputs. We discuss the relative advantages of each technique in online Appendix R.48

Breaking the Sample into Broadly Defined Industries.—As noted earlier, k indexes an HS10 product category in equation (16). To conduct our forthcoming quantitative analysis, we must estimate demand parameters for 14 broadly defined industries based on the World Input-Output Database (WIOD) industry classification. Considering this, we pool all HS10 products belonging to the same WIOD industry  together and estimate equation (16) on this pooled sample assuming that σk and γk are uniform across products within the same industry (i.e., γk = γ and σk = σ for all k ∈ 핂). In principle, we can also estimate the import demand function separately for each HS10 product category to attain HS10-level elasticities. However, such elasticities will be of little use for quantitative policy analysis, as multicountry data on trade, production, and expenditure shares are scarce at such levels of disaggregation.

B. Identification Strategy

The identification challenge we face is thatΔlnp̃j,kt(ω) andΔlnλj,kt(ω) are endogenous variables that can covary with the demand shock, Δlnφωjkt.49 Traditional country-level import demand estimations overcome a similar challenge by instrumenting for prices with plausibly exogenous tariff rates.50 This strategy, however, does not suit our firm-level estimation because tariffs discriminate by country of origin but not across firms from the same country.

48In the restricted entry case, our demand estimation identifies the firm-level markup in each industry. Following an old tradition in the industrial organization literature, we assume that market conduct is monopolistic competition and recover firm-level markups as μk = 1/(γk − 1). Online Appendix W recovers markups under alternative market conduct assumptions.

- 49Another challenge is that unit price data may be contaminated with measurement errors, as they are aver-

aged across many transactions. Following Berry (1994), this type of measurement error is fairly innocuous when dealing with log-linear demand functions. Furthermore, our instrumental variable approach will handle measurement errors, provided that lagged monthly sales patterns are uncorrelated with concurrent measurement errors.

- 50A prominent example is Caliendo and Parro (2015), who use tariff data to identify the trade elasticity.


We employ a shift-share research design to overcome our firm-level identification challenge. Our approach is rooted in two data observations. First, a typical variety is imported under multiple invoices spread across different months in a given year. As a matter of accounting, the annual-level price of a variety is the quantity-weighted average of monthly prices. Namely, p̃j,kt(ω) = ∑m∈s̃j,kt(ω;m)p̃j,kt(ω;m), where m denotes month and s̃(ω;m) and p̃(ω;m) denote the quantity share and price associated with month m. Second, the month m price of an imported variety (in Colombian pesos) is equal to markup-plus-taxes × marginal input cost invoiced in local currency × exchange rate in month m. More formally, p̃j,kt(ω;m) = τj,kt(ω) × Cj,kt(ω) × jt(m), whereτ andC respectively denotemarkup-plus-tax and marginal cost, while jt(m) represents the exchange rate between originj's currency and the Colombian peso in month m of year t. To a first-order approximation, the annual change in variety-level prices in response to monthly exchange rate fluctuations can be specified as

Δlnp̃j,kt(ω) ≈ ∑

sj,kt(ω;m)Δlnjt(m),

m∈

where Δlnjt(m) denotes the year-over-year change in origin j's exchange rate with the Colombian peso in month m and sj,kt(ω;m) is the share of month m in variety ωjkt's annual export sales to Colombia:

____________x̃j,kt(ω;m) ∑m′∈x̃j,kt(ω;m′)∼ share of month m in annual export sales.

sj,kt(ω;m) =

Capitalizing on the above observation, we construct our shift-share instrument as the inner product of lagged monthly export shares and monthly exchange rate changes. Namely,

zj,kt(ω) = ∑

sj,kt−1(ω,m)Δlnjt(m).

m∈

Stated verbally, zj,kt(ω) measures exposure to exchange rate fluctuations at the firm × origin × product × year level. The idea being that aggregate exchange rate movements have differential effects on individual firms depending on the monthly composition of their prior export activity to Colombia.51 Encouragingly, the validity of our instrument is corroborated by the strong and statistically significant correlation between z and Δlnp̃. Online Appendix O illustrates this relationship visually using two US-based firms as an example.

Exclusion Restriction.—Our instrument utilizes lagged export shares, which depend on lagged prices and a set of market-level indexes—namely, sjkt−1(ω,m) = s(p̃jkt−1(ω,m); ...). Considering this, the exclusion restriction in our setup, E[zΔlnφ] = 0, rests on two conditions:

(C1) Prior price-setting decisions (and thus lagged export shares) are orthogonal

to concurrent demand shocks: E[p̃j,kt−1(ω)Δlnφωjkt] = 0.

51Leveraging exchange rate data to construct firm-level input cost shifters has also been explored by Piveteau and Smagghue (2019) and Amiti, Itskhoki, and Konings (2019).

(C2) Monthly national-level exchange rate shocks are orthogonal to variety-level

demand shocks: E[Δlnjt(m)Δlnφωjkt] = 0.

Since our sample features many firms and a finite number of months, Condition (C1) is sufficient for the consistency of our estimates (see Proposition 2.1 in Goldsmith-Pinkham, Sorkin, and Swift 2020). In fact, our two-stage least squares (2SLS) estimator is numerically equivalent to a generalized method of moments (GMM) estimator with lagged monthly export shares as instruments and a weight matrix constructed from monthly aggregate exchange rate shocks. Condition (C2), meanwhile, is more crucial for the finite sample properties of our estimator. Both conditions can, in principle, be violated if there are cross-inventory linkages or if individual export varieties account for a significant fraction of national exports to Colombia. We discuss and address these issues in Section D.

Instruments for Δlnλj,kt(ω).—Following Khandelwal (2010), we construct two standard instruments for the annual variation in the within-national market shares: (i) annual changes in the total number of origin j firms serving the Colombian market in product category k and (ii) changes in the total number of HS10 product categories actively served by firm ω in year t. These count measures will be correlated with Δlnλj,kt(ω) but uncorrelated with Δlnφωjkt if variety-level entry and exit occurs prior to, or independent of, the demand shock realization of competing varieties. As noted by Khandelwal (2010), this assumption is widely invoked when estimating discrete choice demands curves—see also Berry, Levinsohn, and Pakes (1995).52

C. Estimation Results

Table 3 reports our industry-level estimation results. We also report results corresponding to a pooled sample of all industries in Table S.1 of the online Appendix. The same table compares the 2SLS and OLS estimates to ensure that our IV strategy operates in the expected direction. Our estimates point to a median trade elasticity of σ − 1 = 3.9 and a median scale elasticity of μ ≈ 0.20. Our pooled estimation yields a heteroskedasticity-robust Kleibergen-Paap Wald rk F-statistic of 259, rejecting the null of weak instruments given the Stock-Yogo critical values. A similar albeit weaker outcome emerges from the industry-level estimation.

The industry-level elasticities reported in Table 3 display considerable variation across industries. The estimated scale elasticity or markup margin is highest in the "Electrical and Optical Equipment" (μ = 0.55) and "Petroleum" (μ = 1.2) industries; both of which are associated with high R&D or fixed costs. The estimated scale elasticity is lowest in "Agricultural and Mining" (μ = 0.14) and "Machinery" (μ = 0.12) industries. Furthermore, with the exception of "Agriculture and Mining," we cannot reject the prevalence of scale economies due to love for variety.53

- 52Border taxes tend to be a weak instrument for firm-level prices in our sample, but we include to comply with the past literature. These include applied ad valorem tariffs and the Colombian value-added tax (VAT). We exclude the VAT component in the "Transportation" and "Petroleum" industries since the VAT in these industries discriminates by the delivery method and level of luxury—both of which may be correlated with Δlnφωjkt.
- 53The finding that returns-to-scale are negligible in the agricultural sector aligns with a large body of evidence on the inverse farm-size productivity (IFSP) relationship—see Sen (1962) and subsequent references to IFSP.


Table 3—Industry-Level Estimation Results Estimated parameter

_σk − 1 γk − 1 μk Obs.

Weak Ident. Test Agriculture and Mining 100-1499 6.227 0.891 0.143 11,568 2.40

Sector ISIC4 codes σk − 1

(2.345) (0.148) (0.059) Food 1500-1699 2.303 0.905 0.393 19,615 6.27 (0.765) (0.046) (0.132) Textiles, Leather and Footwear 1700-1999 3.359 0.753 0.224 125,120 66.65

- (0.353) (0.022) (0.024)

Wood 2000-2099 3.896 0.891 0.229 5,872 1.41

- (1.855) (0.195) (0.120)


Paper 2100-2299 2.646 0.848 0.320 37,376 3.23 (1.106) (0.061) (0.136) Petroleum 2300-2399 0.636 0.776 1.220 3,973 2.83 (0.464) (0.119) (0.909) Chemicals 2400-2499 3.966 0.921 0.232 133,142 38.01

- (0.403) (0.025) (0.024)

Rubber and Plastic 2500-2599 5.157 0.721 0.140 106,398 7.16

- (1.176) (0.062) (0.034)


Minerals 2600-2699 5.283 0.881 0.167 27,952 3.53 (1.667) (0.108) (0.056) Basic and Fabricated Metals 2700-2899 3.004 0.627 0.209 153,102 20.39

- (0.484) (0.030) (0.035)

Machinery 2900-3099 7.750 0.927 0.120 263,797 12.01

- (1.330) (0.072) (0.023)


Electrical and Optical Equipment 3100-3399 1.235 0.682 0.552 257,775 26.27 (0.323) (0.017) (0.145) Transport Equipment 3400-3599 2.805 0.363 0.129 85,920 5.50

- (0.834) (0.036) (0.041)

N.E.C. and Recycling 3600-3800 6.169 0.938 0.152 70,264 11.57

- (1.012) (0.090) (0.029)


Notes: Estimation results of equation (16). Standard errors in parentheses. The estimation is conducted with HS10 product-year fixed effects. All standard errors are simultaneously clustered by product-year and by origin-product, which is akin to the correction proposed by Adao, Kolesár, and Morales (2019). The weak identification test statistics are the F-statistics from the Kleibergen-Paap Wald test for weak identification of all instrumented variables. The test for overidentification is not reported due to the pitfalls of the standard overidentification Sargan-Hansen J-test in the multidimensional large datasets pointed by Angrist, Imbens, and Rubin (1996).

Importantly, our estimates indicate that (σk − 1)/(γk − 1) ≠ 1 in nearly all industries. This finding rejects the arbitrary link often assumed between the firm-level and national-level degrees of market power in the literature. Our estimates also indicate that

cov(σk,μk) ≈ −0.65,

which corroborates the innate tension between the ToT-improving and misallocation-correcting objectives at the core of Conjectures 1 and 2.54

54Our trade elasticity estimates are one of the few based on firm-level data. Traditional estimates of σk are typically based on country-level data (e.g., Simonovska and Waugh 2014; Caliendo and Parro 2015).

D. Challenges to Identification

Our two conditions for identification, (C1) and (C2), can be contested under certain circumstances. Below, we discuss these issues and present additional evidence to address them.

Within-Cluster Correlation in Error Terms.—Adao, Kolesár, and Morales (2019) show that identification based on shift-share instruments exhibits an overrejection problem if regression errors are cross-correlated. In the context of our estimation, this problem will arise if demand shocks are correlated across firm-origin-product-year varieties with a similar monthly export composition. We adopt a conservative two-way clustering of standard errors by product-year and origin-product to handle this issue. Clustering standard errors in this manner is akin to the correction proposed by Adao, Kolesár, and Morales (2019).

Dynamic Cross-Inventory Effects.—Lagged inventory clearances can challenge our identifying assumptions on two fronts. First, firms' optimal pricing decisions may be forward-looking, violating Condition (C1). To address this concern, we reconstruct our shift-share instrument using four lags instead of one. If inventories clear in at most four years, we can deduce that pricing decisions do not internalize expected demand shocks beyond the four-year mark. Hence, E[p̃jkt−4(ω)Δlnφωjkt] = 0, and the new instrument will satisfy the exclusion restriction. The trade-off is that we lose observations, as the instrument is constructible for only firms that continuously export in the four different years. The top panel of Figure P.1 (in online Appendix P) compares estimation results under this alternative instrument to the baseline results. The new estimation preserves the ordering and magnitude of our estimated elasticities, retaining the sign of cov(σk,μk), which is pivotal for optimal policy outcomes.

Second, with cross-inventory linkages, Δlnφωjkt may encompass omitted variables that reflect firms' dynamic inventory management decisions. One of these omitted variables is presumably the exchange rate. If so, E[Δlnjt(m)Δlnφωjkt] ≠ 0, which violates Condition (C2). To address this concern, we reestimate equation (16) while directly controlling for the annual change in the exchange rate, Δlnjt. Even if changes in inventory-related demand depend on the changes in the exchange rate, we can still assert that E[zj,kt(ω)Δlnφωjkt ∣ Δlnjt] = 0—i.e., the exclusions restriction is satisfied with the added control, Δlnjt. The middle panel of Figure P.1 (in online Appendix P) compares estimation results from this alternative specification to the baseline results. Reassuringly, the new estimation preserves the ordering and magnitude of our estimated elasticities and the negative correlation between σk and μk.

Export Varieties with Significant Market Share.—Our identification can come under threat if individual varieties account for a significant fraction of a country's sales to Colombia. In such a case, variety-specific demand shocks can influence the bilateral exchange between the Colombian peso and the origin country's currency, thereby violating Condition (C2). This concern, however, does not apply to our sample of exporters. The variety with the highest ninety-ninth percentile within-national

market share accounts for only 0.1 percent of the origin country's total exports to Colombia. The variety with the highest ninetieth percentile within-national market share accounts for only 0.0008 percent of the origin country's total exports to Colombia.

One may remain concerned about large multiproduct firms that export multiple product varieties to Colombia in a given year. Consider, for instance, a multiproduct firm ω that exports goods k and g to Colombia in year t. If demand shocks are correlated across varieties supplied by this firm (i.e., E[Δlnφωjkt Δlnφωjgt] ≠ 0), Condition (C2) may be violated despite each variety's market share being infinitesimally small. To address this issue, we reestimate equation (16) on a restricted sample that drops excessively large firms with a total within-national market share that exceeds 0.1 percent. The bottom panel of Figure P.1 (in online Appendix P) compares estimation results from the trimmed sample to the baseline results. Encouragingly, the ordering and magnitude of the estimated elasticities are preserved across industries. The new estimation also retains the negative correlation between σk and μk.

E. Plausibility of Estimates and Limitations

We conclude this section by discussing the plausibility of our estimates. We do so by exploring their macro-level implications and comparing them to counterparts in the literature.

Plausibility from the Lens of Macro-Level Predictions.—Our scale elasticity estimates can be evaluated based on their prediction about the income-size elasticity. As pointed out by Ramondo, Rodríguez-Clare, and Saborío-Rodríguez (2016), the factual relationship between real per capita income and population size (i.e., the income-size elasticity) is negative and statistically insignificant. Quantitative trade models featuring the normalizationμ(σ − 1) = (σ − 1)/(γ − 1) = 1, however, predict a strong and positive income-size elasticity that remains significant even after the introduction of domestic trade frictions. Ramondo, Rodríguez-Clare, and Saborío-Rodríguez (2016) call this observation the income-size elasticity puzzle. Considering this puzzle, in online Appendix S we compute the income-size elasticity implied by our estimated value of (σ − 1)/(γ − 1) ≈ 0.67. Encouragingly, our estimated value for (σ − 1)/(γ − 1) completely resolves the aforementioned puzzle. In other words, our micro-estimated elasticities are consistent with the macro-level cross-national relationship between population size and real per capita income.

Comparison to Counterparts in the Literature.—Reassuringly, our estimates align closely with well-known industry-level case studies. Take, for example, our elasticity estimates for the "Petroleum" industry, which appear somewhat extreme. First, our estimate for σk aligns with the consensus in the Energy Economics literature that national-level demand for petroleum products is price-inelastic.55 Second, our estimated μk for the "Petroleum" industry closely resembles existing estimates

55See Pesaran, Smith, and Akiyama (1998) for specific estimates and Fattouh (2007) for a survey of this literature.

in the Industrial Organization literature. Considine (2001), for instance, estimates μ ≈ 1.15 using detailed data on the US petroleum industry. Moreover, our finding that the "Petroleum" industry is the most scale-intensive industry is consistent with the finding in Antweiler and Trefler (2002), which is based on more aggregated data. Likewise, consider the "Transportation" or auto industry, where our estimated μk = 0.13 implies an optimal markup of 13 percent. This estimate aligns with existing estimates from various industry-level studies. Recently, Cos ̧ar et al. (2018) have estimated markups for the auto industry that range between roughly 6 percent to 13 percent. Previously, Berry, Levinsohn, and Pakes (1995) have estimated markups of around 20 percent in the US auto industry using data from 1971 to 1990.

Limitations of Our Estimation Technique.—A potential limitation of our estimation technique is that we do not directly leverage scale-related moments in our estimation. The scale elasticity can be alternatively estimated using direct estimation techniques that leverage such moments, as reviewed in online Appendix R. These techniques have the advantage of detecting scale externalities unrelated to love for variety—albeit under additional assumptions about the variability of production inputs. While we are mindful of this limitation, we think our approach may be appropriate for policy evaluation in certain settings, as it separately identifies the trade elasticity from the scale elasticity, delivering credible estimates for cov(σk,μk).

VI. Quantifying the Consequences of Trade and Industrial Policy

This section uses our estimated values for μk and σk to quantify the ex ante gains from trade and industrial policy among many countries. We begin by describing the macro-level data needed to calibrate our quantitative model.

Trade, Production, and Tariff Data.—We take macro-level data on domestic and international production and expenditure from the 2014 World Input-Output Database (Timmer et al. 2015). This database spans 56 industries and 43 countries plus an aggregate of the rest of the world. The list of countries in the sample includes all 27 members of the European Union plus 16 other major economies—all of which are listed in Table 4. Following Costinot and Rodríguez-Clare (2014), we aggregate the 56 WIOD industries into 15 traded industries (for which we have estimated μk and σk) plus a service sector. Details for our industry aggregation are reported in Table U.1 of the online Appendix. Our baseline analysis normalizes μk = 0 and σk = 11 for all service-related industries. In online Appendix Y, however, we test the sensitivity of our results to alternative normalization choices. We also need to take a stance on applied tariffs and subsidies. We construct data on applied tariffs, tji,k, following the guidelines in Kucheryavyy, Lyn, and Rodríguez-Clare (2023b).56 International data on domestic and export subsidies are not as widely available.

56We follow Kucheryavyy, Lyn, and Rodríguez-Clare (2023b) to download the data from the UNCTAD Trade Analysis and Information System (TRAINS) and match it with WIOD. To make the data consistent with our theoretical model, we also purge them from trade imbalances following the procedure described in Costinot and Rodríguez-Clare (2014).

Table 4—The Gains from Noncooperative Policies and the Consequences of Retaliation Restricted entry Free entry

2nd-best trade tax

3rd-best import tax

Postretaliation 1st-best

2nd-best trade tax

3rd-best import tax

Postretaliation

Country 1st-best

- AUS 0.90% 0.21% 0.14% 0.83% 2.30% 0.58% 0.35% 2.85%
- AUT 1.31% 0.66% 0.45% −1.67% 2.12% 1.11% 0.58% −2.34% BEL 1.31% 0.69% 0.50% −3.07% 1.66% 0.90% 0.55% −4.13% BGR 2.01% 0.63% 0.52% 0.04% 5.48% 1.88% 0.83% 0.23% BRA 1.87% 0.23% 0.17% 0.93% 4.31% 0.64% 0.36% 3.21% CAN 1.72% 0.57% 0.45% 1.10% 3.42% 1.19% 0.46% 0.34% CHE 1.04% 0.56% 0.46% −0.92% 1.28% 0.76% 0.53% −1.26% CHN 1.76% 0.27% 0.24% 1.43% 3.70% 0.39% 0.28% 2.90% CYP 1.75% 0.68% 0.61% −4.20% 5.83% 1.56% 1.43% −10.88% CZE 1.68% 0.88% 0.54% −1.70% 2.86% 1.60% 0.73% −2.13% DEU 1.71% 0.78% 0.49% −0.37% 2.60% 1.34% 0.65% −0.10% DNK 1.22% 0.58% 0.48% −2.41% 1.94% 0.91% 0.49% −4.78% ESP 1.53% 0.52% 0.39% 0.15% 2.51% 1.03% 0.49% 0.29% EST 1.18% 0.62% 0.45% −4.86% 2.69% 1.42% 0.56% −7.90% FIN 1.40% 0.54% 0.25% −0.76% 2.00% 0.83% 0.47% −1.08% FRA 1.20% 0.45% 0.34% 0.78% 2.52% 1.10% 0.50% 0.01% GBR 1.09% 0.48% 0.42% 0.65% 2.10% 1.03% 0.58% 0.17% GRC 1.82% 0.59% 0.53% −0.20% 2.75% 1.08% 0.68% −0.04% HRV 1.03% 0.55% 0.45% −2.27% 1.79% 0.73% 0.52% −2.99% HUN 2.25% 1.06% 0.73% −2.85% 4.08% 2.28% 0.96% −3.33% IDN 2.00% 0.36% 0.26% −0.37% 4.81% 1.45% 0.50% 2.42% IND 1.81% 0.35% 0.31% 1.60% 4.20% 1.10% 0.37% 2.82% IRL 0.86% 0.68% 0.53% −2.07% 1.49% 0.89% 0.40% −3.32% ITA 1.50% 0.46% 0.26% 0.36% 2.75% 0.95% 0.48% 0.80% JPN 1.48% 0.32% 0.22% 0.31% 2.97% 0.75% 0.42% 1.55% KOR 2.12% 0.65% 0.49% 0.14% 4.37% 1.62% 0.73% 1.25% LTU 2.50% 0.93% 0.76% −1.38% 3.54% 1.26% 0.85% −2.47% LUX 0.93% 0.81% 0.78% −3.59% 1.52% 1.15% 1.01% −4.90% LVA 0.91% 0.54% 0.44% −4.26% 1.57% 0.80% 0.46% −4.85% MEX 2.24% 0.60% 0.44% 0.92% 4.96% 1.36% 0.76% 1.96% MLT 1.35% 0.92% 0.82% −3.75% 2.08% 1.39% 1.06% −4.81% NLD 1.35% 0.66% 0.54% −3.44% 1.95% 0.98% 0.59% −3.73% NOR 1.19% 0.40% 0.27% −0.74% 2.02% 0.81% 0.41% −0.33% POL 2.19% 0.76% 0.65% 0.26% 4.03% 1.62% 0.81% 0.80% PRT 2.04% 0.74% 0.65% 0.36% 3.92% 1.72% 0.80% 0.73% ROU 2.05% 0.77% 0.67% −0.42% 3.92% 1.72% 0.98% 1.15% RUS 2.39% 0.32% 0.27% 0.84% 5.25% 1.39% 0.37% 2.80% SVK 2.01% 1.06% 0.79% −2.17% 3.50% 2.09% 1.08% −2.73% SVN 1.42% 0.87% 0.67% −3.09% 1.35% 1.20% 0.90% −4.92% SWE 1.21% 0.62% 0.45% −0.95% 1.54% 0.77% 0.49% −1.48% TUR 1.43% 0.46% 0.32% −1.52% 3.52% 1.34% 0.61% −6.33% TWN 2.18% 0.69% 0.56% −0.94% 4.92% 1.85% 0.79% 0.81% USA 1.53% 0.32% 0.27% 0.69% 3.04% 0.80% 0.30% 2.15% Average 1.59% 0.60% 0.47% −1.23% 3.05% 1.19% 0.63% −1.20%


Notes: The data source is the 2014 World Input-Output Database (WIOD) (Timmer et al. 2015; WIOD 2021). The first-best policy is characterized by Theorem 1; second-best trade taxes are characterized by Theorem 2; and third-best import taxes are characterized by Theorem 3. Post-retaliation corresponds to a situation where the home country sets its first-best policies and the rest of the world retaliates.

Considering that these subsidy measures are generally prohibited by the WTO, we extrapolate that xij,k ≈ si,k ≈ 0.

A. Mapping Optimal Policy Formulas to Data

The formulas provided by Theorems 1–3 allow us to compute the maximal gains from policy without resorting to numerical optimization. This approach can be useful considering that numerical optimization routines (like Matlab's Fmincon) have well-known limitations when applied to nonlinear models with many free-moving variables. Our optimization-free procedure (a) specifies optimal tax/subsidy choices as a function of equilibrium variables (e.g., expenditure shares) using the formulas

provided by Theorems 1–3 and (b) specifies equilibrium variables as a function of optimal tax/subsidy choices based on equilibrium constraints. The system of equations implied by (a) and (b) is then jointly solved to compute welfare outcomes under optimal policy. Our method utilizes the exact hat-algebra technique whereby zˆ = z∗/z denotes the counterfactual change in a generic variable after implementing optimal policies. Our presentation here is focused on first-best policies under free entry. Online Appendix T demonstrates how the same approach can be applied to other optimal policy scenarios.

To map our theory to data, we must take a stance on the cross-industry utility aggregator, which we assume is Cobb-Douglas—i.e., Ui(Qi) = ∏kQie,k

i,k

. Under this parameterization, we need data on observable shares, national accounts, and applied taxes, which we denote by 픻 = {λji,k,rji,k,ei,k,ρi,k,Yi,wiLi,xij,k,tji,k,si,k}j,i,k.57 We also need estimates for the industry-level scale and trade elasticities, Θ = {σk,μk}, which were obtained in Section V.

As discussed under Theorem 1, country i's first-best optimal policy schedule in the Cobb-Douglas case is described by the following set of formulas:

1 + s∗i,k = 1 + μk; 1 + tji∗,k = 1 + ωji∗,k;

______________________(σk − 1)∑n≠i[(1 + ωni∗,g)λ∗nj,k] 1 + (σk − 1)(1 − λ∗ij,k) ,

1 + xij∗,k =

where superscript "∗" indicates that a variable is evaluated in the counterfactual optimal policy equilibrium. Using the hat-algebra notation and our expression for the good-specific supply elasticity, ωji,k (equation (10)), we can write the above formulas in changes as follows:58

[optimal import tax]

−_1 +μkμ

rˆji,krji,kΦ∗ji,k ________________________________________ 1 − _1 +μkμ

1 + tji∗,k =

k

,

∑ι≠i{rˆjι,krjι,k[1 + (σk − 1)(1 − λˆjι,kλjι,k)]}

k

[optimal export subsidy]

(σk − 1)∑n≠i[(1 + t∗ni,g)λˆnj,kλnj,k]

________________________

1 + xij∗,k =

,

1 + (σk − 1)(1 − λˆij,kλij,k)

- (17) [change in taxes]


_1 + t∗ji,k 1 + tji,k

_1 + xij∗,k 1 + xij,k

_1 + μk 1 + si,k

ˆ1 + si,k =

; ˆ1 + tji,k =

; ˆ1 + xij,k =

.

- 57As explained in Section I, under free entry, the number of firms operating in origin n–industry k can be expressed as Mi,k = m–i,kρi,k, where m–i,k is composed of parameters and variables that are invariant to policy. We can, therefore, use ρi,k to track scale economies that channel through entry—as detailed under equation (6).
- 58The multiplier Φji∗,k = 1 − (1 − _μ1


k)(σk − 1)∑ι≠i(

_rˆiι,kriι,k rˆji,krji,k λˆjι,kλjι,k)

_ρˆi,kρi,kwˆiwiLi ρˆj,kρj,kwˆjwjLj accounts for cross-demand

effects in foreign markets—see equation (10).

Since the rest of the world is passive in their use of taxes, ˆ1 + sn,k = ˆ1 + tjn,k = ˆ1 + xnj,k = 1 for all n ≠ i. To determine the change in expenditure shares, λˆji,k, we need to determine the change in consumer price indexes. Invoking the CES structure of within-industry demand, we can express the change in market i–industry k's consumer price index as

- (18) [price indexes] Pˆ̃

i,k = ∑

n∈C{λni,k[

________________ˆ1 + tni,k (ˆ1 + xni,k)(ˆ1 + sn,k)

wˆnρˆn−,kμ

k

]

1−σk

}

_1 1−σk

.

Recall that ρn,k = Ln,k/Ln denotes industry k's sales share in origin n, which—under free entry—is equal to the share of origin n's workers employed in that industry. The

above formulation uses the fact that, by free entry, Mˆ i,k = ρˆi,k. Given Pˆ̃

i,k, we can calculate the change in expenditure and revenue shares as follows:

[expenditure shares] λˆji,k = [

_______________ˆ1 + tji,k (ˆ1 + xji,k)(ˆ1 + sj,k)

wˆjρˆj−,kμ

k

]

1−σk

Pˆ̃

i,k

σk−1,

- (19) [revenue shares] rˆji,k = (

_1ˆ+ xji,k 1ˆ+ tji,k

λˆji,kYˆi)(∑

n∈C

rjn,k

_1ˆ+ xjn,k 1ˆ+ tjn,k

λˆjn,kYˆn)

−1

.

The change in the wage rate, wˆi, and industry-level sales shares, ρˆi,k, are dictated by the labor market clearing (LMC) condition, which ensures that industry-level sales match wage payments, industry by industry:

- (20) [LMC] ρˆi,kρi,kwˆiwiLi = ∑

j∈C[______________(1 + xij∗,k)(1 + s∗i,k)

1 + t∗ij,k

λˆij,kλij,kej,kYˆjYj];

∑

k∈핂

ρˆi,kρi,k = 1.

The change in national expenditure, Yˆi, is governed by the balanced budget (BB) condition, which ensures that total expenditure matches total income from wage payments and tax revenues:

- (21) [BB] YˆiYi = wˆiwiLi − ∑


(si,k

∗ λˆii,kλii,kei,kYˆiYi)

k∈핂

k∈핂[

_t∗ji,k 1 + t∗ji,k

### + ∑

∑

λji,kλˆji,kei,kYˆiYi

j≠i

_________________1 − (1 + x∗ij,k)(1 + si∗,k) 1 + t∗ij,k

λij,kλˆij,kej,kYˆjYj].

+

Equations (17)–(21) represent a system of 2N + NK + [2(N − 1) + 1]K independent equations and unknowns. The independent unknown variables

are wˆi (N unknowns), Yˆi (N unknowns), ρˆi,k (NK unknowns), ˆ1 + si,k (K unknowns), ˆ1 + tji,k ((N − 1)K unknowns), and ˆ1 + xij,k ((N − 1)K unknowns). Solving the aforementioned system is possible with information on observable data points, 픻, and estimated parameters, Θ ≡ {μk,σk}. Once we solve this system, the welfare consequences of country i's optimal policy are automatically determined. The following proposition outlines this result.59

PROPOSITION 1: Suppose we have data on observable shares, national accounts, and applied taxes, 픻 = {λji,k,rji,k,ei,k,ρi,k,Yi,wiLi,xij,k,tji,k,si,k}j,i,k, and information on structural parameters, Θ ≡ {μk,σk}. We can determine the economic consequences of country i's optimal policy by calculating 핏 = {Yˆi,wˆi,ρˆi,k,ˆ1 + si,k, 1ˆ+ tji,k,ˆ1 + xij,k} as the solution to the system of equations(17)–(21). After solving for 핏, we can fully determine the welfare consequence of country i's optimal policy as

Pˆ̃

ei,k, (∀n ∈ C), where Pˆ̃

Wˆ i = Yˆi/∏ k∈핂

i,k

i,k is determined by equation (18) as a function of 핏 and data, 픻.

To take stock, the optimization-free procedure described by Proposition 1 simplifies the task of computing the gains from first-best trade and industrial policies. We can use a similar procedure (based on Theorems 2 and 3) to compute the gains from second-best trade policies—see online Appendix T. Without Proposition 1, we would have to rely on numerical optimization to recover country i's optimal policy.60 As noted earlier, numerical optimization can become increasingly difficult to implement when dealing with many free-moving policy variables. Furthermore, in many instances, obtaining credible results from numerical optimization requires specialized commercial solvers like Snopt or Knitro. Propositions 1's optimization-free procedure allows us to bypass such complications, delivering notable gains in computational speed and accuracy.

B. The Consequences of Noncooperative Policies

Our first set of results elucidates policy consequences when governments act noncooperatively. These results convey two basic points. First, noncooperative trade taxes are ineffective at correcting misallocation in domestic industries—even without retaliation. Second, the cost of retaliation is sizable. Together these results point to little justification for noncooperative trade taxation even in second-best economies plagued with misallocation.

Table 4 reports the gains from optimal noncooperative policies under free and restricted entry. The first three columns in each case report welfare gains assuming the rest of the world does not retaliate. The fourth column reports net welfare effects after retaliation. The first-best noncooperative policy consists of Pigouvian

- 59Under Proposition 1, the optimal policy specification uses our approximation for ωji,k. In online Appendix V, we examine the accuracy of our approximation and outline how our optimization-free approach can be alternatively conducted with an exact formula for ωji,k.
- 60Such a problem is typically formulated as a Mathematical Programming with Equilibrium Constraints (MPEC) problem—see Ossa (2014) for further details.


subsidies, import tariffs, and export subsidies (Theorem 1); the second-best consists of only import tariffs and export subsidies (Theorem 2); the third-best consists of only import tariffs (Theorem 3).

We can draw two main conclusions from Table 4. First, trade taxes are a poor second-best substitute for Pigouvian subsidies. Trade taxes can replicate only 1/3 of the welfare gains attainable under the first-best policy that combines Pigouvian subsidies with trade taxes.61 Under free entry, the first-best noncooperative policy increases welfare by 3.05 percent on average, whereas second-best trade taxes/subsidies raise welfare by only 1.19 percent. Third-best import tariffs (not paired with export subsidies) are half as effective.

These results reflect the tension between the terms of trade and allocative efficiency emphasized in Section III. Since our estimated scale and trade elasticities satisfy cov(σk,μk) < 0, correcting interindustry misallocation with trade policy worsens the terms of trade—making it difficult for second-best trade policies to strike a balance between these two policy targets. We elucidate this point further in online Appendix W by artificially raising cov(σk,μk) and recomputing the gains from policy. The results displayed in Figure W.1 of the online Appendix point to a sharp rise in the efficacy of second-best trade taxes as cov(σk,μk) is artificially inflated.

Second, we find that retaliation more than wipes out the gains fromnoncooperative taxation. The net effect of noncooperative policies after retaliation is a welfare loss of 1.20 percent under free entry. Retaliation, in our calculation, occurs through the reciprocal adoption of optimal trade taxes by trading partners. As noted in Section III, the cost of retaliation may not deter a short-sighted government from erecting trade taxes—at least when trade taxes are a less politically controversial instrument for correcting misallocation. In such cases, our finding that trade policy is incapable of improving misallocation should serve as a deterrent.

C. The Gains from International Cooperation

Suppose governments recognize the danger of noncooperation and limit themselves to the cooperative policy outlined in Section II. As we show next, cooperative countries risk immiserizing growth if they take the lead in policy implementation. This issue can cause a race to the bottom in industrial policy implementation but can be resolved via a deep agreement.

The Immiserizing Effects of Unilateral Industrial Policy Implementation.Suppose countries limit themselves to the efficient policy consisting of zero trade taxes and scale-correcting industrial policies. Unilateral industrial policy implementation, under this arrangement, worsens the ToT and can lead to immiserizing growth (Conjecture 2). In this section, we show that these immiserizing welfare effects do, in fact, occur in most countries.

Table 5 reports the welfare consequences of unilateral and coordinated industrial policy implementation. The policy applied in each case is a set of scale- or

61This finding echoes the numerical result in Balistreri and Markusen (2009) that optimal tariffs yield smaller gains in the presence of positive firm-level markups.

Table 5—Immiserizing Effects of Noncoordinated Industrial Policies Restricted entry Free entry

Unilateral Coordinated Unilateral Coordinated Gains from corrective industrial policies −0.32% 1.67% −2.78% 3.42%

Notes: The data source is the 2014 World Input-Output Database (Timmer et al. 2015; WIOD 2021). The columns titled "Unilateral" report welfare gains when a country unilaterally adopts industrial subsidies that restore marginal cost pricing in the domestic economy. The columns titled "Coordinated" report welfare gains when all countries simultaneously adopt industrial subsidies that restore marginal cost pricing globally. The average gains are calculated as the simple average across all 43 countries in the WIOD sample. Country-level results are reported in online Appendix X.

markup-correcting industrial policies that restore marginal cost-pricing in the local economy. Unilateral implementation corresponds to a scenario where the home country implements its industrial policy but trading partners do not reciprocate and stick to business as usual. Coordinated implementation corresponds to a reciprocal implementation of industrial policies worldwide.

The results in Table 5 confirm the strong immiserizing growth effects of unilateral scale correction. Real income in the average country drops by more than 2.7 percent if corrective industrial policies are implemented unilaterally. By comparison, welfare increases by more than 3.4 percent under coordinated or reciprocal implementation. These results suggest that we may be witnessing a race to the bottom in industrial policy implementation—without a deep agreement to ensure reciprocity in implementation. As things stand, cooperative countries have two choices: (i) implement scale correction and risk immiserizing growth or (ii) violate their commitments to cooperation by pairing corrective subsidies with trade restrictions.

It is worth emphasizing that the immiserizing growth effects reported in Table 5 stem from the tension between misallocation and the terms of trade. Given that our estimated scale and trade elasticities satisfy cov(σk,μk) < 0, restoring allocative efficiency with Pigouvian subsidies worsens one's ToT, to the point of causing immiserizing growth. We confirm this point in online Appendix W by artificially raising cov(σk,μk) and recomputing the gains from unilateral scale (or markup) correction. As cov(σk,μk) is artificially inflated relative to its estimated value, immiserizing growth effects fade and are even reversed (see Figure W.2 of the online Appendix).

The Gains from Deep versus Shallow Cooperation.—Recall from Section III that we can model international cooperation as a two-stage process:

- (i) The first stage involves a shallow agreement that disciplines noncooperative trade taxes helping countries avert a full-fledged trade war.
- (ii) The second stage involves a deep agreement that ensures reciprocity in industrial policy implementation, helping countries avoid a race to the bottom.


Figure 2 reports the welfare gains associated with each stage. The blue bars correspond to the welfare gains brought by the existing nexus of shallow agreements. These gains are computed relative to a counterfactual equilibrium where all countries

AUS

AUT

BGR

BRA

CAN

CHE

CHN

CYP

CZE

DEU

DNK

ESP

EST

FRA

GBR

GRC

HRV

HUN

IDN

IND

ITA

JPN

KOR

LTU

LUX

LVA

MEX

MLT

NLD

NOR

POL

PRT

ROU

RUS

|Percent gains from shallow cooperation (realized)<br><br>| |
|---|
<br><br>Percent gains from deep cooperation (unrealized)|
|---|


SVK

SVN

SWE

TUR

TWN

USA

0 4 8 12

Figure 2. The Welfare Gains from Deep and Shallow Cooperation

Notes: The data source is the 2014 World Input-Output Database (Timmer et al. 2015; WIOD 2021). Welfare effects are computed under restricted entry. The gains from deep cooperation correspond to welfare gains when moving from the status quo to the globally efficient equilibrium in which all countries coordinate their corrective Pigouvian subsidies. The gains from shallow cooperation correspond to the avoided welfare losses when moving from the status quo to a noncooperative equilibrium where all countries adopt Nash trade taxes and subsidies.

adopt their noncooperative trade taxes. The red bars correspond to the prospective but unrealized welfare gains from deep cooperation. These gains are computed as the welfare gains associated with a universal implementation of (markup-correcting) industrial policies.62 As discussed earlier, a deep agreement is necessary to uncover these welfare gains.

The welfare gains from shallow cooperation are, on average, 3.2 percent. That is, the average country is poised to lose 3.2 percent of its real income if trade taxes are counterfactually raised to their noncooperative level everywhere. The existing nexus of shallow agreements have already materialized these gains. The prospective gains

62The gains from deep cooperation can be computed with the aid of the optimal policy formulas specified under equation (9) and the logic presented earlier in Section VIA.

from deep cooperation are 1.6 percent under restricted entry. That is, if countries can agree to a reciprocal implementation of markup-correcting industrial policies, they can boost their real income by an additional 1.6 percent. Similar but larger welfare gains will occur under free entry.

Our estimated gains from shallow cooperation relate to the theoretical arguments in Bagwell and Staiger (2001,2004). As explained earlier, shallow cooperation is sufficient for global efficiency if (i) cov(μk,σk) ≥ 0 or (ii) governments play a one-shot game where they simultaneously choose and implement their best-policy response with the belief that others do the same. Our micro-level estimation rejected the former condition. Exhaustive literature on the history of international policy coordination disputes the latter condition. If we suspect that governments move sequentially in the implementation stage and are not convinced about reciprocity in policy implementation, then deep cooperation is necessary for global efficiency.

A Stronger Case for International Cooperation.—The standard argument for international cooperation recognizes that governments can reap short-term gains if they adopt noncooperative trade taxes. But these short-term gains will turn into losses if trading partners retaliate. The standard argument may, thus, fail to deter a short-sighted government from taking the noncooperative route. After all, from the lens of traditional theories, the only way to reap short-term welfare gains (relative to the status quo) is to adopt noncooperative trade restrictions and hope for delayed retaliation.

Our quantitative analysis unveils a stronger augment for international cooperation. Starting from the status quo, a government seeking welfare improvements has two options: (i) engage in a coordinated industrial policy effort or (ii) raise noncooperative trade taxes to reap short-lived ToT benefits. We find that the former option not only delivers sustainable welfare gains but strictly dominates the latter option even before we adjust for the cost of retaliation.

This point is illustrated in Figure 3. The x-axis corresponds to the unrealized gains from deep cooperation. The y-axis corresponds to the maximal short-term gains from (noncooperative) unilateral policies, which transpire before retaliation. For most economies, the unrealized gains from deep cooperation dominate even the short-term gains from unilateral policy interventions. This finding indicates that the spillover gains from corrective policies in the rest of the world exceed the short-term ToT gains from noncooperative taxes—echoing our earlier claim that the ToT gains from policy are limited in scope, even before retaliation.63

D. Sensitivity Analysis

In online Appendix Y, we recalculate the gains from policy under several alternative specifications. First, we recompute the gains assuming that the data-generating process is aMelitz-Pareto model. Second, we recompute the gains based onalternative

63Interestingly, the gains from deep cooperation favor small countries that have a comparative disadvantage in high-returns-to-scale (or high-profit) industries, e.g., Estonia, Malta, and Slovenia. The intuition is that these countries depend relatively more on imported varieties in high-returns-to-scale industries and under deep cooperation, these industries are subsidized across the globe.

Maximal gains from unilateral policy

Restricted entry Free entry

8

- 0
- 1
- 2
- 3


6

RUS

HUN

MEX

POL SVKPRT ROU

TWN

MEX

TWN

KOR

IDN

BGR

IDN

KOR

BRA

BRA CAN

IND

GRC

IND

HUN

POLPRT ROU

DEUCZE CHN

4

CHN

TUR

ESP

SVK

USA

ITA JPN

CAN

TUR

SVN

FIN

NLD MLT

USA

AUT

JPN

CZE

DNK

SWE

ITA

FRA

GRC

NOR

EST

ESP EST

DEU

FRA GBR

GBR

CHE

HRV

AUT AUS

LUX

NOR NLD MLT

2

FIN

DNK

HRV

BEL

SWE

LUX

0

0 2 4 6 8

0 1 2 3

Prospective gains from deep cooperation

Prospective gains from deep cooperation

Figure 3. Deep Cooperation versus Unilateral Policy Interventions

Notes: The data source is the 2014 World Input-Output Database (Timmer et al. 2015; WIOD 2021). The gains from first-best noncooperative policy are the gains when each country implements the policy characterized by Theorem 1 and the rest of the world is passive. The gains from global cooperation correspond to a scenario where all countries forgo trade taxation and apply industrial subsidies that restore marginal cost pricing.

values for σk and μk, which are estimated via a two-ways fixed effects estimation (as reported in online Appendix Q). Lastly, we recompute the gains from policy under a

more conservative set of values assigned to μk and σk in services. In all cases, trade policy turns out to be a poor second-best instrument for resorting allocative efficiency. Another noteworthy observation is that accounting for firm-selection effects a la Melitz (2003) magnifies the gains from (first-best) optimal policies. However, these greater gains are primarily driven by the larger misallocation-correcting gains. If anything, second-best trade taxes/subsidies are even less effective at replicating the first-best policy gains in the presence of firm-selection into export markets.

What Parameter Values Would Imply Larger Gains from Policy?—We analyze this question in online Appendix Z, noting that the gains from optimal policy are increasing in two statistics: (i) the cross-industry variance of the scale elasticities, var(logμk), and (ii) the average of the (inverse) trade elasticities, E[1/(σk − 1)]. In online Appendix Z, we adjust our estimated parameter values to artificially increase both of these statistics and recompute the gains from policy under these artificial parameter values. The results are reported in Figure Z.1 of the same Appendix. They reveal that the gains from optimal policy nearly double for all countries if we artificially increase var(logμk) by a factor of about three. The policy gains for different countries, however, exhibit different degrees of sensitivity to an artificial increase in E[1/(σk − 1)]—with the gains for larger countries like the United States or China being noticeably less sensitive. The intuition is that var(logμk) governs the gains from correcting misallocation, whereas E[1/(σk − 1)] regulates the extent to which countries can improve their ToT. For large countries, where trade accounts

for a smaller fraction of the GDP, there is less scope for raising real GDP via ToT improvements—hence, the lower sensitivity of policy gains to E[1/(σk − 1)].

VII. Concluding Remarks

Correcting misallocation driven by economies of scale has often served as a justification for controversial trade and industrial policy practices. Yet we know surprisingly little about the efficacy of trade and industrial policy in increasing returns-to-scale industries. Against this backdrop, we employed micro-level trade data to examine the consequences of industry-level scale economies, offering insights into the effectiveness of various policy interventions. Our findings reveal that trade restrictions are a poor second-best policy choice for correcting misallocation in the domestic economy. Unilateral industrial policy measures can be equally ineffective, as they lead to immiserizing growth. Meanwhile, industrial policies coordinated internationally via deep agreements deliver welfare gains that are more transformative than any unilateral policy alternative.

The scale elasticity estimates obtained in this paper can be used for further exploration in several areas. First, our scale elasticity estimates can help disentangle the relative contribution of scale economies and Ricardian comparative advantage to intersectoral specialization. This is an old topic of interest, for which our empirical understanding is somewhat limited. Second, our estimates can perhaps shed fresh light on the puzzlingly large income gap between advanced and emerging economies. Economists have long hypothesized that a fraction of this income gap stems from specialization across low– and high returns-to-scale industries. Empirical assessments of this hypothesis have proven difficult due to a lack of comprehensive estimates for industry-level scale elasticities. Our micro-level estimates, however, can pave the way for such explorations. Finally, we document a negative cross-industry correlation between trade and scale elasticities. This relationship is crucial for policy evaluation in open economies, as it points to a tension between the terms of trade and allocative efficiency objectives. While our theoretical model is purposely agnostic about the origins of this negative relationship, further exploration into this matter is warranted.

REFERENCES

Adao, Rodrigo, Michal Kolesár, and Eduardo Morales. 2019. "Shift-Share Designs: Theory and

Inference." Quarterly Journal of Economics 134 (4): 1949–2010.

Aiginger, Karl, and Dani Rodrik. 2020. "Rebirth of Industrial Policy and an Agenda for the

Twenty-First Century." Journal of Industry, Competition and Trade 20 (2): 1–19.

Amiti, Mary, Oleg Itskhoki, and Jozef Konings. 2019. "International Shocks, Variable Markups, and

Domestic Prices." Review of Economic Studies 86 (6): 2356–2402.

Angrist, J., G. Imbens, and D. Rubin. 1996. "Identification of Causal Effects Using Instrumental

Variables." Journal of the American Statistical Association 91 (434): 444–55.

Antràs, Pol, Agustín Gutiérrez, Teresa C. Fort, and Felix Tintelnot. 2022. "Trade Policy and Global

Sourcing: A Rationale for Tariff Escalation." Unpublished.

Antweiler, Werner, and Daniel Trefler. 2002. "Increasing Returns and All That: A View from Trade."

American Economic Review 92 (1): 93–119.

Bagwell, Kyle, and Robert W. Staiger. 2001. "Domestic Policies, National Sovereignty, and Interna-

tional Economic Institutions." Quarterly Journal of Economics 116 (2): 519–62.

Bagwell, Kyle, and Robert W. Staiger. 2004. The Economics of the World Trading System. Cambridge,

MA: MIT Press.

Bagwell, Kyle, and Seung Hoon Lee. 2018. "Trade Policy under Monopolistic Competition with Firm

Selection." Unpublished.

Balistreri, Edward J., and James R. Markusen. 2009. "Sub-National Differentiation and the Role of

the Firm in Optimal International Pricing." Economic Modelling 26 (1): 47–62.

Bank of Canada. 2017. "Exchange Rates: Historical Noon and Closing Rates." https://www.bankof-

canada.ca/rates/exchange/legacy-noon-and-closing-rates/

Baqaee, David, and Emmanuel Farhi. 2019. "Networks, Barriers, and Trade." NBER Working Paper

26108.

Bartelme, Dominick, Arnaud Costinot, Dave Donaldson, and Andres Rodriguez-Clare. 2019. "The

Textbook Case for Industrial Policy: Theory Meets Data." Unpublished.

Berry, Steven, James Levinsohn, and Ariel Pakes. 1995. "Automobile Prices in Market Equilibrium."

Econometrica 63 (4): 841–90.

Berry, Steven T. 1994. "Estimating Discrete-Choice Models of Product Differentiation." RAND

Journal of Economics 25 (2): 242–62.

- Beshkar, Mostafa, and Ahmad Lashkaripour. 2019. "Interdependence of Trade Policies in General Equilibrium." Unpublished.
- Beshkar, Mostafa, and Ahmad Lashkaripour. 2020. "The Cost of Dissolving the WTO: The Role of Global Value Chains." Unpublished.


Bhagwati, Jagdish. 1958. "Immiserizing Growth: A Geometrical Note." Review of Economic Studies

25 (3): 201–205.

Bhagwati, Jagdish, and Vangal K. Ramaswami. 1963. "Domestic Distortions, Tariffs and the Theory

of Optimum Subsidy." Journal of Political Economy 71 (1): 44–50. Bhagwati, Jagdish N. 1988. Protectionism. Cambridge, MA: MIT Press. Blanchard, Emily J., Chad P. Bown, and Robert C. Johnson. 2016. "Global Supply Chains and Trade

Policy." NBER Working Paper 21883.

Boehm, Christoph E., Andrei A. Levchenko, and Nitya Pandalai-Nayar. 2020. "The Long and Short

(Run) of Trade Elasticities." NBER Working Paper 27064.

Caliendo, Lorenzo, and Fernando Parro. 2015. "Estimates of the Trade and Welfare Effects of

NAFTA." Review of Economic Studies 82 (1): 1–44.

Caliendo, Lorenzo, Robert C. Feenstra, John Romalis, and Alan M. Taylor. 2015. "Tariff Reductions, Entry, and Welfare: Theory and Evidence for the Last Two Decades." NBER Working Paper 21768. Caliendo, Lorenzo, Robert C. Feenstra, John Romalis, and Alan M. Taylor. 2021. "A Second-best

Argument for Low Optimal Tariffs." NBER Working Paper 28380.

Campolmi, Alessia, Harald Fadinger, and Chiara Forlati. 2014. "Trade Policy: Home Market Effect

versus Terms-of-Trade Externality." Journal of International Economics 93 (1): 92–107.

Campolmi, Alessia, Harald Fadinger, and Chiara Forlati. 2018. "Trade and Domestic Policies in

Models with Monopolistic Competition." Unpublished.

Chaney, Thomas. 2008. "Distorted Gravity: The Intensive and Extensive Margins of International

Trade." American Economic Review 98 (4): 1707–21.

Considine, Timothy J. 2001. "Markup Pricing in Petroleum Refining: A Multiproduct Framework."

International Journal of Industrial Organization 19 (10): 1499–1526.

Co ̧sar, A. Kerem, Paul L. E. Grieco, Shengyu Li, and Felix Tintelnot. 2018. "What Drives Home

Market Advantage?" Journal of International Economics 110: 135–50.

Costinot, Arnaud, and Andrés Rodríguez-Clare. 2014. "Trade Theory with Numbers: Quantifying the Consequences of Globalization." In Handbook of International Economics, Vol. 4, edited by Gita Gopinath, Elhanan Helpman, and Kenneth Rogoff, 197–261. Amsterdam: Elsevier.

Costinot, Arnaud, and Iván Werning. 2019. "Lerner Symmetry: A Modern Treatment." American

Economic Review: Insights 1 (1): 13–26.

Costinot, Arnaud, Andrés Rodríguez-Clare, and Iván Werning. 2016. "Micro to Macro: Optimal Trade

Policy with Firm Heterogeneity." NBER Working Paper 21989.

Costinot, Arnaud, Dave Donaldson, Jonathan Vogel, and Iván Werning. 2015. "Comparative Advan-

tage and Optimal Trade Policy." Quarterly Journal of Economics 130 (2): 659–702.

DATAMYNE Inc. "International Database." https://www.datamyne.com (accessed between May 8th of

2014 and November 8th of 2016).

De Blas, Beatriz, and Katheryn N. Russ. 2015. "Understanding Markups in the Open Economy."

American Economic Journal: Macroeconomics 7 (2): 157–80.

De Loecker, Jan, and Frederic Warzynski. 2012. "Markups and Firm-Level Export Status." American

Economic Review 102 (6): 2437–71.

De Loecker, Jan, Pinelopi K. Goldberg, Amit K. Khandelwal, and Nina Pavcnik. 2016. "Prices,

Markups, and Trade Reform." Econometrica 84 (2): 445–510.

Demidova, Svetlana. 2017. "Trade Policies, Firm Heterogeneity, and Variable Markups." Journal of

International Economics 108: 260–73.

Demidova, Svetlana, and Andres Rodriguez-Clare. 2009. "Trade Policy under Firm-Level Heterogene-

ity in a Small Economy." Journal of International Economics 78 (1): 100–112.

Dhingra, Swati, and John Morrow. 2019. "Monopolistic Competition and Optimum Product Diversity

under Firm Heterogeneity." Journal of Political Economy 127 (1): 196–232.

Dixit, Avinash, and Victor Norman. 1980. Theory of International Trade: A Dual, General Equilibrium

Approach. Cambridge, UK: Cambridge University Press.

Drazen, Allan, and Nuno Limão. 2008. "A Bargaining Theory of Inefficient Redistribution Policies."

International Economic Review 49 (2): 621–57.

Eaton, Jonathan, and Samuel Kortum. 2002. "Technology, Geography, and Trade." Econometrica

70 (5): 1741–79.

Edmond, Chris, Virgiliu Midrigan, and Daniel Yi Xu. 2015. "Competition, Markups, and the Gains

from International Trade." American Economic Review 105 (10): 3183–3221.

Farrokhi, Farid, and Ahmad Lashkaripour. 2021. "Can Trade Policy Mitigate Climate Change?"

Unpublished.

Fattouh, Bassam. 2007. The Drivers of Oil Prices: The Usefulness and Limitations of Non-Structural Model, the Demand-Supply Framework and Informal Approaches. Oxford, UK: Oxford Institute for Energy Studies.

Felbermayr, Gabriel, Benjamin Jung, and Mario Larch. 2013. "Optimal Tariffs, Retaliation, and the Welfare Loss from Tariff Wars in the Melitz Model." Journal of International Economics 89 (1): 13–25.

Garred, Jason. 2018. "The Persistence of Trade Policy in China after WTO Accession." Journal of

International Economics 114: 130–42.

Goldsmith-Pinkham, Paul, Isaac Sorkin, and Henry Swift. 2020. "Bartik Instruments: What, When,

Why, and How." American Economic Review 110 (8): 2586–2624.

Gros, Daniel. 1987. "A Note on the Optimal Tariff, Retaliation and the Welfare Loss from Tariff Wars in a Framework with Intra-Industry Trade." Journal of International Economics 23 (3–4): 357–67. Grossman, Gene, and Elhanan Helpman. 1994. "Protection for Sale." American Economic Review

84 (4): 833–50.

Haaland, Jan I., and Anthony J. Venables. 2016. "Optimal Trade Policy with Monopolistic Competi-

tion and Heterogeneous Firms." Journal of International Economics 102: 85–95.

Harrison, Ann, and Andrés Rodríguez-Clare. 2010. "Trade, Foreign Investment, and Industrial Policy for Developing Countries." In Handbook of Development Economics, Vol. 5, edited by Dani Rodrik and Mark Rosenzweig, 4039–4214. Amsterdam: Elsevier.

Hicks, John R. 1939. "The Foundations of Welfare Economics." Economic Journal 49 (196): 696–712. Irwin, Douglas A. 2017. Clashing over Commerce: A History of US Trade Policy. Chicago: University

of Chicago Press.

Kaldor, Nicholas. 1939. "Welfare Propositions of Economics and Interpersonal Comparisons of

Utility." Economic Journal 49 (195): 549–52.

Khandelwal, Amit. 2010. "The Long and Short (of) Quality Ladders." Review of Economic Studies

77 (4): 1450–76.

Kosfeld, Michael, Akira Okada, and Arno Riedl. 2009. "Institution Formation in Public Goods Games."

American Economic Review 99 (4): 1335–55.

Krugman, Paul. 1980. "Scale Economies, Product Differentiation, and the Pattern of Trade." American

Economic Review 70 (5): 950–59.

- Kucheryavyy, Konstantin, Gary Lyn, and Andrés Rodríguez-Clare. 2023a. "Grounded by Gravity: A Well-Behaved Trade Model with Industry-Level Economies of Scale." American Economic Journal: Macroeconomics 15 (2): 372–412.
- Kucheryavyy, Konstantin, Gary Lyn, and Andrés Rodríguez-Clare. 2023b."Replication data for: Grounded by Gravity: A Well-Behaved Trade Model with Industry-Level Economies of Scale." American Economic Association [publisher], Inter-university Consortium for Political and Social Research [distributor]. https://doi.org/10.1257/mac.20190156


Lane, Nathaniel. 2020. "The New Empirics of Industrial Policy." Journal of Industry, Competition and

Trade 20 (2): 209–34.

Lashkaripour, Ahmad. 2021. "The Cost of a Global Tariff War: A Sufficient Statistics Approach."

Journal of International Economics 131: 103419.

Lerner, Abba P. 1934. "The Concept of Monopoly and the Measurement of Monopoly Power." Review

of Economic Studies 1 (3): 157–75. Lerner, Abba P. 1936. "The Symmetry Between Import and Export Taxes." Economica 3 (11): 306–13. Matsuyama, Kiminori. 2008. "A General Theory of Competitive Trade." Unpublished.

Melitz, Marc. 2003. "The Impact of Trade on Aggregate Industry Productivity and Intra-Industry

Reallocations." Econometrica 71 (6): 1695–1725.

Murdoch, James C., Todd Sandler, and Wim P. M. Vijverberg. 2003. "The Participation Decision versus the Level of Participation in an Environmental Treaty: A Spatial Probit Analysis." Journal of Public Economics 87 (2): 337–62.

Ossa, Ralph. 2011. "A "New Trade" Theory of GATT/WTO Negotiations." Journal of Political Econ-

omy 119 (1): 122–52.

Ossa, Ralph. 2014. "Trade Wars and Trade Talks with Data." American Economic Review 104

(12): 4104–46.

Ossa, Ralph. 2016. "Quantitative Models of Commercial Policy." In Handbook of Commercial Policy,

Vol. 1, edited by Kyle Bagwell and Robert W. Staiger, 207–59. Amsterdam: Elsevier.

Pesaran, M. Hashem, Ron P. Smith, and Takamasa Akiyama. 1998. Energy Demand in Asian Devel-

oping Economies. Oxford, UK: Oxford University Press.

Pierce, Justin R., and Peter K. Schott. 2012. "Concording U.S. Harmonized System Codes over Time."

Journal of Official Statistics 28 (1): 53–68.

Piveteau, Paul, and Gabriel Smagghue. 2019. "Estimating Firm Product Quality using Trade Data."

Journal of International Economics 118: 217–32.

Ramondo, Natalia, Andrés Rodríguez-Clare, and Milagro Saborío-Rodríguez. 2016. "Trade, Domestic

Frictions, and Scale Effects." American Economic Review 106 (10): 3159–84. Samuelson, Paul Anthony. 1948. "Foundations of Economic Analysis." Science and Society 13 (1). Sen, Amartya K. 1962. "An Aspect of Indian Agriculture." Economic Weekly 14 (4–6): 243–46. Shaffer, Gregory C., and Mark A. Pollack. 2009. "Hard vs. Soft Law: Alternatives, Complements, and

Antagonists in International Governance." Minnesota Law Review 94: 706–99.

Simonovska, Ina, and Michael E. Waugh. 2014. "The Elasticity of Trade: Estimates and Evidence."

Journal of International Economics 92 (1): 34–50.

Spearot, Alan. 2016. "Unpacking the Long-Run Effects of Tariff Shocks: New Structural Implications

from Firm Heterogeneity Models." American Economic Journal: Microeconomics 8 (2): 128–67.

Timmer, Marcel P., Erik Dietzenbacher, Bart Los, Robert Stehrer, and Gaaitzen J. De Vries. 2015. "An Illustrated User Guide to the World Input–Output Database: The Case of Global Automotive Production." Review of International Economics 23 (3): 575–605.

Venables, Anthony J. 1987. "Trade and Trade Policy with Differentiated Products: A Chamberlin-

ian-Ricardian Model." Economic Journal 97 (387): 700–717.

WIOD, 2021, "World Input-Output Database 2016 Release, 2000-2014," Groningen Growth and

Development Centre [distributor]. https://doi.org/10.34894/PJ2M1C, DataverseNL, V2.

Wu, Michael, Bei Yin, Aida Vosoughi, Christoph Studer, Joseph R. Cavallaro, and Chris Dick. 2013. "Approximate Matrix Inversion for High-Throughput Data Detection in the Large-Scale MIMO Uplink." In 2013 IEEE International Symposium on Circuits and Systems, 2155–58. New York, NY: IEEE.
