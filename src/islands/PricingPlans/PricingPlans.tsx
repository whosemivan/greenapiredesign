import { useState, type FC } from 'react';
import type { BillingPeriodType, PricingPlanListItemType } from '@/constants/pricing';
import { PricingPlanCard } from './components/PricingPlanCard';
import s from './PricingPlans.module.scss';

type PricingPlansPropsType = {
	plansList: PricingPlanListItemType[];
};

export const PricingPlans: FC<PricingPlansPropsType> = ({ plansList }) => {
	const [billingPeriod, setBillingPeriod] = useState<BillingPeriodType>('month');

	return (
		<ul className={s.plansList}>
			{plansList.map((plan) => (
				<li key={plan.id} className={s.plansListItem}>
					<PricingPlanCard
						plan={plan}
						billingPeriod={billingPeriod}
						onBillingPeriodChange={setBillingPeriod}
					/>
				</li>
			))}
		</ul>
	);
};
