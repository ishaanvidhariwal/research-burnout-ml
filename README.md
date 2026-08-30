# Academic Burnout ML — Independent Research Lab

Predicting academic burnout in secondary school (Grades 9–12) and first-year
undergraduate students in India using explainable machine learning.

**Ishaanvi Dhariwal · Independent student research · June 2026 · not peer reviewed**

---

## What this repository contains

| Path | What it is |
|------|------------|
| (repo root) | The static multi-page site — index.html + pages, deploys to GitHub Pages as-is |
| `paper/` | The full manuscript (`paper.md`) and PDF (`manuscript.pdf`) |
| `docs/` | Methodology, data dictionary, ethics, limitations notes |
| `data/` | Data dictionary + a **synthetic** sample. The real 321-response dataset is **not** published (see below) |
| `src/` | Intended location for the analysis scripts/notebooks |
| `requirements.txt` | Python dependencies |
| `CITATION.cff` | Citation metadata |

## Headline findings

- **321** participants, **4** classifiers (Logistic Regression, SVM-RBF, Random Forest, XGBoost),
  **5-fold stratified** cross-validation.
- **Random Forest** best: Accuracy 0.975, F1 0.977, ROC-AUC 0.998. XGBoost comparable.
- **SHAP** (Random Forest): psychological distress is the dominant predictor
  (mean |SHAP| 0.231), social support (0.163) and self-efficacy (0.110) protective,
  academic stress weakest unique contributor (0.056).
- **Regression**: distress (B = 0.356), self-efficacy (B = −0.308), social support
  (B = −0.314) each independently predict burnout; R² = .583.
- The very high classification scores are treated as an **optimistic upper bound** —
  median-split target, modest N, single sample, no external validation. Proof-of-concept only.

## Data privacy

Responses come from students and include wellbeing items, so the individual-level
dataset is **kept private**. This repo ships:

- the full data dictionary (`docs/data-dictionary.md`),
- aggregate statistics and the correlation structure (in the paper and on the site),
- `data/synthetic_sample.csv` — identical columns, synthetic rows, **not** the real
  distributions,
- the analysis approach and a reference implementation.

Do not commit the real dataset. `.gitignore` blocks common raw-data filenames.

## Running the site locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

No build step. One stylesheet (`assets/style.css`), one script (`assets/app.js`).

## Deploying to GitHub Pages

GitHub repo → Settings → Pages → Build and deployment →
Source = “Deploy from a branch”, Branch = `main`, Folder = `/ (root)`.
The site files already live at the repo root.

## Reproducing the analysis

See `reproducibility.html` (rendered) or the steps below:

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
# place analysis scripts in src/, then run against data/synthetic_sample.csv
```

Numbers produced from the synthetic sample will **not** match the paper.

## Citation

```
Dhariwal, I. (2026). Predicting Academic Burnout in Secondary School and Undergraduate
Students Using Explainable Machine Learning: The Roles of Academic Stress, Psychological
Distress, Self-Efficacy, and Social Support. Independent student research manuscript.
```

## License

Code: MIT (`LICENSE`). Manuscript text and figures: © 2026 Ishaanvi Dhariwal, all rights reserved.
