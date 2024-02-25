"use client";

const EmailPage = () => {
  return (
    <button
      onClick={async () => {
        const res = await fetch("/api/send", {
          method: "POST",
        });
        const data = await res.json();
        console.log(data);
      }}
    >
      Enviar Email
    </button>
  );
};
export default EmailPage;
