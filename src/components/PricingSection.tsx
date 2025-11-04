import React from "react";
import { Star } from "lucide-react";
import "./PricingSection.css";

interface LoanPlan {
  name: string;
  loanAmount: number;
  term: string;
  interestRate: string;
  url: string;
  highlight?: boolean;
}

const loanPlans: LoanPlan[] = [
  {
    name: "Starter Loan",
    loanAmount: 1000,
    term: "6 months",
    interestRate: "5%",
    url: "https://paycoin-dashboard.netlify.app/",
  },
  {
    name: "Growth Loan",
    loanAmount: 5000,
    term: "12 months",
    interestRate: "7%",
    url: "https://paycoin-dashboard.netlify.app/",
  },
  {
    name: "Business Loan",
    loanAmount: 10000,
    term: "18 months",
    interestRate: "8%",
    url: "https://paycoin-dashboard.netlify.app/",
    highlight: true,
  },
  {
    name: "Enterprise Loan",
    loanAmount: 20000,
    term: "24 months",
    interestRate: "10%",
    url: "https://paycoin-dashboard.netlify.app/",
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section" aria-labelledby="pricing-title">
      <div className="pricing-container">
        <header className="pricing-header">
          <h2 id="pricing-title">Loan Plans</h2>
          <p className="pricing-sub">
            Choose a loan plan that fits your needs.
          </p>
        </header>

        <div className="plan-grid" role="list">
          {loanPlans.map((plan) => (
            <article
              key={plan.name}
              className={`plan-card ${plan.highlight ? "is-highlight" : ""}`}
              role="listitem"
            >
              {plan.highlight && (
                <div className="plan-badge" aria-hidden="true">
                  <Star className="badge-star" />
                </div>
              )}

              <h3 className="plan-name">{plan.name}</h3>

              <ul className="plan-features">
                <li>Loan Amount: ${plan.loanAmount.toLocaleString()}</li>
                <li>Loan Term: {plan.term}</li>
                <li>Interest Rate: {plan.interestRate}</li>
                <li>Instant Approval Process</li>
              </ul>

              <div className="plan-price">
                <span className="amount">${plan.loanAmount.toLocaleString()}</span>
              </div>
              <p className="plan-unit">Loan Amount</p>

              <a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="plan-cta"
                aria-label={`Apply for ${plan.name}`}
              >
                APPLY NOW
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;