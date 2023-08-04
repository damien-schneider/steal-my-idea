import React from 'react';
import * as z from 'zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@components/ui/select';
import { Textarea } from '@components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { cn } from '@lib/utils';
import { Button } from '@components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@components/ui/command';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@components/ui/popover';
import { toast } from '@components/ui/use-toast';
import { Input } from '@components/ui/input';

const categories = [
  {
    value: 'informatique',
    label: 'Informatique'
  },
  {
    value: 'peinture',
    label: 'Peinture'
  },
  {
    value: 'dessin',
    label: 'Dessin'
  },
  {
    value: 'artistique',
    label: 'Artistique'
  },
  {
    value: 'entreupreunariat',
    label: 'Entreupreunariat'
  },
  {
    value: 'musique',
    label: 'Musique'
  },
  {
    value: 'cinema',
    label: 'Cinéma'
  },
  {
    value: '3d',
    label: '3D'
  },
  {
    value: 'webdesign',
    label: 'Webdesign'
  },
  {
    value: 'graphisme',
    label: 'Graphisme'
  },
  {
    value: 'design produit',
    label: 'Design Produit'
  },
  {
    value: 'bricolage',
    label: 'Bricolage'
  },
  {
    value: 'domotique',
    label: 'Domotique'
  },
  {
    value: 'nourriture',
    label: 'Nourriture'
  },
  {
    value: 'jeudesociete',
    label: 'Jeu de société'
  },
  {
    value: 'decoration',
    label: 'Décoration'
  },
  {
    value: 'photographie',
    label: 'Photographie'
  },
  {
    value: 'jeuxvideos',
    label: 'Jeux-vidéos'
  },
  {
    value: 'ecriture',
    label: 'Écriture'
  }
] as const;
const FormSchema = z.object({
  title: z.string().min(5, {
    message: 'Le titre doit être au moins de 5 caractères.'
  }),
  description: z.string().min(10, {
    message: 'La description doit être au moins de 10 caractères.'
  }),
  category: z.enum(categories.map((category) => category.value)),
  estimated_time: z.enum(['day', 'week', 'month', 'year'])
});

export default function AddIdea() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titre</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Titre de votre idée de génie"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Choisissez un titre qui décrit bien votre idée, ne mettez pas
                  par exemple "idée de génie"
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Form combobox for category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Categorie</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          'justify-between',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value
                          ? categories.find(
                              (category) => category.value === field.value
                            )?.label
                          : 'Sélectionner une catégorie'}
                        <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="">
                    <Command>
                      <CommandInput placeholder="Rechercher une catégorie" />
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {categories.map((category) => (
                          <CommandItem
                            value={category.label}
                            key={category.value}
                            onSelect={() => {
                              form.setValue('category', category.value);
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                category.value === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {category.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Choisissez les catégories qui correspondent le mieux à votre
                  idée.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Décrivez votre idée de génie"
                    className=""
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Décrivez votre idée de génie, soyez le plus précis possible.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="estimated_time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Temps estimée</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="">
                      <SelectValue placeholder="Temps estimée" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">1 jour</SelectItem>
                      <SelectItem value="week">1 semaine</SelectItem>
                      <SelectItem value="month">1 mois</SelectItem>
                      <SelectItem value="year">1 an</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Le temps estimée pour réaliser cette idée.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
