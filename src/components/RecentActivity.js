import Amount from "./Amount";
import { formatAmount } from "../helper-functions/formatAmount";
import { formatDate } from "../helper-functions/formatDate";

const RecentActivity = ({ recentActivity }) => {
  return (
    <div className="recent-activity">
      {recentActivity.map((activity) => (
        <div className="activity" tabIndex="0" key={activity.transactionId}>
          <div className="activity-left">
            <div className={`trans-type loan-type ${activity.transactionType}`}>
              {activity.transactionType && activity.loanType
                ? `${activity.transactionType}-${activity.loanType}`
                : activity.transactionType || activity.loanType || null}
            </div>
            <Amount amount={activity.amount} />
          </div>
          <div className="activity-right">
            {activity.status && (
              <div className={`${activity.status}`}>{activity.status}</div>
            )}
            <div className="date">
              {formatDate(new Date(activity.transactionDate))}
            </div>
            {activity.loanBalance && (
              <div className="bal">
                Bal: {formatAmount(activity.loanBalance)}
              </div>
            )}
            {activity.pendingInterest && (
              <div>Interest: {formatAmount(activity.pendingInterest)}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
