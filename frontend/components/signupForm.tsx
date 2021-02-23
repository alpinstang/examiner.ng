import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

interface SignUpData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const { register, errors, handleSubmit } = useForm();
  const auth = useAuth();
  const router = useRouter();
  const onSubmit = (data: SignUpData) => {
    return auth.signUp(data).then(() => {
      router.push("/user/dashboard");
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex space-x-6">
        <div className="sm:mt-6">
          <label
            htmlFor="firstname"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            First Name
          </label>
          <input
            id="firstname"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            type="text"
            name="first_name"
            ref={register({
              required: "Please enter a first name",
            })}
          />
          {errors.first_name && (
            <div className="mt-2 text-xs text-red-600">
              {errors.first_name.message}
            </div>
          )}
        </div>
        <div className="sm:mt-6">
          <label
            htmlFor="lastname"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Last Name
          </label>
          <input
            id="lastname"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            type="text"
            name="last_name"
            ref={register({
              required: "Please enter a last name",
            })}
          />
          {errors.last_name && (
            <div className="mt-2 text-xs text-red-600">
              {errors.last_name.message}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="phone"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Phone Number
        </label>
        <input
          id="phone"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          type="text"
          name="phone"
          ref={register({
            required: "Please enter a valid phone number",
            pattern: {
              value: new RegExp(/^[0]\d{10}$/),
              message: "Not a valid phone number",
            },
          })}
        />
        {errors.phone && (
          <div className="mt-2 text-xs text-red-600">
            {errors.phone.message}
          </div>
        )}
      </div>
      <div className="mt-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            id="email"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            type="email"
            name="email"
            ref={register({
              required: "Please enter an email",
              pattern: {
                /*eslint no-invalid-regexp: "error"*/
                value: new RegExp(
                  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                ),
                message: "Not a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="mt-2 text-xs text-red-600">
              {errors.email.message}
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Password
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            id="password"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            type="password"
            name="password"
            ref={register({
              required: "Please enter a password",
              minLength: {
                value: 6,
                message: "Should have at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <div className="mt-2 text-xs text-red-600">
              {errors.password.message}
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <span className="block w-full rounded-md shadow-sm">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out"
          >
            Sign up
          </button>
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;
