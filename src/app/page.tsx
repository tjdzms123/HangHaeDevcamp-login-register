'use client';

import Register from '@/components/Register';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className={cn('w-[380px]')}>
        <CardHeader>
          <CardTitle>계정을 생성합니다.</CardTitle>
          <CardDescription>필수 정보를 입력해주세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Register />
        </CardContent>
      </Card>
    </div>
  );
}
