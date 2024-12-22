import React from "react";
import { UserProps } from "@/interfaces";

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { name, username, email, phone, website, company } = user;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-700">Email: {email}</p>
      <p className="text-gray-700">Phone: {phone}</p>
      <p className="text-blue-500">
        Website: <a href={`https://${website}`} target="_blank">{website}</a>
      </p>
      <p className="text-gray-800">Company: {company.name}</p>
      <p className="text-gray-500 text-sm italic">{company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;
