[paper.md](https://github.com/user-attachments/files/31618054/paper.md)
---
title: >-
  Predicting Academic Burnout in Secondary School and Undergraduate Students
  Using Explainable Machine Learning: The Roles of Academic Stress, Psychological
  Distress, Self-Efficacy, and Social Support
author: Ishaanvi Dhariwal
date: 2026-06-25
status: Independent student research manuscript. Not peer reviewed.
---

# Predicting Academic Burnout in Secondary School and Undergraduate Students Using Explainable Machine Learning

**The Roles of Academic Stress, Psychological Distress, Self-Efficacy, and Social Support**

Ishaanvi Dhariwal · 25 June 2026
Submitted in partial fulfilment of the requirements for independent student research.

---

## Abstract

Academic burnout has emerged as a significant and growing concern among secondary school and
undergraduate students, particularly within competitive educational environments characterised by
high performance expectations, examination pressure, and achievement-oriented cultures.
Conceptualised as a multidimensional syndrome encompassing emotional exhaustion, cynicism toward
academic activities, and diminished academic efficacy, burnout has been consistently associated
with reduced academic performance, decreased motivation, and impaired psychological well-being.
While substantial prior research has established significant relationships between academic stress,
anxiety, self-efficacy, and burnout, the existing literature relies predominantly on explanatory
statistical models that offer limited predictive capability for identifying at-risk students before
consequences become severe.

The present study developed and evaluated machine learning models for predicting academic burnout
among secondary school (Grades 9–12) and first-year undergraduate students in India. Survey data
were collected from 321 students measuring academic stress, psychological distress, self-efficacy,
social support, sleep patterns, and screen time. Four machine learning classifiers — Logistic
Regression, Support Vector Machine (SVM), Random Forest, and Extreme Gradient Boosting (XGBoost) —
were trained and compared using five-fold stratified cross-validation, with performance evaluated on
accuracy, precision, recall, F1-score, and ROC-AUC. SHAP (SHapley Additive exPlanations) analysis
was employed to ensure model interpretability and to quantify the contribution of each predictor to
burnout classification.

The Random Forest model achieved the highest performance (Accuracy = 97.5%, F1 = 0.977, ROC-AUC =
0.998), with XGBoost performing comparably (Accuracy = 96.3%, ROC-AUC = 0.994). SHAP analysis
identified psychological distress as the dominant predictor of burnout (Mean |SHAP| = 0.231),
followed by social support (0.163) and self-efficacy (0.110) as significant protective factors,
with academic stress demonstrating the weakest unique contribution (0.056) when all predictors were
modelled simultaneously. Multiple linear regression confirmed that distress (B = 0.356, p < .001),
self-efficacy (B = −0.308, p < .001), and social support (B = −0.314, p < .001) each independently
predicted burnout, collectively explaining 58.3% of variance (R² = .583). These findings underscore
the importance of both risk and protective factors in burnout development and demonstrate that
machine learning combined with explainable AI offers a promising framework for the early
identification of at-risk students.

**Keywords:** academic burnout, secondary school students, undergraduate students, psychological
distress, self-efficacy, social support, machine learning, SHAP, explainable artificial
intelligence, India.

---

## 1. Introduction

The academic experiences of secondary school and undergraduate students have undergone considerable
transformation in recent decades. Expanding competition for university admissions, the proliferation
of high-stakes examinations, and intensifying societal expectations surrounding academic achievement
have collectively produced educational environments characterised by sustained and often relentless
performance pressure. While aspirations of academic excellence serve important developmental and
institutional functions, a growing body of evidence indicates that prolonged exposure to these
pressures exacts a substantial psychological toll. Across diverse educational systems and cultural
contexts, students report elevated levels of academic stress, anxiety, emotional exhaustion, and
disengagement from their studies — a constellation of symptoms increasingly recognised as indicative
of academic burnout (Maslach & Jackson, 1981; Walburg, 2014; Gao et al., 2023).

Academic burnout, adapted from the occupational burnout framework originally conceptualised by
Maslach and Jackson (1981), is defined as a state of chronic emotional exhaustion, cynicism toward
academic responsibilities, and a diminished sense of academic competence resulting from sustained
engagement with demanding educational environments. Although burnout was first systematically
studied in professional helping contexts, subsequent decades of scholarship have firmly established
its relevance and prevalence within student populations at both secondary and tertiary levels.
Studies conducted across a wide range of educational settings have found that significant proportions
of students experience clinically meaningful burnout symptoms, with particular vulnerability
observed during critical academic transitions — including the transition from secondary school to
university — when performance demands, identity challenges, and social disruptions frequently
converge (Bask & Salmela-Aro, 2013; Schaufeli et al., 2002).

The consequences of academic burnout extend considerably beyond immediate academic performance
deficits. Burnout has been associated with reduced intrinsic motivation, academic disengagement,
poorer examination outcomes, and heightened susceptibility to psychological difficulties including
depression, anxiety disorders, and chronic stress (Walburg, 2014). Among undergraduate students,
burnout has been linked to increased dropout intentions, diminished career preparedness, and
impaired social functioning. Burnout developed during secondary school may, moreover, have lasting
implications for educational trajectories and psychological well-being in early adulthood. These
wide-ranging consequences render the early identification of students at elevated risk of burnout
not merely an educational concern, but a meaningful public health imperative.

Among the psychological variables most consistently associated with academic burnout, academic
stress and psychological distress have emerged as primary risk factors. Academic stress — arising
from examination pressure, workload demands, and performance expectations — has been shown to
directly predict burnout across multiple studies and educational contexts (Bask & Salmela-Aro,
2013; Gao et al., 2023). Psychological distress, encompassing broader difficulties with emotional
regulation, persistent worry, and coping under pressure, represents a conceptually related but
distinct construct. Where academic stress reflects domain-specific perceived demands, psychological
distress captures the broader emotional burden experienced by students, potentially amplifying
burnout vulnerability through mechanisms of resource depletion consistent with Maslach et al.'s
(2001) theoretical framework.

In contrast, self-efficacy and social support have been identified as important protective factors.
Drawing upon Bandura's (1977, 1997) social cognitive theory, academic self-efficacy refers to
students' beliefs regarding their capacity to organise and execute the behaviours required to
succeed academically. Students with higher self-efficacy beliefs demonstrate greater persistence,
more adaptive coping strategies, and reduced susceptibility to the detrimental effects of academic
stress (Gao et al., 2023). Similarly, perceived social support — the belief that emotional and
practical assistance is available from family, peers, and educators — has been shown to buffer the
negative effects of academic stress and reduce burnout risk, particularly among adolescent and
emerging adult populations navigating demanding academic transitions.

Despite these substantial theoretical and empirical advances, the majority of existing burnout
research has employed explanatory statistical methodologies — regression analysis, path analysis,
mediation modelling, and structural equation modelling — designed to elucidate relationships among
variables rather than predict individual-level outcomes. While these approaches have generated
considerable theoretical insight, they offer limited capacity for identifying which specific
students are likely to develop severe burnout in the near future. This predictive gap carries
real-world consequences: interventions aimed at preventing burnout are most effective when targeted
at genuinely at-risk individuals and delivered before significant academic and psychological
consequences have materialised. Without reliable predictive tools, educators and institutions are
largely constrained to reactive responses — addressing burnout after it has become manifest —
rather than proactively supporting vulnerable students.

Recent advances in machine learning offer a promising avenue for addressing this limitation. Unlike
traditional statistical models, machine learning algorithms are capable of identifying complex,
nonlinear relationships among multiple variables and generating individual-level predictions from
multidimensional datasets. Applications of machine learning within educational and mental health
research have demonstrated considerable potential for predicting student dropout, academic
performance, psychological difficulties, and engagement outcomes (Romero & Ventura, 2020; Shatte et
al., 2019). However, comparatively few studies have applied machine learning specifically to the
prediction of academic burnout, and those that have done so have focused predominantly on
university populations in Western contexts. The application of these methods to secondary school and
first-year undergraduate students in non-Western educational contexts — where academic pressure may
be particularly intense — remains an important gap in the literature.

An additional concern limiting the adoption of machine learning in educational and psychological
settings is the issue of model interpretability. Many high-performing machine learning algorithms —
particularly ensemble methods such as Random Forests and gradient boosting variants — function as
computational 'black boxes,' generating accurate predictions without offering transparent
explanations for how those predictions were derived. In contexts involving student well-being,
institutional decision-making, and ethical accountability, this opacity is problematic: stakeholders
require not only accurate predictions but meaningful, actionable explanations. Explainable
artificial intelligence (XAI) techniques, and specifically SHAP (SHapley Additive exPlanations;
Lundberg & Lee, 2017), address this limitation by quantifying the contribution of each input
variable to individual model predictions, rendering complex models interpretable and enabling
findings to be situated within established theoretical frameworks.

The present study seeks to address these gaps by developing, training, and evaluating multiple
machine learning models for predicting academic burnout among secondary school and undergraduate
students in India, while employing SHAP analysis to ensure model transparency and interpretability.
Survey data collected from 321 students were used to train four classifiers — Logistic Regression,
Support Vector Machine, Random Forest, and XGBoost — evaluated using five-fold stratified
cross-validation. Findings are interpreted within the context of Maslach and Jackson's (1981)
burnout framework, Bandura's (1997) self-efficacy theory, Pekrun's (2006) Control-Value Theory of
academic emotions, and Gao et al.'s (2023) moderated mediation model of stress, anxiety,
self-efficacy, and burnout.

This study makes four principal contributions to the existing literature. First, it extends the
application of machine learning burnout prediction to a secondary school and early undergraduate
sample in an Indian educational context, a population largely underrepresented in the current
machine learning in education literature. Second, it integrates SHAP-based explainable AI alongside
predictive modelling, responding to calls for greater transparency and interpretability in
educational machine learning research. Third, it examines a theoretically grounded set of
psychosocial predictors encompassing both risk factors and protective factors, enabling findings to
be meaningfully compared with prior empirical research. Fourth, it provides preliminary evidence
regarding the relative predictive importance of psychological distress, social support,
self-efficacy, and academic stress — evidence with direct implications for the design of targeted
early-intervention programmes.

The paper proceeds as follows. Section 2 presents a review of the relevant literature across burnout
theory, academic anxiety and psychological distress, self-efficacy, social support, and machine
learning in educational and mental health contexts. Section 3 describes the methodology including
participants, measures, procedure, and the machine learning pipeline. Section 4 presents the results
of reliability analysis, descriptive statistics, correlational analysis, multiple linear regression,
machine learning model evaluation, and SHAP feature importance analysis. Section 5 discusses
findings in relation to prior research and theoretical frameworks. Section 6 acknowledges key
limitations of the study, and Section 7 offers conclusions and practical implications for educators,
counsellors, and institutions.

## 2. Literature Review

### 2.1 Conceptualising Burnout: From Occupational to Academic Contexts

The systematic study of burnout originated within occupational psychology. Maslach and Jackson
(1981) provided the first rigorous operationalisation of burnout as a psychological syndrome
characterised by three interrelated dimensions: emotional exhaustion, depersonalisation, and reduced
personal accomplishment. Emotional exhaustion refers to a pervasive sense of being emotionally
depleted, drained of the affective resources necessary to meet the demands of one's environment.
Depersonalisation — subsequently reconceptualised as cynicism in non-interpersonal occupations and
academic contexts — involves psychological detachment, disengagement, and a callous or indifferent
orientation toward one's responsibilities. Reduced personal accomplishment reflects diminished
self-perceptions of competence, productivity, and meaningful achievement. The three-dimensional
structure of burnout has demonstrated considerable cross-cultural and cross-occupational replication
and remains foundational to contemporary burnout research.

Maslach, Schaufeli, and Leiter (2001) subsequently elaborated the burnout framework, situating it
explicitly within a broader model of chronic stress and coping resource depletion. Their
reconceptualisation emphasised that burnout does not arise from acute or isolated stressors but
develops progressively in response to sustained mismatches between environmental demands and
individuals' available coping resources. This perspective aligns burnout with broader theories of
psychological stress and strain and has important implications for understanding burnout
trajectories over time — particularly in educational contexts where cumulative academic pressure may
gradually exceed students' adaptive capacity.

The translation of burnout theory to educational settings was advanced by the development of
student-specific instruments and constructs. Schaufeli et al. (2002) adapted the Maslach Burnout
Inventory for student populations, producing the Maslach Burnout Inventory–Student Survey (MBI-SS),
which conceptualises student burnout across three parallel dimensions: exhaustion (arising from
study demands), cynicism (detachment and disengagement from academic content), and academic efficacy
(beliefs regarding one's competence as a student). Salmela-Aro et al. (2009) subsequently developed
the School Burnout Inventory (SBI), a more concise measure validated for secondary school
populations. Both instruments have demonstrated strong psychometric properties across diverse
international samples. The present study draws upon items reflecting all three burnout dimensions in
its composite burnout measure.

### 2.2 Academic Burnout Among Secondary School and Undergraduate Students

Academic burnout has attracted growing scholarly attention across both secondary and tertiary
educational levels, with research consistently demonstrating its association with a range of adverse
outcomes. Bask and Salmela-Aro (2013) conducted a longitudinal investigation of burnout
trajectories among Finnish adolescents and found that prolonged academic stress contributed to
progressively increasing emotional exhaustion and academic disengagement over time. Importantly,
burnout symptoms were not merely transient reactions to acute academic demands but persisted and
intensified across the academic year, suggesting a cumulative depletion process consistent with
Maslach et al.'s (2001) theoretical account.

Walburg (2014) provided a comprehensive narrative review of burnout among secondary school students,
synthesising evidence across multiple national contexts. The review identified persistent academic
pressure, high parental expectations, competitive peer environments, and limited institutional
support as key contextual drivers of burnout. Walburg highlighted the particular vulnerability of
secondary school students navigating high-stakes examinations — a finding with direct relevance to
the Indian educational context, where competitive entrance examinations for tertiary institutions
exert substantial psychological pressure on students throughout secondary school. The review also
identified associations between burnout and diminished academic motivation, absenteeism, and reduced
psychological well-being, underscoring the breadth of its consequences.

Among undergraduate students, burnout has been associated with increased dropout intentions, reduced
academic engagement, and compromised mental health outcomes. The transition from secondary school to
university — characterised by increased academic independence, reduced structured support, and novel
social demands — represents a period of heightened vulnerability that warrants specific attention.
Studies examining both secondary school and undergraduate populations have found that burnout
dimensions, while broadly consistent across educational levels, may manifest differently: secondary
school students often report greater exhaustion arising from structured examination demands, while
undergraduates may exhibit more pronounced cynicism arising from perceived misalignment between
educational experiences and personal goals.

Gao et al. (2023) provided important mechanistic evidence regarding burnout development among
adolescents, employing a moderated mediation framework. Their findings demonstrated that academic
stress directly predicted burnout while also operating indirectly through academic anxiety as a
mediating pathway. Furthermore, academic self-efficacy moderated the stress–anxiety relationship,
with students exhibiting higher self-efficacy showing attenuated anxiety responses to academic
stress and consequently lower burnout. This nuanced model provided compelling evidence that burnout
development reflects dynamic interactions among environmental demands, emotional responses, and
individual psychological resources — a framework directly informing the theoretical positioning and
analytical approach of the present study.

### 2.3 Academic Anxiety, Psychological Distress, and the Stress–Burnout Pathway

Academic anxiety represents one of the most consistently identified psychological mechanisms through
which academic stress is translated into burnout. Characterised by feelings of apprehension,
tension, and worry regarding academic performance, examinations, and evaluation, academic anxiety
can impair attentional focus, undermine academic confidence, and generate sustained emotional strain
over time. Research by Putwain and colleagues has consistently demonstrated that academic anxiety
exerts significant deleterious effects on educational outcomes and motivational processes,
positioning it as a central mediator within stress–burnout pathways.

Pekrun's (2006) Control-Value Theory provides a theoretically rigorous framework for understanding
the emergence and consequences of academic anxiety. The theory proposes that academic emotions are
generated through students' appraisals of their perceived control over academic outcomes and the
subjective value they assign to academic tasks. When students perceive academic stakes as high but
experience low perceived control — a configuration particularly prevalent under examination pressure
and in high-expectation environments — achievement-related anxiety is likely to emerge. Sustained
anxiety of this kind consumes attentional resources, impairs self-regulatory functioning, and
incrementally depletes the emotional reserves required for sustained academic engagement, thereby
increasing vulnerability to burnout over time.

Psychological distress, while conceptually related to academic anxiety, represents a broader
construct encompassing general difficulties with emotional regulation, persistent worry, and coping
under sustained pressure. In the present study, psychological distress was assessed as a distinct
construct from academic stress, enabling an examination of the unique contribution of broader
emotional burden to burnout beyond domain-specific academic stress. This distinction is
theoretically important: students may experience high psychological distress arising from sources
beyond academic demands — including interpersonal difficulties, family pressures, and broader life
stressors — and this broader distress may interact with academic stressors to amplify burnout risk.

### 2.4 Self-Efficacy as a Protective Factor Against Burnout

Bandura's (1977, 1997) social cognitive theory identifies self-efficacy — an individual's belief in
their capability to organise and execute the courses of action required to attain desired outcomes —
as a fundamental determinant of psychological functioning, behaviour, and resilience. Self-efficacy
beliefs influence whether individuals perceive demanding situations as motivating challenges or
debilitating threats, shape the coping strategies they employ, and determine the persistence and
quality of effort they invest in the face of difficulty. Individuals with higher self-efficacy are
more likely to approach challenges with confidence, to persist in the face of setbacks, and to
maintain psychological equilibrium under conditions of stress.

Within educational settings, academic self-efficacy has been consistently identified as a
significant protective factor against burnout and its antecedents. Students with stronger beliefs in
their academic capabilities demonstrate greater resilience under examination pressure, more adaptive
use of learning strategies, and reduced susceptibility to the emotional depletion underlying
burnout. Gao et al. (2023) provided direct empirical support for this protective role, finding that
self-efficacy moderated the relationship between academic stress and burnout: students with higher
self-efficacy showed substantially attenuated burnout in response to elevated academic stress, while
students with lower self-efficacy were considerably more vulnerable.

The present study operationalises self-efficacy through students' expressed confidence in handling
difficult academic assignments and their belief in their capacity to achieve academic goals — items
reflecting the domain-specific, task-oriented dimension of efficacy most directly relevant to
academic burnout. The protective role of self-efficacy identified in prior research generates the
prediction that higher self-efficacy will be associated with lower burnout scores and will emerge as
a significant protective predictor in both regression and machine learning analyses.

### 2.5 Social Support and Burnout Risk

Perceived social support — the belief that emotional, informational, and instrumental assistance is
available from significant others including family members, peers, and educators — has been broadly
identified as a buffer against the adverse psychological effects of chronic stress. Within
educational contexts, social support may attenuate burnout risk through multiple mechanisms: by
providing emotional validation that reduces the perceived threat of academic challenges, by offering
practical assistance that reduces objective workload burden, and by fostering a sense of belonging
and connectedness that sustains motivation and engagement over time.

The relevance of social support to burnout is particularly salient for secondary school and early
undergraduate students, for whom family relationships and peer networks represent primary sources of
psychosocial support. Students who perceive their family environments as supportive and who are
aware of institutional support resources available to them when facing academic difficulties may be
better equipped to manage the emotional demands of academic life without experiencing the
progressive resource depletion that underlies burnout. The present study assesses social support
through students' perceptions of family support during difficult academic periods and their
knowledge of available help resources — dimensions capturing both relational and instrumental
aspects of perceived support.

### 2.6 Machine Learning in Educational and Mental Health Research

Traditional burnout research has relied primarily upon statistical approaches designed to explain
relationships among variables at the group level, providing valuable theoretical insights but
limited individual-level predictive capability. Machine learning, a family of computational
techniques capable of identifying patterns within data and generating individual-level predictions
from multidimensional inputs, offers a fundamentally different and complementary analytical
paradigm. Machine learning algorithms accommodate complex nonlinear interactions, handle
high-dimensional feature spaces, and optimise predictive accuracy rather than parameter
interpretability — characteristics that distinguish them from classical statistical models and
render them particularly well-suited to prediction tasks.

Within mental health research, Shatte et al. (2019) provided a comprehensive scoping review
demonstrating the growing application of machine learning to the identification of individuals at
risk of psychological difficulties, including depression, anxiety disorders, and psychosis. Graham
et al. (2019) emphasised the potential of artificial intelligence technologies to transform mental
health assessment and monitoring through scalable, data-driven approaches. In educational contexts,
Romero and Ventura (2020) identified prediction as one of the most impactful applications of
educational data mining, with machine learning models demonstrating strong performance in predicting
academic performance, student engagement, and dropout risk across diverse institutional settings.

Baker and Inventado (2014) argued that educational data mining provides a framework for converting
institutional data into actionable insights, with predictive models enabling educators to identify
students requiring targeted support before difficulties become severe. Harrer et al. (2021) further
highlighted the promise of machine learning for enabling personalised and scalable mental health
interventions in educational contexts — an aspiration directly aligned with the present study's
objective of developing practical tools for the early identification of burnout risk.

### 2.7 Explainable Artificial Intelligence in Educational Contexts

The predictive power of complex machine learning algorithms has frequently been accompanied by a
corresponding reduction in interpretability. Ensemble methods and kernel-based classifiers — among
the most effective algorithms for psychological prediction tasks — often function as computational
black boxes, generating predictions through processes that are not directly interpretable by human
stakeholders. In educational and psychological applications, this opacity poses significant
practical and ethical challenges: educators, counsellors, and institutional decision-makers require
not only accurate risk predictions but transparent, meaningful explanations of why specific students
are flagged as high-risk, and which factors are driving those predictions.

Ribeiro, Singh, and Guestrin (2016) introduced LIME (Local Interpretable Model-Agnostic
Explanations), which generates interpretable approximations of complex model behaviour in the
vicinity of individual predictions. Lundberg and Lee (2017) proposed SHAP (SHapley Additive
exPlanations), grounded in cooperative game theory, as a principled and unified framework for
quantifying the contribution of each input feature to a model's predictions across all instances.
SHAP values satisfy several desirable axiomatic properties — including consistency, local accuracy,
and missingness — that render them theoretically superior to alternative feature importance
measures. Crucially, SHAP provides both global explanations (revealing which features are most
important across the full dataset) and local explanations (illustrating the specific drivers of
individual predictions), making it particularly well-suited to applications in which understanding
individual risk profiles is as important as overall model performance.

The integration of SHAP analysis into the present study directly addresses calls for greater
transparency in educational machine learning research. By quantifying the relative contributions of
distress, social support, self-efficacy, and stress to burnout predictions, SHAP enables findings to
be interpreted within established theoretical frameworks and translated into actionable,
theoretically grounded intervention recommendations.

### 2.8 Research Gap and Contribution of the Present Study

The preceding review identifies several important gaps in the existing literature that the present
study seeks to address. First, while substantial research has established the correlates and
mechanisms of academic burnout using explanatory statistical approaches, the application of machine
learning to individual-level burnout prediction remains comparatively limited, and existing studies
have focused predominantly on university populations in Western educational contexts. The present
study extends this work to secondary school and early undergraduate students in India, a population
characterised by particularly intense academic pressure arising from competitive examination
systems, high parental expectations, and performance-oriented educational cultures.

Second, the concurrent examination of psychological distress as a predictor distinct from academic
stress — alongside self-efficacy and social support as protective factors — enables a more
comprehensive and nuanced assessment of burnout risk than prior machine learning studies, which
have typically employed narrower feature sets. Third, the integration of SHAP-based explainability
addresses the interpretability deficit in educational machine learning research, producing findings
that are not only statistically informative but practically actionable for educators and
institutions. Fourth, the comparison of four machine learning algorithms of varying complexity —
ranging from linear Logistic Regression to nonlinear ensemble methods — enables an assessment of the
degree to which complex nonlinear modelling provides meaningful predictive gains over simpler, more
interpretable approaches.

## 3. Methodology

### 3.1 Participants

Participants were 321 students recruited through a voluntary, anonymous online survey distributed via
Google Forms across school networks, social media platforms, and peer referral channels in India.
The sample comprised students currently enrolled in Grades 9–12 (secondary school) and first-year
undergraduate programmes, representing the two educational levels at which academic pressure and
burnout risk are considered particularly pronounced. No exclusion criteria beyond current enrolment
at these educational levels were applied. The sample constitutes a convenience sample; accordingly,
findings should be interpreted with appropriate caution regarding population representativeness and
external generalisability.

Prior to completing the survey, all participants were presented with an informed consent statement
describing the study's academic purpose, the entirely voluntary nature of participation, the
anonymity and confidentiality of all responses, and participants' unrestricted right to withdraw at
any stage without consequence. No personally identifiable information was collected at any point
during the study. Given the inclusion of items related to psychological distress and emotional
well-being, the consent statement noted that the study was designed for research purposes only and
that responses would not be shared with teachers, parents, or any institutional body. Participants
were also reminded of the availability of general mental health resources should they experience any
distress during completion.

### 3.2 Measures

**3.2.1 Academic Stress.** Assessed using five items reflecting core dimensions of academic stress:
perceived frequency of feeling overwhelmed by schoolwork, perceived pressure to achieve high grades,
worry about academic performance, worry about upcoming tests and examinations, and difficulty
balancing schoolwork with other responsibilities. Items were rated on a five-point Likert-type scale
ranging from 1 (Not at all / Strongly Disagree) to 5 (Very Often / Strongly Agree). A composite
score was computed as the unweighted mean of all five items, with higher scores indicating greater
academic stress. Internal consistency was good (Cronbach's α = .823, 95% CI [.790, .852]).

**3.2.2 Psychological Distress.** Assessed using three items measuring the self-reported frequency
of feeling emotionally overwhelmed, struggling to cope with stress, and experiencing persistent
worry over the preceding month. Items were rated on the same five-point scale. A composite distress
score was computed as the mean of the three items. Internal consistency was good (Cronbach's
α = .827, 95% CI [.791, .857]).

**3.2.3 Academic Burnout.** Operationalised as a composite score reflecting three theoretically
defined dimensions, adapted from the Maslach Burnout Inventory–Student Survey (Schaufeli et al.,
2002). The Exhaustion subscale comprised three items assessing emotional and physical depletion
arising from academic demands (e.g., feeling exhausted at the end of a typical school day, feeling
emotionally drained by studies, feeling too tired to complete academic tasks). The Cynicism subscale
comprised two items assessing disinterest in and questioning of the meaningfulness of studies. The
Academic Efficacy subscale comprised two items assessing academic confidence and goal attainment,
which were reverse-scored prior to inclusion in the composite so that higher values reflected lower
efficacy — consistent with the burnout framework in which reduced efficacy is indicative of greater
burnout severity. A composite burnout score was computed as the unweighted mean of all seven items
(including reverse-coded efficacy items), with higher scores indicating greater burnout. Internal
consistency for the composite was questionable (Cronbach's α = .655, 95% CI [.595, .710]), likely
reflecting the construct's multidimensionality and the limited number of items per subscale.

**3.2.4 Self-Efficacy.** Assessed using two items measuring students' confidence in their ability to
handle difficult academic assignments and their belief in their capacity to achieve academic goals,
rated on the five-point scale. A composite score was computed as the mean of the two items.
Cronbach's alpha was low (α = .265), attributable primarily to the structural constraint imposed by
two-item scales, for which alpha is inherently suppressed independent of item quality. The
inter-item correlation was r = .26.

**3.2.5 Social Support.** Assessed using two items measuring perceived family support during
difficult academic periods and students' awareness of where to seek help when facing academic
challenges. A composite score was computed as the mean of both items. Cronbach's alpha was low
(α = .572), again primarily reflecting the two-item constraint.

**3.2.6 Sleep and Screen Time.** Sleep duration was assessed by asking participants to indicate
their average nightly sleep from a set of categorical response options (less than 5, 4–5, 5–6, 6–7,
7–8, and more than 8 hours). Screen time was assessed via two items measuring total daily screen
time outside of schoolwork and daily social media usage, both using categorical response formats.
These variables were included in the survey for descriptive and exploratory purposes; due to their
categorical encoding and the methodological decision to restrict the primary machine learning
analyses to continuous composite scale scores, they were not incorporated into the main predictive
models. Their inclusion in future analyses using appropriate encoding strategies is recommended.

### 3.3 Procedure

The survey was administered electronically via Google Forms and distributed to potential
participants through secondary school networks, undergraduate institution contacts, social media
platforms, and peer referral. Data collection proceeded until a sample of 321 usable responses had
been obtained following the removal of duplicate submissions identified through response pattern
analysis. No monetary or academic compensation was provided for participation.

Scale scores were computed by averaging the relevant item responses for each construct. For the
burnout composite, self-efficacy items were first reverse-scored (by subtracting the original score
from 6) prior to averaging. Complete case analysis was applied; participants with missing values on
any item contributing to a given scale were excluded from analyses involving that scale. Given the
very low overall rate of missing data (< 1%), this approach had a negligible impact on statistical
power.

### 3.4 Machine Learning Pipeline

**3.4.1 Target Variable and Binarisation.** For machine learning classification, the continuous
burnout composite score was dichotomised using a median split. Participants scoring at or above the
sample median burnout score (Mdn = 3.29) were assigned to the High Burnout class (n = 181; 56.4%),
and those scoring below the median were assigned to the Low Burnout class (n = 140; 43.6%).
Median-split binarisation was employed to enable the application of binary classification algorithms
and is consistent with approaches adopted in prior burnout classification research. The associated
loss of continuous outcome information and implications for performance interpretation are
acknowledged as limitations in Section 6.

**3.4.2 Feature Set.** The primary feature set for all machine learning models comprised four
continuous composite scale scores: Academic Stress, Psychological Distress, Self-Efficacy, and
Social Support. All features were standardized to zero mean and unit variance using z-score
normalisation (StandardScaler), applied independently within each cross-validation fold to prevent
data leakage from the test set into the training process.

**3.4.3 Classification Algorithms.** Four machine learning algorithms were trained and evaluated:
(1) Logistic Regression — a linear probabilistic classifier providing a theoretically interpretable
baseline model with direct correspondence to regression coefficients; (2) Support Vector Machine
(SVM) with a radial basis function (RBF) kernel — a nonlinear classifier that identifies the optimal
separating hyperplane in a transformed feature space; (3) Random Forest — a bootstrap-aggregated
ensemble of decision trees providing robust performance, native resistance to overfitting through
bagging, and inherent feature importance estimates; and (4) XGBoost (Extreme Gradient Boosting) — a
sequential gradient boosting algorithm that iteratively constructs an ensemble of weak learners to
minimise a differentiable loss function.

**3.4.4 Validation and Evaluation.** Model performance was evaluated using five-fold stratified
cross-validation, in which the dataset was partitioned into five folds while preserving the class
distribution of the full sample in each fold. Each model was trained on four folds and evaluated on
the remaining fold, with this process repeated five times such that every observation served as part
of the test set exactly once. Performance was assessed across five metrics: accuracy, precision,
recall, F1-score, and ROC-AUC. Mean performance and standard deviation across the five folds are
reported for all models.

**3.4.5 SHAP Analysis.** Following model evaluation, SHAP (SHapley Additive exPlanations; Lundberg &
Lee, 2017) values were computed for the best-performing model — Random Forest — to quantify the
contribution of each predictor to individual burnout classification decisions. The TreeExplainer
algorithm, optimised for tree-based ensemble methods, was employed to compute exact SHAP values for
all 321 observations. Mean absolute SHAP values were computed for each feature to generate a global
feature importance ranking. A SHAP summary plot was additionally generated to visualise both the
direction and magnitude of each feature's influence on individual-level burnout predictions.

All analyses were conducted in Python (version 3.11) using the scikit-learn (Pedregosa et al.,
2011), XGBoost (Chen & Guestrin, 2016), and SHAP (Lundberg & Lee, 2017) libraries. Statistical
analyses were conducted using statsmodels (Seabold & Perktold, 2010) and pingouin (Vallat, 2018).

## 4. Results

### 4.1 Reliability Analysis

Prior to primary analyses, the internal consistency of each composite scale was evaluated using
Cronbach's alpha. Academic Stress (α = .823) and Psychological Distress (α = .827) demonstrated good
internal consistency, satisfying the conventional threshold of α ≥ .80. The Burnout composite
yielded a questionable alpha of .655, likely attributable to the construct's inherent
multidimensionality and the limited number of items comprising each subscale. Self-Efficacy
(α = .265) and Social Support (α = .572) demonstrated low reliability estimates; however, both are
two-item scales, for which Cronbach's alpha is structurally constrained independent of item quality.

| Scale | Items | α |
|-------|------:|--:|
| Academic Stress | 5 | .823 |
| Psychological Distress | 3 | .827 |
| Academic Burnout | 7 | .655 |
| Self-Efficacy | 2 | .265 |
| Social Support | 2 | .572 |

*Table 1. Cronbach's alpha reliability estimates for all composite scales. Two-item scales are
subject to structural constraints in alpha estimation.*

### 4.2 Descriptive Statistics

All scales were scored on a 1–5 metric. Mean scores clustered around the midpoint of the response
scale (range: 3.31–3.67), indicating moderate-to-high levels of academic stress, psychological
distress, and burnout in the sample alongside moderate levels of self-efficacy and social support.
Distributions were approximately symmetric with skewness values within acceptable ranges (all
|skew| < .50) and mildly platykurtic (negative kurtosis), supporting the application of parametric
statistical techniques. (Per-scale means and standard deviations: Table 2 of the manuscript PDF.)

### 4.3 Correlational Analysis

All predictors demonstrated statistically significant bivariate associations with burnout at
p < .001. Psychological distress showed the strongest positive association with burnout (r = .563),
followed by academic stress (r = .441). Social support (r = −.470) and self-efficacy (r = −.398)
demonstrated significant negative associations, consistent with their theorised protective roles.
Notably, academic stress and psychological distress were highly intercorrelated (r = .683),
indicating substantial shared variance.

| Pair | r |
|------|--:|
| Psychological distress × Burnout | .563 |
| Academic stress × Burnout | .441 |
| Social support × Burnout | −.470 |
| Self-efficacy × Burnout | −.398 |
| Academic stress × Psychological distress | .683 |

*Table 3. Selected Pearson correlations (N = 321). All burnout correlations p < .001.*

### 4.4 Multiple Linear Regression

A multiple linear regression was conducted to examine the independent predictive contributions of
academic stress, psychological distress, self-efficacy, and social support to burnout scores. The
overall model was statistically significant, F(4, 316) = 110.41, p < .001, explaining 58.3% of
variance in burnout (R² = .583, Adjusted R² = .578). Psychological distress (B = 0.356, SE = 0.036,
t = 9.87, p < .001), self-efficacy (B = −0.308, SE = 0.028, t = −11.10, p < .001), and social
support (B = −0.314, SE = 0.033, t = −9.66, p < .001) each made statistically significant unique
contributions. Academic stress did not reach statistical significance as an independent predictor
when controlling for the other variables (B = −0.096, SE = 0.060, t = −1.62, p = .107), a pattern
consistent with the high intercorrelation between stress and distress (r = .683).

| Predictor | B | SE | t | p |
|-----------|--:|---:|--:|--:|
| Psychological distress | 0.356 | 0.036 | 9.87 | < .001 |
| Self-efficacy | −0.308 | 0.028 | −11.10 | < .001 |
| Social support | −0.314 | 0.033 | −9.66 | < .001 |
| Academic stress | −0.096 | 0.060 | −1.62 | .107 |

*Table 4. Multiple linear regression predicting academic burnout (N = 321). R² = .583, Adjusted
R² = .578, F(4, 316) = 110.41, p < .001.*

### 4.5 Machine Learning Model Performance

The Random Forest classifier achieved the highest performance across all five metrics
(Accuracy = .975, Precision = .989, Recall = .967, F1 = .977, ROC-AUC = .998), demonstrating
near-perfect discrimination between high and low burnout classifications. XGBoost performed
comparably (Accuracy = .963, ROC-AUC = .994), followed by SVM (Accuracy = .931, ROC-AUC = .959) and
Logistic Regression (Accuracy = .879, ROC-AUC = .952). The strong performance of Logistic Regression
— the simplest and most interpretable classifier — is noteworthy, suggesting that the relationships
between predictors and burnout classification are sufficiently robust to be captured by linear
decision boundaries.

| Model | Accuracy | Precision | Recall | F1 | ROC-AUC |
|-------|---------:|----------:|-------:|---:|--------:|
| Logistic Regression | .879 | — | — | — | .952 |
| SVM (RBF) | .931 | — | — | — | .959 |
| XGBoost | .963 | — | — | — | .994 |
| **Random Forest** * | **.975** | **.989** | **.967** | **.977** | **.998** |

*Table 5. Machine learning classification performance, 5-fold stratified cross-validation
(N = 321). Values are means across five folds. * Best-performing model. Per-model precision /
recall / F1 for the non-best classifiers are in the manuscript PDF.*

### 4.6 SHAP Feature Importance Analysis

SHAP values were computed for the Random Forest model. Psychological distress was the most
influential predictor of burnout classification (Mean |SHAP| = 0.231), demonstrating more than four
times the predictive contribution of academic stress (Mean |SHAP| = 0.056). Social support ranked
second (0.163) and self-efficacy third (0.110), with both exerting protective influences: higher
social support and self-efficacy values were associated with reduced burnout probability, while
lower values were associated with increased burnout probability. The SHAP summary plot confirmed
that the direction of all effects was consistent with theoretical expectations and with the
regression findings.

| Feature | Mean \|SHAP\| |
|---------|-------------:|
| Psychological distress | 0.231 |
| Social support | 0.163 |
| Self-efficacy | 0.110 |
| Academic stress | 0.056 |

*Table 6. SHAP feature importance, Random Forest classifier (N = 321).*

## 5. Discussion

The present study sought to develop and evaluate machine learning models for predicting academic
burnout among secondary school and undergraduate students, while employing SHAP analysis to
illuminate the relative contributions of risk and protective psychological factors. Findings
replicate and extend several established patterns in the burnout literature while also revealing
important nuances regarding the differential contributions of academic stress and broader
psychological distress as predictors.

### 5.1 The Primacy of Psychological Distress

The most consequential finding of the present study is the identification of psychological distress
as the strongest predictor of burnout — both in the linear regression model (B = 0.356, p < .001)
and in SHAP feature importance analysis (Mean |SHAP| = 0.231), where it contributed more than four
times the predictive weight of academic stress. This finding is consistent with Maslach et al.'s
(2001) theoretical account of burnout as a product of progressive emotional resource depletion. It
also aligns meaningfully with Gao et al.'s (2023) moderated mediation model. The present findings
suggest that psychological distress — which encompasses anxiety alongside broader emotional strain —
may represent a more proximal and comprehensive predictor of burnout than academic stress per se.

### 5.2 Protective Factors: Social Support and Self-Efficacy

Social support and self-efficacy both emerged as significant and theoretically meaningful protective
factors. Social support demonstrated the second-largest SHAP contribution (0.163) and a significant
independent regression coefficient (B = −0.314, p < .001). Self-efficacy similarly demonstrated a
significant independent contribution to burnout prediction (B = −0.308, p < .001; Mean |SHAP| =
0.110), directly replicating Gao et al.'s (2023) finding that students with stronger academic
self-efficacy are less susceptible to burnout under conditions of elevated stress. Taken together,
these results support a risk-and-resilience model of burnout in which vulnerability is determined
not only by the presence of stressors but by the availability of protective resources.

### 5.3 The Attenuated Role of Academic Stress

While academic stress demonstrated a significant bivariate association with burnout (r = .441,
p < .001), it was not a significant independent predictor in the regression model (B = −0.096,
p = .107) and showed the weakest SHAP contribution (0.056). This attenuation is most parsimoniously
explained by the high intercorrelation between stress and distress (r = .683): when both are
included in the same model, distress appears to subsume the variance in burnout previously
attributable to stress. The present results suggest that distress may represent a more distal
consequence of academic stress that then more proximally drives burnout.

### 5.4 Machine Learning Performance and Practical Implications

All four machine learning models demonstrated strong classification performance, with Random Forest
achieving near-perfect discrimination (ROC-AUC = .998) and XGBoost performing comparably
(ROC-AUC = .994). The strong performance of even the simplest model — Logistic Regression
(ROC-AUC = .952, Accuracy = .879) — indicates that the burnout signal is sufficiently strong and
structurally consistent to be captured by linear classifiers.

The consistently high performance metrics across all models raise the possibility of a scalable,
low-cost screening application: a brief survey assessing the four key predictors could provide
counsellors, educators, or school psychologists with a probabilistic burnout risk indicator.
However, significant methodological limitations — particularly the small sample size,
cross-sectional design, and median-split binarisation — must be addressed before any clinical or
institutional application could responsibly be considered. The present findings should be treated
as preliminary and proof-of-concept.

## 6. Limitations

1. **Cross-sectional design** precludes causal inference; all variables were measured at a single
   point in time. Longitudinal studies would be necessary to establish temporal precedence.
2. **Self-report only.** Measures are subject to social desirability bias, recall distortion, and
   response inconsistency. Triangulation with academic records, teacher ratings, absenteeism data,
   or physiological markers is recommended.
3. **Sample generalisability.** The Indian secondary and early-undergraduate convenience sample
   limits generalisation to other educational systems, cultural settings, and age groups.
4. **Low reliability** of the Self-Efficacy (α = .265) and Social Support (α = .572) scales, driven
   by their two-item composition, may have attenuated their apparent predictive contributions.
   Validated multi-item scales (e.g. MSPSS; a full academic self-efficacy subscale) are recommended.
5. **Burnout composite reliability** was only questionable (α = .655). The full MBI-SS or SBI with
   complete item pools would enable more reliable, dimensionally distinct subscale scores.
6. **Performance-inflating design.** Median-split binarisation creates balanced, separable classes;
   N = 321 is modest for machine learning. Cross-validation estimates may overfit sample-specific
   patterns. External validation is strongly recommended.
7. **Multicollinearity.** Academic stress and psychological distress correlate at r = .683, which
   may inflate standard errors and reduce the apparent unique contribution of stress. VIF
   diagnostics, ridge regression, or SEM may be informative.
8. **Excluded variables.** Sleep duration and screen time were collected but not modelled due to
   categorical encoding; future analyses should include them with appropriate numeric/ordinal
   encoding.

## 7. Conclusion

Using five-fold stratified cross-validation with a sample of 321 students, the Random Forest
classifier achieved the highest classification performance (Accuracy = 97.5%, ROC-AUC = .998), with
XGBoost performing comparably. SHAP analysis identified psychological distress as the dominant
predictor of burnout, followed by social support and self-efficacy as significant protective
factors, with academic stress demonstrating the weakest independent contribution when all predictors
were simultaneously modelled. Multiple linear regression corroborated these findings, with the four
predictors collectively accounting for 58.3% of variance in burnout scores.

These findings carry several important implications for educational practice. First, they emphasise
the critical importance of monitoring students' broader psychological well-being — not merely
academic stress — as a primary indicator of burnout risk. Second, the strong protective effects of
social support and self-efficacy suggest that interventions should not only aim to reduce academic
stressors but should actively cultivate students' protective psychological resources. Third, the
study demonstrates the feasibility of applying machine learning to burnout screening using a small
number of psychometrically grounded survey items, with SHAP analysis addressing the interpretability
concerns that have limited adoption of machine learning in educational settings.

Future research should address the present study's limitations through longitudinal designs,
validated multi-item measurement instruments, larger and more demographically diverse samples
spanning multiple national contexts, and continuous burnout outcome modelling. In conclusion, this
study provides preliminary but substantive evidence that explainable machine learning offers a
promising and practically viable framework for the early identification of students at risk of
academic burnout.

## References

Baker, R. S., & Inventado, P. S. (2014). Educational data mining and learning analytics. In J. A.
Larusson & B. White (Eds.), *Learning analytics: From research to practice* (pp. 61–75). Springer.
https://doi.org/10.1007/978-1-4614-3305-7_4

Bandura, A. (1977). Self-efficacy: Toward a unifying theory of behavioral change. *Psychological
Review, 84*(2), 191–215. https://doi.org/10.1037/0033-295X.84.2.191

Bandura, A. (1997). *Self-efficacy: The exercise of control.* W. H. Freeman.

Bask, M., & Salmela-Aro, K. (2013). Burned out to drop out: Exploring the relationship between
school burnout and school dropout. *European Journal of Psychology of Education, 28*(2), 511–528.
https://doi.org/10.1007/s10212-012-0126-5

Chen, T., & Guestrin, C. (2016). XGBoost: A scalable tree boosting system. *Proceedings of the 22nd
ACM SIGKDD International Conference on Knowledge Discovery and Data Mining* (pp. 785–794). ACM.
https://doi.org/10.1145/2939672.2939785

Gao, W., Ping, S., & Liu, X. (2023). Academic stress and burnout among adolescents: The moderated
mediation role of academic anxiety and self-efficacy. *International Journal of Environmental
Research and Public Health, 20*(3), 2019. https://doi.org/10.3390/ijerph20032019

Graham, S., Depp, C., Lee, E. E., Nebeker, C., Tu, X., Kim, H.-C., & Jeste, D. V. (2019). Artificial
intelligence for mental health and mental illnesses: An overview. *Current Psychiatry Reports,
21*(11), 116. https://doi.org/10.1007/s11920-019-1094-0

Harrer, M., Adam, S. H., Baumeister, H., Cuijpers, P., Karyotaki, E., Auerbach, R. P., Kessler, R.
C., Bruffaerts, R., Berking, M., & Ebert, D. D. (2021). Internet interventions for mental health in
university students: A systematic review and meta-analysis. *International Journal of Methods in
Psychiatric Research, 30*(2), e1878. https://doi.org/10.1002/mpr.1878

Lundberg, S. M., & Lee, S.-I. (2017). A unified approach to interpreting model predictions.
*Advances in Neural Information Processing Systems, 30*, 4765–4774.

Maslach, C., & Jackson, S. E. (1981). The measurement of experienced burnout. *Journal of
Organizational Behavior, 2*(2), 99–113. https://doi.org/10.1002/job.4030020205

Maslach, C., Schaufeli, W. B., & Leiter, M. P. (2001). Job burnout. *Annual Review of Psychology,
52*(1), 397–422. https://doi.org/10.1146/annurev.psych.52.1.397

Pedregosa, F., Varoquaux, G., Gramfort, A., Michel, V., Thirion, B., Grisel, O., Blondel, M.,
Prettenhofer, P., Weiss, R., Dubourg, V., Vanderplas, J., Passos, A., Cournapeau, D., Brucher, M.,
Perrot, M., & Duchesnay, E. (2011). Scikit-learn: Machine learning in Python. *Journal of Machine
Learning Research, 12*, 2825–2830.

Pekrun, R. (2006). The control-value theory of achievement emotions: Assumptions, corollaries, and
implications for educational research and practice. *Educational Psychology Review, 18*(4),
315–341. https://doi.org/10.1007/s10648-006-9029-9

Ribeiro, M. T., Singh, S., & Guestrin, C. (2016). "Why should I trust you?": Explaining the
predictions of any classifier. *Proceedings of the 22nd ACM SIGKDD International Conference on
Knowledge Discovery and Data Mining* (pp. 1135–1144). ACM.
https://doi.org/10.1145/2939672.2939778

Romero, C., & Ventura, S. (2020). Educational data mining and learning analytics: An updated
survey. *WIREs Data Mining and Knowledge Discovery, 10*(3), e1355.
https://doi.org/10.1002/widm.1355

Salmela-Aro, K., Kiuru, N., Leskinen, E., & Nurmi, J.-E. (2009). School Burnout Inventory (SBI):
Reliability and validity. *European Journal of Psychological Assessment, 25*(1), 48–57.
https://doi.org/10.1027/1015-5759.25.1.48

Schaufeli, W. B., Martínez, I. M., Pinto, A. M., Salanova, M., & Bakker, A. B. (2002). Burnout and
engagement in university students: A cross-national study. *Journal of Cross-Cultural Psychology,
33*(5), 464–481. https://doi.org/10.1177/0022022102033005003

Seabold, S., & Perktold, J. (2010). Statsmodels: Econometric and statistical modeling with Python.
*Proceedings of the 9th Python in Science Conference*, 57–61.

Shatte, A. B. R., Hutchinson, D. M., & Teague, S. J. (2019). Machine learning in mental health: A
scoping review of methods and applications. *Psychological Medicine, 49*(9), 1426–1448.
https://doi.org/10.1017/S0033291719000151

Vallat, R. (2018). Pingouin: Statistics in Python. *Journal of Open Source Software, 3*(31), 1026.
https://doi.org/10.21105/joss.01026

Walburg, V. (2014). Burnout among high school students: A literature review. *Children and Youth
Services Review, 42*, 28–33. https://doi.org/10.1016/j.childyouth.2014.03.020

Zimet, G. D., Dahlem, N. W., Zimet, S. G., & Farley, G. K. (1988). The Multidimensional Scale of
Perceived Social Support. *Journal of Personality Assessment, 52*(1), 30–41.
https://doi.org/10.1207/s15327752jpa5201_2

## Appendix A — Scale Descriptions

Each composite used a five-point Likert-type response format; composites are the unweighted mean of
their items. Item content is summarised below; full verbatim wording is in the manuscript PDF.

- **A.1 Academic Stress (5 items, α = .823).** Feeling overwhelmed by schoolwork; pressure to
  achieve high grades; worry about academic performance; worry about upcoming tests and
  examinations; difficulty balancing schoolwork with other responsibilities.
- **A.2 Psychological Distress (3 items, α = .827).** Frequency over the past month of feeling
  emotionally overwhelmed; struggling to cope with stress; experiencing persistent worry.
- **A.3 Academic Burnout (7 items, α = .655).** Exhaustion (3): exhausted at the end of a school
  day; emotionally drained by studies; too tired to complete academic tasks. Cynicism (2):
  disinterest in studies; questioning the meaningfulness of studies. Academic Efficacy (2,
  reverse-scored): academic confidence; belief in achieving academic goals.
- **A.4 Self-Efficacy (2 items, α = .265; inter-item r = .26).** Confidence handling difficult
  academic assignments; belief in capacity to achieve academic goals.
- **A.5 Social Support (2 items, α = .572).** Perceived family support during difficult academic
  periods; awareness of where to seek help when facing academic challenges.

*Figures 1–5 (Correlation Heatmap, Feature Importance Chart, ROC Curves, Burnout Distribution, SHAP
Summary Plot) are provided in the manuscript PDF.*
