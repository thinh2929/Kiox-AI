const Setting = ({ theme, setTheme }: any) => {
  const themes = [
    { name: "Sáng", value: "light" },
    { name: "Tối", value: "dark" },
    { name: "Hồng Cute", value: "pink" },
    { name: "Hồng Sexy", value: "sexy-pink" },
    { name: "Gaming", value: "blue-gaming" },
    { name: "Đỏ Ngầu", value: "red-cool" },
  ];
  return (
    <div className="">
      <div className="">
        {themes.map((t) => (
          <button
            key={t.value}
            onClick={() => setTheme(t.value)}
            className={`p-2 m-1 border ${theme === t.value ? "border-blue-500" : ""}`}
          >
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Setting;
