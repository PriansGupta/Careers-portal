import React from "react";
import Navigation from "@/Components/Appbar";
import { useSession, getSession } from "next-auth/react";

const Account = (props) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Navigation></Navigation>
        <main>{props.children}</main>
        <h1 classname="JobsHeading mno">{`Welcome, ${session.user.name}`}</h1>
      </>
    );
  }
};

export default Account;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  } else
    return {
      props: { session },
    };
};
