const Container = ({ title, children, ...otherProps }) => {
  return (
    <div
      style={{
        margin: '0 auto',
        padding: '50px',
        width: '60vw',
        fontSize: 40,
        color: '#010101',
      }}
      {...otherProps}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Container;
<h2>Phone book</h2>;
