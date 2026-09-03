'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock, BookOpen, Heart } from 'lucide-react';
import { Card, CardContent, Badge, Progress } from '@/components/ui';
import { formatMinutes, getLevelLabel, getLevelColor } from '@/lib/utils';
import type { CourseCardProps } from './course-card.types';

export function CourseCard({
  id,
  title,
  slug,
  description,
  thumbnail_url,
  category_id,
  level,
  duration_minutes,
  total_lessons,
  featured = false,
  progress = 0,
}: CourseCardProps) {
  return (
    <Link href={`/curso/${slug}`}>
      <Card className="group h-full overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
        {/* Thumbnail */}
        <div className="relative w-full h-48 bg-muted overflow-hidden">
          {thumbnail_url ? (
            <Image
              src={thumbnail_url}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <BookOpen className="w-12 h-12 text-muted-foreground" />
            </div>
          )}
          {featured && (
            <Badge variant="default" className="absolute top-2 right-2">
              Em Destaque
            </Badge>
          )}
          <button
            className="absolute top-2 left-2 p-2 rounded-lg bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              // TODO: Add to favorites
            }}
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <CardContent className="pt-4 pb-4">
          {/* Level Badge */}
          <div className="mb-3">
            <Badge variant="outline" className={getLevelColor(level)}>
              {getLevelLabel(level)}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{formatMinutes(duration_minutes)}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{total_lessons} aulas</span>
            </div>
          </div>

          {/* Progress */}
          {progress > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium">Progresso</span>
                <span className="text-muted-foreground">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} max={100} />
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
