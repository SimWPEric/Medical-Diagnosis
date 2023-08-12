import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type LoginFormProps = {
    setLogin: (x: boolean) => void;
}

export function LoginForm({ setLogin }: LoginFormProps) {
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // to be updated for security later
        if (password === "pw") {
            setLogin(true);
        } else {
            alert("Wrong Password");
        }
    }

    return (
        <form className="grid w-[300px] items-center gap-1.5" onSubmit={handleSubmit}>
            <Label htmlFor="password">Enter password to login</Label>
            <Input 
                type="password" 
                placeholder="Password" 
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
        </form>
    )
}
