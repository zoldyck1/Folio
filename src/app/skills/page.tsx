import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { skills, type Skill } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SkillsPage() {
  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <SectionWrapper id="skills" title="My Skillset" subtitle="Technologies and tools I work with.">
      <div className="space-y-12">
        {skillCategories.map((category, catIndex) => (
          <div key={category} className={`animate-slide-up-fade`} style={{ animationDelay: `${catIndex * 150}ms` }}>
            <h3 className="text-2xl font-semibold mb-6 text-primary">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, skillIndex) => (
                  <Card 
                    key={skill.name} 
                    className="text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardHeader className="pb-2">
                      <skill.icon className="h-10 w-10 mx-auto text-primary mb-2" />
                      <CardTitle className="text-base font-medium">{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                       {/* Placeholder for proficiency, can be a bar or percentage */}
                       <div className="h-2 w-full bg-muted rounded-full mt-2">
                         <div className="h-2 bg-primary rounded-full" style={{ width: `${Math.floor(Math.random() * (95 - 60 + 1)) + 60}%` }}></div>
                       </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
