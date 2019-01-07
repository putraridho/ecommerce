export default () => (
  <style jsx global>{`
    * {
      box-sizing: border-box;  
    }

    body {
      font-family: 'Muli';
      font-size: 14px;
      padding: 50px 0 0;
      margin: 0;
      color: #555;
      letter-spacing: .1em;
      min-height: 1000px;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .flex-container {
      display: flex;
      flex-wrap: wrap;
    }

    .cell-item {
      padding: 0 15px;
    }
  `}</style>
)