interface IProps {
  title: string;
  isActive: boolean;
  onClick: Function;
}

export const Subscription = ({ isActive, title, onClick }: IProps) => {
  const classes = ['subscription'];
  if (isActive) classes.push('subscription-active');
  return (
    <div className={classes.join(' ')} onClick={() => onClick()}>
      <p className="subscription__title">{title}</p>
    </div>
  );
};
