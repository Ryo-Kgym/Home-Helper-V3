export const colors = {
  balance: {
    income: "#4caf50",
    outcome: "#f44336",
    diff: "#2196f3",
    deposit: "#ff9800",
  },
  cumulative: {
    cash: "rgba(100,100,255,0.70)",
    deposit: "rgba(255,152,0,0.70)",
  },
  random: (index: number) => {
    const palette = [
      "#f44336",
      "#3f51b5",
      "#009688",
      "#8f8100",
      "#e91e63",
      "#2196f3",
      "#4caf50",
      "#9a7b1d",
      "#9c27b0",
      "#03a9f4",
      "#8bc34a",
      "#ff9800",
      "#673ab7",
      "#00bcd4",
      "#cddc39",
      "#ff5722",
    ];
    return palette[index % palette.length] ?? "#000000";
  },
};
