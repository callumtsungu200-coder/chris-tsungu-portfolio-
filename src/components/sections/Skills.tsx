import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Stagger, staggerItem } from '@/components/ui/Reveal'
import { SkillBar } from '@/components/ui/SkillBar'
import { motion } from 'framer-motion'
import { skillGroups } from '@/data/content'

export function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="05 — Skills"
          title="A toolkit, growing every term."
          description="Confident with code, comfortable with creative tools, strong across academic disciplines."
        />

        <Stagger className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div key={group.name} variants={staggerItem}>
              <GlassCard className="h-full" hover={false}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink-100">{group.name}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink-400">
                    {group.items.length} skills
                  </span>
                </div>
                <div className="mt-6 space-y-5">
                  {group.items.map((s, i) => (
                    <SkillBar key={s.label} {...s} delay={i * 0.04} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
