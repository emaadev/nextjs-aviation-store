import Image from "next/image";
import LoginBackground from "../../public/admin/login-page.jpg";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <main className="w-full h-screen bg-cover">
      <Image
        src={LoginBackground}
        className="absolute -z-10 bg-cover w-full h-full"
        alt="ISEAP Login Page"
      />

      <section className="w-[40%] h-full bg-white/95 shadow-white shadow-lg backdrop-blur-sm flex justify-start items-start flex-col p-10">
        <Image
          src="/logo-navbar.png"
          width="120"
          height="120"
          alt="ISEAP Logo"
          className="mb-16"
        />

        {children}
      </section>
    </main>
  );
};

export default AdminLayout;
