import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TestTheme() {
  return (
    <div className="mx-auto max-w-4xl py-6 space-y-6">
      <h1 className="text-3xl font-bold">Theme Test Page</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Carbon Theme Active</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="test">Input Field</Label>
            <Input id="test" placeholder="Test input" />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


