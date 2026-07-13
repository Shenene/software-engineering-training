function Greeting({ name = "World", children }) {
  return (
    <section>
      <h2>Hello {name}</h2>

      {children}
    </section>
  );
}

export default Greeting;
