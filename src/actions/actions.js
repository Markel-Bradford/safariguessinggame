import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { toast } from 'react-toastify';

export async function signupAction({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    toast.success('Account created successfully! Redirecting to game...');
    return null; // Redirect or any other necessary action
  } catch (error) {
    toast.error(`Error signing up: ${error.message}`);
    return { error: error.message }; // Return an error message if needed
  }
}

export async function signinAction({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Signed in successfully! Redirecting to game...');
      return null; // Redirect or any other necessary action
    } catch (error) {
      toast.error(`Error signing in: ${error.message}`);
      return { error: error.message }; // Return an error message if needed
    }
  }