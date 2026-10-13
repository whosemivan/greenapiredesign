import type { FC } from 'react';
import clsx from 'clsx';
import CheckIcon from '@/assets/icons/check.svg?react';
import { Button } from '@/components/ui/Button/Button';
import {
	BILLING_PERIODS_LIST,
	YEARLY_BONUS_TEXT,
	type BillingPeriodType,
	type PricingPlanListItemType,
} from '@/constants/pricing';
import { splitHighlightedText } from '@/utils/splitHighlightedText';
import s from './PricingPlanCard.module.scss';

type PricingPlanCardPropsType = {
	plan: PricingPlanListItemType;
	billingPeriod: BillingPeriodType;
	onBillingPeriodChange: (billingPeriod: BillingPeriodType) => void;
};

export const PricingPlanCard: FC<PricingPlanCardPropsType> = ({ plan, billingPeriod, onBillingPeriodChange }) => {
	const isYearlyBonusVisible = plan.hasYearlyBonus && billingPeriod === 'year';

	return (
		<article className={clsx(s.card, plan.hasYearlyBonus && s.cardHighlighted)} aria-labelledby={`plan-${plan.id}`}>
			{isYearlyBonusVisible && <span className={s.bonusLabel}>{YEARLY_BONUS_TEXT}</span>}

			<h3 className={clsx(s.name, s[plan.tone])} id={`plan-${plan.id}`}>
				{plan.name}
			</h3>

			<p className={s.price}>
				<span className={s.priceValue}>{plan.price}</span>
				<span className={s.priceUnit}>{plan.priceUnit}</span>
			</p>

			{plan.hasYearlyBonus && (
				<div className={s.periodSwitcher} role="radiogroup" aria-label="Период оплаты">
					{BILLING_PERIODS_LIST.map((period) => (
						<button
							key={period.id}
							className={clsx(s.periodButton, period.id === billingPeriod && s.periodButtonActive)}
							type="button"
							role="radio"
							aria-checked={period.id === billingPeriod}
							onClick={() => onBillingPeriodChange(period.id)}
						>
							{period.label}
						</button>
					))}
				</div>
			)}

			<ul className={s.featuresList}>
				{plan.featuresList.map((feature) => (
					<li key={feature} className={s.feature}>
						<span className={s.featureIconBox}>
							<CheckIcon className={clsx(s.featureIcon, s[plan.tone])} aria-hidden />
						</span>
						<span>
							{splitHighlightedText(feature).map((segment) =>
								segment.isHighlighted ? (
									<strong key={`strong-${segment.text}`}>{segment.text}</strong>
								) : (
									<span key={`text-${segment.text}`}>{segment.text}</span>
								),
							)}
						</span>
					</li>
				))}
			</ul>

			<Button
				className={s.action}
				href={plan.ctaHref}
				variant={plan.hasYearlyBonus ? 'primary' : 'secondary'}
				isBlock
			>
				{plan.ctaText}
			</Button>
		</article>
	);
};
