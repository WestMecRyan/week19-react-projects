// src/components/Name.jsx
// export a default function called Name
export default function Name({ appCount, appCountUp }) {
  return (
    <>
      <p>My name is Ryan</p>  
      <p>{appCount}</p>
      <button onClick={appCountUp}>increase count</button>
    </>
  );
}
// return a parentheses with a jsx fragment
// with a paragraph element inside
// the paragraph says 'my name is <yourname>'
// import that function in
//App.jsx and render it in the main app
