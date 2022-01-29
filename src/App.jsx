const header = (
    <h1 title="name">Christian Anorga</h1>
);
const content = (
    <div>
        <p>
            My name is Chris. I was born in San Diego, spent most of my childhood in Mexico. I studied Economics as an undergrad at SDSU. I worked as a Junior Data Analyst before deciding to make a career change towards Web Development. Some of my hobbies include photography, traveling, hiking, and playing video games.
            <a href="https://github.com/canorga8634"><button>View My Github Repo</button></a>
    </p>
    </div>
);


ReactDOM.render(header, document.getElementById('header'));
ReactDOM.render(content, document.getElementById('content'));