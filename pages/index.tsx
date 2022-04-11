import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="flex h-screen">
      <section
        className="w-1/2 h-full"
        style={{
          backgroundImage: "url(/assets/background.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <section className="flex flex-col justify-end items-center h-full">
          <article
            className=" text-4xl text-white font bold w-1/2 pb-40"
            style={{
              textShadow: "0px 32px 84px rgba(29, 41, 63, 0.06)",
            }}
          >
            Building exceptional services with Back Office Support and Business
            Perfomance
          </article>
        </section>
      </section>
      <section className="w-1/2 px-12 py-12">
        <section className="p-8 bg-white">
          <header className="text-[#272262] font-extrabold text-4xl mb-3">Create Account</header>
          <h3 className=" text-2xl font-light text-[rgba(40,_44,_64,_0.6)]">Build an exceptional business</h3>
          <form className="flex flex-col gap-10 pt-14">
            <div className="grid grid-cols-2 gap-4">
              <TextInput label="First name" placeholder="First name" size="lg" variant="unstyled" className="border-b-2 border-b-gray-100 focus:ring"/>
              <TextInput label="Last name" placeholder="Last name" size="lg" variant="unstyled" className="border-b-2 border-b-gray-100 focus:border-b-4"/>
            </div>
            <TextInput label="Phone Number" placeholder="Enter your phone number" size="lg" variant="unstyled" className="border-b-2 border-b-gray-100 focus:ring"/>
            <TextInput label="Email Address" placeholder="Enter your E-mail" size="lg" variant="unstyled" className="border-b-2 border-b-gray-100 focus:ring"/>
            <PasswordInput label="Password" placeholder="Enter your password" size="lg" variant="unstyled" className="border-b-2 border-b-gray-100 focus:ring"/>
            
            <div className="flex justify-between">
              <section>
                <Checkbox label="Remember me"/>
              </section>
              <Link href="" passHref={true}><a className="text-[#3DB0FF] font-medium">Forgot password?</a></Link>
            </div>
            <Link href="/purchases/bills" passHref>
              <Button size="lg" className="bg-[#3DB0FF]">Sign up</Button>
            </Link>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Home;
