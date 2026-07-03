import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Backend is running!");
});
app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Bug",
            content: "I fixed one bug, five appeared."
        },
        {
            id: 2,
            title: "Coffee",
            content: "Coffee keeps my code alive."
        },
        {
            id: 3,
            title: "Sleep",
            content: "My code works. I won't touch it."
        },
        {
            id: 4,
            title: "Error",
            content: "404: Joke not found."
        },
        {
            id: 5,
            title: "React",
            content: "State changed, life changed."
        }
    ];

    res.json(jokes);
});
const port = process.env.PORT || 3000 ;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});