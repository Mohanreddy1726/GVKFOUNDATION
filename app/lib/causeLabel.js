export function causeLabel(c) {
  return (
    {
      general: "General Fund",
      education: "Education",
      health: "Health & Welfare",
      empowerment: "Empowerment",
      community: "Community",
      opportunity: "Opportunity",
      dignity: "Dignity",
      food: "Food & Hunger Relief",
      sports: "Sports Development",
    }[c] || "General Fund"
  );
}