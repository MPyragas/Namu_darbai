export default function ZebraiBebrai({ colornum }) {
    colornum = Number(colornum);
    let validColors = ["blue", "red"];
    let color = validColors[colornum - 1];
  
    return <h1 style={{ color: color ? color : null }}>Zebrai ir Bebrai</h1>;
  }