export const Button = ({ text, styles }: { text: string; styles?: string }) => {
  return (
    <button type="submit" className={`submit-btn rounded py-1 px-2 ${styles}`}>
      {text}
    </button>
  );
};
