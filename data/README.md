[README.md](https://github.com/user-attachments/files/31618037/README.md)
# Data

## The real dataset is not in this repository

The study analysed **321** anonymous survey responses from secondary school and
first-year undergraduate students. Because participants are students and the survey
includes wellbeing items (psychological distress, emotional coping), the
individual-level dataset is **kept private**. No personally identifiable information
was ever collected, but individual response rows are still not published.

## What is shared

| File | Contents |
|------|----------|
| `synthetic_sample.csv` | ~20 rows, **synthetic**. Same columns and value ranges as the real data. Distributions, correlations, and effects are **not** representative — do not draw conclusions from it. |
| `../docs/data-dictionary.md` | Full variable definitions |

Aggregate statistics (means, reliabilities, correlations, regression coefficients,
SHAP values) are reported in full in `../paper/paper.md` and on the website.

## Columns

See `../docs/data-dictionary.md`. In brief:

- `academic_stress`, `psych_distress`, `self_efficacy`, `social_support` —
  continuous 1–5 composite scores (predictors)
- `burnout_score` — continuous 1–5 composite (source of the target)
- `burnout_class` — 1 if `burnout_score >= 3.29` (sample median), else 0
- `sleep_hours`, `screen_time` — categorical bands, collected but not modelled

## If you have the real data

Place it outside version control (e.g. `data/raw/`, which `.gitignore` blocks) and
point the analysis scripts at it. Numbers will then match the manuscript.
