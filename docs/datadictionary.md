# Data dictionary

All composite scores are the unweighted mean of their constituent five-point
Likert items (1 = low, 5 = high). N = 321.

| Variable | Type | Role | Range | Definition |
|----------|------|------|-------|------------|
| `academic_stress` | continuous | predictor | 1–5 | Mean of 5 items: overwhelm by schoolwork, grade pressure, performance worry, exam worry, work–life balance difficulty. α = .823 |
| `psych_distress` | continuous | predictor | 1–5 | Mean of 3 items (past month): feeling emotionally overwhelmed, difficulty coping with stress, persistent worry. α = .827 |
| `self_efficacy` | continuous | predictor (protective) | 1–5 | Mean of 2 items: confidence handling difficult assignments, belief in achieving academic goals. α = .265 (two-item structural limit; inter-item r = .26) |
| `social_support` | continuous | predictor (protective) | 1–5 | Mean of 2 items: family support during difficult academic periods, knowing where to seek help. α = .572 (two-item structural limit) |
| `burnout_score` | continuous | source of target | 1–5 | Mean of 7 items: 3 exhaustion + 2 cynicism + 2 academic-efficacy items. Efficacy items reverse-scored (6 − x) before averaging. α = .655 |
| `burnout_class` | binary | model target | 0 / 1 | 1 if `burnout_score` ≥ 3.29 (sample median); else 0. High n = 181 (56.4%), Low n = 140 (43.6%) |
| `sleep_hours` | categorical | collected, not modelled | 6 bands | <5, 4–5, 5–6, 6–7, 7–8, >8 hours |
| `screen_time` | categorical | collected, not modelled | bands | Daily non-school screen time and daily social-media use |

## Modelling feature set

Only the four continuous predictors (`academic_stress`, `psych_distress`,
`self_efficacy`, `social_support`) enter the machine-learning models. They are
z-scored (`StandardScaler`) **inside each cross-validation fold**.

`sleep_hours` and `screen_time` were excluded because of their categorical
encoding; re-including them with an ordinal transformation is a listed next step.
