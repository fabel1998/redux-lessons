import { z } from "zod";

const baseUrl = "http://localhost:3000";

const UserDotSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
})

export const api = {
    getUsers: () => {
        return fetch(`${baseUrl}/users`).then((res) => res.json()).then(res => {
            return UserDotSchema.array().parse(res)
        })
    },
    getUser: (id: string) => {
        return fetch(`${baseUrl}/users/${id}`).then((res) => res.json()).then(res => {
            return UserDotSchema.parse(res)
        })
    },

    deleteUser: (id: string) => {
        return fetch(`${baseUrl}/users/${id}`, {
            method: "DELETE",
        }).then((res) => res.json())
    },
}