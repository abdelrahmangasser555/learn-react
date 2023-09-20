function fun() {
  var x = document.getElementsByName("choose");
  for (var i = 0; i < x.length; i++) {
    if (x[i].checked) {
      alert(x[i].value);
      break;
    }
  }
}

function changeImage() {
  document.getElementById("123").src = "images/moratab.jpg";
}

function returnImage() {
  document.getElementById("123").src = "images/engineer group.jpeg";
}

function Head() {
  return (
    <header>
      <nav className="nav">
        <img className="logo"
          src="./images/logo 1.jpg"
          id="123"
          alt="this is the paycheck"
          width="40px"
        />
        <ul className="nav-items">
          <li>pricing</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Body() {
  return (
    <div>
      <h1 className = "heads">welcome to  the ass washing experts </h1>
      <ol className = "ratsoptions" >
        <li>washung asses</li><br/>
        <li>getting high gpa</li><br/>
        <li>cleaning toilets</li><br/>
      </ol>
      <input type="radio" name="choose" value="quess what you have opened your" /> try chossing this button <br />
      <input type="radio" name="choose" value="good forsha choice" /> try chossing this button <br /><p>presss submit rat  </p> 
      <input type="button" value="submit rat" onClick={fun} />
    </div>
  );
}

function Footer() {
  return <p className="footer">@this is AUTO X official website</p>;
}

function HomePage() {
  return (
    <div>
      <Head />
      <Body />
      <Footer />
    </div>
  );
}

ReactDOM.render(<HomePage />, document.getElementById("root"));

