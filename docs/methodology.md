# Methodology (summary)

Full detail: `../paper/paper.md` §3, and `../website/methods.html`.

## Design
Cross-sectional online survey. Convenience sample, N = 321, Grades 9–12 and
first-year undergraduate students in India. Anonymous Google Forms. Informed
consent shown before starting; no PII collected.

## Measures
Six five-point Likert composites — see `data-dictionary.md`.

## Target construction
Continuous `burnout_score` dichotomised at the sample median (3.29) →
`burnout_class`. High n = 181 (56.4%), Low n = 140 (43.6%).

## Feature set
Four continuous composites: academic stress, psychological distress, self-efficacy,
social support. z-scored with `StandardScaler` fit **inside each training fold only**.

## Models
Logistic Regression · SVM (RBF kernel) · Random Forest · XGBoost.

## Validation
5-fold stratified cross-validation. Metrics: accuracy, precision, recall, F1,
ROC-AUC — mean and SD across folds.

## Explainability
SHAP `TreeExplainer` on the Random Forest, all 321 observations. Mean |SHAP| per
feature for global importance; SHAP summary plot for direction.

## Statistics
Cronbach's α (reliability); Pearson correlations; OLS multiple regression of the
continuous burnout score on the four standardised predictors (`statsmodels`).
Software: Python 3.11, scikit-learn, XGBoost, shap, statsmodels, pingouin.
