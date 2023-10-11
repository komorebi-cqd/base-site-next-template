import { getSession } from "./getServerSession";

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    return {
      user: session?.loginUser,
    };
  } catch (error: any) {
    return null;
  }
}
