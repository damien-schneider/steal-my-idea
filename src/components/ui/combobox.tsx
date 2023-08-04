'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

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

const frameworks = [
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
];

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Choisissez...'}
          <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Rechercher une catégorie" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === framework.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
