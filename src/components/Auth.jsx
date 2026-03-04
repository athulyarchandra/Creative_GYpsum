import React from 'react'
import logo from '../assets/logo.png'

const Auth = () => {
    return (
        <div class="h-screen flex justify-center items-center py-20 p-4 md:p-20 lg:p-32 bg-red-900 ">
            <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
                <div class="p-6">
                    <img src={logo} alt="logo" width={100} />
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
                    <form>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="username">
                                Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-red-900 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-red-900 hover:text-red-900" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth