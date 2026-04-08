'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface BookingFormProps {
  emailTo?: string
}

export default function BookingForm({ emailTo = 'bookings@petpalcare.com' }: Partial<BookingFormProps>) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')
  const [feedback, setFeedback] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !service || !date) {
      setFeedback('Please complete all required fields.')
      return
    }
    const subject = encodeURIComponent('PetPal Booking Request - ' + service)
    const body = encodeURIComponent(
      'Name: ' + name + '\nEmail: ' + email + '\nService: ' + service + '\nPreferred Date: ' + date + '\nNotes: ' + notes
    )
    window.location.href = 'mailto:' + emailTo + '?subject=' + subject + '&body=' + body
    setFeedback('Opening your email app to complete booking request.')
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
      <div>
        <Label>Full Name *</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      </div>
      <div>
        <Label>Email *</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" />
      </div>
      <div>
        <Label>Service *</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Dog Walking">Dog Walking</SelectItem>
            <SelectItem value="Pet Sitting">Pet Sitting</SelectItem>
            <SelectItem value="Grooming">Grooming</SelectItem>
            <SelectItem value="Vet Visit">Vet Visit Support</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Preferred Date *</Label>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <Label>Pet Notes</Label>
        <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Temperament, routines, medication, etc." />
      </div>
      <Button className="w-full rounded-xl bg-[#EF476F] text-white hover:bg-[#d73d61]">Request Booking</Button>
      {feedback ? <p className="text-sm text-muted-foreground">{feedback}</p> : null}
    </form>
  )
}
