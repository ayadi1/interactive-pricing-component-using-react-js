import "./module.css";
export default function Main() {
  return (
    <main>
      <div className="main--header">
        <p>100K PAGEVIEWS</p>
        <p>
          <span>$16.00</span>/month
        </p>
      </div>
      <div className="main--actions">
        <div className="range">
          <input type="range" className="main--actions__range" />
        </div>
        <div className="range--footer">
          <p>Monthly Billing</p>
          <input type="checkbox" className="main--actions__checkbox" />
          <p>Yearly Billing</p>
          <p className="main--actions__discount">25% discount</p>
        </div>
      </div>
      <div className="main--footer">
        <ul>
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button>Start my trial</button>
      </div>
    </main>
  );
}
