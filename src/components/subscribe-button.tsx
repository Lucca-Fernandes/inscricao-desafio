'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SubscribeForm } from './subscribe-form';
import { useState } from 'react';

export default function SubscribeButton() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Inscrever-se</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Inscreva-se para Novidades</DialogTitle>
          <DialogDescription>
            Receba as últimas notícias e atualizações de projetos em seu e-mail.
          </DialogDescription>
        </DialogHeader>
        <SubscribeForm onSubscribed={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
