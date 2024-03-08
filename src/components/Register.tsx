'use client';

import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { registerSchema } from '@/validators/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import RegisterBtn from './RegisterBtns';

type RegisterInput = z.infer<typeof registerSchema>;

const Register = () => {
  const [step, setStep] = useState<number>(0);

  const { toast } = useToast();

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      phone: '',
      email: '',
      role: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: RegisterInput) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      toast({
        title: '비밀번호가 일치하지 않습니다.',
        variant: 'destructive',
        duration: 1000,
      });
      return;
    }
    alert(JSON.stringify(data, null, 4));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative space-y-3 overflow-x-hidden"
      >
        <motion.div
          className={cn('space-y-3')}
          animate={{ translateX: `${step * -100}%` }}
          transition={{ ease: 'easeInOut' }}
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input
                    placeholder="전우치"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input
                    placeholder="hello@sparta-devcamp.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>연락처</FormLabel>
                <FormControl>
                  <Input
                    placeholder="01000000000"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>역할</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="역할을 선택해주세요." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="admin">관리자</SelectItem>
                    <SelectItem value="user">일반 사용자</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div
          className={cn('space-y-3 absolute top-0 left-0 right-0')}
          animate={{ translateX: `${(1 - step) * 100}%` }}
          style={{ translateX: `${(1 - step) * 100}%` }}
          transition={{
            ease: 'easeInOut',
          }}
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input
                    type={'password'}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호 확인</FormLabel>
                <FormControl>
                  <Input
                    type={'password'}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
        <RegisterBtn
          form={form}
          step={step}
          setStep={setStep}
        />
      </form>
    </Form>
  );
};

export default Register;
