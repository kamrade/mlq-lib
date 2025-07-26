<script lang="ts">
  import type { ILabelProps } from './Label.types';
  let { forValue, children, ...rest }: ILabelProps = $props();
</script>

<label class="Label" for={forValue} {...rest}>
  {@render children?.()}
</label>

<style lang="scss">
  .Label {
    --fontSize: 14px;
    --lineHeight: 20px;
    --marginBottom: .25rem;
  }

  .Label {
    display: block;
    font-size: var(--fontSize);
    line-height: var(--lineHeight);
    margin-bottom: var(--marginBottom);
  }
</style>