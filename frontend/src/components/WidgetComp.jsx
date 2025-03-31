const WidgetComp = ({ header, value, classStyle = "widget-white" }) => {
  return (
    <div className={`widget ${classStyle}`}>
      <p className="widget-header">{header}</p>
      <p className="widget-value">
        ₹ {new Intl.NumberFormat("en-IN").format(value)}
      </p>
    </div>
  );
};

export default WidgetComp;
