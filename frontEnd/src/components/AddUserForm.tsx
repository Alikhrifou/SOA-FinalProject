import React, { useState } from "react";
import { useAddUserMutation } from "../features/api/apiAuth";
import { useNavigate } from "react-router-dom";

interface UserFormData {
    username: string;
    email: string;
    password: string;
    city: string;
    roles: string;
    address: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

const AddUserForm: React.FC = () => {

    const nav = useNavigate();

    const [addUser, { isLoading }] = useAddUserMutation();

    const [formData, setFormData] = useState<UserFormData>({
        username: "",
        email: "",
        password: "",
        city: "",
        roles: "",
        address: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("User Data Submitted:", formData);
        addUser(formData).then((response) => {
            if (response?.error?.originalStatus === 200) {
                alert("User Added Successfully");
                nav("/")
            }
            console.log(response)
        })
        // Here, send formData to your API
    };

    return (<section className="flex flex-col items-center mt-20 pt-10">
        <h2 className="text-lg font-bold mb-3">Ajouter User</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-md mt-5 grid grid-cols-2 gap-6">

            {Object.entries(formData).map(([field, value]) => (
                <div key={field} className="grid mb-3">
                    <label className="block font-medium capitalize">{field}:</label>
                    <input
                        type={field === "password" ? "password" : field === "phoneNumber" ? "number" : "text"}
                        name={field}
                        value={value}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-md"
                        required
                    />
                </div>
            ))}

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Submit
            </button>
        </form>
    </section>
    );
};

export default AddUserForm;
