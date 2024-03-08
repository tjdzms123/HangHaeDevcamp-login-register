import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { z } from 'zod';
import { registerSchema } from '@/validators/auth';
import { UseFormReturn } from 'react-hook-form';

type RegisterInput = z.infer<typeof registerSchema>;

interface RegisterBtnProps {
  form: UseFormReturn<RegisterInput>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const RegisterBtns = ({ form, step, setStep }: RegisterBtnProps) => {
  const nextStepBtn = () => {
    form.trigger(['phone', 'email', 'username', 'role']);

    const phoneState = form.getFieldState('phone');
    const emailState = form.getFieldState('email');
    const usernameState = form.getFieldState('username');
    const roleState = form.getFieldState('role');

    if (!phoneState.isDirty || phoneState.invalid) return;
    if (!emailState.isDirty || emailState.invalid) return;
    if (!usernameState.isDirty || usernameState.invalid) return;
    if (!roleState.isDirty || roleState.invalid) return;

    setStep(1);
  };
  return (
    <div className="flex gap-2">
      <Button
        className={cn({ hidden: step === 0 })}
        type="submit"
      >
        계정 등록하기
      </Button>
      <Button
        type="button"
        className={cn({ hidden: step === 1 })}
        onClick={() => nextStepBtn()}
      >
        다음 단계로
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
      <Button
        type="button"
        variant={'ghost'}
        className={cn({ hidden: step === 0 })}
        onClick={() => setStep(0)}
      >
        이전 단계로
      </Button>
      <Button
        type="button"
        variant={'ghost'}
        className={cn({ hidden: step === 0 })}
      >
        <Link
          href={'/login'}
          className="text-xs"
        >
          Go To Login
        </Link>
      </Button>
    </div>
  );
};

export default RegisterBtns;
